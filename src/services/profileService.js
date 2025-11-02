// src/services/profileService.js

// src/services/profileService.js

import { db, auth } from '../firebase';
import {
  doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, deleteDoc,
  collection, addDoc, query, where, getDocs, onSnapshot, documentId, limit, serverTimestamp
} from 'firebase/firestore';

const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
console.log("🔥 Active App ID:", appId);

// 🔹 COLLECTION REFS
const swapsCol = collection(db, `artifacts/${appId}/swaps`);
const privateUsersCol = `artifacts/${appId}/users`;
const publicUsersCol = `artifacts/${appId}/public/data/users`;

// --- 🧩 CREATE USER PROFILE (FIXED) ---
export async function createUserProfile(user) {
  if (!user) return;

  const userRef = doc(db, `${privateUsersCol}/${user.uid}`);
  const docSnap = await getDoc(userRef);
  const existingData = docSnap.exists() ? docSnap.data() : {};

  const displayName = user.displayName || existingData.displayName || "New User";
  const photoURL =
    user.photoURL ||
    existingData.photoURL ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=random`;

  const profileData = {
    uid: user.uid,
    displayName,
    email: user.email || existingData.email || "",
    photoURL,
    skills: existingData.skills || [],
    coins: existingData.coins || 100,
    stars: existingData.stars || 3,
    stats: existingData.stats || { swapsCompleted: 0 },
    swapCount: existingData.swapCount || 0,
    createdAt: existingData.createdAt || new Date().toISOString(),
  };

  await setDoc(userRef, profileData, { merge: true });
  console.log("✅ Synced profile:", profileData);

  // ✅ Update public doc
  const publicUserRef = doc(db, `artifacts/${appId}/public/data/users/${user.uid}`);
  await setDoc(
    publicUserRef,
    {
      name: displayName,
      avatar: photoURL,
      updatedAt: new Date().toISOString(),
    },
    { merge: true }
  );
  console.log("✅ Public profile updated with avatar:", photoURL);
}

// --- THIS FUNCTION IS CORRECTED ---
export const getUserProfile = async (userId, user = null) => {
  const effectiveUid = user?.uid || userId;
  if (!effectiveUid) {
    console.error("❌ getUserProfile: No valid user ID found");
    return null;
  }

  // --- 1. Set up Defaults ---
  // Use 'user' object if provided, otherwise create generic defaults
  const defaultName = user?.displayName || user?.email?.split('@')[0] || 'SkillSwap User';
  const defaultAvatar =
    user?.photoURL ||
    `https://placehold.co/100x100/e2e8f0/333?text=${(
      defaultName === 'SkillSwap User' ? '?' : defaultName[0].toUpperCase()
    )}`;

  const defaultProfileShape = {
    skills: [],
    stats: { swapsCompleted: 0 },
    name: defaultName,
    avatar: defaultAvatar,
    uid: effectiveUid,
  };

  try {
    let userRef;
    let docSnap;
    
    // --- 2. Determine Read Type (Private vs Public) ---

    if (auth.currentUser?.uid === effectiveUid) {
      // --- PRIVATE READ (Fetching your own profile) ---
      userRef = doc(db, `artifacts/${appId}/users/${effectiveUid}`);
      docSnap = await getDoc(userRef);

      // 🟡 MIGRATE: Only run when fetching your own profile
      if (!docSnap.exists()) {
        const oldRef = doc(db, "users", effectiveUid);
        const oldSnap = await getDoc(oldRef); // This is ALLOWED by rules

        if (oldSnap.exists()) {
          console.log(`ℹ️ Migrating OWN profile for ${effectiveUid}...`);
          const oldData = oldSnap.data();
          const avatar = oldData.photoURL || defaultAvatar;

          const migratedData = {
            ...defaultProfileShape,
            ...oldData,
            name: oldData.name || defaultName,
            avatar: avatar,
            photoURL: null,
            stats: { ...defaultProfileShape.stats, ...(oldData.stats || {}) },
            uid: effectiveUid,
            email: oldData.email || user?.email,
            createdAt: oldData.createdAt || new Date().toISOString()
          };
          
          // Write to new private path
          await setDoc(userRef, migratedData);
          
          // Write to new public path
          const publicUserRef = doc(db, `artifacts/${appId}/public/data/users/${effectiveUid}`);
          await setDoc(publicUserRef, {
              name: migratedData.name,
              avatar: migratedData.avatar,
              updatedAt: new Date().toISOString()
          });

          await deleteDoc(oldRef); // Delete old doc
          docSnap = await getDoc(userRef); // Re-fetch
        }
      }
    } else {
      // --- PUBLIC READ (Fetching someone else's profile) ---
      userRef = doc(db, `artifacts/${appId}/public/data/users/${effectiveUid}`);
      docSnap = await getDoc(userRef);
      // ❌ We explicitly DO NOT check the old `users/` path.
      // This prevents the permission error.
    }

    // --- 3. Process the result ---

   if (docSnap.exists()) {
  const data = docSnap.data();

  // ✅ Always ensure 'name' exists
  const finalName =
    data.name ||
    user?.displayName ||
    user?.email?.split("@")[0] ||
    "SkillSwap User";

  return {
    ...defaultProfileShape,
    ...data,
    name: finalName,
    stats: { ...defaultProfileShape.stats, ...(data.stats || {}) },
    avatar:
      (data.avatar && data.avatar.startsWith("http"))
        ? data.avatar
        : (data.photoURL || defaultProfileShape.avatar)
  };
}



    // --- 4. Handle creation or public default ---
    
    // If it was a PRIVATE read, and no doc existed, CREATE one.
    if (auth.currentUser?.uid === effectiveUid) {
      console.log(`Creating new profile for ${effectiveUid}...`);
      const newProfile = {
        ...defaultProfileShape, // Uses smart defaults from auth
        uid: effectiveUid,
        email: user.email,
        createdAt: new Date().toISOString(),
      };
      
      // Write private doc
      await setDoc(doc(db, `artifacts/${appId}/users/${effectiveUid}`), newProfile);
      
      // Write public doc
      const publicUserRef = doc(db, `artifacts/${appId}/public/data/users/${effectiveUid}`);
      await setDoc(publicUserRef, {
        name: newProfile.name,
        avatar: newProfile.avatar,
        updatedAt: new Date().toISOString()
      });
      
      return newProfile;
    }

    // If it was a PUBLIC read, and no doc existed, return the default.
    console.warn(`No public profile found for ${effectiveUid}. Returning default.`);
    return defaultProfileShape; // This has "SkillSwap User" and "?"

  } catch (error) {
    console.error(`Error in getUserProfile for ${effectiveUid}:`, error);
    return {
      ...defaultProfileShape,
      name: "Error User", // So you can see the error
    };
  }
};
// --- (Rest of profileService.js) ---



// --- Skills (No Changes Below This Line) ---
export const addUserSkill = async (userId, skill) => {
  if (!userId || !skill) return;

  const userRef = doc(db, `artifacts/${appId}/users/${userId}`);
  const userSnap = await getDoc(userRef);
  const userData = userSnap.exists() ? userSnap.data() : null;

  // ✅ Step 1: Create the public skill first (so we have its ID)
  const publicSkillsCol = collection(db, `artifacts/${appId}/public/data/skills`);
  const publicDocRef = await addDoc(publicSkillsCol, {
    ...skill,
    userId,
    createdAt: new Date(),
  });

  const skillWithId = { ...skill, publicId: publicDocRef.id };

  // ✅ Step 2: Add *only once* to the user's skill array
  if (!userData) {
    await setDoc(userRef, { skills: [skillWithId] }, { merge: true });
  } else {
    await updateDoc(userRef, { skills: arrayUnion(skillWithId) });
  }
};


export const deleteUserSkill = async (userId, skillToDelete) => {
  if (!userId || !skillToDelete) return;
  const userRef = doc(db, `artifacts/${appId}/users`, userId);
  await updateDoc(userRef, { skills: arrayRemove(skillToDelete) });
  if (skillToDelete.publicId) {
    const publicDocRef = doc(db, `artifacts/${appId}/public/data/skills`, skillToDelete.publicId);
    await deleteDoc(publicDocRef);
  }
};

// ... (appId and other functions are above this)

export const getAllSkills = async (currentUserId) => {
  try {
    // ✅ Uses the global appId
    const skillsRef = collection(db, `artifacts/${appId}/public/data/skills`);
    const skillsSnap = await getDocs(skillsRef);

    const allSkills = await Promise.all(
      skillsSnap.docs.map(async (docSnap) => {
        const skillData = docSnap.data();

        // skip your own skills
        if (skillData.userId === currentUserId) return null;

        // ⬇️ --- THIS IS THE FIX --- ⬇️
        // Instead of a simple getDoc, we use getUserProfile.
        // This will read the public profile AND run your migration
        // logic if the public profile is missing but an old one exists.
        const userData = await getUserProfile(skillData.userId);
        // ⬆️ --- END OF FIX --- ⬆️

        return {
          id: docSnap.id,
          ...skillData,
          // Read from the profile returned by getUserProfile
          userName: userData?.name || "SkillSwap User",
          userAvatar: userData?.avatar || null, // PublicSkillCard will handle the '?'
        };
      })
    );

    return allSkills.filter(Boolean);
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
};




// --- Swaps ---

export const createSwapRequest = async (requesterId, receiverId, skill) => {
  const swapsCol = collection(db, `artifacts/${appId}/swaps`);
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

  const requesterProfile = await getUserProfile(requesterId, auth.currentUser); // Pass user
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

export const onSwapRequestsSnapshot = (userId, callback) => {
  const swapsCol = collection(db, `artifacts/${appId}/swaps`);
  const q = query(swapsCol, where("receiverId", "==", userId), where("status", "==", "pending"));
  return onSnapshot(q, (snapshot) => {
    const requests = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(requests);
  });
};

export const updateSwapRequestStatus = async (swapId, status) => {
  const swapRef = doc(db, `artifacts/${appId}/swaps`, swapId);
  await updateDoc(swapRef, { 
    status: status,
    updatedAt: serverTimestamp() // <-- ADD THIS
  });
};

export const acceptSwapRequest = async (swapId, skillOfferedByReceiver) => {
  const swapRef = doc(db, `artifacts/${appId}/swaps`, swapId);
  await updateDoc(swapRef, {
    status: 'accepted',
    skillOfferedByReceiver,
    acceptedAt: new Date()
  });
};

export const onAcceptedSwapsSnapshot = (userId, callback) => {
  if (!userId) return () => { };

  const swapsCol = collection(db, `artifacts/${appId}/swaps`);
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

export const onSessionSnapshot = (sessionId, callback) => {
  if (!sessionId) return () => {};
  
  const swapRef = doc(db, `artifacts/${appId}/swaps`, sessionId);
  const currentUserId = auth.currentUser?.uid;

  return onSnapshot(swapRef, (docSnap) => {
    if (docSnap.exists()) {
      const sessionData = docSnap.data();
      const isRequester = sessionData.requesterId === currentUserId;
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

//session completion 


// ... function onSessionSnapshot is right above this ...

export const onCompletedSwapsSnapshot = (userId, callback) => {
  if (!userId) return () => { };

  // Use a Map to store and manage the sessions
  const sessionsMap = new Map();

  // Helper function to process changes from both queries
  const processChanges = (snapshot) => {
    snapshot.docChanges().forEach(async (change) => {
      const docData = { id: change.doc.id, ...change.doc.data() };

      if (change.type === "removed") {
        sessionsMap.delete(docData.id);
      } else {
        // This logic is the same as onAcceptedSwapsSnapshot
        const isRequester = docData.requesterId === userId;
        const otherPartyId = isRequester ? docData.receiverId : docData.requesterId;
        
        // --- FIX: Use getUserProfile to get the correct user data ---
        const otherPartyProfile = await getUserProfile(otherPartyId);
        
        docData.otherParty = {
          name: otherPartyProfile?.name || 'Unknown User',
          avatar: otherPartyProfile?.avatar, // We get the avatar now
          id: otherPartyId
        };
        // -----------------------------------------------------------
        
        sessionsMap.set(docData.id, docData);
      }
      
      // Update the state with the new array of values
      callback(Array.from(sessionsMap.values()));
    });
    
    // Handle initial load (in case docChanges is not enough for all scenarios)
    const allDocs = snapshot.docs.map(doc => sessionsMap.get(doc.id)).filter(Boolean);
    callback(allDocs);
  };
  
  // Query 1: Where the current user was the REQUIESTER
  const q1 = query(
    swapsCol, // <-- Uses the variable we defined at the top
    where("requesterId", "==", userId), 
    where("status", "==", "completed")
  );
  
  // Query 2: Where the current user was the RECEIVER
  const q2 = query(
    swapsCol, // <-- Uses the variable we defined at the top
    where("receiverId", "==", userId), 
    where("status", "==", "completed")
  );

  const unsub1 = onSnapshot(q1, processChanges);
  const unsub2 = onSnapshot(q2, processChanges);

  // Return a function that unsubscribes from both listeners
  return () => {
    unsub1();
    unsub2();
  };
};