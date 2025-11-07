// Navigation bar component - appears at top of every page
import { Link } from 'react-router-dom';
import { Menu, X, Sprout, UserCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  // State to control mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);
  // Track simple logged-in state (stored in localStorage)
  const [isLoggedIn, setIsLoggedIn] = useState(
    typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true'
  );

  // Listen for auth changes (login/logout) triggered elsewhere in the app
  useEffect(() => {
    const handler = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    window.addEventListener('authChange', handler);

    // Also listen to storage events in case multiple tabs are open
    const storageHandler = (e) => {
      if (e.key === 'isLoggedIn') handler();
    };
    window.addEventListener('storage', storageHandler);

    return () => {
      window.removeEventListener('authChange', handler);
      window.removeEventListener('storage', storageHandler);
    };
  }, []);

  // Navigation links array for easy maintenance
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/schemes', label: 'Schemes' },
    { path: '/videos', label: 'Video Tutorials' },
    { path: '/links', label: 'Official Links' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and site name */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <Sprout className="w-8 h-8" />
            <span>Farmer Portal</span>
          </Link>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-green-200 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Login button (hidden when logged in) */}
            {!isLoggedIn && (
              <Link
                to="/login"
                className="flex items-center gap-2 bg-green-800 hover:bg-green-900 px-4 py-2 rounded-lg transition-colors"
              >
                <UserCircle className="w-5 h-5" />
                <span>Login</span>
              </Link>
            )}
            {isLoggedIn && (
              <button
                onClick={() => {
                  localStorage.removeItem('isLoggedIn');
                  setIsLoggedIn(false);
                  window.dispatchEvent(new Event('authChange'));
                }}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
              >
                <span>Logout</span>
              </button>
            )}
          </div>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 hover:text-green-200 transition-colors"
                onClick={() => setIsOpen(false)} // Close menu after clicking
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile login/logout button */}
            {!isLoggedIn ? (
              <Link
                to="/login"
                className="flex items-center gap-2 bg-green-800 hover:bg-green-900 px-4 py-2 rounded-lg transition-colors mt-4"
                onClick={() => setIsOpen(false)}
              >
                <UserCircle className="w-5 h-5" />
                <span>Login</span>
              </Link>
            ) : (
              <button
                onClick={() => {
                  localStorage.removeItem('isLoggedIn');
                  setIsLoggedIn(false);
                  window.dispatchEvent(new Event('authChange'));
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors mt-4"
              >
                <span>Logout</span>
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
