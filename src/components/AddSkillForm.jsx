import React, { useState } from 'react';

export default function AddSkillForm({ onAddSkill, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    onAddSkill({ title, description });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="skill-title" className="mb-1.5 block text-sm font-medium text-slate-700">Skill Title</label>
        <input
          id="skill-title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="e.g., Graphic Design"
          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>
      <div>
        <label htmlFor="skill-description" className="mb-1.5 block text-sm font-medium text-slate-700">Description</label>
        <textarea
          id="skill-description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Describe what you can teach..."
          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
          rows="4"
        />
      </div>
      <button type="submit" className="w-full rounded-lg bg-blue-700 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-blue-800">
        Add Skill
      </button>
    </form>
  );
}
