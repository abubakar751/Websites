import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Skills', path: '/skills' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold text-accent-500 font-heading">MU</span>
            </motion.div>
            <span className="text-xl font-semibold font-heading hidden sm:block">Mohammad Umair</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-1">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-4 py-2 font-medium transition-all duration-300 rounded-md hover:text-accent-400 ${
                        isActive
                          ? 'text-accent-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-600 after:rounded-full'
                          : 'text-gray-300'
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            <a 
              href="/resume.pdf" 
              download="Mohammad_Umair_Resume.pdf"
              className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-300"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-dark-800 hover:bg-dark-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-dark-800 hover:bg-dark-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md bg-dark-800 hover:bg-dark-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-dark-800"
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md font-medium transition-colors ${
                      isActive ? 'bg-accent-700 text-white' : 'text-gray-300 hover:bg-dark-700'
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <li>
              <a 
                href="/resume.pdf" 
                download="Mohammad_Umair_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 mt-2 bg-accent-600 text-white rounded-md"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;