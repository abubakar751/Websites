import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-gray-300 py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2025 Mohammad Umair. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-dark-800 hover:bg-primary-600 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-dark-800 hover:bg-primary-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:khanmohdumair752@gmail.com"
              className="p-2 rounded-full bg-dark-800 hover:bg-primary-600 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="tel:9792098768"
              className="p-2 rounded-full bg-dark-800 hover:bg-primary-600 transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;