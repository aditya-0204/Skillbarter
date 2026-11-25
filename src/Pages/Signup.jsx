import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { currentUser, signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/dashboard');
    }
  }, [currentUser, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      await signup(email, password);
    } catch (err) {
      setError(err.message || 'Failed to create account');
    }
  }

  async function handleGoogleSignup() {
    try {
      setError('');
      await loginWithGoogle();
    } catch (err) {
      setError(err.message || 'Google sign-in failed');
    }
  }

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-10 sm:px-6">
      <section className="mx-auto w-full max-w-md rounded-xl border border-slate-200 border-t-4 border-t-blue-700 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">SkillSwap community</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Create your account</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">Start sharing your skills and learning with peers.</p>
        {error && (
          <p role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label htmlFor="signup-email" className="mb-1.5 block text-sm font-medium text-slate-700">Email address</label>
            <input
              id="signup-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>
          <div>
            <label htmlFor="signup-password" className="mb-1.5 block text-sm font-medium text-slate-700">Password</label>
            <input
              id="signup-password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>
          <button type="submit" className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white transition-colors hover:bg-blue-800">
            Create account
          </button>

          <div className="flex items-center gap-3" aria-hidden="true">
            <hr className="flex-1 border-slate-200" />
            <span className="text-xs font-medium uppercase tracking-wide text-slate-400">OR</span>
            <hr className="flex-1 border-slate-200" />
          </div>

          <button
            type="button"
            onClick={handleGoogleSignup}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="" className="h-5 w-5" />
            Continue with Google
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-blue-700 hover:text-blue-800 hover:underline">Log In</Link>
        </p>
      </section>
    </div>
  );
}
