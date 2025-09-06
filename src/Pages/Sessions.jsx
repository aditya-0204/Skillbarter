import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getAcceptedSwaps } from '../services/profileService';

export default function Sessions() {
  const { currentUser } = useAuth();
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSessions = async () => {
      if (currentUser) {
        setLoading(true);
        const acceptedSwaps = await getAcceptedSwaps(currentUser.uid);
        setSessions(acceptedSwaps);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    fetchSessions();
  }, [currentUser]);

  if (loading) return <div className="text-center py-10">Loading sessions...</div>;
  if (!currentUser) return <div className="text-center py-10">Please log in to view your sessions.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Your Confirmed Sessions</h1>
      <div className="space-y-4">
        {sessions.length > 0 ? (
          sessions.map(session => (
            <div key={session.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg dark:text-white">{session.skillTitle}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Swap between {session.requesterName} and you.
              </p>
              {/* You can add more details here, like dates or a chat link */}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-10">You have no confirmed sessions yet.</p>
        )}
      </div>
    </div>
  );
}