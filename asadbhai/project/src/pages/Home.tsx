import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Code2, Briefcase, Mail, Star, Award, Target, BookOpen } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import PageTransition from '../components/PageTransition';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
  const quickLinks = [
    { to: '/projects', icon: <Code2 />, label: 'Latest Projects' },
    { to: '/experience', icon: <Briefcase />, label: 'Work Experience' },
    { to: '/contact', icon: <Mail />, label: 'Get in Touch' },
  ];

  const skills = [
    'Java', 'Spring Boot', 'Microservices', 'Hibernate', 'JPA', 'GraphQL',
    'GRPC', 'Camunda', 'Liquibase', 'React', 'Angular', 'HTML/CSS', 'Bootstrap',
    'JSP', 'JSTL', 'MySQL', 'PostgreSQL', 'Git', 'Bitbucket', 'Jira', 'Docker'
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Asadullah "Asad" | Java Backend Developer Portfolio</title>
        <meta name="description" content="Portfolio of Asadullah, a skilled Java and Spring Boot backend developer with expertise in microservices, GRPC, GraphQL, and more." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        {/* Hero */}
        <div className="flex flex-col md:flex-row items-center gap-12">
  {/* Profile Picture First on Mobile */}
  <motion.div className="md:w-1/2 order-1 md:order-1">
  <div className="relative w-40 h-48 md:w-96 md:h-96 mx-auto">
  
  <img
    src="file/photo.jpeg"
    alt="Asadullah"
    className="absolute inset-0 object-cover rounded-full shadow-xl hover:scale-105 transition duration-300"
  />
</div>

  </motion.div>

  {/* Text Content */}
  <div className="md:w-1/2 order-2 md:order-2">
    <motion.h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
      Asadullah <span className="text-blue-600 dark:text-blue-400">‘Asad’</span>
    </motion.h1>
    <motion.h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
      <Typewriter
        words={[
          'Java Developer',
          'Spring Boot Developer',
          'Microservices Specialist',
          'Backend Engineer'
        ]}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </motion.h2>
    <motion.p className="text-gray-600 dark:text-gray-400 mb-8">
      With over 3.2 years of experience, I bring robust backend development expertise in Spring Boot, GraphQL, GRPC, Hibernate, and RESTful APIs. I thrive on solving complex business challenges with clean, scalable code.
    </motion.p>
    <div className="flex gap-4 mb-8">
      <Link to="/projects">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center">
          View Projects <ChevronRight className="ml-2" />
        </button>
      </Link>
      <a
        href="file/resume.pdf"
        download
        className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 flex items-center"
      >
        Download CV <Download className="ml-2" />
      </a>
    </div>
    <div className="grid grid-cols-3 gap-4">
      {quickLinks.map((link, index) => (
        <Link key={index} to={link.to}>
          <motion.div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
            <div className="text-blue-600 dark:text-blue-400 mb-2">{link.icon}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{link.label}</div>
          </motion.div>
        </Link>
      ))}
    </div>
  </div>
</div>

        {/* About */}
        <section className="mt-24">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">About Me</h3>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed max-w-4xl">
            Based in Mumbai, I am a tech-savvy software engineer with a strong grasp of enterprise-grade backend development using Java and Spring Boot. I’ve built reliable APIs and microservices in fintech and banking sectors. I’m driven by curiosity, a love for clean code, and the challenge of system design. I also contribute to process improvements and CI/CD pipelines. My goal is to continue learning cutting-edge technologies like Docker, Kubernetes, and advanced distributed systems.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-24">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow text-gray-700 dark:text-gray-200"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Career Objective */}
        <section className="mt-24">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <Target className="mr-2" /> Career Objective
          </h3>
          <p className="text-gray-700 dark:text-gray-400 max-w-4xl">
            I aim to grow as a technology leader in enterprise software development. My vision is to architect scalable systems that empower businesses and to mentor upcoming engineers to build quality solutions. I thrive in environments that reward innovation, discipline, and team spirit.
          </p>
        </section>

        {/* Education */}
        <section className="mt-24">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <BookOpen className="mr-2" /> Education
          </h3>
          <ul className="text-gray-700 dark:text-gray-400 space-y-2">
            <li><strong>BCA</strong>, Pune University (2019)</li>
            <li><strong>H.S.C</strong>, HR Inter College (2016)</li>
            <li><strong>S.S.C</strong>, KIC College (2014)</li>
            <li><strong>Certifications:</strong> Java Programming - Oracle, Spring Boot Microservices - Udemy</li>
          </ul>
        </section>

        {/* Testimonials */}
        <section className="mt-24">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">What Colleagues Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                “Asadullah's backend expertise and proactive mindset brought significant improvements to our microservices architecture. He’s dependable and highly solution-oriented.”
              </p>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">– Senior Architect, Saksoft</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                “He’s a team player who consistently meets delivery goals and is always eager to support peers and take ownership. Great attitude and commitment!”
              </p>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">– Project Manager, IdigiCloudTech</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 text-center">
          <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Interested in collaborating?</h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Whether you're building a fintech platform or scaling enterprise systems — let's create something impactful.
          </p>
          <Link to="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
              Let’s Talk
            </button>
          </Link>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
