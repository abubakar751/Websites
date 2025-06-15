import React from 'react';
import { SERVICES } from '../../utils/constants';
import Section from '../ui/Section';
import { PenTool as Tool, Hammer, Paintbrush, SprayCan as Spray, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const ServiceIcon: React.FC<{ name: string }> = ({ name }) => {
  const iconProps = { size: 40, className: "text-primary-700 mb-4" };
  
  switch(name) {
    case 'tool':
      return <Tool {...iconProps} />;
    case 'hammer':
      return <Hammer {...iconProps} />;
    case 'paintbrush':
      return <Paintbrush {...iconProps} />;
    case 'spray':
      return <Spray {...iconProps} />;
    default:
      return <Tool {...iconProps} />;
  }
};

const Services: React.FC = () => {
  return (
    <Section 
      id="services" 
      title="Our Services" 
      subtitle="We offer a wide range of furniture services to meet all your needs"
      className="bg-primary-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service) => (
          <div 
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <ServiceIcon name={service.icon} />
            <h3 className="text-xl font-bold mb-3 font-serif text-primary-900">{service.title}</h3>
            <p className="text-primary-700 mb-4 opacity-80">{service.description}</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800 transition-colors"
            >
              Learn more <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-primary-900 rounded-lg p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
          Need a Custom Service?
        </h3>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          We understand that every piece of furniture is unique. Contact us to discuss your specific requirements and get a personalized solution.
        </p>
        <Link to="/contact">
          <Button 
            variant="secondary"
            size="lg"
          >
            Get a Free Quote
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default Services;