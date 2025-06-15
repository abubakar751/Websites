import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    'Expert craftsmen with decades of experience',
    'Quality materials sourced from trusted suppliers',
    'Personalized service tailored to your specific needs',
    'Timely delivery and professional installation',
    'Affordable pricing with no compromise on quality',
    'After-service support and maintenance',
  ];

  return (
    <Section 
      id="about" 
      dark={true}
      className="bg-gray-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <span className="text-yellow-400 font-medium mb-2 block tracking-wide">ABOUT US</span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-serif drop-shadow">
            Crafting Beautiful Furniture Since 2018
          </h2>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            Rahman Furniture began its journey in 2018 with a simple mission: to provide high-quality furniture repair and manufacturing services to the people of Mumbai. What started as a small workshop in Kajupada, Sakinaka has now grown into a trusted name in the furniture industry.
          </p>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            Our team of skilled craftsmen combines traditional woodworking techniques with modern technology to create beautiful, durable furniture pieces. We take pride in our attention to detail and commitment to customer satisfaction.
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 size={20} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-200">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            variant="secondary" 
            size="lg"
          >
            Learn More About Us
          </Button>
        </div>

        {/* Images */}
        <div className="relative">
          <div className="aspect-square bg-gray-700/30 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/3637786/pexels-photo-3637786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Craftsman working on wooden furniture"
              className="w-full h-full object-cover mix-blend-multiply opacity-90"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-2/3 aspect-video bg-gray-700/30 rounded-lg overflow-hidden border-8 border-gray-900 shadow-xl">
            <img 
              src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Workshop tools"
              className="w-full h-full object-cover mix-blend-multiply opacity-90"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
