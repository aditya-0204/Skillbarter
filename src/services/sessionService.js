import { db, storage } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Send chat message (text/audio/file)
export const sendMessage = async (sessionId, senderId, content, type = 'text') => {
  const messagesCol = collection(db, `/artifacts/sessions/${sessionId}/messages`);
  await addDoc(messagesCol, {
    senderId,
    content,
    type,
    createdAt: serverTimestamp(),
  });
};

// Listen for messages in real-time
export const onMessagesSnapshot = (sessionId, callback) => {
  const messagesCol = collection(db, `/artifacts/sessions/${sessionId}/messages`);
  const q = query(messagesCol, orderBy('createdAt', 'asc'));
  return onSnapshot(q, snapshot => {
    const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(messages);
  });
};

// Upload a file or image
export const uploadFile = async (file, sessionId) => {
  const storageRef = ref(storage, `sessions/${sessionId}/${file.name}_${Date.now()}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};

// Upload audio blob
export const uploadAudio = async (audioBlob, sessionId) => {
  const storageRef = ref(storage, `sessions/${sessionId}/audio_${Date.now()}.webm`);
  await uploadBytes(storageRef, audioBlob);
  return await getDownloadURL(storageRef);
};
