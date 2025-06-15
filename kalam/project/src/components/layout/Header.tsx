import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-white/80 backdrop-blur-sm py-3'}`
      }
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`text-2xl md:text-3xl font-bold font-serif transition-colors ${
              isScrolled ? 'text-blue-900' : 'text-gray-900'
            }`}
          >
            Rahman Furniture
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? 'text-amber-500'
                        : isScrolled
                        ? 'text-blue-700 hover:text-amber-500'
                        : 'text-gray-700 hover:text-amber-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              size="sm"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white shadow-md"
            >
              <Phone size={16} />
              Call Now
            </Button>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className={`md:hidden focus:outline-none ${
              isScrolled ? 'text-blue-900' : 'text-gray-900'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 top-full shadow-lg">
          <ul className="px-4 py-2">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="py-2 border-b border-gray-200 last:border-0"
              >
                <Link
                  to={link.href}
                  onClick={toggleMenu}
                  className={`block transition-colors ${
                    isActive(link.href)
                      ? 'text-amber-500'
                      : 'text-blue-700 hover:text-amber-500'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Button
                variant="primary"
                className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white shadow-md"
              >
                <Phone size={16} />
                Call Now
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
