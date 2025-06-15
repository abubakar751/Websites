import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for all your mobile repair needs. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Shop</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Shop no 27, 2nd floor, Sahara Market,<br />
                    Palton Rd, Opp. Manish Market,<br />
                    Mumbai 400001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-secondary-600 to-accent-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                  <a 
                    href="tel:+918652770399"
                    className="text-secondary-600 hover:text-secondary-700 font-medium text-lg transition-colors duration-200"
                  >
                    +91 86527 70399
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent-600 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                  <a 
                    href="mailto:khanhafiz8055@gmail.com"
                    className="text-accent-600 hover:text-accent-700 font-medium text-lg transition-colors duration-200"
                  >
                    khanhafiz8055@gmail.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Working Hours</h3>
                  <div className="space-y-1">
                    <p className="text-gray-600">
                      <span className="font-medium">Mon - Sat:</span> 10:00 AM - 10:00 PM
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Sunday:</span> Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Contact</h2>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/918652770399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 px-8 py-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <MessageCircle className="h-6 w-6 group-hover:animate-bounce-gentle" />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Call */}
                <a
                  href="tel:+918652770399"
                  className="w-full flex items-center justify-center space-x-3 px-8 py-6 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <Phone className="h-6 w-6 group-hover:animate-bounce-gentle" />
                  <span>Call Now</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:khanhafiz8055@gmail.com"
                  className="w-full flex items-center justify-center space-x-3 px-8 py-6 bg-gradient-to-r from-accent-600 to-purple-600 hover:from-accent-700 hover:to-purple-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <Mail className="h-6 w-6 group-hover:animate-bounce-gentle" />
                  <span>Send Email</span>
                </a>

                {/* Get Directions */}
                <a
                  href="https://www.google.com/maps/place/Mobi+Fast+Fix+Mobile+Care/@18.9475371,72.8362656,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cfcd176b7c23:0xe853eb72976a3f6c!8m2!3d18.9475371!4d72.8362656!16s%2Fg%2F11g0gxp8hs?entry=ttu&g_ep=EgoyMDI1MDYxMC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 px-8 py-6 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <MapPin className="h-6 w-6 group-hover:animate-bounce-gentle" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Note */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-center">
                  <strong>Note:</strong> We do not provide delivery or pickup services. 
                  Please visit our shop for all repair services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="my-12 px-4 sm:px-6 lg:px-8">
  {/* Embedded Google Map */}
 <div className="grid md:grid-cols-2 gap-8 p-8 bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl shadow-xl">
  {/* Map Section */}
  <div className="h-[400px] rounded-xl overflow-hidden shadow-md">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.6351446852364!2d72.83626559999999!3d18.947537099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfcd176b7c23%3A0xe853eb72976a3f6c!2sMobi%20Fast%20Fix%20Mobile%20Care!5e0!3m2!1sen!2sin!4v1749841556398!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
    
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Info Section */}
  <div className="flex flex-col justify-center">
   
    <a
      href="https://www.google.com/maps/place/Mobi+Fast+Fix+Mobile+Care/@18.9475371,72.8362656,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cfcd176b7c23:0xe853eb72976a3f6c!8m2!3d18.9475371!4d72.8362656!16s%2Fg%2F11g0gxp8hs?entry=ttu&g_ep=EgoyMDI1MDYxMC4xIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block w-fit px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-md hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
    >
      Get Directions →
    </a>
  </div>
</div>



  {/* Get Directions Button */}
  
</div>

      </div>
    </div>
  );
};

export default Contact;