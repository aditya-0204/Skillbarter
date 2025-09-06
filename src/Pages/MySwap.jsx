import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { onSwapRequestsSnapshot, updateSwapRequestStatus, getAcceptedSwaps } from '../services/profileService';

export default function MySwaps() {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('requests');
  
  const [requests, setRequests] = useState([]);
  const [sessions, setSessions] = useState([]);
  
  const [requestsLoading, setRequestsLoading] = useState(true);
  const [sessionsLoading, setSessionsLoading] = useState(true);

  // Listener for pending requests
  useEffect(() => {
    if (currentUser) {
      setRequestsLoading(true);
      const unsubscribe = onSwapRequestsSnapshot(currentUser.uid, (newRequests) => {
        setRequests(newRequests);
        setRequestsLoading(false);
      });
      return () => unsubscribe();
    } else {
      setRequestsLoading(false);
    }
  }, [currentUser]);

  // Fetcher for confirmed sessions
  useEffect(() => {
    const fetchSessions = async () => {
      if (currentUser) {
        setSessionsLoading(true);
        const acceptedSwaps = await getAcceptedSwaps(currentUser.uid);
        setSessions(acceptedSwaps);
        setSessionsLoading(false);
      } else {
        setSessionsLoading(false);
      }
    };
    if (activeTab === 'sessions') {
      fetchSessions();
    }
  }, [currentUser, activeTab]);

  const handleResponse = async (swapId, status) => {
    await updateSwapRequestStatus(swapId, status);
  };
  
  const formatDate = (firebaseTimestamp) => {
    if (!firebaseTimestamp?.toDate) return '';
    return firebaseTimestamp.toDate().toLocaleDateString();
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">My Swaps</h1>
      
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 dark:border-slate-700 mb-6">
        <button onClick={() => setActiveTab('requests')} className={`py-2 px-4 transition-colors duration-200 ${activeTab === 'requests' ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'text-gray-500 hover:text-gray-700'}`}>
          Pending Requests ({requests.length})
        </button>
        <button onClick={() => setActiveTab('sessions')} className={`py-2 px-4 transition-colors duration-200 ${activeTab === 'sessions' ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'text-gray-500 hover:text-gray-700'}`}>
          Confirmed Sessions
        </button>
      </div>

      {/* Requests Tab Content */}
      {activeTab === 'requests' && (
        <div className="space-y-4">
          {requestsLoading ? <p className="text-center py-10">Loading requests...</p> : requests.length > 0 ? requests.map(req => (
            // ... (Request item JSX remains the same)
             <div key={req.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md flex justify-between items-center">
              <p className="text-sm dark:text-gray-300">
                <span className="font-semibold dark:text-white">{req.requesterName}</span> wants to swap for: <span className="font-semibold dark:text-white">{req.skillTitle}</span>
              </p>
              <div className="flex gap-2 flex-shrink-0">
                <button onClick={() => handleResponse(req.id, 'rejected')} className="text-xs px-3 py-1 bg-red-100 text-red-700 rounded-full hover:bg-red-200">Reject</button>
                <button onClick={() => handleResponse(req.id, 'accepted')} className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200">Accept</button>
              </div>
            </div>
          )) : <p className="text-center text-gray-500 py-10">You have no pending requests.</p>}
        </div>
      )}

      {/* Sessions Tab Content (UPDATED) */}
      {activeTab === 'sessions' && (
         <div className="space-y-4">
          {sessionsLoading ? <p className="text-center py-10">Loading sessions...</p> : sessions.length > 0 ? sessions.map(session => (
            <div key={session.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg dark:text-white">{session.skillTitle}</h3>
                    {/* This now displays the other user's name */}
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Swap confirmed with <span className="font-semibold">{session.otherParty.name}</span>.
                    </p>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500">{formatDate(session.createdAt)}</p>
              </div>
            </div>
          )) : <p className="text-center text-gray-500 py-10">You have no confirmed sessions yet.</p>}
        </div>
      )}
    </div>
  );
}