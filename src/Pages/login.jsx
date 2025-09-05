import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { currentUser, login } = useAuth();
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
      await login(email, password);
    } catch (err) {
      setError(err.message || 'Failed to log in');
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-slate-900 dark:text-white">Login</h2>
      {error && <p className="text-red-500 mb-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-md">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white" required />
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold">Login</button>
      </form>
      <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
        Don't have an account? <Link to="/signup" className="font-medium text-indigo-600 hover:underline dark:text-indigo-400">Sign Up</Link>
      </p>
    </div>
  );
}