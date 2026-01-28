import React from 'react';
import { Helmet } from 'react-helmet-async'; // Install: npm install react-helmet-async
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  // Extract service names for keywords
  const serviceNames = services.map(service => service.title).join(', ');
  
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Mobile Repair Services in Mumbai | Screen Replacement, Battery Repair | Mobil Fast Fix</title>
        <meta 
          name="description" 
          content="Expert mobile repair services in Mumbai. Screen replacement, battery repair, water damage repair, charging port repair, software issues. Same-day service with warranty." 
        />
        <meta 
          name="keywords" 
          content={`mobile repair services Mumbai, phone repair services, ${serviceNames}, smartphone repair, iPhone service, Samsung repair`} 
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Professional Mobile Repair Services in Mumbai | Mobil Fast Fix" />
        <meta property="og:description" content="Comprehensive mobile repair solutions with expert craftsmanship and premium quality parts in Mumbai." />
        <meta property="og:url" content="https://mobi-fast-fix-mobile.netlify.app/services" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Cards */}
        <meta name="twitter:title" content="Mobile Repair Services in Mumbai | Mobil Fast Fix" />
        <meta name="twitter:description" content="Expert smartphone repair services with same-day turnaround." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://mobi-fast-fix-mobile.netlify.app/services" />
        
        {/* Structured Data for Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile Phone Repair Services",
            "description": "Comprehensive mobile repair solutions with expert craftsmanship and premium quality parts",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Mobil Fast Fix",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop no 27, 2nd floor, Sahara Market, Palton Rd, Opp. Manish Market",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400001",
                "addressCountry": "IN"
              },
              "telephone": "+91-8652770399"
            },
            "areaServed": {
              "@type": "City",
              "name": "Mumbai"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mobile Repair Services",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                },
                "position": index + 1
              }))
            }
          })}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mobi-fast-fix-mobile.netlify.app/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://mobi-fast-fix-mobile.netlify.app/services"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hidden SEO text for search engines */}
      <div className="hidden" aria-hidden="true">
        <h1>Mobile Repair Services Mumbai</h1>
        <p>Best mobile repair service center in Mumbai offering professional smartphone repairs for iPhone, Samsung, OnePlus, Xiaomi, Oppo, Vivo and all major brands. Our expert technicians provide fast, reliable repairs with genuine parts and warranty.</p>
        <h2>Our Service Areas in Mumbai</h2>
        <p>We serve all areas of Mumbai including South Mumbai, Fort, Churchgate, Marine Lines, CST, Andheri, Bandra, Juhu, Santacruz, Vile Parle, Goregaon and surrounding areas.</p>
      </div>

      <div className="py-20 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive mobile repair solutions with expert craftsmanship and premium quality parts
            </p>
          </header>

          {/* Services Grid */}
          <main>
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
          </main>

          {/* Call to Action */}
          <section className="mt-20 text-center animate-slide-up">
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
                aria-label="Call Mobil Fast Fix for mobile repair services"
              >
                Call Now: +91 86527 70399
              </a>
            </div>
          </section>

          {/* Additional SEO Content (hidden on small screens) */}
          <section className="mt-12 hidden md:block">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Mobile Repair Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Technicians</h3>
                  <p className="text-gray-600">Certified technicians with years of experience in smartphone repairs.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Genuine Parts</h3>
                  <p className="text-gray-600">We use only original and high-quality replacement parts.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Same-Day Service</h3>
                  <p className="text-gray-600">Most repairs completed within hours with our quick service.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;