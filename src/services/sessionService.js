import { db, storage } from '../firebase';
import { 
  collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, deleteDoc, doc, getDoc, updateDoc, setDoc, arrayUnion, increment,
  writeBatch // We still need this for 'giveFeedback' logic, so keep it
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- (onMessagesSnapshot, sendMessage, uploadFile, uploadAudio, deleteMessage, updateUserLastActive, getUser, createUserIfNotExist are all UNCHANGED) ---
// ... (keep all those functions as-is) ...

export const onMessagesSnapshot = (sessionId, callback) => {
  const messagesCol = collection(db, `/artifacts/${appId}/swaps/${sessionId}/messages`);
  const q = query(messagesCol, orderBy('createdAt', 'asc'));
  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(messages);
  });
};
export const sendMessage = async (sessionId, senderId, content, type) => {
  const messagesCol = collection(db, `/artifacts/${appId}/swaps/${sessionId}/messages`);
  await addDoc(messagesCol, {
    senderId,
    content,
    type,
    createdAt: serverTimestamp()
  });
  await updateUserLastActive(senderId);
};
export const uploadFile = async (file, sessionId) => {
  if (!file) throw new Error("No file provided for upload.");
  const filePath = `chats/${sessionId}/files/${Date.now()}-${file.name}`;
  const fileRef = ref(storage, filePath);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
};
export const uploadAudio = async (blob, sessionId) => {
  if (!blob) throw new Error("No audio blob provided for upload.");
  const filePath = `chats/${sessionId}/audio/${Date.now()}.webm`;
  const audioRef = ref(storage, filePath);
  await uploadBytes(audioRef, blob);
  return await getDownloadURL(audioRef);
};
export const deleteMessage = async (sessionId, messageId, currentUserId) => {
  const messageRef = doc(db, `/artifacts/${appId}/swaps/${sessionId}/messages/${messageId}`);
  const snapshot = await getDoc(messageRef);
  if (!snapshot.exists()) throw new Error("Message not found.");
  const message = snapshot.data();
  if (message.senderId !== currentUserId) {
    throw new Error("You can only delete your own messages.");
  }
  if (['file', 'audio', 'image', 'pdf'].includes(message.type)) {
    try {
      const storageRef = ref(storage, message.content);
      await deleteObject(storageRef);
    } catch (err) {
      console.warn("File deletion skipped:", err.message);
    }
  }
  await deleteDoc(messageRef);
};
export const updateUserLastActive = async (userId) => {
  const userRef = doc(db, `artifacts/${appId}/users/${userId}`);
  await updateDoc(userRef, { lastActive: serverTimestamp() });
};
export const getUser = async (userId) => {
  const userRef = doc(db, `artifacts/${appId}/users/${userId}`);
  const snapshot = await getDoc(userRef);
  if (!snapshot.exists()) return null;
  return { uid: snapshot.id, ...snapshot.data() };
};
export async function createUserIfNotExist(user) {
  if (!user) return;

  // This path now matches your security rules and your 'getUser' function
  const userRef = doc(db, `artifacts/${appId}/users/${user.uid}`);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email || "",
      displayName: user.displayName || "User",
      createdAt: serverTimestamp(),
      lastActive: serverTimestamp(),
      coins: 0, // Initialize coins
      stars: 3  // Initialize stars
    });
    console.log("✅ Firestore user created at correct path:", user.uid);
  } else {
    console.log("ℹ️ User already exists in Firestore:", user.uid);
  }
}
export const giveFeedback = async (sessionId, fromUserId, toUserId, rating, comment = "") => {
  try {
    if (!sessionId || !fromUserId || !toUserId) {
      console.error("❌ giveFeedback aborted: missing data", { sessionId, fromUserId, toUserId });
      throw new Error("Invalid feedback data — missing IDs.");
    }

    console.log("📤 Submitting feedback:", { sessionId, fromUserId, toUserId, rating, comment });

    // ✅ Send to backend — ensures both users can submit feedback even after session is completed
    const res = await fetch("http://localhost:5000/giveFeedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId,
        userId: fromUserId,
        feedback: { toUserId, rating, comment },
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to save feedback");

    console.log("✅ Feedback successfully saved to backend:", data);
    return data;
  } catch (error) {
    console.error("🔥 giveFeedback error:", error);
    throw error;
  }
};


export const onSessionSnapshot = (sessionId, callback) => {
  const sessionRef = doc(db, `artifacts/${appId}/swaps/${sessionId}`);
  return onSnapshot(sessionRef, (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.data());
    } else {
      callback(null);
    }
  });
};
export const requestEndSession = async (sessionId, fromUserId) => {
  const sessionRef = doc(db, `artifacts/${appId}/swaps/${sessionId}`);
  const sessionSnap = await getDoc(sessionRef);

  if (!sessionSnap.exists()) {
    console.error("❌ No session found to end.");
    return;
  }

  const data = sessionSnap.data();
  const allUsers = [data.user1 || data.requesterId, data.user2 || data.receiverId].filter(Boolean);

  await updateDoc(sessionRef, {
    endRequest: {
      from: fromUserId,
      status: 'pending',
      requestedAt: serverTimestamp(),
    },
    // ✅ Ensure we always save both user IDs for backend to read
    user1: allUsers[0],
    user2: allUsers[1],
  });
};

export const cancelEndSession = async (sessionId) => {
  const sessionRef = doc(db, `artifacts/${appId}/swaps/${sessionId}`);
  await updateDoc(sessionRef, { endRequest: null });
};


/**
 * --- NEW/MODIFIED FUNCTIONS START HERE ---
 */

/**
 * Client just updates the status. Cloud Function will handle coins.
 */
export const startSession = async (sessionId, userIds) => {
  try {
    const res = await fetch('http://localhost:5000/startSession', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Send the data your server.js endpoint expects
      body: JSON.stringify({ sessionId, userIds }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || 'Failed to start session on server');
    }

    // Server handled everything. The snapshot listener in ChatPage.jsx
    // will see the 'status: "ongoing"' update.
    return res.json();

  } catch (error) {
    console.error("Error in startSession service:", error);
    throw error;
  }
};

/**
 * Client just confirms the request. Cloud Function will handle coins and completion.
 * (This replaces 'finalizeSession')
 */
// sessionService.js
export const confirmEndSession = async (sessionId, userIds) => {
  try {
    const res = await fetch('http://localhost:5000/confirmEndSession', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, userIds }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to confirm end on server');
    return data;
  } catch (err) {
    console.error('Error in confirmEndSession service:', err);
    throw err;
  }
};
