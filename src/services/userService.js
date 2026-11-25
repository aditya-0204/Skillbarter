// src/services/userService.js
import { auth, db } from "../firebase";
import { doc, onSnapshot, updateDoc, increment } from "firebase/firestore";

// make sure appId is defined the same way you use it everywhere else
const appId = typeof __app_id !== "undefined" ? __app_id : "default-app-id";
const API_BASE_URL = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

async function getAuthHeaders(extraHeaders = {}) {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error("You must be signed in to perform this action.");
  }

  const idToken = await currentUser.getIdToken();
  return {
    Authorization: `Bearer ${idToken}`,
    ...extraHeaders,
  };
}

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

export const purchaseShopItem = async (itemId) => {
  if (!API_BASE_URL) {
    throw new Error("VITE_API_URL is not configured.");
  }

  const headers = await getAuthHeaders({
    "Content-Type": "application/json",
  });

  const response = await fetch(`${API_BASE_URL}/purchase`, {
    method: "POST",
    headers,
    body: JSON.stringify({ itemId }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || "Purchase failed.");
  }

  return data;
};
