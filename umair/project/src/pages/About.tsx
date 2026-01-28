import { Card } from 'antd';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, BookOutlined } from '@ant-design/icons';
import { Award, Globe, Heart } from 'lucide-react';

const About = () => {
  const info = [
    { icon: <EnvironmentOutlined />, label: 'Location', value: 'Sakinaka, Mumbai' },
    { icon: <MailOutlined />, label: 'Email', value: 'khanmohdumair752@gmail.com' },
    { icon: <PhoneOutlined />, label: 'Phone', value: '+91 9792098768' },
  ];

  const interests = [
    { icon: <Heart className="w-6 h-6" />, text: 'Machine Learning' },
    { icon: <Award className="w-6 h-6" />, text: 'Deep Learning' },
    { icon: <Globe className="w-6 h-6" />, text: 'Data Science' },
    { icon: <BookOutlined className="text-xl" />, text: 'Research & Innovation' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Get to know more about my journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-6">
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Who I Am</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I am a passionate and driven AI/ML engineer with a bachelor's degree in computer science,
                  eager to apply my analytical skills and technical knowledge to solve real-world problems
                  through artificial intelligence and machine learning.
                </p>
                <p>
                  Through my academic projects and self-driven learning, I have developed a strong foundation
                  in machine learning, deep learning, natural language processing, and computer vision. I thrive
                  on building intelligent systems that can learn from data and make predictions.
                </p>
                <p>
                  During my studies, I worked on several hands-on projects involving data preprocessing, feature
                  engineering, model training, hyperparameter tuning, and deployment. I have experience with
                  frameworks like TensorFlow, PyTorch, and scikit-learn, and I'm proficient in Python, SQL,
                  and cloud platforms like AWS.
                </p>
                <p>
                  I am continually exploring new technologies in AI/ML, including transformers, reinforcement
                  learning, and MLOps practices. My goal is to contribute to innovative projects that leverage
                  AI to create meaningful impact.
                </p>
              </div>
            </Card>

            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                <BookOutlined /> Education
              </h2>
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Bachelor of Science - Computer Science
                </h3>
                <p className="text-blue-500 font-semibold mb-1">Mumbai University</p>
                <p className="text-gray-600 dark:text-gray-400">2022 - 2025</p>
              </div>
            </Card>

            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Languages</h2>
              <div className="flex flex-wrap gap-4">
                {['English', 'Hindi', 'Urdu'].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full font-semibold"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-0">
              <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
              <div className="space-y-4">
                {info.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="text-2xl mt-1">{item.icon}</div>
                    <div>
                      <p className="font-semibold mb-1">{item.label}</p>
                      <p className="opacity-90">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Interests</h2>
              <div className="space-y-4">
                {interests.map((interest) => (
                  <div key={interest.text} className="flex items-center gap-3">
                    <div className="text-blue-500">{interest.icon}</div>
                    <p className="text-gray-700 dark:text-gray-300">{interest.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
