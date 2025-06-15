import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      content: 'asadjit77@gmail.com',
      link: 'mailto:asadjit77@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      content: '+91 7458872341',
      link: 'tel:+917458872341'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Location',
      content: 'Mumbai, Maharashtra',
      link: '#'
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: 'GitHub',
      content: 'github.com/asad',
      link: 'https://github.com/'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: 'LinkedIn',
      content: 'linkedin.com/in/asad',
      link: 'https://linkedin.com/in/'
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <SectionHeading title="Get in Touch" />
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                Available Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Saturday - Sunday:</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <span className="text-blue-600 dark:text-blue-400 mr-4">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Quick Response
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I typically respond within 24 hours. For urgent matters, please feel free to call directly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;