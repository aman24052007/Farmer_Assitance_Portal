// Official Links page - list of government portal links
import { ExternalLink, Link as LinkIcon } from 'lucide-react';
import { schemesData } from '../data/schemesData';

export default function OfficialLinks() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <LinkIcon className="w-10 h-10" />
            Official Links
          </h1>
          <p className="text-green-100 text-lg">
            Direct links to official government portals for scheme applications
          </p>
        </div>
      </div>

      {/* Links grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemesData.map(scheme => (
            <a
              key={scheme.id}
              href={scheme.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 border-2 border-transparent hover:border-green-500"
            >
              {/* Category badge */}
              <div className="mb-3">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {scheme.category}
                </span>
              </div>

              {/* Scheme title */}
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-start justify-between gap-2">
                <span>{scheme.title}</span>
                <ExternalLink className="w-5 h-5 text-green-600 flex-shrink-0" />
              </h3>

              {/* Short description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {scheme.description}
              </p>

              {/* Link display */}
              <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                <LinkIcon className="w-4 h-4" />
                <span className="truncate">Visit Official Portal</span>
              </div>
            </a>
          ))}
        </div>

        {/* Additional helpful links section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Other Useful Government Portals
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://www.india.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-green-600" />
              <div>
                <div className="font-semibold text-gray-800">National Portal of India</div>
                <div className="text-sm text-gray-600">india.gov.in</div>
              </div>
            </a>

            <a
              href="https://www.mygov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-green-600" />
              <div>
                <div className="font-semibold text-gray-800">MyGov India</div>
                <div className="text-sm text-gray-600">mygov.in</div>
              </div>
            </a>

            <a
              href="https://farmer.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-green-600" />
              <div>
                <div className="font-semibold text-gray-800">Kisan Portal</div>
                <div className="text-sm text-gray-600">farmer.gov.in</div>
              </div>
            </a>

            <a
              href="https://mkisan.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-green-600" />
              <div>
                <div className="font-semibold text-gray-800">mKisan Portal</div>
                <div className="text-sm text-gray-600">mkisan.gov.in</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
