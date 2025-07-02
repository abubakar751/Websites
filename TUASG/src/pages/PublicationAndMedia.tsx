import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpenIcon, EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid';

const PublicationAndMedia: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Publications & Media',
      description: 'Our efforts to spread Islamic knowledge through printed materials and digital platforms',
      sections: [
        {
          title: 'Pamphlets and Booklets',
          icon: BookOpenIcon,
          description: 'We regularly publish booklets, pamphlets, and articles on various important Islamic topics relevant to contemporary needs.',
          items: [
            'Monthly thematic booklets',
            'Special occasion publications',
            'Refutation of misconceptions',
            'Simplified fiqh rulings'
          ]
        },
        {
          title: 'Daily Messages',
          icon: DevicePhoneMobileIcon,
          description: 'Daily Islamic reminders containing Quranic verses, Hadith, and teachings sent directly to subscribers.',
          items: [
            'Quranic verses with explanations',
            'Prophetic sayings',
            'Islamic etiquette reminders',
            'Occasional special announcements'
          ]
        }
      ],
      stats: [
        {
          value: '50+',
          label: 'Publications'
        },
        {
          value: '10,000+',
          label: 'Daily Recipients'
        },
        {
          value: '100+',
          label: 'Mosques Served'
        }
      ],
      cta: {
        title: 'Subscribe to Our Messages',
        button: 'Subscribe Now',
        contact: 'Send JOIN to +92 300 1234567'
      }
    },
    ur: {
      title: 'اشاعت و میڈیا',
      description: 'مطبوعات اور ڈیجیٹل پلیٹ فارمز کے ذریعے اسلامی علم کو پھیلانے کی ہماری کوششیں',
      sections: [
        {
          title: 'پمفلٹس اور کتابچے',
          icon: BookOpenIcon,
          description: 'ہم مختلف اہم اسلامی موضوعات پر کتابچے، پمفلٹس اور مضامین شائع کرتے ہیں جو موجودہ ضروریات سے متعلق ہوتے ہیں۔',
          items: [
            'ماہانہ موضوعاتی کتابچے',
            'خصوصی مواقع پر اشاعتیں',
            'غلط فہمیوں کا ازالہ',
            'آسان فقہی احکامات'
          ]
        },
        {
          title: 'روزانہ پیغامات',
          icon: DevicePhoneMobileIcon,
          description: 'قرآنی آیات، احادیث اور تعلیمات پر مشتمل روزانہ کے اسلامی پیغامات سبسکرائبرز کو بھیجے جاتے ہیں۔',
          items: [
            'تشریح کے ساتھ قرآنی آیات',
            'نبی کریم ﷺ کے اقوال',
            'اسلامی آداب کی یاد دہانیاں',
            'موقعے پر خصوصی اعلانات'
          ]
        }
      ],
      stats: [
        {
          value: '50+',
          label: 'اشاعتیں'
        },
        {
          value: '10,000+',
          label: 'روزانہ وصول کنندگان'
        },
        {
          value: '100+',
          label: 'مساجد تک رسائی'
        }
      ],
      cta: {
        title: 'ہمارے پیغامات سبسکرائب کریں',
        button: 'ابھی سبسکرائب کریں',
        contact: 'JOIN لکھ کر بھیجیں +92 300 1234567 پر'
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative py-20 bg-gradient-to-r from-green-800 to-green-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
            {content[language].title}
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${language === 'ur' ? 'urdu-nastaliq' : ''}`}>
            {content[language].description}
          </p>
        </div>
      </motion.section>

      {/* Publications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            {content[language].sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className={`text-2xl font-bold text-green-800 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
                      {section.title}
                    </h2>
                  </div>
                  <p className={`text-gray-700 mb-6 ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}>
                    {section.description}
                  </p>
                  <ul className={`space-y-3 ${language === 'ur' ? 'text-right' : ''}`}>
                    {section.items.map((item, i) => (
                      <li key={i} className={`flex ${language === 'ur' ? 'flex-row-reverse justify-end' : ''}`}>
                        <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className={language === 'ur' ? 'urdu-nastaliq' : ''}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            {content[language].stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="p-6"
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className={`text-xl ${language === 'ur' ? 'urdu-nastaliq' : ''}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sample Publications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 text-green-800 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
            {language === 'en' ? 'Sample Publications' : 'اشاعتوں کی مثالیں'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[3/4] bg-gray-200 mb-3 flex items-center justify-center">
                  <BookOpenIcon className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className={`text-center font-medium ${language === 'ur' ? 'urdu-nastaliq' : ''}`}>
                  {language === 'en' ? `Booklet ${item}` : `کتابچہ ${item}`}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white p-8 md:p-12 rounded-xl shadow-md text-center"
          >
            <motion.h2 variants={itemVariants} className={`text-2xl md:text-3xl font-bold text-green-800 mb-6 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
              {content[language].cta.title}
            </motion.h2>
            <motion.p variants={itemVariants} className={`text-lg mb-8 ${language === 'ur' ? 'urdu-nastaliq' : ''}`}>
              {language === 'en' 
                ? 'Receive daily Islamic reminders on your phone'
                : 'اپنے فون پر روزانہ اسلامی پیغامات وصول کریں'}
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                {content[language].cta.button}
              </button>
              <p className={`mt-4 text-gray-600 ${language === 'ur' ? 'urdu-nastaliq' : ''}`}>
                {content[language].cta.contact}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PublicationAndMedia;