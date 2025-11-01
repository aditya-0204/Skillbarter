// src/store/coinStore.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { onUserDataSnapshot, addCoinsToUser, spendCoinsFromUser } from '../services/userService';

const CoinContext = createContext();

export function CoinProvider({ children }) {
  const { currentUser } = useAuth();
  const [coins, setCoins] = useState(0); // <-- ✅ Default to 0 instead of null
  const [loading, setLoading] = useState(true);

useEffect(() => {
  if (currentUser) {
    console.log("🔁 Listening for user coins:", currentUser.uid);
    setLoading(true);
    const unsubscribe = onUserDataSnapshot(currentUser.uid, (userData) => {
      console.log("📦 User data received:", userData);
      if (userData && userData.coins !== undefined) {
        setCoins(userData.coins);
      } else {
        setCoins(0);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  } else {
    console.log("🚫 No current user");
    setCoins(null);
    setLoading(false);
  }
}, [currentUser]);


  const spendCoins = async (amount) => {
    if (currentUser && coins >= amount) {
      await spendCoinsFromUser(currentUser.uid, amount);
    }
  };

  const addCoins = async (amount) => {
    if (currentUser) {
      await addCoinsToUser(currentUser.uid, amount);
    }
  };

  const value = { coins, loading, spendCoins, addCoins };

  return (
    <CoinContext.Provider value={value}>
      {children}
    </CoinContext.Provider>
  );
}

export function useCoins() {
  return useContext(CoinContext);
}
