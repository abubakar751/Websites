import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ScaleIcon, CheckBadgeIcon, UsersIcon, BookOpenIcon, ScaleIcon as ScaleIconSolid } from '@heroicons/react/24/solid';

const DarulQaza: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Darul Qaza - Islamic Judicial Council',
      description: `Under the supervision of the All India Muslim Personal Law Board, Darul Qaza has been addressing Muslim family matters for the past 17 years according to Islamic Shariah.`,
      about: {
        title: 'About Darul Qaza',
        text: `Darul Qaza serves as an Islamic judicial council that resolves disputes and provides legal opinions in accordance with Islamic principles. Our qualified Qazis (Islamic judges) handle cases with wisdom, fairness and deep knowledge of Islamic jurisprudence.`
      },
      services: {
        title: 'Our Services',
        items: [
          {
            title: 'Marriage Contracts',
            description: 'Nikah documentation, marriage counseling, and dispute resolution'
          },
          {
            title: 'Divorce Proceedings',
            description: 'Talaq, Khula, Faskh-e-Nikah with proper Islamic procedures'
          },
          {
            title: 'Family Disputes',
            description: 'Custody matters, inheritance disputes, and family reconciliation'
          },
          {
            title: 'Islamic Wills',
            description: 'Preparation and certification of Islamic wills (Wasiyyah)'
          }
        ]
      },
      process: {
        title: 'Our Process',
        steps: [
          {
            title: 'Application Submission',
            description: 'Submit your case with relevant documents'
          },
          {
            title: 'Initial Review',
            description: 'Our Qazi will review your case details'
          },
          {
            title: 'Mediation Session',
            description: 'Attempting amicable resolution through mediation'
          },
          {
            title: 'Judgment',
            description: 'Final decision based on Islamic jurisprudence'
          }
        ]
      },
      stats: {
        title: 'By The Numbers',
        items: [
          {
            value: '17+',
            label: 'Years Serving Community'
          },
          {
            value: '1,300+',
            label: 'Cases Resolved'
          },
          {
            value: '95%',
            label: 'Satisfaction Rate'
          },
          {
            value: '24',
            label: 'Qualified Qazis'
          }
        ]
      },
      cta: {
        title: 'Need Islamic Legal Assistance?',
        button: 'Submit Your Case',
        contact: 'Or call us at +91 98765 43210'
      }
    },
    ur: {
      title: 'دار القضاء - اسلامی عدالتی کونسل',
      description: `آل انڈیا مسلم پرسنل لاء بورڈ کی نگرانی میں دار القضاء گزشتہ 17 سالوں سے اسلامی شریعت کے مطابق مسلمانوں کے خاندانی معاملات حل کر رہا ہے۔`,
      about: {
        title: 'دار القضاء کے بارے میں',
        text: `دار القضاء ایک اسلامی عدالتی کونسل کے طور پر کام کرتا ہے جو اسلامی اصولوں کے مطاخت تنازعات کو حل کرتا ہے اور شرعی رائے فراہم کرتا ہے۔ ہمارے قابل قاضی (اسلامی جج) اسلامی فقہ کے گہرے علم کے ساتھ معاملات کو حکمت اور انصاف کے ساتھ نمٹاتے ہیں۔`
      },
      services: {
        title: 'ہماری خدمات',
        items: [
          {
            title: 'نکاح کے معاہدے',
            description: 'نکاح کی دستاویزات، ازدواجی مشاورت اور تنازعات کا حل'
          },
          {
            title: 'طلاق کے معاملات',
            description: 'طلاق، خلع، فسخ نکاح کے مناسب اسلامی طریقہ کار'
          },
          {
            title: 'خاندانی تنازعات',
            description: 'حضانت کے معاملات، وراثت کے تنازعات اور خاندانی مصالحت'
          },
          {
            title: 'اسلامی وصیتیں',
            description: 'اسلامی وصیت ناموں (وصیہ) کی تیاری اور تصدیق'
          }
        ]
      },
      process: {
        title: 'ہمارا طریقہ کار',
        steps: [
          {
            title: 'درخواست جمع کرانا',
            description: 'متعلقہ دستاویزات کے ساتھ اپنا کیس جمع کروائیں'
          },
          {
            title: 'ابتدائی جائزہ',
            description: 'ہمارا قاضی آپ کے کیس کا تفصیل سے جائزہ لے گا'
          },
          {
            title: 'ثالثی اجلاس',
            description: 'ثالثی کے ذریعے دوستانہ حل کی کوشش'
          },
          {
            title: 'فیصلہ',
            description: 'اسلامی فقہ کی روشنی میں حتمی فیصلہ'
          }
        ]
      },
      stats: {
        title: 'اعداد و شمار',
        items: [
          {
            value: '17+',
            label: 'سال خدمت'
          },
          {
            value: '1,300+',
            label: 'کیسز حل'
          },
          {
            value: '95%',
            label: 'اطمینان کی شرح'
          },
          {
            value: '24',
            label: 'قابل قاضی'
          }
        ]
      },
      cta: {
        title: 'اسلامی قانونی مدد درکار ہے؟',
        button: 'اپنا کیس جمع کروائیں',
        contact: 'یا ہمیں کال کریں +91 98765 43210 پر'
      }
    }
  };

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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
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
        className="relative py-20 bg-gradient-to-r from-emerald-800 to-emerald-600 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/islamic-pattern.png')] bg-repeat"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              variants={itemVariants}
              className={`text-4xl md:text-5xl font-bold mb-6 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}
            >
              {content[language].title}
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className={`text-xl md:text-2xl max-w-3xl mx-auto ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}
            >
              {content[language].description}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className={`text-3xl font-bold text-emerald-800 mb-6 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
                {content[language].about.title}
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}>
                {content[language].about.text}
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-emerald-100 rounded-2xl p-6 shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="/p1.jpg" 
                    alt="Darul Qaza Proceedings" 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <ScaleIconSolid className="h-10 w-10 text-emerald-600 mr-3" />
                    <span className="font-semibold text-gray-800">
                      {language === 'en' ? 'Shariah Compliant' : 'شریعت کے مطابق'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={`text-center text-3xl font-bold text-emerald-800 mb-12 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
              {content[language].services.title}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content[language].services.items.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <CheckBadgeIcon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className={`text-xl font-semibold text-gray-800 mb-2 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
                    {service.title}
                  </h3>
                  <p className={`text-gray-600 ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}>
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={`text-center text-3xl font-bold text-emerald-800 mb-12 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
              {content[language].process.title}
            </motion.h2>
            
            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-emerald-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
                {content[language].process.steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className={`relative ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8 lg:mt-20'}`}
                  >
                    <div className={`flex ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <div className="flex-shrink-0">
                        <div className="bg-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className={`ml-4 lg:ml-0 ${index % 2 === 0 ? 'lg:mr-4 lg:text-right' : 'lg:text-left'}`}>
                        <h3 className={`text-xl font-semibold text-gray-800 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
                          {step.title}
                        </h3>
                        <p className={`mt-2 text-gray-600 ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={`text-center text-3xl font-bold mb-12 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
              {content[language].stats.title}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content[language].stats.items.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className={`text-xl ${language === 'ur' ? 'urdu-nastaliq' : ''}`}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-emerald-50 rounded-xl p-8 md:p-12 text-center"
          >
            <motion.h2 variants={itemVariants} className={`text-2xl md:text-3xl font-bold text-emerald-800 mb-6 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
              {content[language].cta.title}
            </motion.h2>
            <motion.div variants={itemVariants} className="mt-8">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
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

export default DarulQaza;