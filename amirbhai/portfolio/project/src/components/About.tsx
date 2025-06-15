import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Award, BookOpen, Code, Server } from 'lucide-react';
import { personalInfo, education, experience, achievements } from '../data/personalInfo';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-3">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Get to know more about me, my background, and what I do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {personalInfo.about}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary-500" size={20} />
                <span className="text-gray-700 dark:text-gray-300">{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary-500" size={20} />
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary-500" size={20} />
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            
            <a href="images/AamirResume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Download CV
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start space-x-3 p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm"
                >
                  <Award className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <BookOpen className="text-primary-500 mr-3" size={24} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="p-5 bg-white dark:bg-dark-800 rounded-lg shadow-md border-l-4 border-primary-500"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <span className="text-sm px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded">{edu.year}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                  {edu.description && <p className="text-gray-500 dark:text-gray-500 text-sm">{edu.description}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <Code className="text-primary-500 mr-3" size={24} />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="p-5 bg-white dark:bg-dark-800 rounded-lg shadow-md border-l-4 border-secondary-500"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <span className="text-sm px-2 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 rounded">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-500 dark:text-gray-500 text-sm flex items-start">
                        <span className="inline-block w-2 h-2 bg-secondary-500 rounded-full mt-1.5 mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;