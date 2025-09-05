import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, query, where, updateDoc, arrayUnion } from 'firebase/firestore';

const db = getFirestore();
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- User Profile Functions ---
export const createUserProfile = async (user) => {
  const userRef = doc(db, `/artifacts/${appId}/users`, user.uid);
  const userProfile = {
    uid: user.uid,
    email: user.email,
    name: user.email.split('@')[0],
    avatar: `https://placehold.co/100x100/e2e8f0/333?text=${user.email[0].toUpperCase()}`,
    stats: { swapsCompleted: 0 },
    skills: []
  };
  await setDoc(userRef, userProfile);
};

export const getUserProfile = async (userId) => {
  if (!userId) return null;
  const userRef = doc(db, `/artifacts/${appId}/users`, userId);
  const docSnap = await getDoc(userRef);
  return docSnap.exists() ? docSnap.data() : null;
};

// --- Skill Functions ---
export const addUserSkill = async (userId, skill) => {
  const userRef = doc(db, `/artifacts/${appId}/users`, userId);
  const profile = await getUserProfile(userId);

  await addDoc(collection(db, `/artifacts/${appId}/public/data/skills`), {
    ...skill,
    userId: userId,
    userName: profile.name,
    userAvatar: profile.avatar,
    createdAt: new Date()
  });

  await updateDoc(userRef, {
    skills: arrayUnion(skill)
  });
};

export const getAllSkills = async () => {
  const skillsCol = collection(db, `/artifacts/${appId}/public/data/skills`);
  const skillSnapshot = await getDocs(skillsCol);
  const skillList = skillSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return skillList;
};