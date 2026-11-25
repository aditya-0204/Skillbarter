import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { onSwapRequestsSnapshot } from '../services/profileService.js';
import { useCoins } from '../store/coinStore.jsx'; 

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [requestCount, setRequestCount] = useState(0);
  const { coins, loading } = useCoins();

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
    `inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-150 ${
      isActive
        ? 'bg-blue-50 text-blue-800'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`;
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-16 flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3">
          <NavLink to="/" className="shrink-0 text-2xl font-bold tracking-tight text-blue-900">SkillSwap</NavLink>

          <div className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-1 sm:gap-2">
            {currentUser && !isAuthPage && <NavLink to="/browse" className={linkClass}>Browse</NavLink>}
            {currentUser ? (
              <>
                <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
                <NavLink to="/requests" className={({isActive}) => `${linkClass({isActive})} relative`}>
                  Requests
                  {requestCount > 0 && (
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-xs font-bold text-white">
                      {requestCount}
                    </span>
                  )}
                </NavLink>
                <NavLink to="/profile" className={linkClass}>Skillset</NavLink>
                <NavLink to="/shop" className={linkClass}>Shop</NavLink>
              </>
            ) : null}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {currentUser ? (
              <>
                <div className="flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-900">
                  {loading ? (
                    '...'
                  ) : (
                    <>
                      {coins} 🪙
                    </>
                  )}
                </div>

                <button onClick={handleLogout} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900">
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
