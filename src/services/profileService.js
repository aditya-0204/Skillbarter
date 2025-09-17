import { db, auth } from '../firebase';
import {
  doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, deleteDoc,
  collection, addDoc, query, where, getDocs, onSnapshot, documentId, limit
} from 'firebase/firestore';

const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- User Profile ---
export const createUserProfile = async (user, name) => {
  const userRef = doc(db, `/artifacts/${appId}/users`, user.uid);
  const userProfile = {
    uid: user.uid,
    email: user.email,
    name: name,
    avatar: `https://placehold.co/100x100/e2e8f0/333?text=${name[0].toUpperCase()}`,
    skills: []
  };
  await setDoc(userRef, userProfile);
};

export const getUserProfile = async (userId) => {
  if (!userId) return null;
  const userRef = doc(db, `/artifacts/${appId}/users`, userId);

  try {
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) return docSnap.data();

    const user = auth.currentUser;
    if (user && user.uid === userId) {
      const name = user.displayName || user.email.split('@')[0];
      const newProfile = {
        uid: userId,
        email: user.email,
        name,
        avatar: `https://placehold.co/100x100/e2e8f0/333?text=${name[0].toUpperCase()}`,
        skills: []
      };
      await setDoc(userRef, newProfile);
      return newProfile;
    }
    return null;
  } catch (error) {
    console.error("Error fetching or creating user profile:", error);
    return null;
  }
};

// --- Skills ---
export const addUserSkill = async (userId, skill) => {
  if (!userId || !skill) return;
  const userRef = doc(db, `/artifacts/${appId}/users`, userId);
  const profile = await getUserProfile(userId);
  const publicSkillsCol = collection(db, `/artifacts/${appId}/public/data/skills`);
  const publicDocRef = await addDoc(publicSkillsCol, { ...skill, userId, userName: profile.name, userAvatar: profile.avatar, createdAt: new Date() });
  await updateDoc(userRef, { skills: arrayUnion({ ...skill, publicId: publicDocRef.id }) });
};

export const deleteUserSkill = async (userId, skillToDelete) => {
  if (!userId || !skillToDelete) return;
  const userRef = doc(db, `/artifacts/${appId}/users`, userId);
  await updateDoc(userRef, { skills: arrayRemove(skillToDelete) });
  if (skillToDelete.publicId) {
    const publicDocRef = doc(db, `/artifacts/${appId}/public/data/skills`, skillToDelete.publicId);
    await deleteDoc(publicDocRef);
  }
};

export const getAllSkills = async (currentUserId) => {
  if (!currentUserId) return [];
  const skillsCol = collection(db, `/artifacts/${appId}/public/data/skills`);
  const q = query(skillsCol, where("userId", "!=", currentUserId));
  const skillSnapshot = await getDocs(q);
  return skillSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};


// --- Swaps ---

// This function now saves both users' names when the swap is created.
export const createSwapRequest = async (requesterId, receiverId, skill) => {
  const swapsCol = collection(db, `/artifacts/${appId}/swaps`);
  const q = query(swapsCol,
    where("requesterId", "==", requesterId),
    where("receiverId", "==", receiverId),
    where("skillId", "==", skill.id || skill.publicId),
    where("status", "==", "pending"),
    limit(1)
  );
  const existingSwap = await getDocs(q);
  if (!existingSwap.empty) {
    console.log("A pending request for this skill already exists.");
    return;
  }

  const requesterProfile = await getUserProfile(requesterId);
  const receiverProfile = await getUserProfile(receiverId);

  if (!requesterProfile || !receiverProfile) {
    console.error("Could not find profile for requester or receiver.");
    return;
  }

  await addDoc(swapsCol, {
    requesterId,
    requesterName: requesterProfile.name,
    requesterSkills: requesterProfile.skills || [],
    receiverId,
    receiverName: receiverProfile.name,
    skillTitle: skill.title,
    skillId: skill.publicId || skill.id,
    status: 'pending',
    createdAt: new Date(),
  });
};

// Fetches pending requests for the current user.
export const onSwapRequestsSnapshot = (userId, callback) => {
  const swapsCol = collection(db, `/artifacts/${appId}/swaps`);
  const q = query(swapsCol, where("receiverId", "==", userId), where("status", "==", "pending"));
  return onSnapshot(q, (snapshot) => {
    const requests = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(requests);
  });
};

// Updates the status of a swap request (e.g., to 'rejected' or 'accepted').
export const updateSwapRequestStatus = async (swapId, status) => {
  const swapRef = doc(db, `/artifacts/${appId}/swaps`, swapId);
  await updateDoc(swapRef, { status });
};

export const acceptSwapRequest = async (swapId, skillOfferedByReceiver) => {
  const swapRef = doc(db, `/artifacts/${appId}/swaps`, swapId);
  await updateDoc(swapRef, {
    status: 'accepted',
    skillOfferedByReceiver,
    acceptedAt: new Date()
  });
};

// This function efficiently reads the other user's name directly from the swap document.
export const onAcceptedSwapsSnapshot = (userId, callback) => {
  if (!userId) return () => { };

  const swapsCol = collection(db, `/artifacts/${appId}/swaps`);
  const sessionsMap = new Map();

  const processChanges = (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      const docData = { id: change.doc.id, ...change.doc.data() };

      if (change.type === "removed") {
        sessionsMap.delete(docData.id);
      } else {
        const isRequester = docData.requesterId === userId;
        docData.otherParty = {
          name: isRequester ? docData.receiverName : docData.requesterName,
          id: isRequester ? docData.receiverId : docData.requesterId
        };
        sessionsMap.set(docData.id, docData);
      }
    });
    callback(Array.from(sessionsMap.values()));
  };
  
  const q1 = query(swapsCol, where("requesterId", "==", userId), where("status", "==", "accepted"));
  const q2 = query(swapsCol, where("receiverId", "==", userId), where("status", "==", "accepted"));

  const unsub1 = onSnapshot(q1, processChanges);
  const unsub2 = onSnapshot(q2, processChanges);

  return () => {
    unsub1();
    unsub2();
  };
};

// FINAL FIX: This listener for the chat page now also reads the names directly from the document.
export const onSessionSnapshot = (sessionId, callback) => {
  if (!sessionId) return () => {};
  
  const swapRef = doc(db, `/artifacts/${appId}/swaps`, sessionId);
  const currentUserId = auth.currentUser?.uid;

  return onSnapshot(swapRef, (docSnap) => {
    if (docSnap.exists()) {
      const sessionData = docSnap.data();
      const isRequester = sessionData.requesterId === currentUserId;
      // Construct the 'otherParty' object from data already in the document
      sessionData.otherParty = {
        name: isRequester ? sessionData.receiverName : sessionData.requesterName,
        id: isRequester ? sessionData.receiverId : sessionData.requesterId
      };
      callback({ id: docSnap.id, ...sessionData });
    } else {
      console.error("Session not found!");
      callback(null);
    }
  });
};
