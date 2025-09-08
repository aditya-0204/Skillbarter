import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { getUserProfile, addUserSkill, deleteUserSkill } from '../services/profileService.js';
import AddSkillModal from '../components/AddSkillModal.jsx';
import SkillCard from '../components/SkillCard.jsx';

export default function Profile() {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      if (currentUser) {
        setLoading(true);
        setError('');
        const userProfile = await getUserProfile(currentUser.uid);
        if(userProfile) {
            setProfile(userProfile);
        } else {
            setError('Could not load user profile.');
        }
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [currentUser]);

  const handleAddSkill = async (newSkill) => {
    if (currentUser) {
      await addUserSkill(currentUser.uid, newSkill);
      const updatedProfile = await getUserProfile(currentUser.uid);
      setProfile(updatedProfile);
    }
  };

  const handleDeleteSkill = async (skillToDelete) => {
    if (currentUser && window.confirm(`Are you sure you want to delete "${skillToDelete.title}"?`)) {
      await deleteUserSkill(currentUser.uid, skillToDelete);
      const updatedProfile = await getUserProfile(currentUser.uid);
      setProfile(updatedProfile);
    }
  };

  if (loading) return <div className="text-center py-10">Loading profile...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!currentUser) return <div className="text-center py-10">Please log in to view your profile.</div>;
  if (!profile) return <div className="text-center py-10">Could not find profile data.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Your Profile</h1>
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Your Skills</h2>
          <button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg">
            Add New Skill
          </button>
        </div>

        {Array.isArray(profile.skills) && profile.skills.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.skills.map((skill, index) => (
              <SkillCard 
                key={skill.publicId || index} 
                skill={skill} 
                onDelete={handleDeleteSkill} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 border-2 border-dashed rounded-lg">
            <p className="text-gray-500">You haven't added any skills yet.</p>
          </div>
        )}
      </div>
      
      <AddSkillModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddSkill={handleAddSkill}
      />
    </div>
  );
}