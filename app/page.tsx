'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [companies, setCompanies] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [emailFormat, setEmailFormat] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const loadCompanies = async () => {
    try {
      const response = await fetch('/api/companies');
      const data = await response.json();
      setCompanies(data.companies);
    } catch (error) {
      console.error('Error loading companies:', error);
      setMessage('Error loading companies');
    }
  };

  const loadEmailFormat = async (company: string) => {
    try {
      const response = await fetch(`/api/emailFormat?company=${company}`);
      const data = await response.json();
      setEmailFormat(data.format);
    } catch (error) {
      console.error('Error loading email format:', error);
      setMessage('Error loading email format');
    }
  };

  useEffect(() => {
    loadCompanies();
  }, []);

  // Filter companies based on search query
  const filteredCompanies = companies.filter(company =>
    company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-white">Company Email Format Viewer</h1>

      {/* View email formats */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">View Email Formats</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-300">
              Search Company
            </label>
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type to search companies..."
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 p-2"
            />
          </div>

          {/* Display filtered companies */}
          <div className="mt-4 space-y-2">
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company) => (
                <button
                  key={company}
                  onClick={() => loadEmailFormat(company)}
                  className="block w-full text-left px-4 py-2 rounded-md text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                >
                  {company}
                </button>
              ))
            ) : (
              <p className="text-gray-400">No companies found</p>
            )}
          </div>

          {emailFormat && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-200 mb-2">Email Format:</h3>
              <pre className="bg-gray-700 p-4 rounded-md whitespace-pre-wrap text-gray-200 border border-gray-600">{emailFormat}</pre>
            </div>
          )}
        </div>
      </div>

      {message && (
        <div className="mt-4 p-4 rounded-md bg-indigo-900 text-indigo-200 border border-indigo-700">
          {message}
        </div>
      )}
    </main>
  );
}
