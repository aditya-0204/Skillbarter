import React from 'react';

// 1. Accept onOpenChangePassword as a prop
export default function ProfileCard({ profile, onOpenChangePassword }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
      <div className="flex items-center space-x-4 mb-4">
        <img src={profile.avatar} alt={profile.name} className="w-16 h-16 rounded-full" />
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{profile.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{profile.email}</p>
        </div>
      </div>
      
      {/* 2. Add the onClick handler here */}
      <button 
        onClick={onOpenChangePassword}
        className="w-full mt-4 bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
      >
        Change Password
      </button>
    </div>
  );
}