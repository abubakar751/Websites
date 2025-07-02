import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Contact from './pages/Contact';
import Mission from './pages/Mission';
import Gallary from'./pages/Gallary'
import DarulQaza from './pages/DarulQaza';
import IslahEMuashrah from './pages/IslahEMuashrah';
import PublicationAndMedia from './pages/PublicationAndMedia';
import Education from './pages/Education';
import SocialWelfare from './pages/SocialWelfare';
import Testimonials from './pages/Testimonials';
import AimsPage from './pages/AimsPage';
import NeedsPage from './pages/Needs';
import Needs from './pages/Needs';

// src/App.tsx
function App() {

  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          {/* Remove hardcoded bg-white */}
          <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/plans" element={<AimsPage />} />
                <Route path="/needs" element={<Needs/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/gallary" element={<Gallary />} />
                <Route path="/darul-qaza" element={<DarulQaza />} />
                <Route path="/islah-e-muashrah" element={<IslahEMuashrah />} />
                <Route path="/publicationmedia" element={< PublicationAndMedia/>} />
                  <Route path="/education" element={<Education/>} />
                  <Route path="/welfare" element={<SocialWelfare/>} />
                  <Route path="/testimonials" element={<Testimonials/>} />

              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
