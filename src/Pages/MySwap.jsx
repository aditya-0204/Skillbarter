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
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CalendarDays, Check, CheckCircle, History, Inbox, MessageCircle, X } from 'lucide-react';
// We are removing addCoinsToUser, as the chat page handles it.

function SwapEmptyState({ icon: Icon, title, description }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
      <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">{description}</p>
      <Link to="/browse" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800">
        Browse Skills
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </div>
  );
}

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
    return <div className="mx-auto max-w-6xl px-4 py-16 text-center text-slate-600 sm:px-6 lg:px-8">Please log in to manage your swaps.</div>;
  }

  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">Learning together</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">My Swaps</h1>
          <p className="mt-2 text-base leading-6 text-slate-600">Manage requests, keep up with sessions, and revisit completed swaps.</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6 flex overflow-x-auto border-b border-slate-200">
          <button
            onClick={() => setActiveTab('requests')}
            className={`-mb-px inline-flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${activeTab === 'requests' ? 'border-blue-700 text-blue-800' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
          >
            <Inbox aria-hidden="true" className="h-4 w-4" />
            Pending Requests
            <span className={`rounded-full px-2 py-0.5 text-xs ${activeTab === 'requests' ? 'bg-blue-50 text-blue-800' : 'bg-slate-100 text-slate-600'}`}>{requests.length}</span>
          </button>
          <button
            onClick={() => setActiveTab('sessions')}
            className={`-mb-px inline-flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${activeTab === 'sessions' ? 'border-blue-700 text-blue-800' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
          >
            <CalendarDays aria-hidden="true" className="h-4 w-4" />
            Confirmed Sessions
            <span className={`rounded-full px-2 py-0.5 text-xs ${activeTab === 'sessions' ? 'bg-blue-50 text-blue-800' : 'bg-slate-100 text-slate-600'}`}>{sessions.length}</span>
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`-mb-px inline-flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${activeTab === 'completed' ? 'border-blue-700 text-blue-800' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
          >
            <History aria-hidden="true" className="h-4 w-4" />
            Swap History
            <span className={`rounded-full px-2 py-0.5 text-xs ${activeTab === 'completed' ? 'bg-blue-50 text-blue-800' : 'bg-slate-100 text-slate-600'}`}>{completed.length}</span>
          </button>
        </div>

        {/* Pending Requests (Unchanged) */}
        {activeTab === 'requests' && (
          <div className="space-y-4">
            {requestsLoading ? (
              <p className="rounded-xl border border-slate-200 bg-white py-10 text-center text-slate-500">Loading requests...</p>
            ) : requests.length > 0 ? (
              requests.map(req => (
                <article key={req.id} className="rounded-xl border border-slate-200 border-l-4 border-l-amber-500 bg-white p-5 shadow-sm">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Pending request
                      </span>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        <span className="font-semibold text-slate-900">{req.requesterName}</span> wants to swap for <span className="font-semibold text-slate-900">{req.skillTitle}</span>
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-2">
                      <button onClick={() => handleReject(req.id)} className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-white px-3 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50">
                        <X aria-hidden="true" className="h-4 w-4" /> Reject
                      </button>
                      <button onClick={() => handleAcceptClick(req)} className="inline-flex items-center gap-1.5 rounded-lg bg-blue-700 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800">
                        <Check aria-hidden="true" className="h-4 w-4" /> Accept
                      </button>
                    </div>
                  </div>
                  {Array.isArray(req.requesterSkills) && req.requesterSkills.length > 0 && (
                    <div className="mt-4 border-t border-slate-100 pt-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">In return, they are offering skills like:</p>
                      <div className="flex flex-wrap gap-2">
                        {req.requesterSkills.map(skill => (
                          <span key={skill.title} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                            {skill.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))
            ) : (
              <SwapEmptyState icon={Inbox} title="You have no pending requests" description="When someone requests a skill swap, you’ll find the details and response options here." />
            )}
          </div>
        )}

        {/* Confirmed Sessions (We REMOVED the "Mark as Complete" button) */}
        {activeTab === 'sessions' && (
          <div className="space-y-4">
            {sessionsLoading ? (
              <p className="rounded-xl border border-slate-200 bg-white py-10 text-center text-slate-500">Loading sessions...</p>
            ) : sessions.length > 0 ? (
              sessions.map(session => {
                const otherPartyName = session.otherParty?.name || 'an unknown user';
                return (
                  <article key={session.id} className="flex flex-col gap-4 rounded-xl border border-slate-200 border-l-4 border-l-green-600 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-800">
                        <CheckCircle aria-hidden="true" className="h-3.5 w-3.5" /> Confirmed session
                      </span>
                      <h3 className="mt-3 text-lg font-bold text-slate-900">{session.skillTitle}</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        Swap confirmed with <span className="font-semibold text-slate-800">{otherPartyName}</span>.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 sm:justify-end">
                      <p className="text-sm text-slate-500">{formatDate(session.createdAt)}</p>
                      <button
                        onClick={() => navigate(`/chat/${session.id}`)}
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                      >
                        <MessageCircle aria-hidden="true" className="h-4 w-4" />
                        Go to Chat
                      </button>
                      {/* --- "Mark as Complete" button is GONE --- */}
                    </div>
                  </article>
                );
              })
            ) : (
              <SwapEmptyState icon={CalendarDays} title="No confirmed sessions yet" description="Accepted swaps and their chat links will appear here when you start learning together." />
            )}
          </div>
        )}

       {/* --- 6. ADD NEW SECTION FOR COMPLETED SWAPS --- */}
{activeTab === 'completed' && (
  <div className="space-y-4">
    {completedLoading ? (
      <p className="rounded-xl border border-slate-200 bg-white py-10 text-center text-slate-500">Loading swap history...</p>
    ) : completed.length > 0 ? (
      completed.map(session => {
        const otherPartyName = session.otherParty?.name || 'an unknown user';

        // ✅ Safely pick a timestamp (prefer updatedAt, else completedAt, else createdAt)
        const completedTimestamp =
          session.updatedAt || session.completedAt || session.createdAt;

        return (
          <div
            key={session.id}
            className="flex flex-col gap-4 rounded-xl border border-slate-200 border-l-4 border-l-slate-400 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                <CheckCircle aria-hidden="true" className="h-3.5 w-3.5" /> Completed
              </span>
              <h3 className="mt-3 text-lg font-bold text-slate-900">{session.skillTitle}</h3>
              <p className="mt-1 text-sm text-slate-600">
                Swap completed with <span className="font-semibold text-slate-800">{otherPartyName}</span>.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 sm:justify-end">
              {/* ✅ Safely show formatted date if available */}
              {completedTimestamp ? (
                <p className="text-sm text-slate-500">
                  Completed on: {formatDate(completedTimestamp)}
                </p>
              ) : (
                <p className="text-sm text-slate-500">Date not available</p>
              )}
              <button
                onClick={() => navigate(`/chat/${session.id}`)}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                Go to Chat
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <SwapEmptyState icon={History} title="No completed swaps yet" description="Your finished skill exchanges will be collected here so you can look back on your progress." />
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
