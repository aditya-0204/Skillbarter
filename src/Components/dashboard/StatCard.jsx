import React from 'react';

export default function StatCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg text-center">
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{value}</p>
    </div>
  );
}