import React, { useState, useEffect } from 'react';
import { getAllSkills } from '../services/profileService.js';
import SkillCard from '../Components/SkillCard.jsx';
import SearchBar from '../components/SearchBar.jsx';

export default function Browse() {
  const [allSkills, setAllSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      const skills = await getAllSkills();
      setAllSkills(skills);
      setFilteredSkills(skills);
      setLoading(false);
    };
    fetchSkills();
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredSkills(allSkills);
      return;
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = allSkills.filter(skill => 
      skill.title.toLowerCase().includes(lowercasedTerm) ||
      skill.description.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredSkills(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Find a Skill</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Discover skills offered by talented people in our community.</p>
      </div>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div className="text-center mt-8">Loading skills...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {filteredSkills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      )}
    </div>
  );
}