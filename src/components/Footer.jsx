import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
      </div>
    </footer>
  );
}