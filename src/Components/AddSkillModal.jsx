import React from 'react';
import AddSkillForm from './AddSkillForm.jsx';

export default function AddSkillModal({ isOpen, onClose, onAddSkill }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-2xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add a New Skill</h2>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>
        <AddSkillForm onAddSkill={onAddSkill} onClose={onClose} />
      </div>
    </div>
  );
}
