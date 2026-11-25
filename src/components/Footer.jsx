import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white py-5 text-slate-500">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
      </div>
    </footer>
  );
}
