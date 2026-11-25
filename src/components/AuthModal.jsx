import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function AuthModal({ isOpen, onClose }) {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { currentUser, login, signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && currentUser) {
      onClose();
      navigate('/browse');
    }
  }, [currentUser, isOpen, navigate, onClose]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError('');
      if (mode === 'signup') {
        await signup(email, password);
      } else {
        await login(email, password);
      }
    } catch (authError) {
      setError(authError.message || (mode === 'signup' ? 'Failed to create account' : 'Failed to log in'));
    }
  };

  const handleGoogleAuth = async () => {
    try {
      setError('');
      await loginWithGoogle();
    } catch (authError) {
      setError(authError.message || 'Google sign-in failed');
    }
  };

  const changeMode = (nextMode) => {
    setMode(nextMode);
    setError('');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        className="relative w-full max-w-md rounded-xl border border-slate-200 border-t-4 border-t-blue-700 bg-white p-8 shadow-xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close sign in dialog"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>

        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">SkillSwap community</p>
        <h2 id="auth-modal-title" className="mt-2 pr-8 text-2xl font-bold tracking-tight text-slate-900">
          {mode === 'login' ? 'Log in to SkillSwap' : 'Create your account'}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {mode === 'login' ? 'Continue learning with your community.' : 'Start sharing your skills and learning with peers.'}
        </p>

        <div className="mt-6 grid grid-cols-2 rounded-lg bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => changeMode('login')}
            className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${mode === 'login' ? 'bg-white text-blue-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => changeMode('signup')}
            className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${mode === 'signup' ? 'bg-white text-blue-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Sign Up
          </button>
        </div>

        {error && (
          <p role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label htmlFor="browse-auth-email" className="mb-1.5 block text-sm font-medium text-slate-700">Email address</label>
            <input
              id="browse-auth-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>
          <div>
            <label htmlFor="browse-auth-password" className="mb-1.5 block text-sm font-medium text-slate-700">Password</label>
            <input
              id="browse-auth-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder={mode === 'signup' ? 'At least 6 characters' : 'Enter your password'}
              autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>
          <button type="submit" className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white transition-colors hover:bg-blue-800">
            {mode === 'login' ? 'Log in' : 'Create account'}
          </button>

          <div className="flex items-center gap-3" aria-hidden="true">
            <hr className="flex-1 border-slate-200" />
            <span className="text-xs font-medium uppercase tracking-wide text-slate-400">OR</span>
            <hr className="flex-1 border-slate-200" />
          </div>

          <button
            type="button"
            onClick={handleGoogleAuth}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="" className="h-5 w-5" />
            Continue with Google
          </button>
        </form>
      </section>
    </div>
  );
}
