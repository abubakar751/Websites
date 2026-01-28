import { Card, Tag, Button } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'IPL Win Probability Predictor',
      description:
        'Developed a machine learning model to predict the win probability of IPL cricket matches in real-time based on historical data, current match situation, and team statistics. Achieved 87% accuracy using ensemble methods.',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'XGBoost'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Movie Recommendation System',
      description:
        'Built a hybrid recommendation system combining collaborative filtering and content-based filtering to suggest personalized movie recommendations. Implemented using cosine similarity and matrix factorization techniques.',
      tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit', 'NLP'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Car Price Prediction',
      description:
        'Created a regression model to predict used car prices based on features like brand, model, year, mileage, and fuel type. Performed extensive feature engineering and hyperparameter tuning to achieve optimal results.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'Random Forest', 'Flask'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'SMS Spam Classification',
      description:
        'Developed an NLP-based classifier to detect spam messages with 98% accuracy. Implemented text preprocessing, TF-IDF vectorization, and multiple classification algorithms including Naive Bayes and SVM.',
      tags: ['Python', 'NLP', 'NLTK', 'Scikit-learn', 'Text Mining'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Image Classification with CNN',
      description:
        'Built a Convolutional Neural Network for multi-class image classification achieving 94% accuracy. Implemented data augmentation, transfer learning with ResNet50, and fine-tuning techniques.',
      tags: ['Python', 'TensorFlow', 'Keras', 'Computer Vision', 'CNN', 'Transfer Learning'],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Stock Price Prediction',
      description:
        'Developed an LSTM-based deep learning model to predict stock prices using historical data and technical indicators. Implemented sliding window approach for time series forecasting.',
      tags: ['Python', 'LSTM', 'TensorFlow', 'Time Series', 'Technical Analysis'],
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      title: 'Sentiment Analysis Dashboard',
      description:
        'Created a real-time sentiment analysis system for social media data using transformer models. Built an interactive dashboard with visualizations showing sentiment trends and key insights.',
      tags: ['Python', 'BERT', 'Transformers', 'NLP', 'Streamlit', 'Data Visualization'],
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my AI/ML projects showcasing expertise in machine learning, deep learning, NLP, and computer vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient} rounded-t-lg -mt-6 -mx-6 mb-4`} />

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Tag
                    key={tag}
                    color="blue"
                    className="dark:bg-blue-900/30 dark:border-blue-500/50 dark:text-blue-400"
                  >
                    {tag}
                  </Tag>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                <Button
                  type="text"
                  icon={<GithubOutlined />}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  Code
                </Button>
                <Button
                  type="text"
                  icon={<LinkOutlined />}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            Want to see more projects or collaborate?
          </p>
          <Button
            type="primary"
            size="large"
            icon={<ExternalLink className="w-4 h-4" />}
            href="https://github.com"
            target="_blank"
          >
            View GitHub Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
