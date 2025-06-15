import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import SkillBar from '../components/SkillBar';
import { skills, skillCategories } from '../data/skills';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredSkills = activeCategory
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;

  return (
    <PageTransition>
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="A comprehensive overview of my technical skills and proficiency levels."
        />
        
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full ${
              activeCategory === null
                ? 'bg-blue-600 dark:bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            } transition-colors`}
          >
            All Skills
          </motion.button>
          
          {skillCategories.map(category => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? 'bg-blue-600 dark:bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              } transition-colors`}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <SkillBar skill={skill} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;