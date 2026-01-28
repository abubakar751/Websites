import { Button } from 'antd';
import { DownloadOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { BrainCircuit, Database, LineChart, Cpu } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-blue-500 font-semibold text-lg">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Mohammad Umair
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
                AI/ML Engineer
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              A passionate AI/ML engineer specializing in machine learning, deep learning, and data science.
              Building intelligent solutions that transform data into actionable insights and innovative products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button type="primary" size="large" icon={<MailOutlined />}>
                  Get in Touch
                </Button>
              </Link>
              <Button size="large" icon={<DownloadOutlined />}>
                Download Resume
              </Button>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-blue-500/20">
              <div className="grid grid-cols-2 gap-8 p-8">
                <div className="bg-white/10 dark:bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:scale-110 transition-transform">
                  <BrainCircuit className="w-12 h-12 text-blue-500" />
                </div>
                <div className="bg-white/10 dark:bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:scale-110 transition-transform">
                  <Database className="w-12 h-12 text-cyan-500" />
                </div>
                <div className="bg-white/10 dark:bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:scale-110 transition-transform">
                  <LineChart className="w-12 h-12 text-blue-400" />
                </div>
                <div className="bg-white/10 dark:bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:scale-110 transition-transform">
                  <Cpu className="w-12 h-12 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">What I Do</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specialized in creating cutting-edge AI/ML solutions across various domains
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-850 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <BrainCircuit className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building predictive models and intelligent systems using scikit-learn, TensorFlow, and PyTorch
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-850 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <Database className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Data Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Extracting insights from complex datasets using Python, Pandas, NumPy, and SQL
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-850 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <LineChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Data Visualization</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating compelling visual stories with Matplotlib, Seaborn, and Streamlit
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Interested in working together?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's connect and discuss how my AI/ML expertise can help bring your next project to life.
          </p>
          <Link to="/contact">
            <Button type="primary" size="large" icon={<MailOutlined />}>
              Contact Me
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
