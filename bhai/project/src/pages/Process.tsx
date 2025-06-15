import React from 'react';
import { Search, FileText, Wrench, CheckCircle2, Smartphone } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Diagnose",
      description: "Bring your device to us, and we'll perform a thorough diagnosis to identify the issue.",
      details: "Our expert technicians use advanced diagnostic tools to accurately identify problems and provide you with a detailed assessment.",
      icon: Search,
      color: "from-primary-500 to-primary-600"
    },
    {
      id: 2,
      title: "Get a Quote",
      description: "Receive a transparent and competitive quote for the repair service required.",
      details: "We provide upfront pricing with no hidden fees. You'll know exactly what to expect before we begin any work.",
      icon: FileText,
      color: "from-secondary-500 to-secondary-600"
    },
    {
      id: 3,
      title: "Repair",
      description: "Our technicians use high-quality parts and tools to repair your device promptly.",
      details: "We use only genuine or high-quality compatible parts and follow industry best practices for all repairs.",
      icon: Wrench,
      color: "from-accent-500 to-accent-600"
    },
    {
      id: 4,
      title: "Quality Check",
      description: "We ensure everything works perfectly through a comprehensive quality check.",
      details: "Every repair undergoes rigorous testing to ensure optimal performance and reliability before returning to you.",
      icon: CheckCircle2,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 5,
      title: "Pickup",
      description: "Pick up your repaired device, restored to top condition for your convenience.",
      details: "Your device is ready for pickup with a warranty and care instructions to keep it running smoothly.",
      icon: Smartphone,
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Works</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Mobi Fast Fix, we follow a simple and efficient process to ensure your device gets repaired quickly and effectively
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col lg:flex-row items-center gap-12 animate-slide-up ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4 shadow-lg`}>
                    {step.id}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{step.title}</h2>
                </div>
                <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {step.details}
                </p>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0">
                <div className={`w-32 h-32 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group`}>
                  <step.icon className="h-16 w-16 text-white group-hover:animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <div className="mt-20 animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Process Timeline</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full"></div>
            
            {/* Timeline Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm mr-3`}>
                          {step.id}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary-600 rounded-full shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-slide-up">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Bring your device to our shop for a free diagnosis and transparent quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918652770399"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Call Now: +91 86527 70399
              </a>
              <a
                href="https://wa.me/918652770399"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;