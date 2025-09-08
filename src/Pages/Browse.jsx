import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { getAllSkills, createSwapRequest } from '../services/profileService.js';
import PublicSkillCard from '../components/PublicSkillCard.jsx';
import SearchBar from '../components/SearchBar.jsx';

const INITIAL_SKILL_COUNT = 8; // Number of skills to show initially

export default function Browse() {
  const { currentUser } = useAuth();
  const [allSkills, setAllSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [showAll, setShowAll] = useState(false);
  // New state to track which requests have been sent in this session
  const [sentRequests, setSentRequests] = useState(new Set());

  useEffect(() => {
    const fetchSkills = async () => {
      if (currentUser) {
        setLoading(true);
        const skills = await getAllSkills(currentUser.uid);
        setAllSkills(skills);
        setFilteredSkills(skills);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    fetchSkills();
  }, [currentUser]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredSkills(allSkills);
      // When the search is cleared, go back to showing a limited number
      setShowAll(false);
      return;
    }
    // When a user starts searching, show all results
    setShowAll(true);
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = allSkills.filter(skill => 
      skill.title?.toLowerCase().includes(lowercasedTerm) ||
      skill.description?.toLowerCase().includes(lowercasedTerm) ||
      skill.userName?.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredSkills(filtered);
  };
  
  const handleSwapRequest = async (receiverId, skill) => {
    if (currentUser) {
      await createSwapRequest(currentUser.uid, receiverId, skill);
      
      // Add the skill's ID to the set of sent requests to update the UI
      setSentRequests(prev => new Set(prev).add(skill.id || skill.publicId));

      setMessage(`Swap request sent for "${skill.title}"!`);
      setTimeout(() => setMessage(''), 3000);
    } else {
      alert("Please log in to request a swap.");
    }
  };

  // Determine which skills to display based on the 'showAll' state
  const skillsToDisplay = showAll ? filteredSkills : filteredSkills.slice(0, INITIAL_SKILL_COUNT);

  if (loading) return <div className="text-center py-10">Loading skills...</div>;
  if (!currentUser) return <div className="text-center py-10">Please log in to browse skills.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Find a Skill</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Discover skills from our talented community.</p>
      </div>
      
      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {skillsToDisplay.map(skill => (
          <PublicSkillCard 
            key={skill.id} 
            skill={skill} 
            onSwapRequest={handleSwapRequest} 
            // Pass down whether a request has been sent for this skill
            isRequested={sentRequests.has(skill.id || skill.publicId)}
          />
        ))}
      </div>

      {/* "Show More" / "Show Less" Button Logic */}
      <div className="text-center mt-12">
        {!showAll && filteredSkills.length > INITIAL_SKILL_COUNT && (
          <button onClick={() => setShowAll(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg">
            Show More
          </button>
        )}
        {showAll && filteredSkills.length > INITIAL_SKILL_COUNT && (
           <button onClick={() => setShowAll(false)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg">
            Show Less
          </button>
        )}
      </div>

      {/* Confirmation message for swap requests */}
      {message && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
          {message}
        </div>
      )}
    </div>
  );
}