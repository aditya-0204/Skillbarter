import React, { useState } from "react";
import { uploadFile } from "../services/sessionService.js";

function FileUpload() {
  const [sessionId, setSessionId] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [uploadedFileUrl, setUploadedFileUrl] = useState("");

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!sessionId.trim()) {
      setError("A valid session ID is required for secure uploads.");
      event.target.value = "";
      return;
    }

    setSending(true);
    setError("");
    setUploadedFileUrl("");

    try {
      const url = await uploadFile(file, sessionId.trim());
      setUploadedFileUrl(url);
    } catch (uploadError) {
      setError(uploadError.message || "Upload failed. Please try again.");
    } finally {
      setSending(false);
      event.target.value = "";
    }
  };

  return (
    <div className="mx-auto max-w-xl space-y-4 rounded-xl bg-white p-6 shadow dark:bg-slate-800">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Secure Session Upload</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          Uploads are now protected and require a valid swap session ID.
        </p>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
          Session ID
        </span>
        <input
          type="text"
          value={sessionId}
          onChange={(event) => setSessionId(event.target.value)}
          placeholder="Enter session document ID"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />
      </label>

      <input type="file" onChange={handleFileUpload} disabled={sending} className="block w-full text-sm" />

      {sending && <p className="text-sm text-slate-600 dark:text-slate-300">Uploading...</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {uploadedFileUrl && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
          <p className="font-semibold">Upload successful.</p>
          <p className="mt-1 break-all">{uploadedFileUrl}</p>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
