import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive mobile repair solutions with expert craftsmanship and premium quality parts
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-slide-up">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Don't See Your Issue Listed?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We handle a wide variety of mobile device issues. Contact us for a free consultation and diagnosis.
            </p>
            <a
              href="tel:+918652770399"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Call Now: +91 86527 70399
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;