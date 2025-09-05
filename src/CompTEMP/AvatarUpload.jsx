import React, { useState } from 'react'
import { uploadAvatar } from '../services/storageService'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

function AvatarUpload({ uid, onUploaded }) {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleUpload(e) {
    e.preventDefault()
    if (!file) {
      setError('Choose an image first')
      return
    }
    setLoading(true)
    setError('')
    try {
      const url = await uploadAvatar(uid, file)
      // write avatar URL to profile doc
      const profileRef = doc(db, 'profiles', uid)
      await updateDoc(profileRef, { avatarUrl: url, updatedAt: new Date() })
      if (onUploaded) onUploaded(url)
    } catch (err) {
      console.error(err)
      setError('Upload failed')
    } finally {
      setLoading(false)
      setFile(null)
    }
  }

  return (
    <form onSubmit={handleUpload} className="space-y-2">
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="file"
        accept="image/*"
        onChange={e => setFile(e.target.files?.[0])}
        className="block"
      />
      <div className="flex gap-2">
        <button type="submit" className="bg-indigo-600 text-white px-3 py-1 rounded" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Avatar'}
        </button>
      </div>
    </form>
  )
}

export default AvatarUpload
