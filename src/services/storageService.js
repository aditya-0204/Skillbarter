// storageService.js
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase'

/**
 * Uploads a file to storage at path "avatars/{uid}/{filename}" and returns the download URL.
 */
export async function uploadAvatar(uid, file) {
  const path = `avatars/${uid}/${Date.now()}_${file.name}`
  const storageRef = ref(storage, path)
  const snap = await uploadBytes(storageRef, file)
  const url = await getDownloadURL(snap.ref)
  return url
}
