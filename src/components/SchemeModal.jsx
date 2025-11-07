// Modal component - displays full scheme details in a popup
import { X, ExternalLink, FileText, CheckCircle, ClipboardList } from 'lucide-react';

// Convert common YouTube URLs to the embeddable /embed/ format
function getEmbedUrl(rawUrl) {
  if (!rawUrl) return '';
  try {
    const url = new URL(rawUrl);
    const host = url.hostname.toLowerCase();

    if (host.includes('youtu.be')) {
      const id = url.pathname.replace(/^\//, '');
      return `https://www.youtube.com/embed/${id}`;
    }

    if (host.includes('youtube.com')) {
      if (url.pathname.startsWith('/embed/')) return rawUrl;
      if (url.pathname === '/watch') {
        const vid = url.searchParams.get('v');
        return vid ? `https://www.youtube.com/embed/${vid}` : rawUrl;
      }
    }

    return rawUrl;
  } catch (e) {
    return rawUrl;
  }
}

export default function SchemeModal({ scheme, onClose }) {
  // If no scheme is selected, don't render anything
  if (!scheme) return null;

  return (
    // Background overlay - clicking it closes the modal
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Modal content - stop clicks from closing modal */}
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header with close button */}
        <div className="sticky top-0 bg-green-700 text-white p-6 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold mb-2">{scheme.title}</h2>
            <span className="bg-green-800 px-3 py-1 rounded-full text-sm">
              {scheme.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-green-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal body content */}
        <div className="p-6 space-y-6">
          {/* Full description */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-600" />
              About the Scheme
            </h3>
            <p className="text-gray-700 leading-relaxed">{scheme.description}</p>
          </div>

          {/* Eligibility criteria */}
          {scheme.eligibility && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Eligibility
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {scheme.eligibility.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          {scheme.requirements && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-green-600" />
                Requirements
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {scheme.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Required documents */}
          {scheme.documents && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Required Documents
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {scheme.documents.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Embedded YouTube video */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Video Tutorial</h3>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg"
                src={getEmbedUrl(scheme.videoUrl)}
                title={`${scheme.title} Tutorial`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Official link button */}
          <div className="pt-4">
            <a
              href={scheme.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Official Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
