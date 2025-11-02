// ChatPage.jsx (Full Code)

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useCoins } from "../store/coinStore.jsx";
import {
  sendMessage,
  onMessagesSnapshot,
  deleteMessage,
  getUser,
  updateUserLastActive,
  createUserIfNotExist,
  startSession, // <-- This is the new, simpler function
  giveFeedback,
  onSessionSnapshot,
  requestEndSession,
  cancelEndSession,
  confirmEndSession, // <-- This is the new function
} from "../services/sessionService.js";

// --- (All SVG Icons and formatTime helper are UNCHANGED) ---
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d={path} />
  </svg>
);
const PaperClipIcon = () => (
  <Icon path="M18.375 2.25c-2.438 0-4.438 1.964-4.438 4.375v9.75c0 1.243.984 2.25 2.188 2.25s2.188-1.007 2.188-2.25V8.25c0-.582-.46-1.031-1.031-1.031S16.25 7.668 16.25 8.25v8.25c0 2.06-1.655 3.75-3.688 3.75s-3.688-1.69-3.688-3.75V6.625c0-2.84 2.3-5.125 5.125-5.125s5.125 2.285 5.125 5.125v9.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75V6.625c0-2.02-1.63-3.625-3.625-3.625S10 4.605 10 6.625v9.75c0 2.877 2.34 5.25 5.25 5.25s5.25-2.373 5.25-5.25V6.625C20.5 4.08 18.582 2.25 16.125 2.25h-2.25z" />
);
const PaperAirplaneIcon = () => (
  <Icon path="M6.428 3.428a.75.75 0 00-.165 1.08l2.914 4.37-5.25 1.179a.75.75 0 00-.31 1.341l10.5 4.667a.75.75 0 00.932-.932L9.818 4.547a.75.75 0 00-1.341-.31L4.109 9.49l-4.37-2.914a.75.75 0 00-.165 1.08z" />
);
const MicrophoneIcon = () => (
  <Icon path="M12 18.75a6 6 0 006-6v-1.5a6 6 0 00-12 0v1.5a6 6 0 006 6zM12 2.25a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 004.5 0V4.5A2.25 2.25 0 0012 2.25z" />
);
const StopIcon = () => (
  <Icon path="M5.25 5.25A2.25 2.25 0 003 7.5v9A2.25 2.25 0 005.25 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0014.25 5.25h-9z" />
);
const TrashIcon = () => (
  <Icon path="M6 7h12M9 7v10m6-10v10M4 7h16l-1.5 12.5A2.25 2.25 0 0116.25 22.5h-8.5a2.25 2.25 0 01-2.25-2.25L4 7zm5-3h6v2H9V4z" />
);
const EyeIcon = () => (
  <Icon path="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-7.5a3 3 0 100 6 3 3 0 000-6z" />
);
const formatTime = (timestamp) => {
  if (!timestamp || !timestamp.toDate) return "";
  return timestamp
    .toDate()
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
};

export default function ChatPage({ session }) {
  const { currentUser } = useAuth();
  const { coins } = useCoins();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [recording, setRecording] = useState(false);
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState({});
  const [preview, setPreview] = useState({ open: false, type: "", url: "" });
  const [otherUserInfo, setOtherUserInfo] = useState(null);
  const [currentUserInfo, setCurrentUserInfo] = useState(null);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackComment, setFeedbackComment] = useState("");
  const [sessionInfo, setSessionInfo] = useState(null);
  const [otherUserId, setOtherUserId] = useState(null);
  

  
  const [isEnding, setIsEnding] = useState(false); // This is just for the "Ending..." button text

  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const sessionId = session?.id;
  const otherUser = session?.otherParty;

  // --- (All useEffects and other functions are UNCHANGED until handleConfirmEnd) ---
  const fetchCurrentUser = useCallback(async () => {
    if (!currentUser?.uid) return;
    let userData = await getUser(currentUser.uid);
    if (!userData) {
      await createUserIfNotExist(currentUser, { stars: 5, coins: 0 });
      userData = await getUser(currentUser.uid);
    }
    setCurrentUserInfo({
      ...userData,
      stars: userData?.stars ?? 3,
    });
  }, [currentUser]);

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser, messages]);

  useEffect(() => {
    if (!sessionId) return;
    const unsubscribe = onMessagesSnapshot(sessionId, setMessages);
    return () => unsubscribe();
  }, [sessionId]);

  useEffect(() => {
    if (!sessionId) return;
    const unsubscribe = onSessionSnapshot(sessionId, (data) => {
      setSessionInfo((prevSessionInfo) => {
        if (
          data?.status === "completed" &&
          prevSessionInfo?.status !== "completed"
        ) {
          setFeedbackOpen(true);
        }
        return data;
      });
    });
    return () => unsubscribe();
  }, [sessionId]);
  useEffect(() => {
  if (sessionInfo?.users && currentUser) {
    const other = sessionInfo.users.find((u) => u !== currentUser.uid);
    if (other) setOtherUserId(other);
  }
}, [sessionInfo, currentUser]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!currentUser) return;
    updateUserLastActive(currentUser.uid, {
      name: currentUser.displayName,
      email: currentUser.email,
    });
    const interval = setInterval(() => {
      updateUserLastActive(currentUser.uid, {
        name: currentUser.displayName,
        email: currentUser.email,
      });
    }, 30000);
    return () => clearInterval(interval);
  }, [currentUser]);

  useEffect(() => {
    const fetchOther = async () => {
      if (!otherUser?.uid) return;
      const userData = await getUser(otherUser.uid);
      setOtherUserInfo(userData);
    };
    fetchOther();
  }, [otherUser, messages]);

  const getUserStatus = () => {
    if (!otherUserInfo?.lastActive) return "";
    const last = otherUserInfo.lastActive.toDate();
    const diff = Date.now() - last.getTime();
    return diff < 2 * 60 * 1000 ? "" : `Last seen ${last.toLocaleString()}`;
  };

  const handleSend = async () => {
    if (!input.trim() || sending) return;
    setSending(true);
    setError("");
    try {
      await sendMessage(sessionId, currentUser.uid, input.trim(), "text");
      setInput("");
    } catch {
      setError("Message failed to send.");
    } finally {
      setSending(false);
    }
  };

  const handleDelete = async (msg) => {
    if (msg.senderId !== currentUser.uid) return;
    if (!window.confirm("Delete this message?")) return;
    setDeleting((prev) => ({ ...prev, [msg.id]: true }));
    try {
      await deleteMessage(sessionId, msg.id, currentUser.uid);
    } catch {
      setError("Failed to delete message.");
    } finally {
      setDeleting((prev) => ({ ...prev, [msg.id]: false }));
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !sessionId || !currentUser) return;
    setSending(true);
    setError("");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("sessionId", sessionId);
    formData.append("senderId", currentUser.uid);
    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      if (data.url) {
        let type = "file";
        if (file.type.startsWith("image/")) type = "image";
        else if (file.type === "application/pdf") type = "pdf";
        else if (file.type.startsWith("audio/")) type = "audio";
        await sendMessage(sessionId, currentUser.uid, data.url, type);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  };

  const startRecording = async () => {
    if (!navigator.mediaDevices) return setError("Audio not supported.");
    setRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    recordedChunksRef.current = [];
    mediaRecorderRef.current.ondataavailable = (e) => {
      if (e.data.size > 0) recordedChunksRef.current.push(e.data);
    };
    mediaRecorderRef.current.onstop = async () => {
      setSending(true);
      try {
        const blob = new Blob(recordedChunksRef.current, { type: "audio/webm" });
        const formData = new FormData();
        formData.append("file", blob, `audio-${Date.now()}.webm`);
        formData.append("sessionId", sessionId);
        formData.append("senderId", currentUser.uid);
        const res = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (data.url) {
          await sendMessage(sessionId, currentUser.uid, data.url, "audio");
        }
      } catch {
        setError("Audio upload failed.");
      } finally {
        setSending(false);
      }
    };
    mediaRecorderRef.current.start();
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };
  
  // In ChatPage.jsx
  useEffect(() => {
    const initSession = async () => {
      if (sessionId && currentUser && otherUser?.uid) {
        // This now calls your server with the user array
        await startSession(sessionId, [currentUser.uid, otherUser.uid]); 
        fetchCurrentUser();
      }
    };
    initSession();
  }, [sessionId, currentUser, otherUser, fetchCurrentUser]);

  const handleRequestEndSession = async () => {
    if (!window.confirm("Request to end this session?")) return;
    try {
      await requestEndSession(sessionId, currentUser.uid);
    } catch (err) {
      alert(`Error requesting end: ${err.message}`);
    }
  };

  
  // --- *** THIS FUNCTION IS UPDATED *** ---
// In ChatPage.jsx
  const handleConfirmEnd = async () => {
    if (isEnding) return; 

    setIsEnding(true);
    try {
      // This now calls your server with the user array
      await confirmEndSession(sessionId, [currentUser.uid, otherUser.uid]);
      
    } catch (err) {
      console.error("Error confirming end request:", err);
      alert(`Failed to confirm end: ${err.message}`);
    } finally {
      setIsEnding(false);
    }
  };


  const handleCancelEnd = async () => {
    try {
      await cancelEndSession(sessionId);
    } catch (err) {
      alert(`Error cancelling: ${err.message}`);
    }
  };

const handleFeedbackSubmit = async () => {
  if (!feedbackRating) {
    alert("Please select a rating before submitting!");
    return;
  }

  try {
    // 🔍 Your Firestore structure uses user1/user2 and requesterId/receiverId
    const userArray = [
      sessionInfo?.user1,
      sessionInfo?.user2,
      sessionInfo?.requesterId,
      sessionInfo?.receiverId,
    ].filter(Boolean);

    console.log("🧩 Checking userArray:", userArray);

    const otherId = userArray.find((id) => id !== currentUser?.uid);

    if (!otherId) {
      console.warn("⚠️ Could not find other user — fallback attempt failed");
      console.log("sessionInfo:", sessionInfo);
      alert("⚠️ Could not find other user — session may have ended already.");
      return;
    }

    console.log("💬 Submitting feedback for:", {
      sessionId,
      from: currentUser.uid,
      to: otherId,
    });

    await giveFeedback(
      sessionId,
      currentUser.uid,
      otherId,
      feedbackRating,
      feedbackComment
    );

    alert("✅ Feedback submitted successfully!");
    setFeedbackOpen(false);
    setFeedbackRating(0);
    setFeedbackComment("");
  } catch (err) {
    console.error("❌ Feedback error (raw):", err);
    alert(`❌ Failed to submit feedback: ${err?.message || JSON.stringify(err)}`);
  }
};




  // --- Helper variables (unchanged) ---
  const isSessionCompleted = sessionInfo?.status === "completed";
  const endRequest = sessionInfo?.endRequest;
  const isWaitingForOther =
    endRequest?.status === "pending" && endRequest?.from === currentUser.uid;
  const isBeingAsked =
    endRequest?.status === "pending" && endRequest?.from !== currentUser.uid;

  if (!session || !currentUser)
    return <div className="text-white p-4">Loading chat...</div>;

  // --- (All JSX is UNCHANGED from the last version) ---
  return (
    <div className="flex flex-col h-screen bg-slate-800 text-white">
      {/* Header */}
      <header className="flex items-center p-3 border-b border-slate-700 bg-slate-700 shadow-md justify-between">
        <div className="flex items-center">
          <img
            src={`https://placehold.co/40x40/7e22ce/ffffff?text=${
              otherUser?.name?.[0] || "?"
            }`}
            alt="avatar"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 className="text-lg font-bold">{otherUser?.name || "Chat"}</h2>
            <p className="text-xs text-green-400">{getUserStatus()}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm">Your Coins: {coins ?? 0} 🪙</p>
          <p className="text-sm">Your Stars: {currentUserInfo?.stars || 0} ⭐</p>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto p-2 bg-slate-900">
        <div className="flex flex-col space-y-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end max-w-lg transition-opacity duration-300 ${
                deleting[msg.id] ? "opacity-0" : "opacity-100"
              } ${
                msg.senderId === currentUser.uid ? "self-end" : "self-start"
              }`}
            >
              <div
                className={`relative group px-3 py-2 rounded-xl ${
                  msg.senderId === currentUser.uid
                    ? "bg-purple-700 rounded-br-none"
                    : "bg-slate-600 rounded-bl-none"
                }`}
              >
                {msg.senderId === currentUser.uid && !isSessionCompleted && (
                  <button
                    onClick={() => handleDelete(msg)}
                    className="absolute -top-2 -right-2 p-1 bg-black bg-opacity-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Delete message"
                  >
                    <TrashIcon className="w-4 h-4 text-white" />
                  </button>
                )}
                {msg.type === "text" && <p className="text-sm">{msg.content}</p>}
                {(msg.type === "image" ||
                  msg.type === "pdf" ||
                  msg.type === "audio" ||
                  msg.type === "file") && (
                  <div className="relative group">
                    {msg.type === "image" && (
                      <img
                        src={msg.content}
                        alt="img"
                        className="max-w-xs rounded"
                      />
                    )}
                    {msg.type === "pdf" && (
                      <iframe
                        src={msg.content}
                        title="pdf"
                        className="w-64 h-48 border rounded"
                      />
                    )}
                    {msg.type === "audio" && (
                      <audio
                        controls
                        src={msg.content}
                        className="max-w-xs h-10"
                      />
                    )}
                    {msg.type === "file" && (
                      <p className="text-sm underline">
                        {msg.content.split("/").pop()}
                      </p>
                    )}
                    <button
                      onClick={() =>
                        setPreview({
                          open: true,
                          url: msg.content,
                          type: msg.type,
                        })
                      }
                      className="absolute bottom-1 right-1 p-2 bg-purple-600 hover:bg-purple-500 rounded-full shadow-md opacity-100 transition-all text-white flex items-center justify-center"
                      title="Preview"
                    >
                      <EyeIcon />
                    </button>
                  </div>
                )}
                <p className="text-xs text-slate-300 text-right mt-1">
                  {formatTime(msg.createdAt)}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {error && (
        <div className="p-2 text-center text-sm bg-red-800 text-red-200">
          {error}
        </div>
      )}

      {/* Input */}
      <footer className="p-3 bg-slate-700 border-t border-slate-600">
        <div className="flex items-center gap-2">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileUpload}
            disabled={sending || isSessionCompleted}
          />
          <button
            onClick={() => fileInputRef.current.click()}
            disabled={sending || isSessionCompleted}
            className="p-2 rounded-full hover:bg-slate-600 disabled:opacity-50"
          >
            <PaperClipIcon />
          </button>
          <textarea
            rows="1"
            className="flex-1 p-2 bg-slate-800 rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              isSessionCompleted
                ? "This session has ended."
                : "Type a message..."
            }
            disabled={isSessionCompleted}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          {input.trim() ? (
            <button
              onClick={handleSend}
              disabled={sending || isSessionCompleted}
              className="p-2 rounded-full bg-purple-700 hover:bg-purple-600 disabled:opacity-50"
            >
              <PaperAirplaneIcon />
            </button>
          ) : (
            <button
              onClick={recording ? stopRecording : startRecording}
              disabled={sending || isSessionCompleted}
              className={`p-2 rounded-full ${
                recording ? "bg-red-600" : "bg-purple-700"
              } hover:bg-purple-600 disabled:opacity-50`}
            >
              {recording ? <StopIcon /> : <MicrophoneIcon />}
            </button>
          )}
        </div>

        <div className="flex justify-center mt-2">
          <button
            onClick={handleRequestEndSession}
            className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded disabled:bg-gray-500"
            disabled={isSessionCompleted || isWaitingForOther || isBeingAsked}
          >
            {isSessionCompleted
              ? "Session Ended"
              : isWaitingForOther
              ? "Request Sent"
              : "End Session"}
          </button>
        </div>
      </footer>

      {/* Feedback Modal */}
      {feedbackOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="bg-slate-800 p-6 rounded-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-4 text-white">
              Give Feedback
            </h2>
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setFeedbackRating(star)}
                  className={`text-2xl ${
                    feedbackRating >= star
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
            <textarea
              className="w-full p-2 rounded mb-3 bg-slate-700 text-white"
              rows="3"
              placeholder="Optional comment"
              value={feedbackComment}
              onChange={(e) => setFeedbackComment(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setFeedbackOpen(false)}
                className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-400 text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleFeedbackSubmit}
                className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-500 text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for user being asked to end session */}
      {isBeingAsked && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="bg-slate-800 p-6 rounded-lg max-w-md w-full text-white">
            <h2 className="text-lg font-bold mb-4">Confirm End Session</h2>
            <p className="mb-4">
              {otherUser?.name || "The other user"} wants to end this session.
              Do you agree?
            </p>
            <p className="text-sm mb-4">
              If you agree, the session will end, and you will both be awarded 25
              coins.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCancelEnd}
                className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-400 text-white disabled:opacity-50"
                disabled={isEnding}
              >
                No, Continue
              </button>
              <button
                onClick={handleConfirmEnd}
                className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-500 text-white disabled:opacity-50"
                disabled={isEnding}
              >
                {isEnding ? "Ending..." : "Yes, End Session"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for user waiting for confirmation */}
      {isWaitingForOther && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="bg-slate-800 p-6 rounded-lg max-w-md w-full text-white">
            <h2 className="text-lg font-bold mb-4">Request Sent</h2>
            <p className="mb-4">
              Waiting for {otherUser?.name || "the other user"} to confirm...
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCancelEnd}
                className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-400 text-white"
              >
                Cancel Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {preview.open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded p-3 max-w-3xl w-full">
            <button
              onClick={() => setPreview({ open: false, type: "", url: "" })}
              className="text-white float-right"
            >
              X
            </button>
            {preview.type === "image" && (
              <img
                src={preview.url}
                alt="preview"
                className="mx-auto max-h-[80vh]"
              />
            )}
            {preview.type === "pdf" && (
              <iframe src={preview.url} className="w-full h-[80vh]" />
            )}
            {preview.type === "audio" && (
              <audio controls src={preview.url} className="w-full" />
            )}
            {preview.type === "file" && (
              <p className="text-white">{preview.url}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}