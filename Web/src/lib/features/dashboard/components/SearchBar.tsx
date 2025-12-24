"use client";

import { FaSearch, FaTimes } from "react-icons/fa";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultsCount?: number;
}

export function SearchBar({ value, onChange, resultsCount }: SearchBarProps) {
  return (
    <div className="relative">
      <label htmlFor="property-search" className="sr-only">
        Search properties by title, location, or description
      </label>
      <div className="relative">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" aria-hidden="true" />
        <input
          id="property-search"
          type="search"
          placeholder="Search by title, location, or description..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-12 pr-12 py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-gray-800 transition-all placeholder:text-gray-400"
          aria-label="Search properties"
          aria-describedby={resultsCount !== undefined ? "search-results-count" : undefined}
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
            aria-label="Clear search"
          >
            <FaTimes size={16} />
          </button>
        )}
      </div>
      {value && resultsCount !== undefined && (
        <p id="search-results-count" className="mt-2 text-sm text-gray-600">
          {resultsCount} {resultsCount === 1 ? 'result' : 'results'} found
        </p>
      )}
    </div>
  );
}
