import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/personalInfo';
import { ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [slideIndices, setSlideIndices] = useState(projects.map(() => 0));

  const handlePrevSlide = (projectIndex: number) => {
    setSlideIndices(indices => {
      const newIndices = [...indices];
      newIndices[projectIndex] = 
        (newIndices[projectIndex] - 1 + projects[projectIndex].images.length) % 
        projects[projectIndex].images.length;
      return newIndices;
    });
  };

  const handleNextSlide = (projectIndex: number) => {
    setSlideIndices(indices => {
      const newIndices = [...indices];
      newIndices[projectIndex] = 
        (newIndices[projectIndex] + 1) % projects[projectIndex].images.length;
      return newIndices;
    });
  };

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-3">Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Check out my recent work and projects that showcase my skills and expertise
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeProject === index
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            key={`image-${activeProject}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-lg shadow-lg aspect-video"
          >
            <div className="slide-container h-full">
              <div 
                className="project-slider h-full"
                style={{ transform: `translateX(-${slideIndices[activeProject] * 100}%)` }}
              >
                {projects[activeProject].images.map((image, idx) => (
                  <div 
                    key={idx} 
                    className="project-slide h-full"
                  >
                    <img 
                      src={image} 
                      alt={`${projects[activeProject].title} - Image ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => handlePrevSlide(activeProject)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={() => handleNextSlide(activeProject)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
            
            <div className="absolute bottom-4 right-4 flex space-x-1">
              {projects[activeProject].images.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`w-2 h-2 rounded-full ${
                    slideIndices[activeProject] === idx ? 'bg-white' : 'bg-white/50'
                  }`}
                ></span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            key={`details-${activeProject}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {projects[activeProject].title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {projects[activeProject].description}
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {projects[activeProject].skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {projects[activeProject].achievements && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  Achievements
                </h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {projects[activeProject].achievements.map((achievement, idx) => (
                    <li key={idx} className="mb-1">{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-auto">
              <a 
                href="#" 
                className="btn btn-outline inline-flex items-center"
                onClick={(e) => e.preventDefault()}
              >
                <span>View Details</span>
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;