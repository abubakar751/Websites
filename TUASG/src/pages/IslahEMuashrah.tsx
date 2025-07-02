import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { LightBulbIcon, AcademicCapIcon, UsersIcon, BookOpenIcon, MegaphoneIcon } from '@heroicons/react/24/solid';

const IslahEMuashrah: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Islah-e-Muashrah - Moral & Social Reform',
      description: `Our initiative works to purify society from harmful customs and promote Islamic values through education and community programs.`,
      about: {
        title: 'About Our Mission',
        text: `Islah-e-Muashrah focuses on eliminating social evils and reviving Islamic ethics through systematic educational programs and community engagement. We conduct regular workshops, seminars, and awareness campaigns.`
      },
      programs: {
        title: 'Our Key Programs',
        items: [
          {
            icon: MegaphoneIcon,
            title: 'Community Awareness',
            description: 'Public seminars on social issues from Islamic perspective'
          },
          {
            icon: AcademicCapIcon,
            title: 'Seerat-un-Nabi Competitions',
            description: 'Quiz competitions about Prophet Muhammad\'s ﷺ life for students'
          },
          {
            icon: UsersIcon,
            title: 'Youth Counseling',
            description: 'Guidance sessions for young Muslims on modern challenges'
          },
          {
            icon: BookOpenIcon,
            title: 'Islamic Etiquette Workshops',
            description: 'Training on Islamic social manners and family values'
          }
        ]
      },
      seerat: {
        title: 'Seerat-un-Nabi Initiatives',
        activities: [
          {
            title: 'School Competitions',
            description: 'Annual quiz competitions in educational institutions'
          },
          {
            title: 'Public Seminars',
            description: 'Lectures on Prophet\'s ﷺ teachings for all ages'
          },
          {
            title: 'Publications',
            description: 'Booklets on Seerah distributed in communities'
          },
          {
            title: 'Media Campaigns',
            description: 'Social media content on Prophet\'s ﷺ life'
          }
        ]
      },
      stats: {
        title: 'Our Impact',
        items: [
          {
            value: '50+',
            label: 'Annual Workshops'
          },
          {
            value: '10,000+',
            label: 'Students Reached'
          },
          {
            value: '200+',
            label: 'Mosques Engaged'
          },
          {
            value: '25+',
            label: 'Cities Covered'
          }
        ]
      },
      cta: {
        title: 'Want to Join Our Reform Movement?',
        button: 'Volunteer Now',
        contact: 'Contact us at +92 300 1234567'
      }
    },
    ur: {
      title: 'اصلاح معاشرہ - اخلاقی و سماجی اصلاح',
      description: `ہماری کوشش معاشرے کو مضر رسوم سے پاک کرنے اور تعلیمی و سماجی پروگراموں کے ذریعے اسلامی اقدار کو فروغ دینے کی ہے۔`,
      about: {
        title: 'ہمارے مشن کے بارے میں',
        text: `اصلاح معاشرہ کا مقصد سماجی برائیوں کے خاتمے اور اسلامی اخلاقیات کو زندہ کرنے کے لئے منظم تعلیمی پروگراموں اور معاشرتی مشغولیت پر کام کرنا ہے۔ ہم باقاعدگی سے ورکشاپس، سیمینارز اور بیداری مہمات کا انعقاد کرتے ہیں۔`
      },
      programs: {
        title: 'ہمارے اہم پروگرام',
        items: [
          {
            icon: MegaphoneIcon,
            title: 'عوامی بیداری',
            description: 'اسلامی نقطہ نظر سے سماجی مسائل پر عوامی سیمینار'
          },
          {
            icon: AcademicCapIcon,
            title: 'سیرت النبی ﷺ مقابلے',
            description: 'طلباء کے لئے پیغمبر اسلام ﷺ کی زندگی پر کوئز مقابلے'
          },
          {
            icon: UsersIcon,
            title: 'نوجوانوں کی رہنمائی',
            description: 'جدید چیلنجز پر نوجوان مسلمانوں کے لئے رہنمائی سیشن'
          },
          {
            icon: BookOpenIcon,
            title: 'اسلامی آداب ورکشاپس',
            description: 'اسلامی سماجی آداب اور خاندانی اقدار پر تربیت'
          }
        ]
      },
      seerat: {
        title: 'سیرت النبی ﷺ کے پروگرام',
        activities: [
          {
            title: 'اسکول مقابلے',
            description: 'تعلیمی اداروں میں سالانہ کوئز مقابلے'
          },
          {
            title: 'عوامی لیکچرز',
            description: 'ہر عمر کے لئے نبی کریم ﷺ کی تعلیمات پر لیکچرز'
          },
          {
            title: 'اشاعتی مواد',
            description: 'معاشروں میں تقسیم کے لئے سیرت پر کتابچے'
          },
          {
            title: 'میڈیا مہمات',
            description: 'سوشل میڈیا پر نبی ﷺ کی زندگی کے بارے میں مواد'
          }
        ]
      },
      stats: {
        title: 'ہمارا اثر',
        items: [
          {
            value: '50+',
            label: 'سالانہ ورکشاپس'
          },
          {
            value: '10,000+',
            label: 'تک پہنچے طلباء'
          },
          {
            value: '200+',
            label: 'مساجد شامل'
          },
          {
            value: '25+',
            label: 'شہر شامل'
          }
        ]
      },
      cta: {
        title: 'ہماری اصلاحی تحریک میں شامل ہونا چاہتے ہیں؟',
        button: 'ابھی رضاکار بنیں',
        contact: 'ہم سے رابطہ کریں +92 300 1234567 پر'
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
        className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white overflow-hidden"
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
              <h2 className={`text-3xl font-bold text-blue-800 mb-6 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
                {content[language].about.title}
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}>
                {content[language].about.text}
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-blue-100 rounded-2xl p-6 shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="/images/islah-workshop.jpg" 
                    alt="Islah-e-Muashrah Workshop" 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <LightBulbIcon className="h-10 w-10 text-blue-600 mr-3" />
                    <span className="font-semibold text-gray-800">
                      {language === 'en' ? 'Enlightening Communities' : 'معاشروں کو روشناس کرنا'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={`text-center text-3xl font-bold text-blue-800 mb-12 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
              {content[language].programs.title}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content[language].programs.items.map((program, index) => {
                const Icon = program.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className={`text-xl font-semibold text-gray-800 mb-2 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
                      {program.title}
                    </h3>
                    <p className={`text-gray-600 ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}>
                      {program.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seerat-un-Nabi Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={`text-center text-3xl font-bold text-blue-800 mb-12 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
              {content[language].seerat.title}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {content[language].seerat.activities.map((activity, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600"
                >
                  <h3 className={`text-xl font-semibold text-blue-800 mb-3 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
                    {activity.title}
                  </h3>
                  <p className={`text-gray-700 ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}>
                    {activity.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg"
            >
              <h3 className={`text-xl font-semibold text-yellow-800 mb-3 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
                {language === 'en' ? 'Upcoming Seerat Competition' : 'آنے والا سیرت مقابلہ'}
              </h3>
              <p className={`text-gray-700 ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}>
                {language === 'en' 
                  ? 'Annual Seerat-un-Nabi Quiz Competition for schools - Registrations open now!'
                  : 'اسکولوں کے لئے سالانہ سیرت النبی ﷺ کوئز مقابلہ - رجسٹریشنز کھلی ہیں!'}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-700 text-white">
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
            className="bg-blue-50 rounded-xl p-8 md:p-12 text-center"
          >
            <motion.h2 variants={itemVariants} className={`text-2xl md:text-3xl font-bold text-blue-800 mb-6 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
              {content[language].cta.title}
            </motion.h2>
            <motion.div variants={itemVariants} className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
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

export default IslahEMuashrah;