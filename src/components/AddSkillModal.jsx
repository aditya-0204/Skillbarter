import React from 'react';
import AddSkillForm from './AddSkillForm.jsx';
import { X } from 'lucide-react';

export default function AddSkillModal({ isOpen, onClose, onAddSkill }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 bg-opacity-50 p-4">
      <div className="w-full max-w-md rounded-xl border border-slate-200 border-t-4 border-t-blue-700 bg-white p-6 shadow-lg sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Skillset</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">Add a New Skill</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close dialog" className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800">
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
        <AddSkillForm onAddSkill={onAddSkill} onClose={onClose} />
      </div>
    </div>
  );
}
