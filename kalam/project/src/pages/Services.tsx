import React from 'react';
import ServicesSection from '../components/home/Services';
import Section from '../components/ui/Section';

const Services: React.FC = () => {
  return (
    <div className="pt-16">
      <Section
        title="Our Services"
        subtitle="Expert furniture repair and manufacturing services in Mumbai"
        className="bg-slate-50"
      >
        <ServicesSection />
      </Section>
    </div>
  );
};

export default Services;