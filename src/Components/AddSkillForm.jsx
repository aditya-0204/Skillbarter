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
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="text" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        placeholder="Skill Title (e.g., Graphic Design)"
        className="w-full p-3 border rounded-lg dark:bg-slate-700 dark:border-slate-600"
      />
      <textarea 
        value={description} 
        onChange={e => setDescription(e.target.value)} 
        placeholder="Describe your skill..."
        className="w-full p-3 border rounded-lg dark:bg-slate-700 dark:border-slate-600"
        rows="4"
      />
      <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg">
        Add Skill
      </button>
    </form>
  );
}
