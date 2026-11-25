const crypto = require("crypto");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const admin = require("firebase-admin");
const multer = require("multer");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const {
  PORT = 5000,
  FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
  ALLOWED_ORIGINS = "",
  MAX_UPLOAD_BYTES = "10485760",
} = process.env;

const REQUIRED_ENV_KEYS = [
  "FIREBASE_PROJECT_ID",
  "FIREBASE_CLIENT_EMAIL",
  "FIREBASE_PRIVATE_KEY",
];

for (const envKey of REQUIRED_ENV_KEYS) {
  if (!process.env[envKey]) {
    throw new Error(`Missing required environment variable: ${envKey}`);
  }
}

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: FIREBASE_PROJECT_ID,
    clientEmail: FIREBASE_CLIENT_EMAIL,
    privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  }),
});

const db = admin.firestore();
const { FieldValue } = admin.firestore;
const app = express();

const appId = "default-app-id";
const SESSION_COLLECTION = `artifacts/${appId}/swaps`;
const USER_COLLECTION = `artifacts/${appId}/users`;
const uploadDir = path.join(process.cwd(), "uploads");
const allowedOrigins = ALLOWED_ORIGINS.split(",")
  .map((value) => value.trim())
  .filter(Boolean);
const maxUploadBytes = Number(MAX_UPLOAD_BYTES);

const SHOP_CATALOG = Object.freeze({
  "classic-skillswap-tshirt": { id: "classic-skillswap-tshirt", price: 1200 },
  "classic-black-skillswap-tshirt": { id: "classic-black-skillswap-tshirt", price: 1200 },
  "skillswap-water-bottle": { id: "skillswap-water-bottle", price: 800 },
  "skillswap-hoodie": { id: "skillswap-hoodie", price: 2000 },
  "classic-black-skillswap-hoodie": { id: "classic-black-skillswap-hoodie", price: 2000 },
});

fs.mkdirSync(uploadDir, { recursive: true });

function log(level, message, meta = {}) {
  console.log(
    JSON.stringify({
      level,
      message,
      ...meta,
      ts: new Date().toISOString(),
    })
  );
}

app.use((req, res, next) => {
  req.requestId = crypto.randomUUID();
  res.setHeader("x-request-id", req.requestId);
  next();
});

app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS"));
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Authorization", "Content-Type"],
    credentials: false,
  })
);
app.use(express.json({ limit: "100kb" }));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
  })
);
app.use("/upload", rateLimit({ windowMs: 15 * 60 * 1000, max: 20, standardHeaders: true, legacyHeaders: false }));
app.use(
  "/confirmEndSession",
  rateLimit({ windowMs: 15 * 60 * 1000, max: 60, standardHeaders: true, legacyHeaders: false })
);
app.use("/giveFeedback", rateLimit({ windowMs: 15 * 60 * 1000, max: 30, standardHeaders: true, legacyHeaders: false }));
app.use("/purchase", rateLimit({ windowMs: 15 * 60 * 1000, max: 30, standardHeaders: true, legacyHeaders: false }));

function buildAbsoluteUrl(req, pathname) {
  return `${req.protocol}://${req.get("host")}${pathname}`;
}

function getBearerToken(header) {
  if (!header || typeof header !== "string") {
    return null;
  }

  const [scheme, token] = header.split(" ");
  return scheme === "Bearer" && token ? token : null;
}

async function authenticateUser(req, res, next) {
  try {
    const idToken = getBearerToken(req.headers.authorization);
    if (!idToken) {
      return res.status(401).json({ error: "Missing bearer token." });
    }

    req.user = await admin.auth().verifyIdToken(idToken, true);
    return next();
  } catch (error) {
    log("warn", "Unauthorized request", { requestId: req.requestId, error: error.message });
    return res.status(401).json({ error: "Unauthorized." });
  }
}

async function loadSessionOrThrow(sessionId) {
  const ref = db.doc(`${SESSION_COLLECTION}/${sessionId}`);
  const snap = await ref.get();
  if (!snap.exists) {
    const error = new Error("Session not found.");
    error.statusCode = 404;
    throw error;
  }

  return { ref, data: snap.data() };
}

function getParticipantIds(sessionData) {
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

function extractSessionId(req) {
  const bodySessionId = typeof req.body?.sessionId === "string" ? req.body.sessionId : null;
  const paramSessionId = typeof req.params?.sessionId === "string" ? req.params.sessionId : null;
  return bodySessionId || paramSessionId;
}

async function requireSessionMember(req, res, next) {
  try {
    const sessionId = extractSessionId(req);
    if (!sessionId) {
      return res.status(400).json({ error: "Invalid sessionId." });
    }

    const session = await loadSessionOrThrow(sessionId);
    const participantIds = getParticipantIds(session.data);
    if (!participantIds.includes(req.user.uid)) {
      return res.status(403).json({ error: "Forbidden." });
    }

    req.sessionId = sessionId;
    req.session = session;
    req.participantIds = participantIds;
    return next();
  } catch (error) {
    log("error", "Session membership check failed", {
      requestId: req.requestId,
      error: error.message,
    });
    return res.status(error.statusCode || 500).json({ error: error.message || "Internal server error." });
  }
}

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, callback) => callback(null, uploadDir),
    filename: (_req, file, callback) => {
      const ext = path.extname(file.originalname).toLowerCase();
      callback(null, `${crypto.randomUUID()}${ext}`);
    },
  }),
  limits: {
    fileSize: maxUploadBytes,
    files: 1,
  },
  fileFilter: (_req, file, callback) => {
    const allowedMimeTypes = new Set([
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/pdf",
      "audio/webm",
      "audio/mpeg",
      "audio/wav",
    ]);

    if (!allowedMimeTypes.has(file.mimetype)) {
      return callback(new Error("Unsupported file type."));
    }

    return callback(null, true);
  },
});

app.get("/healthz", (_req, res) => {
  res.json({ ok: true });
});

app.post("/upload", authenticateUser, upload.single("file"), requireSessionMember, async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  return res.status(201).json({
    filename: req.file.filename,
    url: buildAbsoluteUrl(req, `/download/${req.sessionId}/${req.file.filename}`),
    mimeType: req.file.mimetype,
    size: req.file.size,
  });
});

app.get("/download/:sessionId/:filename", authenticateUser, requireSessionMember, async (req, res) => {
  const safeName = path.basename(req.params.filename);
  const fullPath = path.join(uploadDir, safeName);
  if (!fs.existsSync(fullPath)) {
    return res.status(404).json({ error: "File not found." });
  }

  return res.sendFile(fullPath);
});

app.post("/startSession", authenticateUser, requireSessionMember, async (req, res) => {
  try {
    const { ref, data } = req.session;
    if (data.status === "completed") {
      return res.status(409).json({ error: "Completed sessions cannot be restarted." });
    }

    await ref.set(
      {
        status: "ongoing",
        users: req.participantIds,
        startedAt: FieldValue.serverTimestamp(),
        startedBy: req.user.uid,
      },
      { merge: true }
    );

    return res.json({
      success: true,
      sessionId: req.sessionId,
      status: "ongoing",
      users: req.participantIds,
    });
  } catch (error) {
    log("error", "Failed to start session", {
      requestId: req.requestId,
      sessionId: req.sessionId,
      error: error.message,
    });
    return res.status(500).json({ error: "Internal server error starting session." });
  }
});

app.post("/confirmEndSession", authenticateUser, requireSessionMember, async (req, res) => {
  try {
    const sessionRef = req.session.ref;
    const uid = req.user.uid;

    const result = await db.runTransaction(async (transaction) => {
      const sessionSnap = await transaction.get(sessionRef);
      const sessionData = sessionSnap.data();
      const participantIds = getParticipantIds(sessionData);
      const confirmedBy = Array.from(new Set([...(sessionData.confirmedBy || []), uid]));
      const bothConfirmed = participantIds.every((participantId) => confirmedBy.includes(participantId));

      if (sessionData.rewardsGiven === true) {
        transaction.update(sessionRef, {
          confirmedBy,
          status: "completed",
          endRequest: null,
        });
        return {
          success: true,
          status: "completed",
          alreadyCompleted: true,
        };
      }

      if (!bothConfirmed) {
        transaction.update(sessionRef, {
          confirmedBy,
          endRequest: {
            from: uid,
            status: "pending",
            requestedAt: sessionData.endRequest?.requestedAt || FieldValue.serverTimestamp(),
          },
        });
        return {
          success: true,
          status: sessionData.status || "ongoing",
          confirmedBy,
          waiting: true,
        };
      }

      for (const participantId of participantIds) {
        transaction.set(
          db.doc(`${USER_COLLECTION}/${participantId}`),
          {
            coins: FieldValue.increment(25),
            stats: {
              swapsCompleted: FieldValue.increment(1),
            },
          },
          { merge: true }
        );
      }

      transaction.update(sessionRef, {
        status: "completed",
        completedAt: FieldValue.serverTimestamp(),
        completedBy: uid,
        confirmedBy,
        endRequest: null,
        rewardsGiven: true,
        rewardsGrantedAt: FieldValue.serverTimestamp(),
      });

      return {
        success: true,
        status: "completed",
        confirmedBy,
        rewardedUsers: participantIds,
      };
    });

    return res.json(result);
  } catch (error) {
    log("error", "Failed to confirm end session", {
      requestId: req.requestId,
      sessionId: req.sessionId,
      error: error.message,
    });
    return res.status(500).json({ error: "Internal server error confirming end session." });
  }
});

app.post("/cancelEndSession", authenticateUser, requireSessionMember, async (req, res) => {
  try {
    if (req.session.data.status === "completed") {
      return res.status(409).json({ error: "Completed sessions cannot be changed." });
    }

    await req.session.ref.set(
      {
        endRequest: null,
        confirmedBy: [],
      },
      { merge: true }
    );

    return res.json({ success: true, status: req.session.data.status || "ongoing" });
  } catch (error) {
    log("error", "Failed to cancel end session", {
      requestId: req.requestId,
      sessionId: req.sessionId,
      error: error.message,
    });
    return res.status(500).json({ error: "Internal server error cancelling end session." });
  }
});

app.post("/giveFeedback", authenticateUser, requireSessionMember, async (req, res) => {
  try {
    const { toUserId, rating, comment = "" } = req.body;
    if (!toUserId || !Number.isInteger(rating) || rating < 1 || rating > 5 || comment.length > 1000) {
      return res.status(400).json({ error: "Invalid feedback payload." });
    }

    if (!req.participantIds.includes(toUserId) || toUserId === req.user.uid) {
      return res.status(400).json({ error: "Invalid feedback target." });
    }

    if (req.session.data.status !== "completed") {
      return res.status(409).json({ error: "Feedback allowed only after completion." });
    }

    if (req.session.data.feedback?.[req.user.uid]) {
      return res.status(409).json({ error: "Feedback already submitted." });
    }

    await req.session.ref.set(
      {
        feedback: {
          ...(req.session.data.feedback || {}),
          [req.user.uid]: {
            toUserId,
            rating,
            comment,
            createdAt: FieldValue.serverTimestamp(),
          },
        },
      },
      { merge: true }
    );

    return res.json({ success: true });
  } catch (error) {
    log("error", "Failed to submit feedback", {
      requestId: req.requestId,
      sessionId: req.sessionId,
      error: error.message,
    });
    return res.status(500).json({ error: "Internal server error submitting feedback." });
  }
});

app.post("/purchase", authenticateUser, async (req, res) => {
  try {
    const { itemId } = req.body || {};
    const item = SHOP_CATALOG[itemId];
    if (!item) {
      return res.status(400).json({ error: "Unknown shop item." });
    }

    const userRef = db.doc(`${USER_COLLECTION}/${req.user.uid}`);
    const result = await db.runTransaction(async (transaction) => {
      const userSnap = await transaction.get(userRef);
      if (!userSnap.exists) {
        throw new Error("User profile not found.");
      }

      const userData = userSnap.data();
      const currentCoins = Number(userData.coins || 0);
      if (currentCoins < item.price) {
        const error = new Error("Insufficient coins.");
        error.statusCode = 409;
        throw error;
      }

      transaction.update(userRef, {
        coins: currentCoins - item.price,
        updatedAt: FieldValue.serverTimestamp(),
      });

      return { success: true, remainingCoins: currentCoins - item.price };
    });

    return res.json(result);
  } catch (error) {
    log("error", "Purchase failed", {
      requestId: req.requestId,
      userId: req.user?.uid,
      error: error.message,
    });
    return res.status(error.statusCode || 500).json({ error: error.message || "Internal server error." });
  }
});

app.use((error, _req, res, _next) => {
  if (error instanceof multer.MulterError) {
    return res.status(400).json({ error: error.message });
  }

  if (error?.message === "Unsupported file type.") {
    return res.status(400).json({ error: error.message });
  }

  if (error?.message === "Origin not allowed by CORS") {
    return res.status(403).json({ error: error.message });
  }

  return res.status(500).json({ error: "Internal server error." });
});

app.listen(PORT, () => {
  log("info", "API listening", { port: PORT });
});
