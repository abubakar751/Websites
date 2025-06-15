import React from 'react';
import { motion } from 'framer-motion';

export interface Project {
  id: number;
  title: string;
  overview: string;
  technologies: string[];
  teamSize: number;
  responsibilities: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.overview}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Team Size
          </h4>
          <p className="text-gray-600 dark:text-gray-400">{project.teamSize} members</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Responsibilities
          </h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            {project.responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;