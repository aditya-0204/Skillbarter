import React from 'react';

export default function PublicSkillCard({ skill, onSwapRequest }) {
  if (!skill) return null;

  // Use optional chaining (?.) and provide default values to prevent crashes
  const userAvatar = skill.userAvatar || `https://placehold.co/100x100/e2e8f0/333?text=?`;
  const userName = skill.userName || 'Unknown User';
  const title = skill.title || 'Untitled Skill';
  const description = skill.description || 'No description available.';

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 group">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <img className="w-12 h-12 rounded-full object-cover mr-4" src={userAvatar} alt={userName} />
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">{userName}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Offers:</p>
          </div>
        </div>
        <div className="flex-grow">
            <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{description}</p>
        </div>
        <button
          onClick={() => onSwapRequest(skill.userId, skill)}
          className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Request Swap
        </button>
      </div>
    </div>
  );
}   