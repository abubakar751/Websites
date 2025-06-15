import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageCircle } from 'lucide-react';

interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  mobileTitle?: string;
}

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slides: SlideData[] = [
    {
      id: 1,
      image: 'https://electronicsrepair.co.nz/wp-content/uploads/2020/06/Samsung-phone-repair.jpg',
      title: 'Expert Screen Repair',
      mobileTitle: 'Screen Repair',
      subtitle: 'Professional LCD & Touch Services',
      description: 'High-quality screen replacements with precision installation and testing'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Hardware Solutions',
      mobileTitle: 'Hardware Fix',
      subtitle: 'Advanced Component Repair',
      description: 'Expert diagnosis and repair of all hardware components with genuine parts'
    },
    {
      id: 3,
      image: 'https://m-cdn.phonearena.com/images/article/165989-wide-two_1200/T-Mobile-and-Starlinks-satellite-powered-messaging-is-only-for-select-smartphones.jpg',
      title: 'Smartphone Specialists',
      mobileTitle: 'Phone Repair',
      subtitle: 'All Brands & Models',
      description: 'Professional repair services for iPhone, Samsung, and all smartphone brands'
    },
    {
      id: 4,
      image: 'https://fs.npstatic.com/userfiles/7043987/image/news/androidpit-iphone-batteries-smartphone.jpg',
      title: 'Battery Replacement',
      mobileTitle: 'Battery Fix',
      subtitle: 'Extended Life & Performance',
      description: 'High-capacity battery replacements for improved performance and longevity'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div 
      ref={sliderRef}
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl shadow-2xl group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Mobile-Optimized Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/50 sm:to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-end sm:items-center justify-center sm:justify-start">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-center sm:text-left pb-8 sm:pb-0">
                  <div 
                    className={`transform transition-all duration-1000 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: index === currentSlide ? '300ms' : '0ms' }}
                  >
                    <h3 className="text-sm sm:text-lg md:text-xl text-secondary-300 font-medium mb-2 animate-slide-in-left">
                      {slide.subtitle}
                    </h3>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-slide-in-left">
                      <span className="sm:hidden">{slide.mobileTitle || slide.title}</span>
                      <span className="hidden sm:block">{slide.title}</span>
                    </h2>
                    <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed animate-slide-in-left">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-in-left">
                      <a
                        href="tel:+918652770399"
                        className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </a>
                      <a
                        href="https://wa.me/918652770399"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 text-sm sm:text-base"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on Mobile */}
      <button
        onClick={prevSlide}
        className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Mobile-Optimized Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-700"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="sm:hidden absolute top-4 right-4 text-white/60 text-xs">
        Swipe to navigate
      </div>
    </div>
  );
};

export default ImageSlider;