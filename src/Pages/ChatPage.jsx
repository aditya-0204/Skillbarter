import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { sendMessage, onMessagesSnapshot } from '../services/sessionService.js';
import { uploadFile, uploadAudio } from '../services/supabaseService.js';

// --- Helper component for SVG Icons ---
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d={path} />
  </svg>
);

const PaperClipIcon = () => <Icon path="M18.375 2.25c-2.438 0-4.438 1.964-4.438 4.375v9.75c0 1.243.984 2.25 2.188 2.25s2.188-1.007 2.188-2.25V8.25c0-.582-.46-1.031-1.031-1.031S16.25 7.668 16.25 8.25v8.25c0 2.06-1.655 3.75-3.688 3.75s-3.688-1.69-3.688-3.75V6.625c0-2.84 2.3-5.125 5.125-5.125s5.125 2.285 5.125 5.125v9.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75V6.625c0-2.02-1.63-3.625-3.625-3.625S10 4.605 10 6.625v9.75c0 2.877 2.34 5.25 5.25 5.25s5.25-2.373 5.25-5.25V6.625C20.5 4.08 18.582 2.25 16.125 2.25h-2.25z" />;
const MicrophoneIcon = () => <Icon path="M12 18.75a6 6 0 006-6v-1.5a6 6 0 00-12 0v1.5a6 6 0 006 6zM12 2.25a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 004.5 0V4.5A2.25 2.25 0 0012 2.25z" />;
const PaperAirplaneIcon = () => <Icon path="M6.428 3.428a.75.75 0 00-.165 1.08l2.914 4.37-5.25 1.179a.75.75 0 00-.31 1.341l10.5 4.667a.75.75 0 00.932-.932L9.818 4.547a.75.75 0 00-1.341-.31L4.109 9.49l-4.37-2.914a.75.75 0 00-1.08.165z" />;
const StopIcon = () => <Icon path="M5.25 5.25A2.25 2.25 0 003 7.5v9A2.25 2.25 0 005.25 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0014.25 5.25h-9z" />;

// --- Helper to format timestamp ---
const formatTime = (timestamp) => {
  if (!timestamp || !timestamp.toDate) return '';
  return timestamp.toDate().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};


export default function ChatPage({ session }) {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [recording, setRecording] = useState(false);

  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const sessionId = session?.id;
  const otherUser = session?.otherParty;

  // Listen for new messages in real-time
  useEffect(() => {
    if (!sessionId) return;
    const unsubscribe = onMessagesSnapshot(sessionId, setMessages);
    return () => unsubscribe();
  }, [sessionId]);

  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || sending) return;
    setSending(true);
    setError('');
    try {
      await sendMessage(sessionId, currentUser.uid, input.trim(), 'text');
      setInput('');
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Message failed to send. Check permissions.");
    } finally {
      setSending(false);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || sending) return;
    setSending(true);
    setError('');
    try {
      // Get the token from the logged-in Firebase user
      const firebaseToken = await currentUser.getIdToken();
      // Pass the token to the Supabase upload function
      const url = await uploadFile(file, sessionId, firebaseToken);
      
      if (url) {
        await sendMessage(sessionId, currentUser.uid, url, 'file');
      } else {
        throw new Error("File upload returned no URL.");
      }
    } catch (err) {
      console.error("Error uploading file:", err);
      setError("File upload failed.");
    } finally {
      setSending(false);
      e.target.value = null;
    }
  };
  
  const startRecording = async () => {
    if (!navigator.mediaDevices) {
        setError("Audio recording is not supported on this browser.");
        return;
    }
    setRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    recordedChunksRef.current = [];
    mediaRecorderRef.current.ondataavailable = e => {
      if (e.data.size > 0) recordedChunksRef.current.push(e.data);
    };
    mediaRecorderRef.current.onstop = async () => {
        setSending(true);
        setError('');
        try {
            const blob = new Blob(recordedChunksRef.current, { type: 'audio/webm' });
            // Get the token from the logged-in Firebase user
            const firebaseToken = await currentUser.getIdToken();
            // Pass the token to the Supabase upload function
            const url = await uploadAudio(blob, sessionId, firebaseToken);

            if (url) {
                await sendMessage(sessionId, currentUser.uid, url, 'audio');
            } else {
                throw new Error("Audio upload returned no URL.");
            }
        } catch(err) {
            console.error("Error uploading audio:", err);
            setError("Audio upload failed.");
        } finally {
            setSending(false);
        }
    };
    mediaRecorderRef.current.start();
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };
  
  return (
    <>
      <style>{`
        .chat-bg {
          background-color: #0d1117;
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231f2937' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
      <div className="flex flex-col h-screen bg-slate-800 text-white font-sans">
        {/* Chat Header */}
        <header className="flex items-center p-3 border-b border-slate-700 bg-slate-700 shadow-md z-10">
          <img src={`https://placehold.co/40x40/7e22ce/ffffff?text=${otherUser?.name?.[0]?.toUpperCase() || '?'}`} alt="avatar" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <h2 className="text-lg font-bold">{otherUser?.name || 'Chat'}</h2>
            <p className="text-xs text-green-400">Online</p>
          </div>
        </header>

        {/* Messages Area */}
        <main className="flex-1 overflow-y-auto p-4 chat-bg">
          <div className="flex flex-col space-y-2">
            {messages.map(msg => (
              <div key={msg.id} className={`flex items-end max-w-lg ${msg.senderId === currentUser.uid ? 'self-end' : 'self-start'}`}>
                <div className={`px-3 py-2 rounded-xl ${msg.senderId === currentUser.uid ? 'bg-purple-700 rounded-br-none' : 'bg-slate-600 rounded-bl-none'}`}>
                  {msg.type === 'text' && <p className="text-sm">{msg.content}</p>}
                  {msg.type === 'file' && (
                    <a href={msg.content} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-cyan-300 underline">
                      <PaperClipIcon /> <span>{msg.content.split('%2F').pop().split('?')[0].substring(14)}</span>
                    </a>

                  )}
                  {msg.type === 'audio' && <audio controls src={msg.content} className="max-w-xs h-10"></audio>}
                  <p className="text-xs text-slate-300 text-right mt-1">{formatTime(msg.createdAt)}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </main>
        
        {/* Error Display */}
        {error && <div className="p-2 text-center text-sm bg-red-800 text-red-200">{error}</div>}

        {/* Input Area */}
        <footer className="p-3 bg-slate-700 border-t border-slate-600">
          <div className="flex items-center gap-2">
            <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileUpload} disabled={sending} />
            <button onClick={() => fileInputRef.current.click()} disabled={sending} className="p-2 rounded-full text-slate-300 hover:bg-slate-600 transition-colors">
              <PaperClipIcon />
            </button>
            <textarea
              rows="1"
              className="flex-1 p-2 bg-slate-800 rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }}}
            />
            {input.trim() ? (
              <button onClick={handleSend} disabled={sending} className="p-2 rounded-full text-slate-300 bg-purple-700 hover:bg-purple-600 transition-colors">
                <PaperAirplaneIcon />
              </button>
            ) : (
               <button onClick={recording ? stopRecording : startRecording} disabled={sending} className={`p-2 rounded-full text-white transition-colors ${recording ? 'bg-red-600' : 'bg-purple-700'}`}>
                {recording ? <StopIcon /> : <MicrophoneIcon />}
              </button>
            )}
          </div>
        </footer>
      </div>
    </>
  );
}