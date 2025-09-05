// requestService.js (realtime + accept/decline)
import { collection, addDoc, serverTimestamp, onSnapshot, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

export async function sendBarterRequest(payload) {
  const col = collection(db, 'requests')
  const docRef = await addDoc(col, {
    ...payload,
    status: payload.status || 'pending',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  })
  return docRef.id
}

// Realtime listener for requests for a given uid (incoming and outgoing)
export function onRequestsForUser(uid, callback) {
  const col = collection(db, 'requests')
  return onSnapshot(col, (snap) => {
    const all = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    const filtered = all.filter(r => r.fromUid === uid || r.toUid === uid)
    callback(filtered)
  })
}

export async function updateRequestStatus(requestId, newStatus) {
  const ref = doc(db, 'requests', requestId)
  await updateDoc(ref, { status: newStatus, updatedAt: serverTimestamp() })
}
