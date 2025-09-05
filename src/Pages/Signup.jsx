import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { currentUser, signup } = useAuth();
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

  return (
    <div className="max-w-md mx-auto mt-12 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-slate-900 dark:text-white">Create an Account</h2>
      {error && <p className="text-red-500 mb-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-md">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password (min. 6 characters)"
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white" required />
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold">Sign Up</button>
      </form>
      <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
        Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:underline dark:text-indigo-400">Log In</Link>
      </p>
    </div>
  );
}
