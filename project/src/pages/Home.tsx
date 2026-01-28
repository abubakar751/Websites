import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Database, BarChart4, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image - Shown first on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center order-1 lg:order-2"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden relative bg-gradient-to-br from-violet-600 to-emerald-500 p-1">
                <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute top-0 right-0 bg-emerald-500 p-3 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Database size={24} />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 left-0 bg-violet-500 p-3 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <Code size={24} />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-20 right-10 bg-teal-500 p-3 rounded-lg shadow-lg"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <BarChart4 size={24} />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
                <span className="text-white">Hi, I'm </span>
                <span className="text-violet-500">Mohammad Umair</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-emerald-400">
                Data Scientist
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                A passionate data scientist with expertise in machine learning, 
                statistical analysis, and data visualization. Transforming complex data into 
                actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-md flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <span>Get in Touch</span>
                  <ArrowRight size={18} />
                </Link>
                <a 
                  href="/resume.pdf" 
                  download="Mohammad_Umair_Resume.pdf"
                  className="px-6 py-3 bg-transparent border border-violet-600 text-violet-500 hover:bg-violet-600/10 rounded-md flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <span>Download CV</span>
                  <Download size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 bg-dark-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-heading mb-2">About Me</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg mb-8 text-center"
            >
              I am a passionate and driven data scientist with a bachelor's degree in computer science,
              eager to apply my analytical skills and technical knowledge to solve real-world problems.
            </motion.p>
            
            <div className="flex justify-center">
              <Link 
                to="/about" 
                className="text-primary-500 hover:text-primary-400 flex items-center gap-2 transition-colors"
              >
                <span>Learn more about me</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-heading mb-2">My Skills</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-800/80 p-6 rounded-lg hover:shadow-lg hover:shadow-primary-600/20 transition-all duration-300"
            >
              <div className="bg-primary-600/20 p-3 rounded-lg inline-block mb-4">
                <Code size={28} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Programming</h3>
              <p className="text-gray-400">Python, SQL, Data Structures</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-800/80 p-6 rounded-lg hover:shadow-lg hover:shadow-secondary-400/20 transition-all duration-300"
            >
              <div className="bg-secondary-400/20 p-3 rounded-lg inline-block mb-4">
                <Database size={28} className="text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
              <p className="text-gray-400">Pandas, NumPy, Statistical Analysis</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-dark-800/80 p-6 rounded-lg hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300"
            >
              <div className="bg-accent-500/20 p-3 rounded-lg inline-block mb-4">
                <LineChart size={28} className="text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-400">Scikit-learn, Predictive Modeling</p>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8">
            <Link 
              to="/skills" 
              className="text-primary-500 hover:text-primary-400 flex items-center gap-2 transition-colors"
            >
              <span>View all skills</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section Preview */}
      <section className="py-16 bg-dark-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-heading mb-2">Recent Projects</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-900/80 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary-600/20 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">IPL Win Probability Predictor</h3>
                <p className="text-gray-400 mb-4">
                  A machine learning model to predict the win probability of IPL cricket matches
                  using team stats and player performance.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded text-sm">Python</span>
                  <span className="px-3 py-1 bg-secondary-400/20 text-secondary-400 rounded text-sm">ML</span>
                  <span className="px-3 py-1 bg-accent-500/20 text-accent-500 rounded text-sm">Data Viz</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-900/80 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-secondary-400/20 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Movie Recommendation System</h3>
                <p className="text-gray-400 mb-4">
                  Developed a recommendation system using collaborative filtering
                  to suggest movies based on user preferences.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded text-sm">Python</span>
                  <span className="px-3 py-1 bg-secondary-400/20 text-secondary-400 rounded text-sm">Pandas</span>
                  <span className="px-3 py-1 bg-accent-500/20 text-accent-500 rounded text-sm">Scikit-learn</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8">
            <Link 
              to="/projects" 
              className="text-primary-500 hover:text-primary-400 flex items-center gap-2 transition-colors"
            >
              <span>Explore all projects</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary-700 to-primary-600 rounded-xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-white/80 mb-8">
              Let's connect and discuss how my data science skills can help your next project.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2"
            >
              <span>Contact Me</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;