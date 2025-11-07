// Home page - main landing page with hero section
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, GraduationCap, Phone } from 'lucide-react';

export default function Home() {
  // Feature cards data
  const features = [
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: 'Government Schemes',
      description: 'Access information about 10+ major agricultural schemes designed to support farmers.',
      link: '/schemes'
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-green-600" />,
      title: 'Video Tutorials',
      description: 'Watch detailed video guides explaining each scheme in simple language.',
      link: '/videos'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: 'Official Resources',
      description: 'Direct links to government portals for applications and support.',
      link: '/links'
    },
    {
      icon: <Phone className="w-12 h-12 text-green-600" />,
      title: 'Get Help',
      description: 'Have questions? Check our FAQ or contact us for assistance.',
      link: '/contact'
    }
  ];

  return (
    <div>
      {/* Hero section with background gradient */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to Farmer Assistance Portal
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Your one-stop destination for information about government schemes,
              subsidies, and support programs designed to empower Indian farmers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/schemes"
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
              >
                Explore Schemes
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/videos"
                className="bg-green-700 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Watch Tutorials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How We Help Farmers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our portal provides comprehensive information and resources to help you
              access government benefits and improve your farming practices.
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Access Government Benefits?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Browse through our comprehensive list of schemes and find the ones
            that best suit your needs.
          </p>
          <Link
            to="/schemes"
            className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
          >
            View All Schemes
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
