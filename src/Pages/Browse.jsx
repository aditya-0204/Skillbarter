import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { getAllSkills, createSwapRequest } from '../services/profileService.js';
import PublicSkillCard from '../components/PublicSkillCard.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { Link } from 'react-router-dom';

const INITIAL_SKILL_COUNT = 8; // Number of skills to show initially

export default function Browse() {
  const { currentUser } = useAuth();
  const [allSkills, setAllSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);
  const [showAll, setShowAll] = useState(false);
  // New state to track which requests have been sent in this session
  const [sentRequests, setSentRequests] = useState(new Set());

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      const skills = await getAllSkills(currentUser?.uid);
      setAllSkills(skills);
      setFilteredSkills(skills);
      setLoading(false);
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
      setShowAuthPrompt(true);
    }
  };

  // Determine which skills to display based on the 'showAll' state
  const skillsToDisplay = showAll ? filteredSkills : filteredSkills.slice(0, INITIAL_SKILL_COUNT);

  if (loading) return <div className="mx-auto max-w-7xl px-4 py-16 text-center text-slate-600 sm:px-6 lg:px-8">Loading skills...</div>;
  return (
    <div className="w-full">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="gap-6 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">Skill catalog</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Find a skill to learn</h1>
              <p className="mt-2 text-base leading-6 text-slate-600">Discover practical skills shared by learners in our community.</p>
            </div>
            <div className="mt-6 w-full md:mt-0 md:w-96">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {!currentUser && (
          <div className="mb-6 flex flex-col gap-4 rounded-xl border border-blue-200 bg-blue-50 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-slate-900">{showAuthPrompt ? 'Create an account to request a swap' : 'Explore the catalog as a guest'}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">Browse available skills now. Log in or sign up to connect with instructors and request a one-to-one swap.</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <Link to="/login" className="rounded-lg border border-blue-700 bg-white px-4 py-2 text-sm font-semibold text-blue-800 transition-colors hover:bg-blue-50">Log in</Link>
              <Link to="/signup" className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800">Sign Up</Link>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="text-lg font-semibold text-slate-900">Community skills</h2>
          <p className="text-sm text-slate-500">{filteredSkills.length} {filteredSkills.length === 1 ? 'skill' : 'skills'}</p>
        </div>

        <div className="mt-5 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="mt-10 text-center">
          {!showAll && filteredSkills.length > INITIAL_SKILL_COUNT && (
            <button onClick={() => setShowAll(true)} className="rounded-lg bg-blue-700 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-blue-800">
              Show More
            </button>
          )}
          {showAll && filteredSkills.length > INITIAL_SKILL_COUNT && (
            <button onClick={() => setShowAll(false)} className="rounded-lg border border-slate-300 bg-white px-6 py-2.5 font-semibold text-slate-700 transition-colors hover:bg-slate-50">
              Show Less
            </button>
          )}
        </div>

      {/* Confirmation message for swap requests */}
        {message && (
          <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-green-200 bg-green-700 px-6 py-3 text-white shadow-lg">
            {message}
          </div>
        )}
      </section>
    </div>
  );
}
