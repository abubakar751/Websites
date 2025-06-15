import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Award, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ServiceCard from '../components/ServiceCard';
import ImageSlider from '../components/ImageSlider';
import { services } from '../data/services';

// Carousel images data
const carouselImages = [
  {
    src: "https://itechnologyaustralia.com.au/wp-content/uploads/2023/05/mobile-repair-monah01.jpg",
    alt: "Mobile Repair Service",
    caption: "Professional Mobile Repairs",
    subtext: "Quality repairs with warranty"
  },
  {
    src: "https://jabbareviews.com/wp-content/uploads/3-samsung-galaxy-s24-ultra-rumors-thatll-make-you-skip-iphon_z1hh-scaled.jpg",
    alt: "Fast Repair Service",
    caption: "Same Day Repairs Available",
    subtext: "Get your device back the same day"
  },
  {
    src: "https://smartrepairexpress.co.uk/wp-content/uploads/2023/01/FTtalSrWUAUJFwA.jpg",
    alt: "Expert Technicians",
    caption: "Certified Technicians",
    subtext: "Skilled professionals with years of experience"
  }
];






const Home = () => {
  
  const featuredServices = services.slice(0, 6);

  return (
    <div className="animate-fade-in">
     <section className="relative py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-5 w-32 h-32 bg-secondary-500 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-5 w-24 h-24 bg-accent-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-10 w-16 h-16 bg-primary-500 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-1/3 left-8 w-20 h-20 bg-purple-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <div className="mb-6 animate-zoom-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                <span className="block animate-slide-in-left">Mobi Fast Fix</span>
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl font-medium text-secondary-300 mb-6 animate-slide-in-right">
                <span className="block">Expert Mobile Repair</span>
                <span className="block text-base sm:text-lg text-gray-300 mt-2">Mumbai's Trusted Repair Center</span>
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-fade">
              Professional repair services for every device with speed, reliability, and precision. 
              <span className="block mt-2 text-secondary-300 font-medium">Same-day repairs available!</span>
            </p>
            
            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-300 animate-slide-fade">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-secondary-400" />
                <span>Warranty Included</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-secondary-400" />
                <span>Fast Service</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-secondary-400" />
                <span>Expert Technicians</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Intro Section */}
      
      {/* Services Slider Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Repair Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive mobile repair solutions
            </p>
          </div>
          
          <div className="animate-slide-up">
            <ImageSlider />
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Mobi Fast Fix?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, quality, and speed for exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Guarantee",
                description: "High-quality parts with warranty on all repairs",
                color: "primary",
                gradient: "from-primary-500 to-primary-600"
              },
              {
                icon: Clock,
                title: "Fast Service",
                description: "Quick diagnosis and efficient repair process",
                color: "secondary",
                gradient: "from-secondary-500 to-secondary-600"
              },
              {
                icon: Award,
                title: "Expert Technicians",
                description: "Skilled professionals with years of experience",
                color: "accent",
                gradient: "from-accent-500 to-accent-600"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Popular Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive repair solutions for all your mobile needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={service.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group text-lg"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 5-Step Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Quick and efficient repair process designed for your convenience
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {[
              { step: "1", title: "Diagnose", icon: "🔍", color: "from-primary-500 to-primary-600" },
              { step: "2", title: "Quote", icon: "💰", color: "from-secondary-500 to-secondary-600" },
              { step: "3", title: "Repair", icon: "🔧", color: "from-accent-500 to-accent-600" },
              { step: "4", title: "Test", icon: "✅", color: "from-purple-500 to-purple-600" },
              { step: "5", title: "Pickup", icon: "📱", color: "from-pink-500 to-pink-600" }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-4">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-2xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {item.step}
                  </div>
                  <div className="text-2xl sm:text-4xl mt-2 group-hover:animate-bounce-gentle">{item.icon}</div>
                </div>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900">{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/process"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent-600 to-primary-600 text-white font-semibold rounded-xl hover:from-accent-700 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group text-lg"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary-900 to-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Fix Your Device?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact us now for a free diagnosis and transparent quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918652770399"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group text-lg"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
                Call: +91 86527 70399
              </a>
              <a
                href="https://wa.me/918652770399"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 text-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;