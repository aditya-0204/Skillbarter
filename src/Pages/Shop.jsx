import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useCoins } from "../store/coinStore";
import { spendCoinsFromUser } from "../services/userService";

const shopItems = [
  {
    id: 1,
    name: "Classic SkillSwap T-Shirt",
    price: 1200,
    description: "Comfortable cotton T-shirt with SkillSwap branding.",
    image:
      "https://drive.google.com/file/d/1Z_zUIq4zvLCPvSYsqj8nXAfsL4PLicrz/view?usp=sharing",
  },
  {
    id: 2,
    name: "Mouse Pad",
    price: 950,
    description: "Smooth surface for precise mouse movements.",
    image:
      "https://images.unsplash.com/photo-1589381002778-6848b94cf3d6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Bluetooth Headphones",
    price: 2000,
    description: "Noise-cancelling over-ear headphones with deep bass.",
    image:
      "https://images.unsplash.com/photo-1518443895911-78e3d7d1eacc?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Smart Fitness Band",
    price: 2800,
    description: "Track your steps, heart rate, and sleep patterns.",
    image:
      "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Shop() {
  const { currentUser } = useAuth();
  const { coins } = useCoins();

  const handlePurchase = async (item) => {
    if (coins < item.price) {
      alert("You don't have enough coins for this item!");
      return;
    }

    const confirmation = window.confirm(
      `Buy "${item.name}" for ${item.price} coins?`
    );
    if (confirmation) {
      try {
        await spendCoinsFromUser(currentUser.uid, item.price);
        alert("Purchase successful!");
      } catch (error) {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-extrabold mb-4 text-center text-gray-600">
        🛍️ SkillSwap Store
      </h1>
      <p className="mb-8 text-center text-gray-700">
        Your Balance:{" "}
        <span className="font-bold text-yellow-400">{coins} 🪙</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shopItems.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-slate-700 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-white">{item.name}</h2>
              <p className="text-gray-400 text-sm mt-1">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold text-yellow-400">
                  {item.price} 🪙
                </span>
                <button
                  onClick={() => handlePurchase(item)}
                  className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
