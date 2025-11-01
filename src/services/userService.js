// src/services/userService.js
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc, increment } from "firebase/firestore";

// make sure appId is defined the same way you use it everywhere else
const appId = typeof __app_id !== "undefined" ? __app_id : "default-app-id";

export const onUserDataSnapshot = (userId, callback) => {
  if (!userId) return () => {};
  const userDocRef = doc(db, "artifacts", appId, "users", userId);
  return onSnapshot(userDocRef, (docSnap) => {
    if (docSnap.exists()) {
      callback(docSnap.data());
    } else {
      console.log("No such user document for ID:", userId);
      callback(null);
    }
  });
};

export const addCoinsToUser = async (userId, amount) => {
  if (!userId || !amount) return;
  const userDocRef = doc(db, "artifacts", appId, "users", userId);
  try {
    await updateDoc(userDocRef, {
      coins: increment(amount),
    });
  } catch (error) {
    console.error("Error adding coins:", error);
  }
};

export const spendCoinsFromUser = async (userId, amount) => {
  if (!userId || !amount) return;
  const userDocRef = doc(db, "artifacts", appId, "users", userId);
  try {
    await updateDoc(userDocRef, {
      coins: increment(-amount),
    });
  } catch (error) {
    console.error("Error spending coins:", error);
  }
};
