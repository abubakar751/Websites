import React from 'react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Projects" 
          subtitle="A selection of projects I've worked on throughout my career."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;