// Header.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Moon, Sun, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.dir = language === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [location.pathname, language]);

  const navigation = [
    { name: language === 'en' ? 'Home' : 'ہوم', href: '/' },
    { name: language === 'en' ? 'About' : 'ہمارے بارے میں', href: '/about' },
    { name: language === 'en' ? 'Gallery' : 'گیلری', href: '/gallary' },
    {
      name: language === 'en' ? 'Departments' : 'شعبہ جات',
      href: '/departments',
      children: [
        { name: language === 'en' ? 'Darul Qaza' : 'دار القضاء', href: '/darul-qaza' },
        { name: language === 'en' ? 'Moral and Social Reform' : 'اصلاح معاشره', href: '/islah-e-muashrah' },
        { name: language === 'en' ? 'Education' : 'تعلیم', href: '/education' },
        { name: language === 'en' ? 'Media & Publications' : 'میڈیا و اشاعت', href: '/publicationmedia' },
        { name: language === 'en' ? 'Welfare' : 'فلاحی', href: '/welfare' },
      ],
    },
    { name: language === 'en' ? 'Mission' : 'مشن', href: '/mission' },
    { name: language === 'en' ? 'Plans' : 'منصوبے', href: '/plans' },
    {
      name: language === 'en' ? 'Needs & Requirements' : 'ضروریات و تقاضے',
      href: '/needs'
    },
    { name: language === 'en' ? 'Testimonials' : 'تعریفات و تاثرات', href: '/testimonials' },

    { name: language === 'en' ? 'Contact' : 'رابطہ', href: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
    // Close sidebar when switching languages to prevent layout issues
    setIsSidebarOpen(false);
  };

  // Always open sidebar from left in both RTL and LTR
  const sidebarPosition = 'left-0';
  const sidebarTransform = isSidebarOpen ? 'translate-x-0' : '-translate-x-full';

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center py-4 ${language === 'ur' ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
              dir={language === 'ur' ? 'rtl' : 'ltr'}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-emerald-600 shadow-md">
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="hidden md:block leading-tight">
                <h1 className="font-bold text-lg md:text-xl text-emerald-800 dark:text-emerald-400">
                  {language === 'en' ? 'Tanzeem Ulma' : 'تنظیم العلماء'}
                </h1>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-300">
                  {language === 'en' ? 'Ahle Sunnat Wal Jamaat' : 'اہل سنت والجماعت'}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 rtl:space-x-reverse">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name} className="relative group">
                    <button
                      className={`px-3 py-2 lg:px-4 rounded-full text-sm font-medium flex items-center space-x-1 rtl:space-x-reverse transition-all ${location.pathname === item.href
                          ? 'bg-gradient-to-r from-emerald-600 to-emerald-400 text-white shadow'
                          : 'text-gray-700 dark:text-gray-200 hover:text-emerald-600 hover:bg-emerald-100 dark:hover:bg-gray-700'
                        }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className={`absolute ${language === 'ur' ? 'right-0' : 'left-0'} top-full mt-2 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-40`}>
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-700"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-3 py-2 lg:px-4 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === item.href
                        ? 'bg-gradient-to-r from-emerald-600 to-emerald-400 text-white shadow'
                        : 'text-gray-700 dark:text-gray-200 hover:text-emerald-600 hover:bg-emerald-100 dark:hover:bg-gray-700'
                      }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-3 py-2 rounded-full border border-emerald-300 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-gray-700 transition-all"
                aria-label={language === 'en' ? 'Switch to Urdu' : 'Switch to English'}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{language === 'en' ? 'اردو' : 'EN'}</span>
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-gray-300 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar - Always opens from left */}
      <div
        className={`fixed top-0 ${sidebarPosition} h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform ${sidebarTransform} transition-transform duration-300 ease-in-out`}
        dir={language === 'ur' ? 'rtl' : 'ltr'}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-emerald-700 dark:text-emerald-400">
            {language === 'en' ? 'Menu' : 'مینو'}
          </h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-500 dark:text-gray-200"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-2">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setExpandedMenu(expandedMenu === item.name ? null : item.name)}
                    className="w-full flex justify-between items-center px-4 py-2 text-left text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-800 rounded"
                  >
                    {item.name}
                    {expandedMenu === item.name ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedMenu === item.name &&
                    item.children.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        onClick={() => setIsSidebarOpen(false)}
                        className="block px-6 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-gray-700 rounded"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                </>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`block px-4 py-2 text-base font-medium rounded ${location.pathname === item.href
                      ? 'bg-emerald-100 dark:bg-gray-700 text-emerald-800 dark:text-white'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-800'
                    }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Header;