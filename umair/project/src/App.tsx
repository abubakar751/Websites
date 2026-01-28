import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useLenis } from "./hooks/useLenis";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const AppContent = () => {
  useLenis();

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      {/* 🔥 Tailwind dark mode trigger */}
      <div className="dark">
        <Router>
          <AppContent />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
