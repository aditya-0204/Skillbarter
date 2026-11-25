import React, { useCallback, useEffect, useRef, useState } from "react";
import { Eye, FileText, Mic, Paperclip, Send, Square, Star, Trash2, X } from "lucide-react";
import { useAuth } from "../contexts/AuthContext.jsx";
import {
  cancelEndSession,
  confirmEndSession,
  createUserIfNotExist,
  deleteMessage,
  getAuthenticatedAssetUrl,
  getUser,
  giveFeedback,
  onMessagesSnapshot,
  onSessionSnapshot,
  sendMessage,
  startSession,
  updateUserLastActive,
  uploadAudio,
  uploadFile,
} from "../services/sessionService.js";

const formatTime = (timestamp) => {
  if (!timestamp || !timestamp.toDate) return "";
  return timestamp.toDate().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export default function ChatPage({ session }) {
  const { currentUser } = useAuth();
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
  const [assetUrls, setAssetUrls] = useState({});
  const [isEnding, setIsEnding] = useState(false);

  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const sessionId = session?.id;
  const otherUser = session?.otherParty;
  const resolvedOtherUserId = otherUser?.id || otherUserId;

  const fetchCurrentUser = useCallback(async () => {
    if (!currentUser?.uid) return;
    let userData = await getUser(currentUser.uid);
    if (!userData) {
      await createUserIfNotExist(currentUser);
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
      setSessionInfo((previousSessionInfo) => {
        if (data?.status === "completed" && previousSessionInfo?.status !== "completed") {
          setFeedbackOpen(true);
        }
        return data;
      });
    });
    return () => unsubscribe();
  }, [sessionId]);

  useEffect(() => {
    if (sessionInfo?.users && currentUser) {
      const other = sessionInfo.users.find((userId) => userId !== currentUser.uid);
      if (other) {
        setOtherUserId(other);
      }
    }
  }, [sessionInfo, currentUser]);

  useEffect(() => {
    let isActive = true;
    const createdUrls = [];
    const attachmentMessages = messages.filter(
      (msg) => ["file", "audio", "image", "pdf"].includes(msg.type) && msg.content
    );

    if (attachmentMessages.length === 0) {
      setAssetUrls({});
      return () => {};
    }

    const loadAssets = async () => {
      const entries = await Promise.all(
        attachmentMessages.map(async (msg) => {
          try {
            const objectUrl = await getAuthenticatedAssetUrl(msg.content);
            createdUrls.push(objectUrl);
            return [msg.id, objectUrl];
          } catch (assetError) {
            console.error("Failed to resolve protected asset:", assetError);
            return [msg.id, null];
          }
        })
      );

      if (!isActive) {
        return;
      }

      setAssetUrls(Object.fromEntries(entries.filter(([, value]) => Boolean(value))));
    };

    loadAssets();

    return () => {
      isActive = false;
      createdUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!currentUser) return;

    updateUserLastActive(currentUser.uid);
    const interval = setInterval(() => {
      updateUserLastActive(currentUser.uid);
    }, 30000);

    return () => clearInterval(interval);
  }, [currentUser]);

  useEffect(() => {
    const fetchOther = async () => {
      if (!resolvedOtherUserId) return;
      const userData = await getUser(resolvedOtherUserId);
      setOtherUserInfo(userData);
    };

    fetchOther();
  }, [resolvedOtherUserId, messages]);

  useEffect(() => {
    const initSession = async () => {
      if (!sessionId || !currentUser || !resolvedOtherUserId) {
        return;
      }

      await startSession(sessionId);
      fetchCurrentUser();
    };

    initSession();
  }, [sessionId, currentUser, resolvedOtherUserId, fetchCurrentUser]);

  const getUserStatus = () => {
    if (!otherUserInfo?.lastActive) return "";
    const last = otherUserInfo.lastActive.toDate();
    const diff = Date.now() - last.getTime();
    return diff < 2 * 60 * 1000 ? "" : `Last seen ${last.toLocaleString()}`;
  };

  const getRenderableAssetUrl = (msg) => assetUrls[msg.id] || msg.content;

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

    setDeleting((previous) => ({ ...previous, [msg.id]: true }));
    try {
      await deleteMessage(sessionId, msg.id, currentUser.uid);
    } catch {
      setError("Failed to delete message.");
    } finally {
      setDeleting((previous) => ({ ...previous, [msg.id]: false }));
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file || !sessionId || !currentUser) return;

    setSending(true);
    setError("");
    try {
      const url = await uploadFile(file, sessionId);
      let type = "file";
      if (file.type.startsWith("image/")) type = "image";
      else if (file.type === "application/pdf") type = "pdf";
      else if (file.type.startsWith("audio/")) type = "audio";

      await sendMessage(sessionId, currentUser.uid, url, type);
    } catch (uploadError) {
      setError(uploadError.message);
    } finally {
      setSending(false);
      event.target.value = "";
    }
  };

  const startRecording = async () => {
    if (!navigator.mediaDevices) {
      setError("Audio not supported.");
      return;
    }

    setRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    recordedChunksRef.current = [];
    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunksRef.current.push(event.data);
      }
    };
    mediaRecorderRef.current.onstop = async () => {
      setSending(true);
      try {
        const blob = new Blob(recordedChunksRef.current, { type: "audio/webm" });
        const url = await uploadAudio(blob, sessionId);
        await sendMessage(sessionId, currentUser.uid, url, "audio");
      } catch (uploadError) {
        setError(uploadError.message || "Audio upload failed.");
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

  const handleEndSessionClicked = async () => {
    if (!window.confirm("Do you want to end this session now? Both users will receive coins once the other confirms.")) {
      return;
    }

    try {
      setIsEnding(true);
      await confirmEndSession(sessionId);
    } catch (submitError) {
      console.error("Failed to send confirm end:", submitError);
      alert(`Failed to confirm end: ${submitError.message || submitError}`);
    } finally {
      setIsEnding(false);
    }
  };

  const handleConfirmEnd = async () => {
    if (isEnding) return;

    setIsEnding(true);
    try {
      await confirmEndSession(sessionId);
    } catch (submitError) {
      console.error("Error confirming end request:", submitError);
      alert(`Failed to confirm end: ${submitError.message}`);
    } finally {
      setIsEnding(false);
    }
  };

  const handleCancelEnd = async () => {
    try {
      await cancelEndSession(sessionId);
    } catch (cancelError) {
      alert(`Error cancelling: ${cancelError.message}`);
    }
  };

  const handleFeedbackSubmit = async () => {
    if (!feedbackRating) {
      alert("Please select a rating before submitting!");
      return;
    }

    if (!resolvedOtherUserId) {
      alert("Could not determine the other participant for this session.");
      return;
    }

    try {
      await giveFeedback(
        sessionId,
        currentUser.uid,
        resolvedOtherUserId,
        feedbackRating,
        feedbackComment
      );

      alert("Feedback submitted successfully!");
      setFeedbackOpen(false);
      setFeedbackRating(0);
      setFeedbackComment("");
    } catch (feedbackError) {
      console.error("Feedback error:", feedbackError);
      alert(`Failed to submit feedback: ${feedbackError?.message || JSON.stringify(feedbackError)}`);
    }
  };

  const isSessionCompleted = sessionInfo?.status === "completed";
  const endRequest = sessionInfo?.endRequest;
  const isWaitingForOther =
    endRequest?.status === "pending" && endRequest?.from === currentUser?.uid;
  const isBeingAsked =
    endRequest?.status === "pending" && endRequest?.from !== currentUser?.uid;

  if (!session || !currentUser) {
    return <div className="mx-auto my-6 max-w-5xl rounded-xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">Loading chat...</div>;
  }

  return (
    <div className="mx-auto my-6 flex h-screen max-h-[78vh] min-h-0 w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 py-4 sm:px-6">
        <div className="flex min-w-0 items-center">
          <img
            src={otherUserInfo?.avatar || otherUserInfo?.photoURL || `https://placehold.co/40x40/e2e8f0/334155?text=${otherUser?.name?.[0] || "?"}`}
            alt={`${otherUser?.name || "Session partner"} avatar`}
            className="mr-3 h-11 w-11 shrink-0 rounded-full border border-slate-200 object-cover"
          />
          <div className="min-w-0">
            <h2 className="truncate text-lg font-bold text-slate-900">{otherUser?.name || "Chat"}</h2>
            <p className="mt-0.5 text-xs text-slate-500">{getUserStatus() || "Active recently"}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600">
            <Star aria-hidden="true" className="h-4 w-4 fill-amber-400 text-amber-500" />
            {currentUserInfo?.stars || 0} Stars
          </span>
          <button
            onClick={handleEndSessionClicked}
            className="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSessionCompleted || sessionInfo?.confirmedBy?.includes(currentUser.uid) || isEnding}
          >
            {sessionInfo?.status === "completed"
              ? "Session Ended"
              : sessionInfo?.confirmedBy?.includes(currentUser.uid)
                ? "Waiting for other user"
                : isEnding
                  ? "Ending..."
                  : "End Session"}
          </button>
        </div>
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto bg-slate-50 p-4 sm:p-6">
        <div className="flex flex-col space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex w-full flex-col transition-opacity duration-300 ${
                deleting[msg.id] ? "opacity-0" : "opacity-100"
              } ${msg.senderId === currentUser.uid ? "items-end" : "items-start"}`}
            >
              <div
                className={`group relative max-w-md rounded-2xl px-3.5 py-2 text-sm ${
                  msg.senderId === currentUser.uid
                    ? "rounded-br-sm bg-blue-700 text-white"
                    : "rounded-bl-sm border border-slate-200 bg-white text-slate-800 shadow-sm"
                }`}
              >
                {msg.senderId === currentUser.uid && !isSessionCompleted && (
                  <button
                    onClick={() => handleDelete(msg)}
                    className="absolute -right-2 -top-2 rounded-full border border-slate-200 bg-white p-1 text-slate-600 opacity-0 shadow-sm transition-opacity group-hover:opacity-100"
                    title="Delete message"
                    aria-label="Delete message"
                  >
                    <Trash2 aria-hidden="true" className="h-4 w-4" />
                  </button>
                )}
                {msg.type === "text" && <p className="whitespace-pre-wrap break-words">{msg.content}</p>}
                {(msg.type === "image" ||
                  msg.type === "pdf" ||
                  msg.type === "audio" ||
                  msg.type === "file") && (
                  <div className="flex items-end gap-2">
                    {msg.type === "image" && (
                      <img
                        src={getRenderableAssetUrl(msg)}
                        alt="attachment"
                        className="max-w-xs rounded-lg"
                      />
                    )}
                    {msg.type === "pdf" && (
                      <iframe
                        src={getRenderableAssetUrl(msg)}
                        title="pdf"
                        className="h-48 w-64 rounded-lg border border-slate-200"
                      />
                    )}
                    {msg.type === "audio" && (
                      <audio
                        controls
                        src={getRenderableAssetUrl(msg)}
                        className="h-10 max-w-xs"
                      />
                    )}
                    {msg.type === "file" && (
                      <div className="flex min-w-0 max-w-xs items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-2">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-800">
                          <FileText aria-hidden="true" className="h-4 w-4" />
                        </span>
                        <p className="max-w-xs truncate font-medium text-slate-700">{msg.content.split("/").pop()}</p>
                      </div>
                    )}
                    <button
                      onClick={() =>
                        setPreview({
                          open: true,
                          url: getRenderableAssetUrl(msg),
                          type: msg.type,
                        })
                      }
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-100"
                      title="Preview"
                      aria-label="Preview attachment"
                    >
                      <Eye aria-hidden="true" className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
              <p className="mt-1 text-xs text-slate-400">{formatTime(msg.createdAt)}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {error && <div className="border-t border-red-200 bg-red-50 p-2 text-center text-sm text-red-700">{error}</div>}

      <footer className="border-t border-slate-200 bg-white p-4">
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
            aria-label="Attach a file"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 transition-colors hover:bg-slate-50 disabled:opacity-50"
          >
            <Paperclip aria-hidden="true" className="h-5 w-5" />
          </button>
          <textarea
            rows="1"
            className="min-w-0 flex-1 resize-none rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:opacity-50"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={isSessionCompleted ? "This session has ended." : "Type a message..."}
            disabled={isSessionCompleted}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                handleSend();
              }
            }}
          />
          {input.trim() ? (
            <button
              onClick={handleSend}
              disabled={sending || isSessionCompleted}
              aria-label="Send message"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-700 text-white transition-colors hover:bg-blue-800 disabled:opacity-50"
            >
              <Send aria-hidden="true" className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={recording ? stopRecording : startRecording}
              disabled={sending || isSessionCompleted}
              aria-label={recording ? "Stop recording" : "Start recording"}
              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg disabled:opacity-50 ${recording ? "bg-red-600 text-white hover:bg-red-700" : "border border-slate-300 bg-white text-slate-600 hover:bg-slate-50"}`}
            >
              {recording ? <Square aria-hidden="true" className="h-4 w-4" /> : <Mic aria-hidden="true" className="h-5 w-5" />}
            </button>
          )}
        </div>
      </footer>

      {feedbackOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 bg-opacity-50 p-4">
          <div className="w-full max-w-md rounded-xl border border-slate-200 border-t-4 border-t-blue-700 bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-xl font-bold text-slate-900">Give Feedback</h2>
            <div className="mb-3 flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setFeedbackRating(star)}
                  aria-label={`${star} star${star === 1 ? '' : 's'}`}
                  className={`rounded p-1 transition-colors ${feedbackRating >= star ? "text-amber-500" : "text-slate-300 hover:text-amber-400"}`}
                >
                  <Star aria-hidden="true" className="h-7 w-7 fill-current" />
                </button>
              ))}
            </div>
            <textarea
              className="mb-3 w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
              rows="3"
              placeholder="Optional comment"
              value={feedbackComment}
              onChange={(event) => setFeedbackComment(event.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setFeedbackOpen(false)}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={handleFeedbackSubmit}
                className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {isBeingAsked && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 bg-opacity-50 p-4">
          <div className="w-full max-w-md rounded-xl border border-slate-200 border-t-4 border-t-blue-700 bg-white p-6 text-slate-800 shadow-xl">
            <h2 className="mb-4 text-xl font-bold text-slate-900">Confirm End Session</h2>
            <p className="mb-4">
              {otherUser?.name || "The other user"} wants to end this session. Do you agree?
            </p>
            <p className="mb-4 text-sm">
              If you agree, the session will end, and you will both be awarded 25 coins.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCancelEnd}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                disabled={isEnding}
              >
                No, Continue
              </button>
              <button
                onClick={handleConfirmEnd}
                className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-50"
                disabled={isEnding}
              >
                {isEnding ? "Ending..." : "Yes, End Session"}
              </button>
            </div>
          </div>
        </div>
      )}

      {isWaitingForOther && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 bg-opacity-50 p-4">
          <div className="w-full max-w-md rounded-xl border border-slate-200 border-t-4 border-t-blue-700 bg-white p-6 text-slate-800 shadow-xl">
            <h2 className="mb-4 text-xl font-bold text-slate-900">Request Sent</h2>
            <p className="mb-4">Waiting for {otherUser?.name || "the other user"} to confirm...</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCancelEnd}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cancel Request
              </button>
            </div>
          </div>
        </div>
      )}

      {preview.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 bg-opacity-60 p-4">
          <div className="w-full max-w-3xl rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
            <button
              onClick={() => setPreview({ open: false, type: "", url: "" })}
              aria-label="Close preview"
              className="mb-3 ml-auto inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
            {preview.type === "image" && (
              <img src={preview.url} alt="preview" className="mx-auto max-h-96 max-w-full object-contain" />
            )}
            {preview.type === "pdf" && (
              <iframe src={preview.url} className="h-96 w-full rounded-lg border border-slate-200" title="preview-pdf" />
            )}
            {preview.type === "audio" && <audio controls src={preview.url} className="w-full" />}
            {preview.type === "file" && <p className="break-all text-sm text-slate-700">{preview.url}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
