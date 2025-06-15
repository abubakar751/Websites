import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-primary-50"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-primary-900/60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif drop-shadow-md">
            Quality Furniture <span className="text-yellow-400">Repair</span> & <span className="text-yellow-400">Manufacturing</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-100 mb-8 drop-shadow-sm">
            Serving Mumbai since 2018. Expert craftsmanship for all your furniture needs, from repairs to custom manufacturing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services">
              <Button
                variant="primary"
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-primary-900 font-semibold"
              >
                Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center shadow-md hover:shadow-lg transition">
              <div className="text-yellow-400 font-bold text-2xl md:text-3xl">7+</div>
              <div className="text-white text-sm md:text-base">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center shadow-md hover:shadow-lg transition">
              <div className="text-yellow-400 font-bold text-2xl md:text-3xl">500+</div>
              <div className="text-white text-sm md:text-base">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center col-span-2 sm:col-span-1 shadow-md hover:shadow-lg transition">
              <div className="text-yellow-400 font-bold text-2xl md:text-3xl">100%</div>
              <div className="text-white text-sm md:text-base">Quality Assurance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
