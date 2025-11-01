// functions/index.js

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();
const appId = "default-app-id"; // Make sure this matches your 'appId' in sessionService.js

/**
 * Triggered when a session document is updated.
 * This function will securely handle giving coins.
 */
exports.onSessionUpdate = functions.firestore
  .document(`/artifacts/${appId}/swaps/{sessionId}`)
  .onUpdate(async (change, context) => {
    const beforeData = change.before.data();
    const afterData = change.after.data();
    const sessionId = context.params.sessionId;

    const userIds = afterData.users;
    if (!userIds || userIds.length < 2) {
      console.log("Session is missing 'users' array, skipping.");
      return null;
    }

    // --- CASE 1: Session just started ---
    // If status changed from NOT 'ongoing' to 'ongoing'
    if (beforeData.status !== "ongoing" && afterData.status === "ongoing") {
      console.log(`Session ${sessionId} started. Awarding 25 coins.`);
      const batch = db.batch();
      userIds.forEach((uid) => {
        const userRef = db.doc(`artifacts/${appId}/users/${uid}`);
        batch.update(userRef, { coins: admin.firestore.FieldValue.increment(25) });
      });
      await batch.commit();
      return null;
    }

    // --- CASE 2: Session just confirmed to end ---
    // If endRequest.status changed from NOT 'confirmed' to 'confirmed'
    if (
      beforeData.endRequest?.status !== "confirmed" &&
      afterData.endRequest?.status === "confirmed"
    ) {
      console.log(`Session ${sessionId} confirmed. Awarding 25 coins and completing.`);
      
      // 1. Give 25 more coins
      const batch = db.batch();
      userIds.forEach((uid) => {
        const userRef = db.doc(`artifacts/${appId}/users/${uid}`);
        batch.update(userRef, { coins: admin.firestore.FieldValue.increment(25) });
      });
      await batch.commit();

      // 2. Mark the session as 'completed'
      const sessionRef = change.after.ref;
      await sessionRef.update({
        status: "completed",
        endRequest: null,
      });
      return null;
    }

    return null;
  });