import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
 
  image: string;
  features?: string[];
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-lg group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="h-4 w-4 sm:h-6 sm:w-6 text-primary-600" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        {service.features && (
          <div className="space-y-2 mb-4">
            {service.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-xs sm:text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                <span className="leading-tight">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="mt-4 sm:mt-6">
          <a
            href="tel:+918652770399"
            className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group text-sm sm:text-base"
          >
            <span>Get Quote</span>
            <svg className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;