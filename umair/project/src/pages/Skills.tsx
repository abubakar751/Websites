import { Card, Progress } from 'antd';

const Skills = () => {
  const coreSkills = [
    { name: 'Machine Learning', level: 92 },
    { name: 'Deep Learning', level: 88 },
    { name: 'Data Analysis', level: 90 },
    { name: 'Statistical Analysis', level: 85 },
    { name: 'Natural Language Processing', level: 82 },
    { name: 'Computer Vision', level: 80 },
  ];

  const programmingSkills = [
    { name: 'Python', level: 95 },
    { name: 'SQL', level: 88 },
    { name: 'R', level: 75 },
    { name: 'Java', level: 70 },
  ];

  const frameworks = [
    { name: 'TensorFlow', level: 90 },
    { name: 'PyTorch', level: 88 },
    { name: 'Scikit-learn', level: 92 },
    { name: 'Keras', level: 85 },
    { name: 'Pandas', level: 93 },
    { name: 'NumPy', level: 90 },
    { name: 'Matplotlib', level: 87 },
    { name: 'Seaborn', level: 85 },
    { name: 'OpenCV', level: 80 },
  ];

  const tools = [
    { name: 'Git & GitHub', level: 88 },
    { name: 'Jupyter Notebook', level: 92 },
    { name: 'AWS', level: 75 },
    { name: 'Docker', level: 70 },
    { name: 'Streamlit', level: 85 },
    { name: 'FastAPI', level: 80 },
  ];

  const otherSkills = [
    'MLOps & Model Deployment',
    'Feature Engineering',
    'Hyperparameter Tuning',
    'A/B Testing',
    'Time Series Analysis',
    'Ensemble Methods',
    'Neural Networks',
    'Transfer Learning',
  ];

  const SkillCard = ({ title, skills }: { title: string; skills: { name: string; level: number }[] }) => (
    <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h3>
      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
              <span className="text-blue-500 font-semibold">{skill.level}%</span>
            </div>
            <Progress
              percent={skill.level}
              showInfo={false}
              strokeColor={{
                '0%': '#3b82f6',
                '100%': '#06b6d4',
              }}
            />
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            My Skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise in AI/ML, data science, and software development
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCard title="Core AI/ML Skills" skills={coreSkills} />
            <SkillCard title="Programming Languages" skills={programmingSkills} />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <SkillCard title="Frameworks & Libraries" skills={frameworks} />
            <SkillCard title="Tools & Technologies" skills={tools} />
          </div>

          <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-0">
            <h3 className="text-2xl font-bold mb-6">Additional Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherSkills.map((skill) => (
                <div
                  key={skill}
                  className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg font-medium text-center hover:bg-white/20 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
