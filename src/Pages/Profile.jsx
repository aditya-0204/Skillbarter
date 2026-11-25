import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { getUserProfile, addUserSkill, deleteUserSkill } from '../services/profileService.js';
import AddSkillModal from '../components/AddSkillModal.jsx';
import SkillCard from '../components/SkillCard.jsx';
import { Plus } from 'lucide-react';

export default function Profile() {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // This function is to fetch the profile.
  const fetchProfile = async () => {
    if (currentUser) {
      setLoading(true);
      setError('');
      const userProfile = await getUserProfile(currentUser.uid);
      if (userProfile) {
        setProfile(userProfile);
      } else {
        setError('Could not load user profile.');
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  // Load profile on mount
  useEffect(() => {
    fetchProfile();
  }, [currentUser]);

  const handleAddSkill = async (newSkill) => {
    if (currentUser) {
      try {
        // 1. Add to database
        await addUserSkill(currentUser.uid, newSkill);
        
        // 2. Wait 800ms for the database to update (your original, smart idea)
        setTimeout(async () => {
          // 3. Refetch the *entire* profile to get the new list
          const updatedProfile = await getUserProfile(currentUser.uid);
          setProfile(updatedProfile);
        }, 800); // Using 800ms as it was in your original code
        
        setIsModalOpen(false);
      } catch (err) {
        console.error("Error adding skill:", err);
        setError("Failed to add skill.");
      }
    }
  };

  const handleDeleteSkill = async (skillToDelete) => {
    if (currentUser && window.confirm(`Are you sure you want to delete "${skillToDelete.title}"?`)) {
      try {
        // 1. Delete from database
        await deleteUserSkill(currentUser.uid, skillToDelete);
        
        // 2. Wait for database to update
        setTimeout(async () => {
          // 3. Refetch the entire profile
          const updatedProfile = await getUserProfile(currentUser.uid);
          setProfile(updatedProfile);
        }, 800);

      } catch (err) {
        console.error("Error deleting skill:", err);
        setError("Failed to delete skill.");
      }
    }
  };

  if (loading) return <div className="text-center py-10">Loading profile...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!currentUser) return <div className="text-center py-10">Please log in to view your profile.</div>;
  if (!profile) return <div className="text-center py-10">Could not find profile data.</div>;

  // Filter the skills to only include ones that have a publicId
  const validSkills = Array.isArray(profile.skills) 
    ? profile.skills.filter(skill => skill && skill.publicId) 
    : [];

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">Your Profile</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Your Skills</h1>
            <p className="mt-2 text-base leading-6 text-slate-600">Manage the skills you share with the community.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-blue-800"
          >
            <Plus aria-hidden="true" className="h-5 w-5" />
            Add New Skill
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {validSkills.length > 0 ? (
          <div className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {validSkills.map((skill) => (
              <SkillCard
                key={skill.publicId} // Now this is safe
                skill={skill}
                onDelete={handleDeleteSkill}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <p className="text-slate-600">You haven't added any skills yet.</p>
          </div>
        )}
      </section>

      <AddSkillModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddSkill={handleAddSkill}
      />
    </div>
  );
}
