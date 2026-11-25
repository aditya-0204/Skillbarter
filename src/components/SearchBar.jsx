import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="w-full">
      <label htmlFor="skill-search" className="sr-only">Search the skill catalog</label>
      <div className="relative">
        <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
        <input
          id="skill-search"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for skills like 'photography' or 'web development'..."
          className="w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pl-12 pr-4 text-base text-slate-900 shadow-sm placeholder:text-slate-500 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>
    </div>
  );
}
