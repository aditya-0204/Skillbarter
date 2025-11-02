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
      "public/images/t-shirt.jpg",
  },
  {
    id: 2,
    name: "classic black skillswap t-shirt",
    price: 1200,
    description: "Soft and comfortable T-shirt.",
    image:
      "public/images/black-t-shirt.jpg",
  },
  {
    id: 3,
    name: "water bottle",
    price: 800,
    description: "Stay hydrated on the go with this stylish water bottle.",
    image:
      "public/images/water-bottle.jpg",
  },
  {
    id: 4,
    name: "SkillSwap Hoodie",
    price: 2000,
    description: "Stay warm and stylish with this cozy hoodie.",
    image:
      "public/images/hoodie.jpg",
  },
  {
    id: 5,
    name: "SkillSwap Hoodie ( classic black)",
    price: 2000,
    description: "Stay warm and stylish with this cozy hoodie.",
    image:
      "public/images/hoddie-black.jpg",
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
        <span className="font-bold text-black">{coins} 🪙</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shopItems.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-slate-700 overflow-hidden"
          >
            <div className="bg-white p-4">

            <img
              src={item.image}
              alt={item.name}
              className="w-[70%] h-56 object-cover mx-auto rounded-t-lg hover:scale-105 transition-transform duration-300"
              />
              </div>
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
