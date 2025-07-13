import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpenIcon, EnvelopeIcon, DevicePhoneMobileIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

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
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const cardHover = {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  const statItem = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6
      }
    })
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative py-24 bg-gradient-to-br from-green-700 to-green-600 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/media.jpeg')] bg-repeat"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-green-100 bg-green-900 bg-opacity-50 rounded-full">
              {language === 'en' ? 'Knowledge Dissemination' : 'علم کی اشاعت'}
            </span>
          </motion.div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
            {content[language].title}
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto opacity-90 ${language === 'ur' ? 'urdu-nastaliq' : ''}`}>
            {content[language].description}
          </p>
        </div>
      </motion.section>

      {/* Publications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {content[language].sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={cardHover}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-3 rounded-xl mr-4 group-hover:bg-green-200 transition-colors">
                      <Icon className="h-8 w-8 text-green-700" />
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
                      <motion.li 
                        key={i} 
                        className={`flex ${language === 'ur' ? 'flex-row-reverse justify-end' : ''} group-hover:translate-x-1 transition-transform`}
                        initial={{ opacity: 0, x: language === 'ur' ? 10 : -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2 flex-shrink-0">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className={language === 'ur' ? 'urdu-nastaliq' : ''}>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/assets/images/arabic-pattern.svg')] bg-repeat"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {content[language].stats.map((stat, index) => (
              <motion.div 
                key={index}
                custom={index}
                variants={statItem}
                className="p-8 text-center bg-white bg-opacity-10 rounded-xl backdrop-blur-sm border border-white border-opacity-20"
              >
                <div className="text-5xl font-bold mb-3 text-green-100">{stat.value}</div>
                <div className={`text-xl font-medium ${language === 'ur' ? 'urdu-nastaliq' : ''}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sample Publications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl font-bold text-green-800 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
              {language === 'en' ? 'Sample Publications' : 'اشاعتوں کی مثالیں'}
            </h2>
            <p className={`mt-4 text-gray-600 max-w-2xl mx-auto ${language === 'ur' ? 'urdu-nastaliq' : ''}`}>
              {language === 'en' 
                ? 'Explore some of our recent publications covering various Islamic topics'
                : 'مختلف اسلامی موضوعات پر ہماری حالیہ اشاعتوں میں سے کچھ دیکھیں'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center relative">
                  <BookOpenIcon className="h-16 w-16 text-green-300" />
                  <div className="absolute bottom-4 right-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {language === 'en' ? 'New' : 'نیا'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`font-medium text-gray-800 ${language === 'ur' ? 'urdu-nastaliq' : ''}`}>
                    {language === 'en' ? `Booklet ${item}` : `کتابچہ ${item}`}
                  </h3>
                  <p className={`mt-2 text-sm text-gray-500 ${language === 'ur' ? 'urdu-nastaliq' : ''}`}>
                    {language === 'en' ? 'Islamic Topics' : 'اسلامی موضوعات'}
                  </p>
                  <button className="mt-4 flex items-center text-green-600 hover:text-green-800 text-sm font-medium">
                    {language === 'en' ? 'View details' : 'تفصیلات دیکھیں'}
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center border border-gray-100"
          >
            <motion.h2 
              variants={itemVariants} 
              className={`text-2xl md:text-3xl font-bold text-green-800 mb-6 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}
            >
              {content[language].cta.title}
            </motion.h2>
            <motion.p 
              variants={itemVariants} 
              className={`text-lg mb-8 text-gray-600 ${language === 'ur' ? 'urdu-nastaliq' : ''}`}
            >
              {language === 'en' 
                ? 'Receive daily Islamic reminders on your phone'
                : 'اپنے فون پر روزانہ اسلامی پیغامات وصول کریں'}
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <button className="relative bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 inline-flex items-center group overflow-hidden">
                <span className="absolute inset-0 bg-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center">
                  <EnvelopeIcon className="h-5 w-5 mr-3" />
                  {content[language].cta.button}
                </span>
                <span className="absolute right-0 h-full w-0 bg-green-800 transition-all duration-300 group-hover:w-12 rounded-r-xl"></span>
              </button>
              <p className={`mt-6 text-gray-500 bg-gray-50 px-4 py-3 rounded-lg ${language === 'ur' ? 'urdu-nastaliq' : ''}`}>
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