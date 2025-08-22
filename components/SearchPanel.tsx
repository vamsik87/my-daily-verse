
import React, { useState, useCallback } from 'react';
import { bibleService } from '../services/bibleService';
import { Verse } from '../types';

const SearchPanel: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Verse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = useCallback(() => {
    if (!query.trim()) return;
    setIsLoading(true);
    setSearched(true);
    // Simulate async search
    setTimeout(() => {
      setResults(bibleService.search(query));
      setIsLoading(false);
    }, 500);
  }, [query]);

  return (
    <div className="p-4">
      <header className="sticky top-0 bg-gray-50/80 backdrop-blur-sm z-10 py-2 -mx-4 px-4 border-b mb-4">
        <h1 className="text-2xl font-bold text-slate-900">Search Bible</h1>
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="e.g., love is patient"
            className="w-full p-2 border rounded-md bg-white shadow-sm"
          />
          <button onClick={handleSearch} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-indigo-300" disabled={isLoading}>
            {isLoading ? '...' : 'Search'}
          </button>
        </div>
      </header>

      <div className="mt-6">
        {isLoading && <p className="text-center text-gray-500">Searching...</p>}
        {!isLoading && searched && results.length === 0 && <p className="text-center text-gray-500">No results found.</p>}
        {!isLoading && results.length > 0 && (
          <ul className="space-y-4">
            {results.map((verse, index) => (
              <li key={index} className="p-4 border rounded-lg bg-white shadow-sm">
                <p className="font-bold text-indigo-700">{verse.book} {verse.chapter}:{verse.verse}</p>
                <p className="mt-1 text-slate-600 font-serif">{verse.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchPanel;
