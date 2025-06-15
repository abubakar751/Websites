import React from 'react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { experiences } from '../data/experiences';

const Experience: React.FC = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey as a Software Engineer."
        />
        
        <ExperienceTimeline experiences={experiences} />
      </div>
    </PageTransition>
  );
};

export default Experience;