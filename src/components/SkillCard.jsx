import React from 'react';

// The component now accepts an `onDelete` function as a prop
export default function SkillCard({ skill, onDelete }) {
  if (!skill) {
    return null;
  }

  // Helper function to assign a color based on the skill's level
  const getBadgeColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200';
    }
  };

  return (
    <div className="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-md border border-gray-200 dark:border-slate-600 flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{skill.title}</h3>
          {skill.level && (
            <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${getBadgeColor(skill.level)}`}>
              {skill.level}
            </span>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
      </div>
      
      {/* --- ADDED DELETE BUTTON --- */}
      {/* This button will only be shown if an onDelete function is provided */}
      {onDelete && (
        <button 
          onClick={() => onDelete(skill)} 
          className="mt-4 w-full text-sm bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 px-3 rounded-lg transition-colors duration-200 dark:bg-red-900/40 dark:hover:bg-red-900/70 dark:text-red-300"
        >
          Delete Skill
        </button>
      )}
    </div>
  );
}