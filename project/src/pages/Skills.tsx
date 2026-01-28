import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, BarChart2, Layers, GitBranch, CloudCog, LineChart, PenTool } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Core Data Science Skills",
      icon: <Database size={24} />,
      color: "primary",
      skills: [
        { name: "Data Analysis", proficiency: 90 },
        { name: "Statistical Analysis", proficiency: 85 },
        { name: "Machine Learning", proficiency: 80 },
        { name: "Data Visualization", proficiency: 88 },
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      color: "secondary",
      skills: [
        { name: "Python", proficiency: 92 },
        { name: "SQL", proficiency: 85 },
      ]
    },
    {
      title: "Tools & Libraries",
      icon: <Layers size={24} />,
      color: "accent",
      skills: [
        { name: "Pandas", proficiency: 90 },
        { name: "NumPy", proficiency: 88 },
        { name: "Scikit-learn", proficiency: 85 },
        { name: "Seaborn", proficiency: 82 },
        { name: "Matplotlib", proficiency: 87 },
        { name: "AWS", proficiency: 75 },
        { name: "Streamlit", proficiency: 80 },
      ]
    }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold font-heading mb-2">My Skills</h1>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            As a data scientist, I've developed a diverse set of technical skills through my education and 
            project experience. Here's a comprehensive overview of my capabilities:
          </p>
        </motion.div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="space-y-8"
            >
              <div className={`flex items-center gap-3 bg-${category.color}-600/10 p-4 rounded-lg`}>
                <div className={`p-2 bg-${category.color}-600/20 text-${category.color}-500 rounded-lg`}>
                  {category.icon}
                </div>
                <h2 className={`text-2xl font-semibold text-${category.color}-500`}>{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * skillIndex }}
                    className="bg-dark-800/40 p-6 rounded-lg hover:shadow-md hover:shadow-primary-600/10 transition-all duration-300"
                  >
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className={`text-${category.color}-500`}>{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full bg-${category.color}-500`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-center mb-8">Other Relevant Skills</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div className="bg-dark-800/40 p-4 rounded-lg text-center">
                <div className="mb-3 text-primary-500 flex justify-center">
                  <BarChart2 size={24} />
                </div>
                <h3 className="font-medium">Data Visualization</h3>
              </div>
              
              <div className="bg-dark-800/40 p-4 rounded-lg text-center">
                <div className="mb-3 text-secondary-400 flex justify-center">
                  <GitBranch size={24} />
                </div>
                <h3 className="font-medium">Version Control</h3>
              </div>
              
              <div className="bg-dark-800/40 p-4 rounded-lg text-center">
                <div className="mb-3 text-accent-500 flex justify-center">
                  <CloudCog size={24} />
                </div>
                <h3 className="font-medium">Cloud Computing</h3>
              </div>
              
              <div className="bg-dark-800/40 p-4 rounded-lg text-center">
                <div className="mb-3 text-primary-500 flex justify-center">
                  <LineChart size={24} />
                </div>
                <h3 className="font-medium">Statistical Modeling</h3>
              </div>
              
              <div className="bg-dark-800/40 p-4 rounded-lg text-center">
                <div className="mb-3 text-secondary-400 flex justify-center">
                  <PenTool size={24} />
                </div>
                <h3 className="font-medium">Research Methods</h3>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Skills;