import React, { useState, useEffect } from 'react';

export default function SelectSkillModal({ isOpen, onClose, onConfirmSwap, requesterProfile }) {
  const [requesterSkills, setRequesterSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Populate skills whenever requesterProfile changes
  useEffect(() => {
    if (requesterProfile) {
      const skills = requesterProfile.skills || [];
      setRequesterSkills(skills);
      setFilteredSkills(skills);
      setSelectedSkill(null);
    }
  }, [requesterProfile]);

  const handleSearch = (term) => {
    if (!term) {
      setFilteredSkills(requesterSkills);
      return;
    }
    const lower = term.toLowerCase();
    setFilteredSkills(requesterSkills.filter(skill => skill.title.toLowerCase().includes(lower)));
  };

  const handleConfirm = () => {
    if (selectedSkill) onConfirmSwap(selectedSkill);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Select a Skill to Receive</h3>

        {!requesterProfile ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-10">Loading skills...</p>
        ) : (
          <>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Choose one of <span className="font-semibold">{requesterProfile.name || 'their'}</span> skills to receive in return.
            </p>

            <input 
              type="text" 
              placeholder="Search their skills..." 
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg dark:bg-slate-700 dark:border-slate-600"
            />

            <div className="space-y-2 max-h-60 overflow-y-auto mb-6">
              {filteredSkills.length > 0 ? filteredSkills.map(skill => (
                <div 
                  key={skill.publicId || skill.title}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-3 rounded-md cursor-pointer transition-colors ${selectedSkill?.title === skill.title ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200'}`}
                >
                  <p className="font-semibold">{skill.title}</p>
                </div>
              )) : <p className="text-sm text-gray-500">This user has not listed any skills to offer.</p>}
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t dark:border-slate-700">
              <button type="button" onClick={onClose} className="px-6 py-2 bg-gray-200 dark:bg-slate-600 rounded-lg">Cancel</button>
              <button 
                onClick={handleConfirm} 
                disabled={!selectedSkill}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Confirm Swap
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
