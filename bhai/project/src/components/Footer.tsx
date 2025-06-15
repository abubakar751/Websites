import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mobi Fast Fix</h3>
                <p className="text-sm text-gray-400">Expert Mobile Repair</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional mobile repair services with a focus on speed and reliability. 
              Your trusted partner for all device repair needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Process', href: '/process' },
                { name: 'About', href: '/about' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-300 hover:text-secondary-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-secondary-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Shop no 27, 2nd floor, Sahara Market,<br />
                  Palton Rd, Opp. Manish Market,<br />
                  Mumbai 400001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary-400" />
                <p className="text-gray-300 text-sm">+91 86527 70399</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary-400" />
                <p className="text-gray-300 text-sm">khanhafiz8055@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-secondary-400" />
                <div>
                  <p className="text-gray-300 text-sm">Mon - Sat</p>
                  <p className="text-secondary-400 text-sm font-medium">10:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-gray-600" />
                <div>
                  <p className="text-gray-300 text-sm">Sunday</p>
                  <p className="text-gray-500 text-sm">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mobi Fast Fix. All Rights Reserved
            </p>
            <p className="opacity-70 mt-2">
    Design and develop by{' '}
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
      </div>
    </footer>
  );
};

export default Footer;