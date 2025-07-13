import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white" dir="ltr" lang="en">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-full overflow-hidden">
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">Tanzeem Ulma</h3>
                <p className="text-gray-300">Ahle Sunnat Wal Jamaat</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Promoting Islamic values, community welfare, education, and legal
              guidance through dedicated departments and expert leadership.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-300 hover:text-emerald-600 active:text-emerald-700 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', to: '/' },
                { name: 'About', to: '/about' },
                { name: 'Departments', to: '/departments' },
                 { name: 'Gallery', to: '/gallary' },
                   { name: 'Mission', to: '/mission' },
                     { name: 'Plans', to: '/plans' },
                       { name: 'Needs & Requirements', to: '/needs' },
                   { name: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-emerald-600 active:text-emerald-700 transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-500" />
                <span>
                  Kamla Raman Nagar, Behind Saibaba Mandir, <br />
                  Near Rickshaw Stand, Eidgah Maidan, Baiganwadi, <br />
                  Govandi, Mumbai - 400043.
                </span>
              </li>
              <li className="flex items-center hover:text-emerald-600 active:text-emerald-700 transition">
                <Phone className="w-5 h-5 mr-2 text-emerald-500" />
                <span>+91 92217 43368</span>
              </li>
              <li className="flex items-center hover:text-emerald-600 active:text-emerald-700 transition">
                <Mail className="w-5 h-5 mr-2 text-emerald-500" />
                <span>tanzeemulmigovandi@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Tanzeem Ulma Ahle Sunnat Wal Jamaat. All rights reserved.
          </p>
          <p className="opacity-70 mt-2">
            Design and developed by{' '}
            <a
              href="https://im-abu-bakar.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-lg bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 bg-clip-text text-transparent animate-gradient-x cursor-pointer"
              style={{
                backgroundSize: '200% auto',
              }}
            >
              Abu Bakar
            </a>
          </p>

          <style>{`
            @keyframes gradient-x {
              0% {
                background-position: 0% center;
              }
              100% {
                background-position: 200% center;
              }
            }
            .animate-gradient-x {
              animation: gradient-x 3s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
