import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { onSwapRequestsSnapshot } from '../services/profileService.js';

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    if (currentUser) {
      const unsubscribe = onSwapRequestsSnapshot(currentUser.uid, (requests) => {
        setRequestCount(requests.length);
      });
      return () => unsubscribe();
    }
  }, [currentUser]);


  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };
  
  const linkClass = ({ isActive }) => 
    isActive 
      ? 'bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium' 
      : 'text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';

  return (
    <nav className="bg-slate-800 dark:bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* CORRECTED: Added the missing to="/" prop to this NavLink */}
          <NavLink to="/" className="font-bold text-2xl text-white">SkillSwap</NavLink>
          
          <div className="flex items-center space-x-4">
            <NavLink to="/browse" className={linkClass}>Browse</NavLink>
            {currentUser ? (
              <>
                <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
                <NavLink to="/requests" className={({isActive}) => `${linkClass({isActive})} relative`}>
                  Requests
                  {requestCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                      {requestCount}
                    </span>
                  )}
                </NavLink>
                <NavLink to="/profile" className={linkClass}>Skillset</NavLink>
                <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={linkClass}>Login</NavLink>
                <NavLink to="/signup" className={linkClass}>Sign Up</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}