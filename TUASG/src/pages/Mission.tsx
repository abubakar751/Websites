import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const missions = (language: string) => [
  {
    title: language === 'en' ? 'Islamic Education' : 'اسلامی تعلیم',
    description: language === 'en'
      ? 'Promote accessible Islamic education for children, youth, and adults through madrasas and community classes.'
      : 'مدارس اور کمیونٹی کلاسز کے ذریعے بچوں، نوجوانوں اور بڑوں کے لیے اسلامی تعلیم کو عام کرنا۔',
    icon: '📖'
  },
  {
    title: language === 'en' ? 'Family Dispute Resolution' : 'خاندانی تنازعات کا حل',
    description: language === 'en'
      ? 'Provide Islamic arbitration services to resolve family and personal matters with compassion and justice.'
      : 'خاندانی اور ذاتی معاملات کو ہمدردی اور انصاف کے ساتھ حل کرنے کے لیے اسلامی ثالثی خدمات فراہم کرنا۔',
    icon: '⚖️'
  },
  {
    title: language === 'en' ? 'Community Welfare' : 'فلاحی خدمات',
    description: language === 'en'
      ? 'Support underprivileged families, widows, and orphans through monthly aid and emergency relief.'
      : 'کمزور خاندانوں، بیواؤں اور یتیموں کی ماہانہ امداد اور ہنگامی ریلیف کے ذریعے مدد کرنا۔',
    icon: '🤲'
  },
  {
    title: language === 'en' ? 'Moral and Social Reform' : 'اخلاقی و سماجی اصلاح',
    description: language === 'en'
      ? 'Foster ethical awareness and social responsibility by organizing public programs and religious gatherings.'
      : 'عوامی پروگرامز اور مذہبی اجتماعات کے ذریعے اخلاقی شعور اور سماجی ذمے داری کو فروغ دینا۔',
    icon: '🌱'
  },
  {
    title: language === 'en' ? 'Youth and Women Empowerment' : 'نوجوانوں اور خواتین کا بااختیار بنانا',
    description: language === 'en'
      ? 'Develop the skills and leadership of youth and women through training and engagement programs.'
      : 'تربیتی اور شراکتی پروگرامز کے ذریعے نوجوانوں اور خواتین کی صلاحیتوں اور قیادت کو فروغ دینا۔',
    icon: '💪'
  }
];

const Mission: React.FC = () => {
  const { language, t } = useLanguage();
  const missionPoints = missions(language);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white font-sans overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        @font-face {
          font-family: 'Noori Nastaliq';
          src: url('/fonts/NooriNastaliq.ttf') format('truetype');
        }
        .font-urdu {
          font-family: 'Noori Nastaliq', serif;
          line-height: 1.8;
        }
        body {
          font-family: 'Poppins', sans-serif;
        }
        .urdu-nastaliq {
          font-family: 'Noori Nastaliq', serif;
          line-height: 1.8;
          direction: rtl;
        }
        .urdu-nastaliq-heading {
          font-family: 'Noori Nastaliq', serif;
          line-height: 1.6;
          direction: rtl;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className={`text-3xl md:text-4xl font-extrabold text-emerald-800 mb-4 md:mb-6 ${
              language === 'ur' ? 'urdu-nastaliq-heading' : ''
            }`}
          >
            {t('about.mission')}
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`text-base md:text-lg text-gray-600 max-w-4xl mx-auto ${
              language === 'ur' ? 'urdu-nastaliq' : 'text-center'
            }`}
          >
            {language === 'en'
              ? 'Our mission is deeply rooted in Islamic values. We strive to uplift society through education, justice, welfare, and empowerment initiatives guided by the principles of the Qur\'an and Sunnah.'
              : 'ہمارا مشن اسلامی اقدار میں گہری جڑیں رکھتا ہے۔ ہم تعلیم، انصاف، فلاح و بہبود اور بااختیاری کے ذریعے معاشرے کو بلند کرنے کی کوشش کرتے ہیں، جو قرآن و سنت کے اصولوں پر مبنی ہیں۔'}
          </motion.p>
        </motion.div>

        {/* Mission Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {missionPoints.map((mission, index) => (
            <motion.div
              key={index}
              
              whileHover={{ y: -5 }}
              className="group bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-sm hover:shadow-md p-6 transition-all duration-300 border border-emerald-100"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start space-x-4 rtl:space-x-reverse mb-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-full flex items-center justify-center text-2xl shadow-md transform transition">
                    {mission.icon}
                  </div>
                  <h3
                    className={`text-lg md:text-xl font-semibold text-gray-900 ${
                      language === 'ur' ? 'urdu-nastaliq-heading' : ''
                    }`}
                  >
                    {mission.title}
                  </h3>
                </div>
                <ul className="flex-1 space-y-2">
                  {mission.description.split('.').filter(point => point.trim() !== '').map((point, i) => (
                    <li 
                      key={i}
                      className={`flex items-start ${language === 'ur' ? 'rtl' : ''}`}
                    >
                      <span className={`flex-shrink-0 mt-1 ${language === 'ur' ? 'ml-2' : 'mr-2'}`}>
                        <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className={`text-sm md:text-base text-gray-700 ${language === 'ur' ? 'urdu-nastaliq' : ''}`}>
                        {point.trim()}.
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;