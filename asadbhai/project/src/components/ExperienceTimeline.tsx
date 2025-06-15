import React from 'react';
import { motion } from 'framer-motion';

export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="space-y-12">
      {experiences.map((experience, index) => (
        <motion.div 
          key={experience.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="flex flex-col md:flex-row"
        >
          <div className="md:w-1/3 mb-4 md:mb-0">
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-gray-800 dark:text-white">{experience.company}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.role}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{experience.period}</p>
            </div>
          </div>
          
          <div className="hidden md:flex flex-col items-center mx-8">
            <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            <div className="w-1 flex-grow bg-blue-600 dark:bg-blue-400"></div>
          </div>
          
          <div className="md:w-2/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-400">
              {experience.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;