import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section 
      id="contact" 
      title="Contact Us" 
      subtitle="Get in touch with us for all your furniture needs"
      className="bg-yellow-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-yellow-200 mb-6 transition hover:shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-yellow-900 font-serif">Get In Touch</h3>
            <p className="text-yellow-800 mb-6">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-yellow-800 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition hover:border-yellow-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-yellow-800 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition hover:border-yellow-400"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-yellow-800 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition hover:border-yellow-400"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-yellow-800 mb-1">
                  Service Required
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition hover:border-yellow-400"
                >
                  <option value="">Select a service</option>
                  <option value="repair">Furniture Repair</option>
                  <option value="manufacturing">Custom Manufacturing</option>
                  <option value="restoration">Restoration</option>
                  <option value="polishing">Wood Polishing</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-yellow-800 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition hover:border-yellow-400"
                  placeholder="Tell us about your requirements"
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                variant="primary" 
                className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md transition"
              >
                Send Message <Send size={16} />
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <div className="bg-yellow-900 p-6 rounded-lg shadow-md mb-6 text-white">
            <h3 className="text-xl font-bold mb-4 font-serif">Contact Information</h3>
            <ul className="space-y-6">
              <li className="flex">
                <div className="mr-4">
                  <div className="bg-yellow-800 p-2 rounded-full">
                    <MapPin size={24} className="text-yellow-300" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-300">Our Location</h4>
                  <p className="text-yellow-100">
                    Kajupada, Sakinaka, 90ft Road, Mumbai, Maharashtra
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="mr-4">
                  <div className="bg-yellow-800 p-2 rounded-full">
                    <Phone size={24} className="text-yellow-300" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-300">Phone Number</h4>
                  <p className="text-yellow-100">
                    +91 8451932565<br />+91 6388153724
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="mr-4">
                  <div className="bg-yellow-800 p-2 rounded-full">
                    <Mail size={24} className="text-yellow-300" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-300">Email Address</h4>
                  <p className="text-yellow-100">abulkalam9037@gmail.com</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="mr-4">
                  <div className="bg-yellow-800 p-2 rounded-full">
                    <Clock size={24} className="text-yellow-300" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-300">Working Hours</h4>
                  <p className="text-yellow-100">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-yellow-200">
            <h3 className="text-xl font-bold mb-4 text-yellow-900 font-serif">Service Area</h3>
            <p className="text-yellow-800 mb-4">
              We provide services throughout Mumbai and suburban areas including:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                'Andheri', 'Bandra', 'Borivali', 'Chembur', 
                'Dadar', 'Ghatkopar', 'Goregaon', 'Juhu',
                'Kandivali', 'Kurla', 'Malad', 'Mulund',
                'Powai', 'Thane', 'Vashi', 'Worli'
              ].map((area) => (
                <div 
                  key={area} 
                  className="bg-yellow-100 px-3 py-1 rounded text-yellow-900 font-medium shadow-sm hover:shadow-md transition"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
