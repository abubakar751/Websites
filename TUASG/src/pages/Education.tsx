import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpenIcon, AcademicCapIcon, UserGroupIcon, ClockIcon, ScaleIcon, LightBulbIcon, GlobeAltIcon } from '@heroicons/react/24/solid';

const Education: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Islamic Education - Nurturing Minds with Divine Knowledge',
      description: `Comprehensive educational programs that combine traditional Islamic learning with contemporary knowledge to develop well-rounded Muslim individuals.`,
      about: {
        title: 'Our Educational Vision',
        text: `We provide a holistic education system that nurtures Islamic identity while equipping students with modern knowledge. Our programs range from full-time madrasa education to supplementary Islamic studies for school-going children, all designed to create balanced individuals who excel in both religious and worldly matters.`
      },
      programs: {
        title: 'Our Educational Programs',
        items: [
          {
            icon: BookOpenIcon,
            title: 'Full-Time Madrasa',
            description: 'Comprehensive Islamic education with Hifz and Alim courses'
          },
          {
            icon: AcademicCapIcon,
            title: 'Weekend Islamic School',
            description: 'Supplementary Islamic education for school-going children'
          },
          {
            icon: GlobeAltIcon,
            title: 'Online Learning',
            description: 'Virtual Islamic courses for students worldwide'
          },
          {
            icon: LightBulbIcon,
            title: 'Adult Education',
            description: 'Islamic studies programs for working professionals'
          }
        ]
      },
      approach: {
        title: 'Our Unique Approach',
        items: [
          {
            icon: ScaleIcon,
            title: 'Balanced Curriculum',
            description: 'Combination of Diniyat and contemporary subjects'
          },
          {
            icon: UserGroupIcon,
            title: 'Personalized Learning',
            description: 'Small class sizes with individual attention'
          },
          {
            icon: AcademicCapIcon,
            title: 'Masjid-Based Education',
            description: 'Learning in the spiritual environment of the mosque'
          },
          {
            icon: ClockIcon,
            title: 'Flexible Schedules',
            description: 'Programs tailored to different age groups and commitments'
          }
        ]
      },
      levels: {
        title: 'Education Levels',
        grades: [
          {
            name: 'Primary Level',
            description: 'Quran reading, basic Islamic knowledge, and character building'
          },
          {
            name: 'Secondary Level',
            description: 'Intermediate Islamic studies with Arabic language'
          },
          {
            name: 'Advanced Level',
            description: 'Specialization in Quranic sciences, Hadith, and Fiqh'
          },
          {
            name: 'Higher Education',
            description: 'Advanced Islamic scholarship and research opportunities'
          }
        ]
      },
      stats: {
        title: 'Our Educational Impact',
        items: [
          {
            value: '2,000+',
            label: 'Students Enrolled'
          },
          {
            value: '50+',
            label: 'Qualified Teachers'
          },
          {
            value: '15+',
            label: 'Campuses Nationwide'
          },
          {
            value: '20+',
            label: 'Years of Service'
          }
        ]
      },
      cta: {
        title: 'Ready to Begin Your Islamic Education Journey?',
        button: 'Enroll Now',
        contact: 'Contact our admissions office at +92 300 1234567'
      }
    },
    ur: {
      title: 'اسلامی تعلیم - الہامی علم سے ذہنوں کی تربیت',
      description: `روایتی اسلامی تعلیم اور جدید علوم کا امتزاج پیش کرتے ہوئے متوازن مسلمان افراد کی تربیت کے جامع تعلیمی پروگرام۔`,
      about: {
        title: 'ہمارا تعلیمی نظریہ',
        text: `ہم ایک مکمل تعلیمی نظام فراہم کرتے ہیں جو اسلامی شناخت کو پروان چڑھاتے ہوئے طلباء کو جدید علوم سے آراستہ کرتا ہے۔ ہمارے پروگراموں میں مکمل وقت کے مدرسے سے لے کر اسکول جانے والے بچوں کے لیے اضافی اسلامی تعلیم تک شامل ہے، جو تمام مذہبی اور دنیاوی معاملات میں کمال حاصل کرنے والے افراد تیار کرنے کے لیے ڈیزائن کیے گئے ہیں۔`
      },
      programs: {
        title: 'ہمارے تعلیمی پروگرام',
        items: [
          {
            icon: BookOpenIcon,
            title: 'مکمل وقت کا مدرسہ',
            description: 'حفظ اور عالم کورسز کے ساتھ جامع اسلامی تعلیم'
          },
          {
            icon: AcademicCapIcon,
            title: 'ہفتہ وار اسلامی اسکول',
            description: 'اسکول جانے والے بچوں کے لیے اضافی اسلامی تعلیم'
          },
          {
            icon: GlobeAltIcon,
            title: 'آن لائن تعلیم',
            description: 'دنیا بھر کے طلباء کے لیے مجازی اسلامی کورسز'
          },
          {
            icon: LightBulbIcon,
            title: 'بالغوں کی تعلیم',
            description: 'ملازمت پیشہ افراد کے لیے اسلامی تعلیم کے پروگرام'
          }
        ]
      },
      approach: {
        title: 'ہمارا منفرد انداز',
        items: [
          {
            icon: ScaleIcon,
            title: 'متوازن نصاب',
            description: 'دینیات اور عصری مضامین کا امتزاج'
          },
          {
            icon: UserGroupIcon,
            title: 'ذاتی توجہ',
            description: 'چھوٹی کلاسوں میں انفرادی توجہ'
          },
          {
            icon: AcademicCapIcon,
            title: 'مسجد پر مبنی تعلیم',
            description: 'مسجد کے روحانی ماحول میں تعلیم'
          },
          {
            icon: ClockIcon,
            title: 'لچکدار اوقات',
            description: 'مختلف عمر کے گروپوں اور مصروفیات کے مطابق پروگرام'
          }
        ]
      },
      levels: {
        title: 'تعلیمی سطحیں',
        grades: [
          {
            name: 'ابتدائی سطح',
            description: 'قرآن پڑھنا، بنیادی اسلامی معلومات اور کردار سازی'
          },
          {
            name: 'ثانوی سطح',
            description: 'عربی زبان کے ساتھ درمیانی اسلامی تعلیم'
          },
          {
            name: 'اعلیٰ سطح',
            description: 'قرآنی علوم، حدیث اور فقہ میں مہارت'
          },
          {
            name: 'اعلیٰ تعلیم',
            description: 'اعلیٰ اسلامی تعلیم اور تحقیق کے مواقع'
          }
        ]
      },
      stats: {
        title: 'ہمارا تعلیمی اثر',
        items: [
          {
            value: '2,000+',
            label: 'رجسٹرڈ طلباء'
          },
          {
            value: '50+',
            label: 'قابل اساتذہ'
          },
          {
            value: '15+',
            label: 'ملک بھر میں کیمپس'
          },
          {
            value: '20+',
            label: 'سالہ خدمات'
          }
        ]
      },
      cta: {
        title: 'اپنی اسلامی تعلیم کا سفر شروع کرنے کے لیے تیار ہیں؟',
        button: 'ابھی داخلہ لیں',
        contact: 'ہمارے داخلہ دفتر سے رابطہ کریں +92 300 1234567 پر'
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
        className="relative py-20 bg-gradient-to-r from-indigo-800 to-indigo-600 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/image2.jpeg')] bg-repeat"></div>
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
              <h2 className={`text-3xl font-bold text-indigo-800 mb-6 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
                {content[language].about.title}
              </h2>
              <p className={`text-lg text-gray-700 leading-relaxed ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}>
                {content[language].about.text}
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-indigo-100 rounded-2xl p-6 shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="/image2.jpeg" 
                    alt="Islamic Education" 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <LightBulbIcon className="h-10 w-10 text-indigo-600 mr-3" />
                    <span className="font-semibold text-gray-800">
                      {language === 'en' ? 'Enlightening Minds' : 'ذہنوں کو روشن کرنا'}
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
            <motion.h2 variants={itemVariants} className={`text-center text-3xl font-bold text-indigo-800 mb-12 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
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
                    <div className="bg-indigo-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-indigo-600" />
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

      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={`text-center text-3xl font-bold text-indigo-800 mb-12 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
              {content[language].approach.title}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content[language].approach.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600"
                  >
                    <div className="flex items-center mb-3">
                      <Icon className="h-8 w-8 text-indigo-600 mr-3" />
                      <h3 className={`text-xl font-semibold text-indigo-800 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className={`text-gray-700 ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}>
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Levels Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={`text-center text-3xl font-bold text-indigo-800 mb-12 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
              {content[language].levels.title}
            </motion.h2>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              {content[language].levels.grades.map((grade, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className={`text-xl font-semibold text-indigo-800 mb-3 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
                    {grade.name}
                  </h3>
                  <p className={`text-gray-700 ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}>
                    {grade.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-700 text-white">
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
            className="bg-indigo-50 rounded-xl p-8 md:p-12 text-center"
          >
            <motion.h2 variants={itemVariants} className={`text-2xl md:text-3xl font-bold text-indigo-800 mb-6 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
              {content[language].cta.title}
            </motion.h2>
            <motion.div variants={itemVariants} className="mt-8">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
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

export default Education;