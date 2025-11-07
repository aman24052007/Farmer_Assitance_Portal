// Footer component - appears at bottom of every page
import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';

export default function Footer() {
  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="w-6 h-6" />
              <span className="text-xl font-bold">Farmer Portal</span>
            </div>
            <p className="text-green-200">
              Empowering farmers with information about government schemes and support.
            </p>
          </div>

          {/* Quick navigation links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/schemes" className="text-green-200 hover:text-white transition-colors">
                  Browse Schemes
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-green-200 hover:text-white transition-colors">
                  Video Tutorials
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-green-200 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-green-200">
              Email: support@farmerportal.gov.in<br />
              Phone: 1800-XXX-XXXX<br />
              Toll-free helpline available 24/7
            </p>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-green-800 mt-8 pt-6 text-center text-green-200">
          <p>&copy; {currentYear} Farmer Assistance Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
