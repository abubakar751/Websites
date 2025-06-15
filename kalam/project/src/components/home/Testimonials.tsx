import React from 'react';
import Section from '../ui/Section';
import { TESTIMONIALS } from '../../utils/constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section 
      id="testimonials" 
      title="Customer Testimonials" 
      subtitle="What our satisfied customers have to say about our services"
      dark={true}
      className="bg-gradient-to-br from-amber-900 via-yellow-900 to-yellow-950"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-amber-700/40 hover:-translate-y-2 transition-transform duration-300 shadow-lg"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  size={18} 
                  fill={i < testimonial.rating ? "#FFC107" : "none"}
                  className={i < testimonial.rating ? "text-amber-400" : "text-yellow-700"}
                />
              ))}
            </div>
            
            <p className="text-yellow-100 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
            
            <div>
              <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
              <p className="text-amber-300 text-sm">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center max-w-xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-white mb-4 font-serif">
          Ready to Experience Our Service?
        </h3>
        <p className="text-yellow-200 mb-8 text-lg">
          Join our growing list of satisfied customers and let us transform your furniture needs into reality.
        </p>
        <div className="inline-flex bg-amber-700/60 backdrop-blur-md rounded-full px-8 py-3 items-center shadow-lg">
          <span className="text-amber-300 font-semibold mr-3">Call us at:</span>
          <a href="tel:+918451932565" className="text-white font-bold hover:text-amber-400 transition-colors">
            +91 8451932565
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
