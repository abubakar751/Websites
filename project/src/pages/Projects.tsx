import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  highlights: string[];
  githubLink?: string;
  demoLink?: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "IPL Win Probability Predictor",
      description: "Developed a machine learning model to predict the win probability of IPL cricket matches based on historical data and real-time match events.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter Notebook"],
      image: "https://images.pexels.com/photos/163444/sport-tee-match-game-163444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Collected and preprocessed match data (team stats, player performance, real-time events)",
        "Built and trained ML models to predict match outcomes with high accuracy",
        "Implemented feature engineering to improve model performance",
        "Visualized predictions with real-time updates using Python libraries"
      ],
      githubLink: "https://github.com",
      demoLink: "https://demo-link.com"
    },
    {
      id: 2,
      title: "Movie Recommendation System",
      description: "Developed a machine learning model to recommend movies to users based on their preferences, using collaborative filtering techniques.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      highlights: [
        "Preprocessed user and movie data for training recommendation models",
        "Implemented collaborative filtering algorithms to suggest relevant movies",
        "Built content-based filtering for cold-start problem solutions",
        "Evaluated model performance using precision and RMSE metrics"
      ],
      githubLink: "https://github.com",
      demoLink: "https://demo-link.com"
    }
  ];

  const openProjectModal = (project: Project) => {
    setActiveProject(project);
  };

  const closeProjectModal = () => {
    setActiveProject(null);
  };

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold font-heading mb-2">My Projects</h1>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my data science projects showcasing analytical skills, machine learning expertise, 
            and problem-solving capabilities. Each project demonstrates my approach to extracting 
            insights from data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="bg-dark-800/50 rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-primary-600/20 transition-all duration-300"
              onClick={() => openProjectModal(project)}
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-primary-600/20 text-primary-400 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-dark-700/50 text-gray-400 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="p-2 bg-dark-900/80 rounded-full text-primary-500 hover:bg-primary-600 hover:text-white transition-colors duration-300"
                    aria-label="View Project"
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 line-clamp-3 mb-4">
                  {project.description}
                </p>
                <button className="text-primary-500 hover:text-primary-400 transition-colors duration-300 flex items-center gap-1 text-sm font-medium">
                  View Project Details <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-900/80 flex items-center justify-center z-50 p-4"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-64 md:h-80 overflow-hidden relative">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 p-2 bg-dark-900/80 text-white rounded-full hover:bg-primary-600 transition-colors duration-300"
                  aria-label="Close modal"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{activeProject.title}</h2>
                  <div className="flex gap-2 flex-wrap">
                    {activeProject.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                <p className="text-gray-300 mb-6">
                  {activeProject.description}
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-300">
                  {activeProject.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 mt-8">
                  {activeProject.githubLink && (
                    <a 
                      href={activeProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-5 py-2.5 bg-dark-700 hover:bg-dark-600 text-white rounded-lg transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  )}
                  
                  {activeProject.demoLink && (
                    <a 
                      href={activeProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;