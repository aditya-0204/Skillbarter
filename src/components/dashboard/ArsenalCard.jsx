import React from 'react';
import { Link } from 'react-router-dom';

export default function ArsenalCard({ skills }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Your Arsenal</h3>
        <Link to="/browse" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
          Find Skills to Barter
        </Link>
      </div>
      <div className="space-y-4">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <div key={index} className="p-4 bg-gray-100 dark:bg-slate-700/50 rounded-lg">
              <h4 className="font-semibold text-lg">{skill.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">You haven't added any skills yet. Go to your profile to build your arsenal!</p>
        )}
      </div>
    </div>
  );
}
