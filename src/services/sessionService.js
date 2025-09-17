import { db, storage } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// This appId variable ensures we are looking in the correct part of the database.
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

/**
 * Listens for real-time updates to the messages subcollection of a session.
 * @param {string} sessionId The ID of the swap/session document.
 * @param {function} callback A function to call with the array of messages.
 * @returns {function} An unsubscribe function to stop the listener.
 */
export const onMessagesSnapshot = (sessionId, callback) => {
  // NOTE: The path now correctly points to the 'swaps' collection.
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

/**
 * Adds a new message document to the messages subcollection.
 * @param {string} sessionId The ID of the swap/session.
 * @param {string} senderId The UID of the user sending the message.
 * @param {string} content The message content (text or a URL for files/audio).
 * @param {'text' | 'file' | 'audio'} type The type of message.
 */
export const sendMessage = async (sessionId, senderId, content, type) => {
  const messagesCol = collection(db, `/artifacts/${appId}/swaps/${sessionId}/messages`);
  await addDoc(messagesCol, {
    senderId,
    content,
    type,
    createdAt: serverTimestamp()
  });
};

/**
 * Uploads a file to Firebase Storage.
 * @param {File} file The file to upload.
 * @param {string} sessionId The session ID, used for organizing files.
 * @returns {Promise<string>} A promise that resolves with the public download URL.
 */
export const uploadFile = async (file, sessionId) => {
  if (!file) throw new Error("No file provided for upload.");

  const filePath = `chats/${sessionId}/files/${Date.now()}-${file.name}`;
  const fileRef = ref(storage, filePath);

  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
};

/**
 * Uploads an audio blob to Firebase Storage.
 * @param {Blob} blob The audio blob to upload.
 * @param {string} sessionId The session ID, used for organizing files.
 * @returns {Promise<string>} A promise that resolves with the public download URL.
 */
export const uploadAudio = async (blob, sessionId) => {
    if (!blob) throw new Error("No audio blob provided for upload.");
  
    const filePath = `chats/${sessionId}/audio/${Date.now()}.webm`;
    const audioRef = ref(storage, filePath);
  
    await uploadBytes(audioRef, blob);
    return await getDownloadURL(audioRef);
};