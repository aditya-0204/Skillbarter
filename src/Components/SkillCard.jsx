import React from 'react';

export default function SkillCard({ skill }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img className="w-12 h-12 rounded-full object-cover mr-4" src={skill.userAvatar} alt={skill.userName} />
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">{skill.userName}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Offers:</p>
          </div>
        </div>
        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{skill.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 h-16">{skill.description}</p>
        <button
          className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Request Swap
        </button>
      </div>
    </div>
  );
}