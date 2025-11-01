import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import {
  onSwapRequestsSnapshot,
  updateSwapRequestStatus,
  onAcceptedSwapsSnapshot,
  acceptSwapRequest,
  onCompletedSwapsSnapshot // <-- 1. IMPORT NEW FUNCTION
} from '../services/profileService.js';
import SelectSkillModal from '../components/SelectSkillModal.jsx';
import { useNavigate } from 'react-router-dom';
// We are removing addCoinsToUser, as the chat page handles it.

export default function MySwaps() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('requests');
  const [requests, setRequests] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [completed, setCompleted] = useState([]); // <-- 2. ADD NEW STATE

  const [requestsLoading, setRequestsLoading] = useState(true);
  const [sessionsLoading, setSessionsLoading] = useState(true);
  const [completedLoading, setCompletedLoading] = useState(true); // <-- 3. ADD NEW LOADING STATE

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRequest, setCurrentRequest] = useState(null);
  const [requesterProfile, setRequesterProfile] = useState(null);

  // Fetch pending swap requests (Unchanged)
  useEffect(() => {
    if (!currentUser) {
      setRequestsLoading(false);
      return;
    }
    setRequestsLoading(true);
    const unsubscribe = onSwapRequestsSnapshot(currentUser.uid, (newRequests) => {
      setRequests(newRequests);
      setRequestsLoading(false);
    });
    return () => unsubscribe();
  }, [currentUser]);

  // Fetch confirmed sessions (Unchanged)
  useEffect(() => {
    if (!currentUser) {
      setSessionsLoading(false);
      return;
    }
    setSessionsLoading(true);
    const unsubscribe = onAcceptedSwapsSnapshot(currentUser.uid, (newSessions) => {
      setSessions(newSessions);
      setSessionsLoading(false);
    });
    return () => unsubscribe();
  }, [currentUser]);

  // --- 4. ADD NEW USEEFFECT FOR COMPLETED SWAPS ---
  useEffect(() => {
    if (!currentUser) {
      setCompletedLoading(false);
      return;
    }
    setCompletedLoading(true);
    const unsubscribe = onCompletedSwapsSnapshot(currentUser.uid, (newCompleted) => {
      setCompleted(newCompleted);
      setCompletedLoading(false);
    });
    return () => unsubscribe();
  }, [currentUser]);

  // Reject a swap request (Unchanged)
  const handleReject = async (swapId) => {
    if (!currentUser) return;
    await updateSwapRequestStatus(swapId, 'rejected');
  };

  // Open modal to accept swap (Unchanged)
  const handleAcceptClick = (request) => {
    setCurrentRequest(request);
    setRequesterProfile({ name: request.requesterName, skills: request.requesterSkills || [] });
    setIsModalOpen(true);
  };

  // Confirm swap and create session (Unchanged)
  const handleConfirmSwap = async (selectedSkillFromRequester) => {
    if (!currentUser || !currentRequest) return;
    const skillToOffer = { title: "My Skill", description: "Your offered skill" };
    try {
      await acceptSwapRequest(currentRequest.id, skillToOffer);
    } catch (err) {
      console.error('Error confirming swap:', err);
    }
    setIsModalOpen(false);
    setCurrentRequest(null);
    setRequesterProfile(null);
    setActiveTab('sessions');
  };

  // --- WE HAVE REMOVED handleSwapComplete ---

  // Format date helper (Unchanged)
  const formatDate = (firebaseTimestamp) => {
    if (!firebaseTimestamp?.toDate) return '';
    return firebaseTimestamp.toDate().toLocaleDateString();
  };

  if (!currentUser) {
    return <div className="text-center py-10">Please log in to manage your swaps.</div>;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">My Swaps</h1>

        {/* --- 5. MODIFY TABS --- */}
        <div className="flex border-b border-gray-200 dark:border-slate-700 mb-6">
          <button
            onClick={() => setActiveTab('requests')}
            className={`py-2 px-4 transition-colors duration-200 ${activeTab === 'requests' ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Pending Requests ({requests.length})
          </button>
          <button
            onClick={() => setActiveTab('sessions')}
            className={`py-2 px-4 transition-colors duration-200 ${activeTab === 'sessions' ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Confirmed Sessions ({sessions.length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`py-2 px-4 transition-colors duration-200 ${activeTab === 'completed' ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Swap History ({completed.length})
          </button>
        </div>

        {/* Pending Requests (Unchanged) */}
        {activeTab === 'requests' && (
          <div className="space-y-4">
            {requestsLoading ? (
              <p className="text-center py-10">Loading requests...</p>
            ) : requests.length > 0 ? (
              requests.map(req => (
                <div key={req.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <p className="text-sm dark:text-gray-300">
                      <span className="font-semibold dark:text-white">{req.requesterName}</span> wants to swap for: <span className="font-semibold dark:text-white">{req.skillTitle}</span>
                    </p>
                    <div className="flex gap-2 flex-shrink-0">
                      <button onClick={() => handleReject(req.id)} className="text-xs px-3 py-1 bg-red-100 text-red-700 rounded-full hover:bg-red-200">Reject</button>
                      <button onClick={() => handleAcceptClick(req)} className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200">Accept</button>
                    </div>
                  </div>
                  {Array.isArray(req.requesterSkills) && req.requesterSkills.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-slate-700">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">In return, they are offering skills like:</p>
                      <div className="flex flex-wrap gap-2">
                        {req.requesterSkills.map(skill => (
                          <span key={skill.title} className="text-xs bg-gray-200 dark:bg-slate-600 px-2 py-1 rounded">
                            {skill.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-10">You have no pending requests.</p>
            )}
          </div>
        )}

        {/* Confirmed Sessions (We REMOVED the "Mark as Complete" button) */}
        {activeTab === 'sessions' && (
          <div className="space-y-4">
            {sessionsLoading ? (
              <p className="text-center py-10">Loading sessions...</p>
            ) : sessions.length > 0 ? (
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
                      {/* --- "Mark as Complete" button is GONE --- */}
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500 py-10">You have no confirmed sessions yet.</p>
            )}
          </div>
        )}

       {/* --- 6. ADD NEW SECTION FOR COMPLETED SWAPS --- */}
{activeTab === 'completed' && (
  <div className="space-y-4">
    {completedLoading ? (
      <p className="text-center py-10">Loading swap history...</p>
    ) : completed.length > 0 ? (
      completed.map(session => {
        const otherPartyName = session.otherParty?.name || 'an unknown user';

        // ✅ Safely pick a timestamp (prefer updatedAt, else completedAt, else createdAt)
        const completedTimestamp =
          session.updatedAt || session.completedAt || session.createdAt;

        return (
          <div
            key={session.id}
            className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md flex justify-between items-start opacity-70"
          >
            <div>
              <h3 className="font-bold text-lg dark:text-white">{session.skillTitle}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Swap completed with <span className="font-semibold">{otherPartyName}</span>.
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              {/* ✅ Safely show formatted date if available */}
              {completedTimestamp ? (
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Completed on: {formatDate(completedTimestamp)}
                </p>
              ) : (
                <p className="text-xs text-gray-400 dark:text-gray-500">Date not available</p>
              )}
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
      <p className="text-center text-gray-500 py-10">You have no completed swaps.</p>
    )}
  </div>
)}


      </div>
      <SelectSkillModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirmSwap={handleConfirmSwap}
        requesterProfile={requesterProfile}
      />
    </>
  );
}