import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { sendMessage, onMessagesSnapshot, uploadFile, uploadAudio } from '../services/sessionService.js';

export default function ChatPage({ sessionId, otherUser }) {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Listen for messages in real-time
  useEffect(() => {
    if (!sessionId) return;
    const unsubscribe = onMessagesSnapshot(sessionId, setMessages);
    return () => unsubscribe();
  }, [sessionId]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Send text message
  const handleSend = async () => {
    if (!input.trim()) return;
    setSending(true);
    await sendMessage(sessionId, currentUser.uid, input.trim(), 'text');
    setInput('');
    setSending(false);
  };

  // Upload file or image
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSending(true);
    const url = await uploadFile(file, sessionId);
    await sendMessage(sessionId, currentUser.uid, url, 'file');
    setSending(false);
    e.target.value = null;
  };

  // Start recording audio
  const startRecording = async () => {
    if (!navigator.mediaDevices) return alert('Media devices not supported');
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    recordedChunksRef.current = [];

    mediaRecorderRef.current.ondataavailable = e => {
      if (e.data.size > 0) recordedChunksRef.current.push(e.data);
    };

    mediaRecorderRef.current.onstop = async () => {
      const blob = new Blob(recordedChunksRef.current, { type: 'audio/webm' });
      const url = await uploadAudio(blob, sessionId);
      await sendMessage(sessionId, currentUser.uid, url, 'audio');
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto border rounded-lg shadow-md">
      <div className="bg-indigo-600 text-white p-4 font-semibold">{otherUser?.name || 'Chat'}</div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.senderId === currentUser.uid ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-2 rounded-lg max-w-xs ${msg.senderId === currentUser.uid ? 'bg-indigo-100' : 'bg-gray-200'}`}>
              {msg.type === 'text' && <span>{msg.content}</span>}
              {msg.type === 'file' && (
                <a href={msg.content} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  Download File
                </a>
              )}
              {msg.type === 'audio' && (
                <audio controls src={msg.content}></audio>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      <div className="flex items-center p-4 border-t gap-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileUpload} />
        <button onClick={() => fileInputRef.current.click()} className="px-3 py-2 bg-gray-300 rounded-lg">
          📎
        </button>
        <button
          onClick={recording ? stopRecording : startRecording}
          className={`px-3 py-2 rounded-lg ${recording ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
        >
          {recording ? 'Stop' : '🎤'}
        </button>
        <button
          onClick={handleSend}
          disabled={sending}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:bg-gray-400"
        >
          Send
        </button>
      </div>
    </div>
  );
}
