import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative bg-gradient-to-br from-white to-gray-100 dark:from-dark-800 dark:to-dark-900">
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary-400"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-secondary-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent-400"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          
          {/* Profile Image - Show First on Mobile */}
          <div className="order-1 lg:order-2 lg:col-span-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark-600 shadow-lg">
                <img
                  src="images/photo.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white px-4 py-2 rounded-lg shadow-md">
                <span className="font-semibold">Java Expert</span>
              </div>
            </motion.div>
          </div>

          {/* Intro Text - Show Second on Mobile */}
          <div className="order-2 lg:order-1 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-primary-600 dark:text-primary-400 font-medium mb-2">Hello, I'm</h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
                {personalInfo.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl">
                {personalInfo.tagline}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#contact" className="btn btn-primary">
                  Contact Me
                </a>
                <a
                  href="images/AamirResume.pdf"
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/mohammadaamir1102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:m.aamirtech1119@gmail.com"
                  className="p-2 rounded-full bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="tel:+918726881557"
                  className="p-2 rounded-full bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                  aria-label="Phone"
                >
                  <Phone size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-gray-500 dark:text-gray-400" size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
