import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, GraduationCap, BookOpen, Languages } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold font-heading mb-2">About Me</h1>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-primary-500">Who I Am</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                I am a passionate and driven data scientist with a bachelor's degree in computer science, 
                and I am eager to apply my analytical skills and technical knowledge to solve real-world problems.
              </p>
              <p>
                Through my academic projects and self-driven learning, I have developed a strong foundation 
                in data analysis, machine learning, and statistical modeling.
              </p>
              <p>
                While pursuing my degree, I worked on several hands-on projects that involved data wrangling, 
                building predictive models, and visualizing data insights using tools like Python, Pandas, 
                Scikit-learn, and Matplotlib.
              </p>
              <p>
                I also have experience working with SQL databases, and I am continually learning and exploring 
                new technologies in the field.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-600/20 text-primary-500 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-400">Sakinaka, Mumbai</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-600/20 text-primary-500 rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-400">khanmohdumair752@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-600/20 text-primary-500 rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-400">9792098768</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-secondary-400/20 text-secondary-400 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-2xl font-semibold text-secondary-400">Education</h2>
              </div>
              
              <div className="bg-dark-800/50 p-6 rounded-lg border-l-4 border-secondary-400">
                <h3 className="text-xl font-medium mb-1">Bachelor of Science - BSC (Computer Science)</h3>
                <p className="text-gray-400 mb-2">Mumbai University</p>
                <p className="text-gray-500">2023 - 2025</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent-500/20 text-accent-500 rounded-lg">
                  <Languages size={24} />
                </div>
                <h2 className="text-2xl font-semibold text-accent-500">Languages</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-800/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-1">English</h3>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 w-[90%]"></div>
                  </div>
                </div>
                
                <div className="bg-dark-800/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-1">Hindi</h3>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 w-[95%]"></div>
                  </div>
                </div>
                
                <div className="bg-dark-800/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-1">Urdu</h3>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 w-[80%]"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-600/20 text-primary-500 rounded-lg">
                  <BookOpen size={24} />
                </div>
                <h2 className="text-2xl font-semibold text-primary-500">Interests</h2>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-dark-800/80 rounded-lg">Data Analysis</span>
                <span className="px-4 py-2 bg-dark-800/80 rounded-lg">Machine Learning</span>
                <span className="px-4 py-2 bg-dark-800/80 rounded-lg">Data Visualization</span>
                <span className="px-4 py-2 bg-dark-800/80 rounded-lg">Problem Solving</span>
                <span className="px-4 py-2 bg-dark-800/80 rounded-lg">Programming</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;