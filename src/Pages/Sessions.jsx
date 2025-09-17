import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
// Import the new real-time listener
import { onAcceptedSwapsSnapshot } from '../services/profileService';
import { useNavigate } from 'react-router-dom';

export default function Sessions() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  // This useEffect hook now uses the real-time listener
  useEffect(() => {
    if (!currentUser) {
      setLoading(false);
      return; // Exit if there is no user
    }
    setLoading(true);
    // Set up the real-time listener for accepted swaps
    const unsubscribe = onAcceptedSwapsSnapshot(currentUser.uid, (newSessions) => {
      setSessions(newSessions);
      setLoading(false);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [currentUser]); // The effect re-runs if the user logs in or out

  const formatDate = (firebaseTimestamp) => {
    if (!firebaseTimestamp?.toDate) return '';
    return firebaseTimestamp.toDate().toLocaleDateString();
  };

  if (loading) return <div className="text-center py-10">Loading sessions...</div>;
  if (!currentUser) return <div className="text-center py-10">Please log in to view your sessions.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Your Confirmed Sessions</h1>
      <div className="space-y-4">
        {sessions.length > 0 ? (
          sessions.map(session => {
            const otherPartyName = session.otherParty?.name || 'an unknown user';
            return (
              <div key={session.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg dark:text-white">{session.skillTitle}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Swap confirmed with <span className="font-semibold">{otherPartyName}</span>.
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <p className="text-xs text-gray-400 dark:text-gray-500">{formatDate(session.createdAt)}</p>
                  <button
                    onClick={() => navigate(`/chat/${session.id}`)}
                    className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200"
                  >
                    Go to Chat
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 py-10">You have no confirmed sessions yet.</p>
        )}
      </div>
    </div>
  );
}