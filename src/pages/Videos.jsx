// Video Tutorials page - grid of embedded YouTube videos
import { schemesData } from '../data/schemesData';
import { PlayCircle } from 'lucide-react';

// Convert common YouTube URLs to the embeddable /embed/ format
function getEmbedUrl(rawUrl) {
  if (!rawUrl) return '';
  try {
    const url = new URL(rawUrl);
    const host = url.hostname.toLowerCase();

    // Short youtu.be links -> extract pathname id
    if (host.includes('youtu.be')) {
      const id = url.pathname.replace(/^\//, '');
      return `https://www.youtube.com/embed/${id}`;
    }

    // Standard youtube watch links -> use v param
    if (host.includes('youtube.com')) {
      // Already an embed URL
      if (url.pathname.startsWith('/embed/')) return rawUrl;
      if (url.pathname === '/watch') {
        const vid = url.searchParams.get('v');
        return vid ? `https://www.youtube.com/embed/${vid}` : rawUrl;
      }
    }

    // Fallback: return original url (may be already embeddable)
    return rawUrl;
  } catch (e) {
    return rawUrl;
  }
}

export default function Videos() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <PlayCircle className="w-10 h-10" />
            Video Tutorials
          </h1>
          <p className="text-green-100 text-lg">
            Watch detailed video guides for each government scheme
          </p>
        </div>
      </div>

      {/* Videos grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {schemesData.map(scheme => (
            <div
              key={scheme.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Embedded YouTube video */}
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={getEmbedUrl(scheme.videoUrl)}
                  title={`${scheme.title} Tutorial`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video details */}
              <div className="p-4">
                {/* Category badge */}
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {scheme.category}
                </span>

                {/* Scheme title */}
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {scheme.title}
                </h3>

                {/* Short description */}
                <p className="text-gray-600 text-sm line-clamp-2">
                  {scheme.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
