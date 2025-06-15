import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/personalInfo';
import { ServerIcon, MonitorIcon, DatabaseIcon, TerminalIcon, WrenchIcon } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All', icon: WrenchIcon },
    { id: 'backend', name: 'Backend', icon: ServerIcon },
    { id: 'frontend', name: 'Frontend', icon: MonitorIcon },
    { id: 'database', name: 'Database', icon: DatabaseIcon },
    { id: 'devops', name: 'DevOps', icon: TerminalIcon },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section bg-white dark:bg-dark-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-3">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            My expertise and technological knowledge across various domains
          </p>
        </motion.div>
        
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full flex items-center transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
                }`}
              >
                <Icon size={18} className="mr-2" />
                {category.name}
              </button>
            );
          })}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-50 dark:bg-dark-700 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h3>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`h-2.5 rounded-full ${
                    skill.level >= 90 ? 'bg-success-500' :
                    skill.level >= 80 ? 'bg-primary-500' :
                    skill.level >= 70 ? 'bg-secondary-500' :
                    skill.level >= 60 ? 'bg-accent-500' : 'bg-warning-500'
                  }`}
                ></motion.div>
              </div>
              <div className="mt-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  skill.category === 'backend' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                  skill.category === 'frontend' ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300' :
                  skill.category === 'database' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                  skill.category === 'devops' ? 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300' :
                  'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}>
                  {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;