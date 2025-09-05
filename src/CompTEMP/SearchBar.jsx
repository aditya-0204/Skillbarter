import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for skills like 'photography' or 'web development'..."
        className="w-full p-4 border-2 border-gray-300 dark:border-slate-600 rounded-full shadow-sm dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}
