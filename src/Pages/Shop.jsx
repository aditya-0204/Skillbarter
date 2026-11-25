import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useCoins } from "../store/coinStore";
import { purchaseShopItem } from "../services/userService";
import { Coins, ShoppingBag } from "lucide-react";

const shopItems = [
  {
    id: "classic-skillswap-tshirt",
    name: "Classic SkillSwap T-Shirt",
    price: 1200,
    description: "Comfortable cotton T-shirt with SkillSwap branding.",
    image:
      "/images/t-shirt.jpg",
  },
  {
    id: "classic-black-skillswap-tshirt",
    name: "classic black skillswap t-shirt",
    price: 1200,
    description: "Soft and comfortable T-shirt.",
    image:
      "/images/black-t-shirt.jpg",
  },
  {
    id: "skillswap-water-bottle",
    name: "water bottle",
    price: 800,
    description: "Stay hydrated on the go with this stylish water bottle.",
    image:
      "/images/water-bottle.jpg",
  },
  {
    id: "skillswap-hoodie",
    name: "SkillSwap Hoodie",
    price: 2000,
    description: "Stay warm and stylish with this cozy hoodie.",
    image:
      "/images/hoodie.jpg",
  },
  {
    id: "classic-black-skillswap-hoodie",
    name: "SkillSwap Hoodie ( classic black)",
    price: 2000,
    description: "Stay warm and stylish with this cozy hoodie.",
    image:
      "/images/hoddie-black.jpg",
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
        await purchaseShopItem(item.id);
        alert("Purchase successful!");
      } catch (error) {
        alert(error.message || "Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="w-full">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 sm:px-6 lg:px-8">
          <div>
            <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              <ShoppingBag aria-hidden="true" className="h-8 w-8 text-blue-800" />
              SkillSwap Store
            </h1>
            <p className="mt-2 text-base leading-6 text-slate-600">Browse community rewards and spend the coins you have earned.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm font-semibold text-amber-900">
            <span className="text-slate-600">Your balance</span>
            <span className="font-bold">{coins}</span>
            <Coins aria-hidden="true" className="h-5 w-5 text-amber-700" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="text-lg font-semibold text-slate-900">Store items</h2>
          <p className="text-sm text-slate-500">{shopItems.length} rewards</p>
        </div>
        <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shopItems.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-56 items-center justify-center border-b border-slate-100 bg-slate-50 p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold leading-snug text-slate-900">{item.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{item.description}</p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-base font-bold text-amber-800">
                    {item.price}
                    <Coins aria-hidden="true" className="h-4 w-4 text-amber-700" />
                  </span>
                  <button
                    onClick={() => handlePurchase(item)}
                    className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
