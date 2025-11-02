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
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";


export default function Dashboard() {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // State to control the visibility of the change password form
  const [showChangePassword, setShowChangePassword] = useState(false);

  useEffect(() => {
    if (!currentUser?.uid) return;

    setLoading(true);
    setError(null);

    const userRef = doc(db, `artifacts/default-app-id/users/${currentUser.uid}`);

    // Real-time listener
    const unsubscribe = onSnapshot(
      userRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.data();

          // 👇 ADD THIS LINE to inspect Firestore data
          console.log("🔥 Loaded profile data:", userData);

          setProfile(userData);
          setLoading(false);
        } else {
          setError("User profile not found.");
          setLoading(false);
        }
      },
      (error) => {
        console.error("Error fetching profile in real-time:", error);
        setError("Failed to load your profile data.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
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
    console.log("Profile data:", profile);
    
    return <div className="text-center py-10">Loading user data...</div>;
  }
  const displayName = profile?.displayName || profile?.name || "User";
const skillsCount = profile?.skills?.length ?? 0;
const swapsCompleted =
profile?.stats?.swapsCompleted ??
profile?.swapCount ??
0;

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
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
 Welcome back, {displayName}!          </h1>
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
              <StatCard title="Skills Offered" value={skillsCount} />
<StatCard title="Swaps Completed" value={swapsCompleted} />

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