import React, { useState, useEffect, createContext, useContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { googleProvider } from "../firebase";
import { createUserProfile } from "../services/profileService.js";
import { createUserIfNotExist } from "../services/sessionService.js";

// Create context
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  // ✅ Signup
  const signup = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createUserProfile(userCredential.user);
    return userCredential;
  };

  // ✅ Login
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // ✅ Google login/signup
  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    await createUserIfNotExist(user);
    await createUserProfile(user);
    return result;
  };

  // ✅ Logout
  const logout = () => signOut(auth);

  // ✅ Monitor auth state
 useEffect(() => {
  console.log("👤 AuthContext mounted");

  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    console.log("🔁 Auth state changed:", user);
    if (user) {
      try {
        await createUserIfNotExist(user);
        console.log("✅ User ensured in Firestore");
      } catch (err) {
        console.error("❌ Error creating user:", err);
      }
    }
    setCurrentUser(user);
    setLoading(false);
  });

  return unsubscribe;
}, [auth]);


  const value = { currentUser, signup, login, loginWithGoogle, logout };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// ✅ define hook *after* component to avoid HMR mismatch
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
