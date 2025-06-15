import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Gallery from '../components/home/Gallery';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;