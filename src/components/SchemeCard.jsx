// Individual scheme card component - displays scheme summary
import { ExternalLink } from 'lucide-react';

export default function SchemeCard({ scheme, onViewDetails }) {
  // Get category color based on scheme type
  const getCategoryColor = (category) => {
    const colors = {
      'Insurance': 'bg-blue-100 text-blue-800',
      'Income Support': 'bg-green-100 text-green-800',
      'Price Support': 'bg-yellow-100 text-yellow-800',
      'Irrigation': 'bg-cyan-100 text-cyan-800',
      'Energy': 'bg-orange-100 text-orange-800',
      'Sustainability': 'bg-emerald-100 text-emerald-800',
      'Social Security': 'bg-purple-100 text-purple-800',
      'Collective Farming': 'bg-pink-100 text-pink-800',
      'Organic Farming': 'bg-lime-100 text-lime-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
      {/* Category badge */}
      <div className="mb-3">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(scheme.category)}`}>
          {scheme.category}
        </span>
      </div>

      {/* Scheme title */}
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {scheme.title}
      </h3>

      {/* Short description - truncated to 150 characters */}
      <p className="text-gray-600 mb-4 line-clamp-3">
        {scheme.description.substring(0, 150)}...
      </p>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => onViewDetails(scheme)}
          className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          View Details
        </button>

        <a
          href={scheme.officialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          Visit
        </a>
      </div>
    </div>
  );
}
