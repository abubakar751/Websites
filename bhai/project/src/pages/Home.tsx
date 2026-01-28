import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Award, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ServiceCard from '../components/ServiceCard';
import ImageSlider from '../components/ImageSlider';
import { services } from '../data/services';
import { useNavigate } from "react-router-dom";


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
  },
  
];






const Home = () => {
  const navigate = useNavigate();

  const featuredServices = services.slice(0, 6);

  return (
    <div className="animate-fade-in">
     <section className="relative py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 overflow-hidden">
  {/* Main Background Image with Overlay */}
  <div className="absolute inset-0">
    {/* Background Image with dark overlay */}
    <img 
      src="https://gadzetspro.com/images-service-center/service-home-1.webp" 
      alt="Technology background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    
    {/* Dark overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>
    
    {/* Additional gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-primary-800/30 to-secondary-800/30"></div>
    
    {/* Animated gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
  </div>
  
  {/* Floating Device Repair Image */}
  <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block animate-slide-in-right">
    <div className="relative">
      {/* Glow effect behind image */}
      <div className="absolute -inset-4 bg-secondary-500/20 rounded-3xl blur-xl"></div>
      
      {/* Device repair image with frame */}
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-gray-700/50 p-2">
        <img 
          src="https://img.freepik.com/premium-photo/advanced-mobile-repair-technician-using-modern-equipment-fixes_1021867-92753.jpg" 
          alt="Mobile repair technician working"
          className="w-80 h-64 object-cover rounded-xl"
        />
        
        {/* Decorative elements on image */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary-500 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Floating badges */}
      <div className="absolute -bottom-4 left-6 bg-gradient-to-r from-secondary-600 to-accent-600 text-white text-xs font-bold py-1.5 px-4 rounded-full shadow-lg animate-bounce">
        Expert Repair
      </div>
    </div>
  </div>

  {/* Animated floating particles */}
  <div className="absolute inset-0">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }}
      />
    ))}
  </div>

  {/* Main Content */}
  <div className="relative z-10 max-w-4xl lg:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
    <div className="animate-slide-up">
      <div className="mb-6 animate-zoom-in">
        {/* Logo/Brand Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary-600 to-accent-600 rounded-2xl mb-6 shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          <span className="block animate-slide-in-left bg-gradient-to-r from-white via-secondary-100 to-white bg-clip-text text-transparent">
            Mobi Fast Fix
          </span>
        </h1>
        <div className="text-xl sm:text-2xl md:text-3xl font-medium text-secondary-300 mb-6 animate-slide-in-right">
          <span className="block">Expert Mobile Repair</span>
          <span className="block text-lg sm:text-xl text-gray-300 mt-3">Mumbai's Most Trusted Repair Center</span>
        </div>
      </div>
      
      <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed animate-slide-fade">
        Professional repair services for every device with speed, reliability, and precision. 
        <span className="block mt-4 text-secondary-300 font-semibold text-xl">Same-day repairs available!</span>
      </p>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-fade">
        <button
  onClick={() => navigate("/contact")}
  className="px-8 py-4 bg-gradient-to-r from-secondary-600 to-accent-600 text-white font-semibold rounded-xl hover:from-secondary-700 hover:to-accent-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl shadow-secondary-900/30"
>
  Book Repair Now
</button>

        <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300 border border-white/20">
          Call: +91 8652770399
        </button>
      </div>
      
      {/* Trust Indicators */}
      <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-300 animate-slide-fade">
        <div className="flex items-center backdrop-blur-sm bg-white/10 px-5 py-3 rounded-xl border border-white/10">
          <Shield className="h-5 w-5 mr-3 text-secondary-400" />
          <span className="font-medium">Warranty Included</span>
        </div>
        <div className="flex items-center backdrop-blur-sm bg-white/10 px-5 py-3 rounded-xl border border-white/10">
          <Clock className="h-5 w-5 mr-3 text-secondary-400" />
          <span className="font-medium">Fast  Service</span>
        </div>
        <div className="flex items-center backdrop-blur-sm bg-white/10 px-5 py-3 rounded-xl border border-white/10">
          <Award className="h-5 w-5 mr-3 text-secondary-400" />
          <span className="font-medium">Expert Technicians</span>
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