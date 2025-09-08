import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import ChatPage from './ChatPage.jsx';
import { getAcceptedSwaps } from '../services/profileService.js';

export default function ChatPageWrapper() {
  const { sessionId } = useParams();
  const { currentUser } = useAuth();
  const [session, setSession] = useState(null);

  useEffect(() => {
    if (!currentUser) return;
    const fetchSession = async () => {
      const allSwaps = await getAcceptedSwaps(currentUser.uid);
      const found = allSwaps.find(s => s.id === sessionId);
      setSession(found);
    };
    fetchSession();
  }, [sessionId, currentUser]);

  if (!session) return <p className="text-center py-10">Loading chat...</p>;

  return <ChatPage sessionId={sessionId} otherUser={session.otherParty} />;
}
