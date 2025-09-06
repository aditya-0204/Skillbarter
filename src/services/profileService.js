import { db, auth } from '../firebase';
import { 
  doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, deleteDoc, 
  collection, addDoc, query, where, getDocs, onSnapshot, documentId 
} from 'firebase/firestore';

const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- User Profile Functions ---

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
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        const user = auth.currentUser;
        if (user) {
            console.warn("Profile not found for user, creating a new one.");
            const name = user.displayName || user.email.split('@')[0];
            const newProfile = {
                uid: userId,
                email: user.email,
                name: name,
                avatar: `https://placehold.co/100x100/e2e8f0/333?text=${name[0].toUpperCase()}`,
                skills: []
            };
            await setDoc(userRef, newProfile);
            return newProfile;
        }
        return null;
    }
};


// --- Skill Functions ---

export const addUserSkill = async (userId, skill) => {
    if (!userId || !skill) return;
    const userRef = doc(db, `/artifacts/${appId}/users`, userId);
    const profile = await getUserProfile(userId);
  
    const publicSkillsCol = collection(db, `/artifacts/${appId}/public/data/skills`);
    const publicDocRef = await addDoc(publicSkillsCol, {
      ...skill,
      userId: userId,
      userName: profile.name,
      userAvatar: profile.avatar,
      createdAt: new Date()
    });
  
    await updateDoc(userRef, {
      skills: arrayUnion({
        ...skill,
        publicId: publicDocRef.id
      })
    });
};

export const deleteUserSkill = async (userId, skillToDelete) => {
    if (!userId || !skillToDelete) return;
  
    const userRef = doc(db, `/artifacts/${appId}/users`, userId);
    await updateDoc(userRef, {
      skills: arrayRemove(skillToDelete)
    });
  
    if (skillToDelete.publicId) {
      const publicDocRef = doc(db, `/artifacts/${appId}/public/data/skills`, skillToDelete.publicId);
      await deleteDoc(publicDocRef);
    }
};

export const getAllSkills = async (currentUserId) => {
  if (!currentUserId) {
    return [];
  }
  const skillsCol = collection(db, `/artifacts/${appId}/public/data/skills`);
  const q = query(skillsCol, where("userId", "!=", currentUserId));
  
  const skillSnapshot = await getDocs(q);
  const skillList = skillSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return skillList;
};


// --- Swap Functions ---

const getProfilesFromSwaps = async (swaps) => {
  if (swaps.length === 0) return {};
  
  const userIds = new Set(swaps.flatMap(s => [s.requesterId, s.receiverId]));
  
  const usersRef = collection(db, `/artifacts/${appId}/users`);
  const q = query(usersRef, where(documentId(), 'in', Array.from(userIds)));
  const userSnapshot = await getDocs(q);

  const profiles = {};
  userSnapshot.forEach(doc => {
    profiles[doc.id] = doc.data();
  });

  return profiles;
};

export const createSwapRequest = async (requesterId, receiverId, skill) => {
  const swapsCol = collection(db, `/artifacts/${appId}/swaps`);
  await addDoc(swapsCol, {
    requesterId,
    receiverId,
    skillTitle: skill.title,
    skillId: skill.publicId || skill.id,
    status: 'pending',
    createdAt: new Date(),
    requesterName: auth.currentUser.displayName || auth.currentUser.email.split('@')[0],
  });
};

export const onSwapRequestsSnapshot = (userId, callback) => {
  const swapsCol = collection(db, `/artifacts/${appId}/swaps`);
  const q = query(swapsCol, where("receiverId", "==", userId), where("status", "==", "pending"));
  
  return onSnapshot(q, (snapshot) => {
    const requests = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(requests);
  });
};

export const updateSwapRequestStatus = async (swapId, status) => {
  const swapRef = doc(db, `/artifacts/${appId}/swaps`, swapId);
  await updateDoc(swapRef, {
    status: status
  });
};

export const getAcceptedSwaps = async (userId) => {
    if (!userId) return [];
    const swapsCol = collection(db, `/artifacts/${appId}/swaps`);
    const q1 = query(swapsCol, where("requesterId", "==", userId), where("status", "==", "accepted"));
    const q2 = query(swapsCol, where("receiverId", "==", userId), where("status", "==", "accepted"));

    const [requesterSnapshot, receiverSnapshot] = await Promise.all([getDocs(q1), getDocs(q2)]);
    
    const acceptedSwaps = [
        ...requesterSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })),
        ...receiverSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    ];

    const profiles = await getProfilesFromSwaps(acceptedSwaps);

    return acceptedSwaps.map(swap => {
        const otherPartyId = swap.requesterId === userId ? swap.receiverId : swap.requesterId;
        return {
            ...swap,
            otherParty: profiles[otherPartyId] || { name: 'Unknown User' }
        };
    });
};