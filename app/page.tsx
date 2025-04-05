'use client';

import { useState } from 'react';

type EmailFormats = {
  [key: string]: string;
};

const EMAIL_FORMATS: EmailFormats = {
  'Juspay': '<firstname>.<lastname>@juspay.in',
  'New Relic': '<firstcharacteroffirstname>.<lastname>@newrelic.com'
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [emailFormat, setEmailFormat] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<string>('');

  // Filter companies based on search query
  const filteredCompanies = Object.keys(EMAIL_FORMATS).filter(company =>
    company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCompanyClick = (company: string) => {
    setEmailFormat(EMAIL_FORMATS[company]);
    setSelectedCompany(company);
    setSearchQuery(''); // Clear search after selection
  };

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-white">Company Email Format Viewer</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
        {/* Selected Company and Email Format Display */}
        {emailFormat && (
          <div className="mb-8 p-4 bg-gray-700 rounded-lg border border-gray-600">
            <h3 className="text-lg font-medium text-gray-200 mb-2">
              {selectedCompany}
            </h3>
            <pre className="text-gray-200 font-medium">{emailFormat}</pre>
          </div>
        )}

        <h2 className="text-xl font-semibold mb-4 text-white">Search Company</h2>
        <div className="space-y-4">
          <div>
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type to search companies..."
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 p-2"
            />
          </div>

          {/* Display filtered companies only when searching */}
          {searchQuery && (
            <div className="mt-4 space-y-2">
              {filteredCompanies.length > 0 ? (
                filteredCompanies.map((company) => (
                  <button
                    key={company}
                    onClick={() => handleCompanyClick(company)}
                    className="block w-full text-left px-4 py-2 rounded-md text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                  >
                    {company}
                  </button>
                ))
              ) : (
                <p className="text-gray-400">No companies found</p>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
