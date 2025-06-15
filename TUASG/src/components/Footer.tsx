import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">ت</span>
              </div>
              <div>
                <h3 className={`font-bold text-xl ${language === 'ur' ? 'font-urdu' : ''}`}>
                  {language === 'en' ? 'Tanzeem Ulma' : 'تنظیم علماء'}
                </h3>
                <p className={`text-gray-300 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {language === 'en' ? 'Ahle Sunnat Wal Jamaat' : 'اہل سنت والجماعت'}
                </p>
              </div>
            </div>
            <p className={`text-gray-300 mb-6 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold text-lg mb-4 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {t('footer.quicklinks')}
            </h4>
            <ul className={`space-y-2 ${language === 'ur' ? 'text-right' : ''}`}>
              <li>
                <Link to="/" className={`text-gray-300 hover:text-emerald-400 transition-colors duration-200 ${language === 'ur' ? 'font-urdu' : ''}`}>
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className={`text-gray-300 hover:text-emerald-400 transition-colors duration-200 ${language === 'ur' ? 'font-urdu' : ''}`}>
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/departments" className={`text-gray-300 hover:text-emerald-400 transition-colors duration-200 ${language === 'ur' ? 'font-urdu' : ''}`}>
                  {t('nav.departments')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`text-gray-300 hover:text-emerald-400 transition-colors duration-200 ${language === 'ur' ? 'font-urdu' : ''}`}>
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`font-semibold text-lg mb-4 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {t('footer.connect')}
            </h4>
            <div className={`space-y-3 ${language === 'ur' ? 'text-right' : ''}`}>
              <div className={`flex items-center text-gray-300 ${language === 'ur' ? 'flex-row-reverse' : ''}`}>
                <MapPin className="w-5 h-5 mr-2" />
                <span className={`text-sm ${language === 'ur' ? 'font-urdu mr-2' : ''}`}>Govandi, Mumbai</span>
              </div>
              <div className={`flex items-center text-gray-300 ${language === 'ur' ? 'flex-row-reverse' : ''}`}>
                <Phone className="w-5 h-5 mr-2" />
                <span className="text-sm">+91 XXXX XXXXXX</span>
              </div>
              <div className={`flex items-center text-gray-300 ${language === 'ur' ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-5 h-5 mr-2" />
                <span className="text-sm">info@tanzeemulma.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className={`text-gray-400 text-sm ${language === 'ur' ? 'font-urdu' : ''}`}>
            © 2024 {language === 'en' ? 'Tanzeem Ulma Ahle Sunnat Wal Jamaat. All rights reserved.' : 'تنظیم علماء اہل سنت والجماعت۔ تمام حقوق محفوظ ہیں۔'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;