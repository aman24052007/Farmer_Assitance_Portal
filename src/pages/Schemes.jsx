// Schemes page - browse and filter all government schemes
import { useState } from 'react';
import { Search } from 'lucide-react';
import { schemesData } from '../data/schemesData';
import SchemeCard from '../components/SchemeCard';
import SchemeModal from '../components/SchemeModal';

export default function Schemes() {
  // State for search query
  const [searchTerm, setSearchTerm] = useState('');
  // State for category filter
  const [selectedCategory, setSelectedCategory] = useState('All');
  // State for selected scheme in modal
  const [selectedScheme, setSelectedScheme] = useState(null);

  // Get unique categories from schemes data
  const categories = ['All', ...new Set(schemesData.map(scheme => scheme.category))];

  // Filter schemes based on search and category
  const filteredSchemes = schemesData.filter(scheme => {
    // Check if scheme matches search term (case-insensitive)
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Check if scheme matches selected category
    const matchesCategory = selectedCategory === 'All' || scheme.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Government Schemes</h1>
          <p className="text-green-100 text-lg">
            Explore various government schemes designed to support and empower farmers
          </p>
        </div>
      </div>

      {/* Search and filters section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Search bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search schemes by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category filter buttons */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Filter by Category:
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredSchemes.length}</span> scheme(s)
          </p>
        </div>

        {/* Schemes grid */}
        {filteredSchemes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchemes.map(scheme => (
              <SchemeCard
                key={scheme.id}
                scheme={scheme}
                onViewDetails={setSelectedScheme}
              />
            ))}
          </div>
        ) : (
          // No results message
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No schemes found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Modal for scheme details */}
      {selectedScheme && (
        <SchemeModal
          scheme={selectedScheme}
          onClose={() => setSelectedScheme(null)}
        />
      )}
    </div>
  );
}
