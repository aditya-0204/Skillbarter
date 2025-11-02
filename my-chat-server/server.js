// server.js (Using CommonJS 'require' syntax)
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const admin = require('firebase-admin'); // <-- Import Firebase Admin

// --- Configuration ---
const serviceAccount = require('./serviceAccountKey.json'); // <-- Path to your key
const appId = 'default-app-id'; // <-- MUST match your client-side appId
const PORT = process.env.PORT || 5000; // Your existing port

// --- Initialize Firebase Admin ---
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const dbFirebase = admin.firestore(); // <-- Use a different variable name to avoid conflict with Mongo 'db'
// --- End Firebase Admin Initialization ---

const app = express();
app.use(cors());
app.use(express.json());

// --- File Upload Logic (Unchanged) ---
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = file.fieldname + "-" + Date.now() + ext;
    cb(null, name);
  },
});
const upload = multer({ storage });

app.use("/files", express.static(uploadDir)); // Serve uploaded files

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  // Make sure this URL matches how you access your server
  const fileUrl = `${req.protocol}://${req.get('host')}/files/${req.file.filename}`;
  res.json({ filename: req.file.filename, url: fileUrl });
});
// --- End File Upload Logic ---


// --- ADD FIREBASE SESSION ENDPOINTS ---

// Endpoint to handle session start
app.post('/startSession', async (req, res) => {
  const { sessionId, userIds } = req.body;

  if (!sessionId || !userIds || userIds.length < 2) {
    return res.status(400).send({ error: 'Missing sessionId or userIds.' });
  }

  console.log(`Processing startSession for ${sessionId}`);
  try {
    const sessionRef = dbFirebase.doc(`/artifacts/${appId}/swaps/${sessionId}`); // Use dbFirebase
    const sessionSnap = await sessionRef.get();

    if (!sessionSnap.exists) {
      return res.status(404).send({ error: 'Session not found.' });
    }
    const sessionData = sessionSnap.data();

    if (sessionData.status !== 'ongoing' && sessionData.status !== 'completed') {
      console.log(`Awarding start coins for session ${sessionId}`);
      const batch = dbFirebase.batch(); // Use dbFirebase
      userIds.forEach((uid) => {
        const userRef = dbFirebase.doc(`artifacts/${appId}/users/${uid}`); // Use dbFirebase
        batch.set(userRef, { coins: admin.firestore.FieldValue.increment(25) }, { merge: true });
      });
      await batch.commit();
      await sessionRef.update({
        status: 'ongoing',
        users: userIds,
      });
    } else {
      console.log(`Session ${sessionId} already started/completed.`);
    }
    res.status(200).send({ success: true, message: 'Session started processed.' });
  } catch (error) {
    console.error('Error in /startSession:', error);
    res.status(500).send({ error: 'Internal server error starting session.', details: error.message });
  }
});

// Endpoint to handle session end confirmation
app.post('/confirmEndSession', async (req, res) => {
  try {
    const { sessionId, userIds } = req.body;
    if (!sessionId || !userIds) {
      return res.status(400).json({ error: "Invalid request" });
    }

    const sessionRef = dbFirebase.doc(`/artifacts/${appId}/swaps/${sessionId}`);
    const sessionSnap = await sessionRef.get();
    const sessionData = sessionSnap.data();

    if (!sessionData) {
      return res.status(404).json({ error: "Session not found" });
    }
    const allUsers = [
      sessionData.user1 || sessionData.requesterId,
      sessionData.user2 || sessionData.receiverId,
    ].filter(Boolean);

    const confirmedBy = Array.from(new Set([
      ...(sessionData.confirmedBy || []),
      ...userIds.filter(Boolean)
    ]));

    await sessionRef.update({ confirmedBy });

    // ✅ Fix: use requesterId / receiverId fallback
    const bothConfirmed = allUsers.every(uid => confirmedBy.includes(uid));

    if (!bothConfirmed) {
      console.log(`🕓 Waiting for both users to confirm session ${sessionId}`);
      return res.json({ success: true, waiting: true, confirmedBy });
    }

    if (sessionData.rewardsGiven) {
      console.log(`⚠️ Rewards already given for session ${sessionId}`);
      return res.json({ success: true, alreadyRewarded: true });
    }

    // 🔍 ADDITIONAL DEBUG LOGS HERE
    console.log("🧾 Preparing to update users:", allUsers);
    allUsers.forEach(uid => {
      console.log("Updating path:", `artifacts/${appId}/users/${uid}`);
    });

    const batch = dbFirebase.batch();

    allUsers.forEach(uid => {
      const userRef = dbFirebase.doc(`artifacts/${appId}/users/${uid}`);
      batch.set(
        userRef,
        {
          coins: admin.firestore.FieldValue.increment(25),
           "stats.swapsCompleted": admin.firestore.FieldValue.increment(1),
        },
        { merge: true }
      );
    });

    batch.update(sessionRef, {
      status: 'completed',
      endRequest: null,
      rewardsGiven: true,
      confirmedBy,
    });

    // 🔍 LOG BATCH COMMIT RESULT
    await batch.commit()
      .then(() => console.log("💰 Batch committed successfully for:", allUsers))
      .catch(err => console.error("❌ Batch commit failed:", err));

    console.log(`✅ Both users confirmed end for session ${sessionId}. Coins + swapCount updated.`);
    return res.json({ success: true, rewardedUsers: allUsers });

  } catch (error) {
    console.error("🔥 Error in /confirmEndSession:", error);
    return res.status(500).json({ error: error.message });
  }
});


// --- FEEDBACK ENDPOINT ---
app.post('/giveFeedback', async (req, res) => {
  try {
    const { sessionId, userId, feedback } = req.body;

    if (!sessionId || !userId || !feedback) {
      return res.status(400).json({ error: "Invalid request" });
    }

    const sessionRef = dbFirebase.doc(`/artifacts/${appId}/swaps/${sessionId}`);
    const sessionSnap = await sessionRef.get();

    if (!sessionSnap.exists) {
      return res.status(404).json({ error: "Session not found" });
    }

    const sessionData = sessionSnap.data();

    // Allow feedback even if the session is completed
    const updatedFeedback = {
      ...(sessionData.feedback || {}),
      [userId]: feedback,
    };

    await sessionRef.set(
      { feedback: updatedFeedback },
      { merge: true } // ✅ merge keeps 'status: completed' and rewards
    );

    console.log(`📝 Feedback saved for session ${sessionId} by ${userId}`);
    return res.json({ success: true, feedback: updatedFeedback });

  } catch (error) {
    console.error("🔥 Error in /giveFeedback:", error);
    return res.status(500).json({ error: error.message });
  }
});



// --- END FIREBASE SESSION ENDPOINTS ---


// Start server (Your existing MongoDB connection logic might go here too)
// If db.js handles the connection, make sure it's called appropriately before listen
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// Example if you need to connect Mongo before starting:
// const { connectToServer } = require('./db'); // Assuming db.js is in the same folder
// connectToServer().then(() => {
//   app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT} and connected to MongoDB`));
// }).catch(err => {
//   console.error("Failed to connect to MongoDB", err);
//   process.exit(1);
// });