import React, { useState, useEffect } from 'react';
// Import updatePassword from firebase/auth
import { updatePassword } from 'firebase/auth';
import { useAuth } from '../contexts/AuthContext.jsx';
import { getUserProfile } from '../services/profileService.js';

// Import Dashboard Components
import ProfileCard from '../components/dashboard/ProfileCard.jsx';
import ArsenalCard from '../components/dashboard/ArsenalCard.jsx';
import StatCard from '../components/dashboard/StatCard.jsx';
// Import the new form component
import ChangePasswordForm from '../components/dashboard/ChangePasswordForm.jsx';

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // State to control the visibility of the change password form
  const [showChangePassword, setShowChangePassword] = useState(false);

  useEffect(() => {
    // ... your existing useEffect code ...
    const fetchProfile = async () => {
      if (currentUser) {
        try {
          setLoading(true);
          setError(null);
          const userProfile = await getUserProfile(currentUser.uid);
          setProfile(userProfile);
        } catch (err) {
          console.error("Failed to fetch profile:", err);
          setError("Could not load your profile data. Please try again later.");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [currentUser]);

  // Function to handle the password update logic
  const handleChangePassword = async (newPassword) => {
    if (!currentUser) {
      throw new Error("You must be logged in to change your password.");
    }
    await updatePassword(currentUser, newPassword);
  };

  // ... your existing loading, error, and !profile checks ...
  if (loading) {
    return <div className="text-center py-10">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }
  
  if (!profile) {
    return <div className="text-center py-10">Loading user data...</div>;
  }

  return (
    <>
      {/* Conditionally render the ChangePasswordForm as a modal */}
      {showChangePassword && (
        <ChangePasswordForm
          handleChangePassword={handleChangePassword}
          onClose={() => setShowChangePassword(false)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ... your existing header ... */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Welcome back, {profile.name}!</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Here's a snapshot of your SkillSwap activity.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            {/* Pass the function to open the modal to ProfileCard */}
            <ProfileCard 
              profile={profile} 
              onOpenChangePassword={() => setShowChangePassword(true)} 
            />
            <div className="grid grid-cols-2 gap-4">
              <StatCard title="Skills Offered" value={profile.skills.length} />
              <StatCard title="Swaps Completed" value={profile.stats.swapsCompleted} />
            </div>
          </div>
          <div className="lg:col-span-2">
            <ArsenalCard skills={profile.skills} />
          </div>
        </div>
      </div>
    </>
  );
}