import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle2, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience", icon: Clock },
    { number: "10000+", label: "Devices Repaired", icon: CheckCircle2 },
    { number: "8000+", label: "Happy Customers", icon: Users },
    { number: "4.9", label: "Customer Rating", icon: Star }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We use only genuine and high-quality compatible parts for all repairs, ensuring longevity and performance."
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "We understand the importance of your device in daily life and strive for quick turnaround times."
    },
    {
      icon: Award,
      title: "Expert Technicians",
      description: "Our skilled technicians have years of experience and stay updated with the latest repair techniques."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "We prioritize customer satisfaction and provide transparent communication throughout the repair process."
    }
  ];

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Mobi Fast Fix</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for professional mobile repair services in Mumbai
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Story */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Mobi Fast Fix was founded with a simple mission: to provide reliable, 
                professional mobile repair services that customers can trust. Located in 
                the heart of Mumbai's bustling Sahara Market, we have been serving the 
                community with dedication and expertise.
              </p>
              <p>
                Our journey began with a passion for technology and a commitment to helping 
                people stay connected. Over the years, we have built a reputation for 
                quality repairs, honest pricing, and exceptional customer service.
              </p>
              <p>
                We understand how important your mobile device is to your daily life, 
                whether for work, staying in touch with family, or entertainment. 
                That's why we focus on delivering fast, reliable repairs that restore 
                your device to perfect working condition.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="animate-slide-in-right">
            <div 
              className="rounded-2xl shadow-xl h-96 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://a.mktgcdn.com/p/Bq5qgx9wlVCm3U1WSqLcN_0V1mecigV903PzogR4eWQ/1024x768.jpg)'
              }}
            >
              <div className="bg-gradient-to-br from-primary-900/80 to-secondary-900/80 rounded-2xl h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Professional Repair Shop</h3>
                  <p className="text-lg opacity-90">Expert technicians at work</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-slide-up">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center animate-slide-up">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              To provide exceptional mobile repair services with speed, reliability, and transparency. 
              We are committed to using quality parts, employing skilled technicians, and maintaining 
              honest communication with our customers throughout the repair process.
            </p>
            <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto shadow-lg">
              <p className="text-gray-800 font-medium text-lg">
                "Your device, our expertise – restored to perfection."
              </p>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-20 animate-slide-up">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Important Note</h3>
            <p className="text-blue-800 text-lg leading-relaxed">
              Mobi Fast Fix is dedicated to delivering professional mobile repair services with a focus on 
              speed and reliability. <strong>Kindly note that we do not provide delivery or pickup services 
              at this time.</strong> We invite customers to visit our shop for all their repair needs.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-slide-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Experience Our Service?</h3>
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
  );
};

export default About;