// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();
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
      href: '/needs',
    },
    { name: language === 'en' ? 'Testimonials' : 'تعریفات و تاثرات', href: '/testimonials' },
    { name: language === 'en' ? 'Contact' : 'رابطہ', href: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
    setIsSidebarOpen(false);
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const isChildActive = (children: { href: string }[] = []) => {
    return children.some(child => location.pathname.startsWith(child.href));
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center py-3 ${language === 'ur' ? 'flex-row-reverse' : ''}`}>
            {/* Logo with full organization name */}
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse group"
              dir={language === 'ur' ? 'rtl' : 'ltr'}
              aria-label={language === 'en' ? 'Home' : 'ہوم'}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-emerald-500">
                <img 
                  src="/logo.jpg" 
                  alt={language === 'en' ? 'Tanzeem Ulma Logo' : 'تنظیم العلماء لوگو'} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="leading-tight">
                <h1 className="font-bold text-lg md:text-xl text-emerald-800 dark:text-emerald-300">
                  {language === 'en' ? 'Tanzeem Ulma E Ahle Sunnat' : 'تنظیم العلماء اہل سنت'}
                </h1>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-300">
                 
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 rtl:space-x-reverse">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <>
                      <div className="flex items-center">
                        <Link
                          to={item.href}
                          className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                            isActive(item.href) || isChildActive(item.children)
                              ? 'bg-gradient-to-r from-emerald-600 to-emerald-400 text-white shadow'
                              : 'text-gray-700 dark:text-gray-200 hover:text-emerald-600 hover:bg-emerald-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          {item.name}
                        </Link>
                        <button 
                          className="p-1 text-gray-700 dark:text-gray-200 hover:text-emerald-600"
                          aria-label={language === 'en' ? 'Toggle submenu' : 'ذیلی مینو کو ٹوگل کریں'}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                      <div
                        className={`absolute ${language === 'ur' ? 'right-0' : 'left-0'} mt-1 w-56 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40`}
                        role="menu"
                      >
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className={`block px-4 py-2 text-sm ${
                              isActive(subItem.href)
                                ? 'bg-emerald-100 dark:bg-gray-700 text-emerald-800 dark:text-white'
                                : 'text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-700'
                            }`}
                            role="menuitem"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-emerald-600 to-emerald-400 text-white shadow'
                          : 'text-gray-700 dark:text-gray-200 hover:text-emerald-600 hover:bg-emerald-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
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

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 ${language === 'ur' ? 'right-0' : 'left-0'} w-full max-w-xs bg-white dark:bg-gray-900 shadow-xl z-50 transform ${
          isSidebarOpen ? 'translate-x-0' : language === 'ur' ? 'translate-x-full' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
        dir={language === 'ur' ? 'rtl' : 'ltr'}
        aria-modal="true"
        role="dialog"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500">
              <img 
                src="/logo.jpg" 
                alt={language === 'en' ? 'Tanzeem Ulma Logo' : 'تنظیم العلماء لوگو'} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
                {language === 'en' ? 'Tanzeem Ulma E Ahle Sunnat' : 'تنظیم العلماء اہل سنت'}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-300">
               
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-500 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="overflow-y-auto h-[calc(100%-60px)] p-4 space-y-1">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.href}
                        onClick={() => setIsSidebarOpen(false)}
                        className={`px-4 py-3 text-base font-medium rounded-lg flex-grow ${
                          isActive(item.href) || isChildActive(item.children)
                            ? 'bg-emerald-100 dark:bg-gray-700 text-emerald-800 dark:text-white'
                            : 'text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-800'
                        }`}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => setExpandedMenu(expandedMenu === item.name ? null : item.name)}
                        className="p-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                        aria-expanded={expandedMenu === item.name}
                      >
                        {expandedMenu === item.name ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    {expandedMenu === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            onClick={() => setIsSidebarOpen(false)}
                            className={`block px-4 py-2 text-sm rounded-lg ${
                              isActive(subItem.href)
                                ? 'bg-emerald-100 dark:bg-gray-700 text-emerald-800 dark:text-white'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-800'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg ${
                    isActive(item.href)
                      ? 'bg-emerald-100 dark:bg-gray-700 text-emerald-800 dark:text-white'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;