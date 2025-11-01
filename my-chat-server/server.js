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
  const { sessionId, userIds } = req.body;

  if (!sessionId || !userIds || userIds.length === 0) {
    return res.status(400).send({ error: 'Missing sessionId or userIds.' });
  }

  console.log(`⚙️ Processing confirmEndSession for ${sessionId}`);
  try {
    const sessionRef = dbFirebase.doc(`/artifacts/${appId}/swaps/${sessionId}`);
    const sessionSnap = await sessionRef.get();

    if (!sessionSnap.exists) {
      return res.status(404).send({ error: 'Session not found.' });
    }

    const sessionData = sessionSnap.data();
    const confirmed = sessionData.confirmedBy || {};
    const allUserIds = sessionData.users || userIds;

    console.log("📜 Before update:", confirmed);

    // Mark these users as confirmed
    userIds.forEach(uid => { confirmed[uid] = true; });
    console.log("📜 After update:", confirmed);

    await sessionRef.update({ confirmedBy: confirmed });

    // Re-fetch to ensure latest data (avoid race condition)
    const updatedSnap = await sessionRef.get();
    const updatedData = updatedSnap.data();
    const confirmedNow = updatedData.confirmedBy || {};
    console.log("✅ Confirmed Now:", confirmedNow);
    console.log("👥 All Users:", allUserIds);

    // Check if both (all) users confirmed
    const allConfirmed = allUserIds.every(uid => confirmedNow[uid]);
    console.log("✅ allConfirmed:", allConfirmed);

    if (!allConfirmed) {
      return res.status(200).send({ success: true, message: 'Waiting for other user to confirm.' });
    }

    if (updatedData.rewardsGiven) {
      console.log(`⚠️ Coins already given for ${sessionId}`);
      return res.status(200).send({ success: true, message: 'Coins already distributed.' });
    }

    // Award coins
    console.log(`🎉 Both users confirmed. Awarding coins to: ${allUserIds}`);
    const batch = dbFirebase.batch();
    allUserIds.forEach(uid => {
      const userRef = dbFirebase.doc(`artifacts/${appId}/users/${uid}`);
      batch.set(userRef, { coins: admin.firestore.FieldValue.increment(25) }, { merge: true });
    });

    batch.update(sessionRef, {
      status: 'completed',
      endRequest: null,
      rewardsGiven: true,
    });

    await batch.commit();

    console.log(`✅ Session ${sessionId} completed and coins distributed to ${allUserIds.join(', ')}`);
    res.status(200).send({ success: true, message: 'Session ended and coins given to both users.' });

  } catch (error) {
    console.error('🔥 Error in /confirmEndSession:', error);
    res.status(500).send({ error: 'Internal server error ending session.', details: error.message });
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