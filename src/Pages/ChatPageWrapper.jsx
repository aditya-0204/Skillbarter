import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Patched paths to be more robust. Assumes a standard Vite setup where '@' points to the 'src' directory.
import ChatPage from './ChatPage.jsx';
import { onSessionSnapshot } from '../services/profileService.js';

export default function ChatPageWrapper() {
  const { sessionId } = useParams();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!sessionId) {
      setError('No session ID provided in the URL.');
      setLoading(false);
      return;
    }
    
    setLoading(true);
    // This listener gets the session details (like the other user's name) in real-time.
    const unsubscribe = onSessionSnapshot(sessionId, (sessionData) => {
      if (sessionData) {
        setSession(sessionData);
      } else {
        setError('Session not found. It may have been deleted.');
      }
      setLoading(false);
    });

    // Clean up the listener when the component is no longer on screen.
    return () => unsubscribe();
  }, [sessionId]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen bg-slate-900 text-white"><p>Loading Chat...</p></div>;
  }
  
  if (error) {
    return <div className="flex items-center justify-center h-screen bg-slate-900 text-red-400"><p>{error}</p></div>;
  }

  // Once data is loaded, render the actual chat page and pass the details down as props.
  return <ChatPage session={session} />;
}

