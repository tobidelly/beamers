import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, X, Menu } from 'lucide-react';

interface NavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  setShowEnrollForm: (show: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  setShowEnrollForm,
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { to: "/#about", text: "About" },
    { to: "/#curriculum", text: "Curriculum" },
    { to: "/admissions", text: "Admissions" },
    { to: "/contact", text: "Contact" }
  ];

  const navClasses = isHomePage 
    ? "relative z-10 bg-gradient-to-b from-black/50 to-transparent"
    : "relative z-10 bg-blue-900";

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-white" />
            <span className="text-white font-bold text-xl">Beamers International Schools</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  {link.text}
                </Link>
              ))}
              <button
                onClick={() => setShowEnrollForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Enroll Now
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/50 backdrop-blur-sm rounded-md mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setShowEnrollForm(true);
                }}
                className="w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};