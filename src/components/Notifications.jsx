import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { onSwapRequestsSnapshot, updateSwapRequestStatus } from '../services/profileService';

export default function Notifications() {
  const { currentUser } = useAuth();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (currentUser) {
      // Set up the real-time listener when the component mounts
      const unsubscribe = onSwapRequestsSnapshot(currentUser.uid, (newRequests) => {
        setRequests(newRequests);
      });

      // Clean up the listener when the component unmounts
      return () => unsubscribe();
    }
  }, [currentUser]);

  const handleResponse = async (swapId, status) => {
    await updateSwapRequestStatus(swapId, status);
  };

  if (requests.length === 0) {
    return null; // Don't show anything if there are no pending requests
  }

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-sm z-50">
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-2xl border dark:border-slate-700">
        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Incoming Swap Requests</h3>
        <div className="space-y-3 max-h-60 overflow-y-auto">
          {requests.map(req => (
            <div key={req.id} className="p-3 bg-gray-50 dark:bg-slate-700 rounded-md">
              <p className="text-sm dark:text-gray-300">
                <span className="font-semibold dark:text-white">{req.requesterName}</span> wants to swap for your skill: <span className="font-semibold dark:text-white">{req.skillTitle}</span>
              </p>
              <div className="flex justify-end gap-2 mt-2">
                <button onClick={() => handleResponse(req.id, 'rejected')} className="text-xs px-3 py-1 bg-red-100 text-red-700 rounded-full hover:bg-red-200">Reject</button>
                <button onClick={() => handleResponse(req.id, 'accepted')} className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200">Accept</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}