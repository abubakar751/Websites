import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter,
  ChevronRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif text-white">Rahman Furniture</h3>
            <p className="mb-4 opacity-80">
              Crafting quality furniture and providing expert repair services since 2018. 
              Serving all of Mumbai and suburban areas.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-primary-100 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-100 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-100 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name} className="transition-transform hover:translate-x-1">
                  <Link
                    to={link.path}
                    className="flex items-center opacity-80 hover:opacity-100 hover:text-gold-400"
                  >
                    <ChevronRight size={16} className="mr-2" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif text-white">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Furniture Repair', 
                'Custom Manufacturing', 
                'Restoration', 
                'Wood Polishing', 
                'Upholstery', 
                'Furniture Assembly'
              ].map((service) => (
                <li key={service} className="transition-transform hover:translate-x-1">
                  <Link
                    to="/services"
                    className="flex items-center opacity-80 hover:opacity-100 hover:text-gold-400"
                  >
                    <ChevronRight size={16} className="mr-2" /> {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mt-1 mr-3 flex-shrink-0 text-gold-400" />
                <span className="opacity-80">Kajupada, Sakinaka, 90ft Road, Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-gold-400" />
                <span className="opacity-80">+91 8451932565 <br />
                +91 6388153724</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-gold-400" />
                <span className="opacity-80">abulkalam9037@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mt-1 mr-3 flex-shrink-0 text-gold-400" />
                <span className="opacity-80">
                  Monday - Saturday: 9:00 AM - 7:00 PM<br />
                  Sunday: 10:00 AM - 4:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-10 pt-6 text-center">
          <>
  <p className="opacity-70">
    &copy; {currentYear} Rahman Furniture. All rights reserved.
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
</>

        </div>
      </div>
    </footer>
  );
};

export default Footer;