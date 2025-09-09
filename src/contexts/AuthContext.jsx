import React, { useState, useEffect, createContext, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { createUserProfile } from '../services/profileService.js';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  const signup = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await createUserProfile(userCredential.user);
    return userCredential;
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  // --- THIS IS THE CORRECTED PART ---
  useEffect(() => {
    // This listener is called once when Firebase checks the auth state, and again any time it changes.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // 'user' will be the user object if they are logged in, or null if they are not.
      setCurrentUser(user);
      
      // Crucially, we set loading to false here, allowing the app to render.
      setLoading(false);
    });

    // Clean up the listener when the component unmounts
    return unsubscribe;
  }, [auth]);

  const value = { currentUser, signup, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {/* This will now correctly render the app once the initial auth check is done */}
      {!loading && children}
    </AuthContext.Provider>
  );
}