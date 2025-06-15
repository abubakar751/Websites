import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { Mail, MapPin, Phone, Award, BookOpen, Code } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technical Expertise",
      description: "Java/J2EE, Spring Boot, Microservices"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Experience",
      description: "3.2+ years in enterprise development"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Education",
      description: "BCA from Pune University"
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <SectionHeading title="About Me" />
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="prose dark:prose-invert">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Senior Software Engineer specializing in enterprise solutions with a focus on banking and financial sectors. Experienced in developing scalable applications using modern technologies and best practices.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <div className="text-blue-600 dark:text-blue-400 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-600 dark:text-gray-400">Sakinaka, Mumbai (400072)</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-600 dark:text-gray-400">asadjit77@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-600 dark:text-gray-400">+91 7458872341</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Key Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Java/J2EE', 'Spring Boot', 'Microservices', 'GraphQL', 'REST APIs', 'PostgreSQL'].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-md text-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;