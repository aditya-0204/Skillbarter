const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const admin = require("firebase-admin");

const appId = "default-app-id";
const PORT = process.env.PORT || 5000;
const SESSION_COLLECTION = `artifacts/${appId}/swaps`;
const USER_COLLECTION = `artifacts/${appId}/users`;

function loadServiceAccount() {
  const {
    FIREBASE_PROJECT_ID,
    FIREBASE_CLIENT_EMAIL,
    FIREBASE_PRIVATE_KEY,
  } = process.env;

  if (FIREBASE_PROJECT_ID && FIREBASE_CLIENT_EMAIL && FIREBASE_PRIVATE_KEY) {
    return {
      projectId: FIREBASE_PROJECT_ID,
      clientEmail: FIREBASE_CLIENT_EMAIL,
      privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    };
  }

  // Local fallback for development machines that already use the JSON key file.
  // Render should use environment variables instead of this file.
  // eslint-disable-next-line global-require, import/no-dynamic-require
  return require("./serviceAccountKey.json");
}

admin.initializeApp({
  credential: admin.credential.cert(loadServiceAccount()),
});

const db = admin.firestore();
const { FieldValue } = admin.firestore;

const app = express();
app.use(cors());
app.use(express.json());

const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const sanitizedBaseName = path
      .basename(file.originalname, ext)
      .replace(/[^a-zA-Z0-9-_]/g, "_")
      .slice(0, 80);
    cb(null, `${sanitizedBaseName}-${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });

app.use("/files", express.static(uploadDir));

function getBearerToken(authorizationHeader) {
  if (!authorizationHeader || typeof authorizationHeader !== "string") {
    return null;
  }

  const [scheme, token] = authorizationHeader.split(" ");
  if (scheme !== "Bearer" || !token) {
    return null;
  }

  return token;
}

// Every privileged route verifies the Firebase ID token and receives req.user.
async function authenticateUser(req, res, next) {
  try {
    const idToken = getBearerToken(req.headers.authorization);
    if (!idToken) {
      return res.status(401).json({ error: "Missing or invalid Authorization header." });
    }

    req.user = await admin.auth().verifyIdToken(idToken);
    return next();
  } catch (error) {
    console.error("Failed to verify Firebase ID token:", error);
    return res.status(401).json({ error: "Unauthorized." });
  }
}

async function loadSession(sessionId) {
  const sessionRef = db.doc(`${SESSION_COLLECTION}/${sessionId}`);
  const sessionSnap = await sessionRef.get();

  if (!sessionSnap.exists) {
    return null;
  }

  return {
    ref: sessionRef,
    data: sessionSnap.data(),
  };
}

function getSessionUserIds(sessionData) {
  return Array.from(
    new Set(
      [
        ...(Array.isArray(sessionData.users) ? sessionData.users : []),
        sessionData.user1,
        sessionData.user2,
        sessionData.requesterId,
        sessionData.receiverId,
      ].filter(Boolean)
    )
  );
}

function assertSessionMembership(sessionData, uid) {
  return getSessionUserIds(sessionData).includes(uid);
}

app.post("/upload", authenticateUser, upload.single("file"), (req, res) => {
  const senderId = req.body?.senderId;

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  if (senderId && senderId !== req.user.uid) {
    return res.status(403).json({ error: "Sender ID does not match the authenticated user." });
  }

  const fileUrl = `${req.protocol}://${req.get("host")}/files/${req.file.filename}`;
  return res.json({ filename: req.file.filename, url: fileUrl });
});

app.post("/startSession", authenticateUser, async (req, res) => {
  try {
    const { sessionId, userIds } = req.body;

    if (!sessionId || !Array.isArray(userIds) || userIds.length < 2) {
      return res.status(400).json({ error: "Missing sessionId or valid userIds array." });
    }

    if (!userIds.includes(req.user.uid)) {
      return res.status(403).json({ error: "Authenticated user must be one of the session participants." });
    }

    const session = await loadSession(sessionId);
    if (!session) {
      return res.status(404).json({ error: "Session not found." });
    }

    if (!assertSessionMembership(session.data, req.user.uid)) {
      return res.status(403).json({ error: "You are not allowed to start this session." });
    }

    if (session.data.status === "completed") {
      return res.status(409).json({ error: "Completed sessions cannot be restarted." });
    }

    const normalizedUsers = getSessionUserIds({
      ...session.data,
      users: userIds,
    });

    // Start state is server-owned now; no reward logic lives outside completion anymore.
    await session.ref.set(
      {
        status: "ongoing",
        users: normalizedUsers,
        startedAt: FieldValue.serverTimestamp(),
        startedBy: req.user.uid,
      },
      { merge: true }
    );

    return res.status(200).json({
      success: true,
      sessionId,
      status: "ongoing",
      users: normalizedUsers,
    });
  } catch (error) {
    console.error("Error in /startSession:", error);
    return res.status(500).json({ error: "Internal server error starting session." });
  }
});

app.post("/confirmEndSession", authenticateUser, async (req, res) => {
  try {
    const { sessionId } = req.body;

    if (!sessionId) {
      return res.status(400).json({ error: "Missing sessionId." });
    }

    const sessionRef = db.doc(`${SESSION_COLLECTION}/${sessionId}`);
    const result = await db.runTransaction(async (transaction) => {
      const sessionSnap = await transaction.get(sessionRef);
      if (!sessionSnap.exists) {
        throw Object.assign(new Error("Session not found."), { statusCode: 404 });
      }

      const sessionData = sessionSnap.data();
      const participantIds = getSessionUserIds(sessionData);

      if (!participantIds.includes(req.user.uid)) {
        throw Object.assign(new Error("You are not allowed to complete this session."), { statusCode: 403 });
      }

      const confirmedBy = Array.from(
        new Set([...(sessionData.confirmedBy || []), req.user.uid])
      );
      const bothConfirmed = participantIds.every((uid) => confirmedBy.includes(uid));

      if (sessionData.status === "completed" || sessionData.rewardsGiven === true) {
        transaction.update(sessionRef, {
          confirmedBy,
          status: "completed",
          endRequest: null,
        });

        return {
          success: true,
          sessionId,
          status: "completed",
          confirmedBy,
          rewardedUsers: participantIds,
          alreadyCompleted: true,
        };
      }

      if (!bothConfirmed) {
        transaction.update(sessionRef, {
          confirmedBy,
          endRequest: {
            from: confirmedBy[0],
            status: "pending",
            requestedAt:
              sessionData.endRequest?.requestedAt || FieldValue.serverTimestamp(),
          },
        });

        return {
          success: true,
          sessionId,
          status: sessionData.status || "ongoing",
          confirmedBy,
          waiting: true,
        };
      }

      // Completion and coin rewards are handled here transactionally and only once.
      participantIds.forEach((uid) => {
        const userRef = db.doc(`${USER_COLLECTION}/${uid}`);
        transaction.set(
          userRef,
          {
            coins: FieldValue.increment(25),
            swapsCompleted: FieldValue.increment(1),
          },
          { merge: true }
        );
      });

      transaction.update(sessionRef, {
        status: "completed",
        completedAt: FieldValue.serverTimestamp(),
        completedBy: req.user.uid,
        confirmedBy,
        endRequest: null,
        rewardsGiven: true,
        rewardsGrantedAt: FieldValue.serverTimestamp(),
      });

      return {
        success: true,
        sessionId,
        status: "completed",
        confirmedBy,
        rewardedUsers: participantIds,
      };
    });

    return res.status(200).json(result);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    console.error("Error in /confirmEndSession:", error);
    return res.status(statusCode).json({ error: error.message || "Internal server error." });
  }
});

app.post("/giveFeedback", async (req, res) => {
  try {
    const { sessionId, userId, feedback } = req.body;

    if (!sessionId || !userId || !feedback) {
      return res.status(400).json({ error: "Invalid request" });
    }

    const sessionRef = db.doc(`${SESSION_COLLECTION}/${sessionId}`);
    const sessionSnap = await sessionRef.get();

    if (!sessionSnap.exists) {
      return res.status(404).json({ error: "Session not found" });
    }

    const sessionData = sessionSnap.data();
    const updatedFeedback = {
      ...(sessionData.feedback || {}),
      [userId]: feedback,
    };

    await sessionRef.set({ feedback: updatedFeedback }, { merge: true });

    return res.json({ success: true, feedback: updatedFeedback });
  } catch (error) {
    console.error("Error in /giveFeedback:", error);
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
