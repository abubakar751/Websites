import React, { useEffect } from 'react';
import { Calendar, Users, Target, BookOpen, Award, Shield, Heart, Star, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

const About: React.FC = () => {
  const { language, t } = useLanguage();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const stats = [
    { icon: Calendar, label: language === 'en' ? '22+ Years' : '۲۲+ سال', description: language === 'en' ? 'Serving Community' : 'خدمتِ اجتماع' },
    { icon: Users, label: '1,300+', description: language === 'en' ? 'Cases Resolved' : 'مقدمات حل شدہ' },
    { icon: Target, label: '5', description: language === 'en' ? 'Core Missions' : 'بنیادی مشن' },
    { icon: BookOpen, label: '100+', description: language === 'en' ? 'Publications' : 'تصانیف' }
  ];

  const achievements = [
    {
      title: language === 'en' ? 'Islamic Arbitration Excellence' : 'اسلامی ثالثی میں امتیاز',
      description: language === 'en' 
        ? 'Our Darul Qaza has successfully resolved over 1,300 family disputes using Islamic principles, earning recognition from the All India Muslim Personal Law Board.'
        : 'ہمارے دارالقضاء نے اسلامی اصولوں کے تحت ۱,۳۰۰ سے زائد خاندانی تنازعات کامیابی سے حل کیے ہیں، آل انڈیا مسلم پرسنل لا بورڈ سے اعزاز حاصل کیا ہے۔',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Shield
    },
    {
      title: language === 'en' ? 'Community Education Impact' : 'تعلیمی خدمات کا اثر',
      description: language === 'en'
        ? 'Through Madrasa Qasmiya and various educational programs, we have provided religious education and moral training to hundreds of children, shaping the next generation of conscious Muslims.'
        : 'مدرسہ قاسمیہ اور دیگر تعلیمی پروگراموں کے ذریعے ہم نے سینکڑوں بچوں کو دینی تعلیم و تربیت فراہم کی ہے، مستقبل کے باشعور مسلمانوں کی تشکیل میں معاون ہیں۔',
      image: 'https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: BookOpen
    },
    {
      title: language === 'en' ? 'Welfare Services Reach' : 'رسمی خدمات کی وسعت',
      description: language === 'en'
        ? 'Our welfare department has provided monthly stipends to over 500 widows, orphans, and needy families, while also offering emergency assistance during critical times.'
        : 'ہمارے شعبہ رفاہ عامہ نے ۵۰۰ سے زائد بیواؤں، یتیموں اور ضرورتمند خاندانوں کو ماہانہ امداد فراہم کی ہے، نیز مشکل اوقات میں ہنگامی امداد بھی جاری رکھی ہے۔',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Heart
    }
  ];

  const timeline = [
    {
      year: '2002',
      title: language === 'en' ? 'Foundation' : 'تاسیس',
      description: language === 'en' 
        ? 'Established by local scholars and Huffaz with the vision of serving the Muslim community'
        : 'مقامی علماء اور حفاظ کرام کی جانب سے مسلم معاشرے کی خدمت کے لیے قائم کیا گیا'
    },
    {
      year: '2005',
      title: language === 'en' ? 'Darul Qaza Launch' : 'دارالقضاء کا افتتاح',
      description: language === 'en'
        ? 'Launched Islamic arbitration center under All India Muslim Personal Law Board supervision'
        : 'آل انڈیا مسلم پرسنل لا بورڈ کے زیر اہتمام اسلامی ثالثی مرکز کا آغاز'
    },
    {
      year: '2012',
      title: language === 'en' ? 'Welfare Programs' : 'رفاہی پروگرام',
      description: language === 'en'
        ? 'Launched systematic welfare support for widows, orphans, and needy families'
        : 'بیواؤں، یتیموں اور مستحق خاندانوں کے لیے منظم رفاہی پروگرام کا آغاز'
    },
    {
      year: '2016',
      title: language === 'en' ? 'Educational Expansion' : 'تعلیمی توسیع',
      description: language === 'en'
        ? 'Established Madrasa Qasmiya for comprehensive Islamic education'
        : 'جامع اسلامی تعلیم کے لیے مدرسہ قاسمیہ کا قیام'
    },
    {
      year: '2020',
      title: language === 'en' ? 'Digital Outreach' : 'ڈیجیٹل خدمات',
      description: language === 'en'
        ? 'Started daily religious messages and digital publication distribution'
        : 'یومیہ دینی پیغامات اور ڈیجیٹل اشاعتوں کا آغاز'
    },
    {
      year: '2022',
      title: language === 'en' ? 'Continued Growth' : 'مسلسل ترقی',
      description: language === 'en'
        ? 'Expanding services with modern technology while maintaining Islamic principles'
        : 'جدید ٹیکنالوجی کے ساتھ خدمات کی توسیع جبکہ اسلامی اصولوں پر کاربند'
    }
  ];

  const values = [
    {
      title: language === 'en' ? 'Islamic Integrity' : 'اسلامی اصولوں کی پاسداری',
      description: language === 'en' 
        ? 'All our decisions and actions are guided by the Quran and Sunnah, ensuring authenticity in every service we provide.'
        : 'ہمارے تمام فیصلے اور اقدامات قرآن و سنت کی روشنی میں ہوتے ہیں، جو ہماری ہر خدمت میں صداقت کو یقینی بناتے ہیں۔',
      icon: BookOpen
    },
    {
      title: language === 'en' ? 'Community First' : 'معاشرے کی خدمت اولین ترجیح',
      description: language === 'en'
        ? 'We prioritize community needs above all else, working tirelessly to address social, educational, and welfare challenges.'
        : 'ہم معاشرے کی ضروریات کو اولین ترجیح دیتے ہیں، سماجی، تعلیمی اور رفاہی چیلنجز سے نمٹنے کے لیے دن رات کام کرتے ہیں۔',
      icon: Users
    },
    {
      title: language === 'en' ? 'Justice & Fairness' : 'انصاف اور عدل',
      description: language === 'en'
        ? 'Our arbitration services ensure fair resolution of disputes, treating all parties with equal respect and Islamic justice.'
        : 'ہماری ثالثی خدمات تمام فریقین کے ساتھ یکساں احترام اور اسلامی انصاف کے ساتھ تنازعات کے منصفانہ حل کو یقینی بناتی ہیں۔',
      icon: Shield
    },
    {
      title: language === 'en' ? 'Educational Excellence' : 'معیاری تعلیم',
      description: language === 'en'
        ? 'We strive for the highest standards in Islamic education, combining traditional knowledge with contemporary understanding.'
        : 'ہم اسلامی تعلیم کے اعلیٰ ترین معیار کے حصول کی کوشش کرتے ہیں، روایتی علم کو عصری فہم کے ساتھ جوڑتے ہوئے۔',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Font imports in your global CSS */}
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
      `}</style>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/image2.jpeg')" }}></div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="text-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="w-24 h-24 md:w-32 md:h-32 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl overflow-hidden"
            >
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-full" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-3xl md:text-5xl font-bold text-emerald-800 mb-4 ${language === 'ur' ? 'font-urdu' : ''}`}
            >
              {t('about.title')}
            </motion.h1>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4 }}
              className="w-24 h-1 bg-emerald-600 mx-auto mb-6"
            ></motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className={`text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}
            >
              {language === 'en'
                ? 'For over two decades, Tanzeem Ulma Ahle Sunnat Wal Jamaat Govandi has stood as a pillar of Islamic guidance, community service, and social welfare in Mumbai.'
                : 'دو دہائیوں سے زیادہ عرصے سے، تنظیم علماء اہل سنت والجماعت گووندی ممبئی میں اسلامی رہنمائی، معاشرتی خدمات اور فلاح عامہ کا ایک مضبوط ستون رہی ہے۔'
              }
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Organization Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                {language === 'en' ? 'Our Foundation Story' : 'ہماری تاسیسی داستان'}
              </h2>
              <div className="space-y-4">
                <p className={`text-base md:text-lg text-gray-700 leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {language === 'en'
                    ? 'In 2002, a group of dedicated local scholars, Huffaz (memorizers of the Quran), and community leaders came together with a shared vision. They witnessed the growing challenges faced by the Muslim community in Govandi.'
                    : '۲۰۰۲ میں مقامی علماء، حفاظ کرام اور معاشرتی رہنماؤں کا ایک گروہ ایک مشترکہ وژن کے ساتھ اکٹھا ہوا۔ انہوں نے گووندی کی مسلم کمیونٹی کو درپیش بڑھتے ہوئے چیلنجز کو محسوس کیا۔'
                  }
                </p>
                <p className={`text-base md:text-lg text-gray-700 leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {language === 'en'
                    ? 'What started as informal gatherings in local mosques gradually evolved into a structured organization serving thousands with Islamic guidance and social services.'
                    : 'جو مقامی مساجد میں غیر رسمی اجتماعات کے طور پر شروع ہوا وہ بتدریج ایک منظم تنظیم میں تبدیل ہو گیا جو ہزاروں افراد کو اسلامی رہنمائی اور معاشرتی خدمات فراہم کرتی ہے۔'
                  }
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/image.jpeg"
                alt="Islamic Community Gathering"
                className="rounded-xl shadow-lg w-full"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-4 md:p-6 rounded-lg shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold mb-1">2002</div>
                  <div className={`text-xs md:text-sm ${language === 'ur' ? 'font-urdu' : ''}`}>
                    {language === 'en' ? 'Established' : 'تاسیس'}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {language === 'en' ? 'Our Impact in Numbers' : 'ہمارا اثر اعداد میں'}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'These numbers represent real lives touched and positive changes in our community.'
                : 'یہ اعداد حقیقی زندگیوں میں تبدیلی اور معاشرے میں مثبت اثرات کی عکاسی کرتے ہیں۔'
              }
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-md p-4 md:p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="text-2xl md:text-4xl font-bold text-emerald-800 mb-1 md:mb-2">{stat.label}</div>
                  <div className={`text-sm md:text-base text-gray-600 ${language === 'ur' ? 'font-urdu' : ''}`}>{stat.description}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {language === 'en' ? 'Our Journey Through Time' : 'وقت کے ساتھ ہمارا سفر'}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'Key milestones in our organizational growth and community service.'
                : 'ہماری تنظیمی ترقی اور معاشرتی خدمات کے اہم سنگ میل۔'
              }
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pl-10 md:pl-0 md:pr-8' : 'pl-10 md:pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-md p-5 md:p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-3 md:space-x-4 mb-3">
                        <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {item.year.slice(-2)}
                        </div>
                        <div>
                          <div className="text-lg md:text-xl font-bold text-emerald-600">{item.year}</div>
                          <h3 className={`text-xl md:text-2xl font-bold text-gray-900 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className={`text-gray-700 leading-relaxed text-sm md:text-base ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-emerald-600 rounded-full border-2 border-white shadow-md"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {language === 'en' ? 'Our Key Achievements' : 'ہماری اہم کامیابیاں'}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'Celebrating the milestones that have defined our journey and community impact.'
                : 'ان سنگ میلوں کا جشن جنہوں نے ہمارے سفر اور معاشرتی اثرات کو متعین کیا ہے۔'
              }
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="relative h-48">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className={`text-xl md:text-2xl font-bold text-gray-900 mb-3 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                      {achievement.title}
                    </h3>
                    <p className={`text-gray-700 text-sm md:text-base mb-4 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                      {achievement.description}
                    </p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {language === 'en' ? 'Our Core Values' : 'ہمارے بنیادی اصول'}
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className={`text-lg text-emerald-100 max-w-3xl mx-auto ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'These fundamental values guide every decision we make and service we provide.'
                : 'یہ بنیادی اصول ہمارے ہر فیصلے اور ہر خدمت کی رہنمائی کرتے ہیں۔'
              }
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-5 md:p-6 hover:bg-opacity-20 transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xl md:text-2xl font-bold text-white mb-2 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                        {value.title}
                      </h3>
                      <p className={`text-emerald-100 text-sm md:text-base ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {language === 'en' ? 'Our Leadership & Governance' : 'ہماری قیادت اور انتظامیہ'}
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className={`text-lg text-gray-600 max-w-4xl mx-auto ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'Our organization is guided by a distinguished council of scholars with decades of Islamic knowledge and community experience.'
                : 'ہماری تنظیم کی رہنمائی علماء کی ایک ممتاز کونسل کرتی ہے جن کے پاس دہائیوں کا اسلامی علم اور معاشرتی تجربہ ہے۔'
              }
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <Users className="w-12 h-12 text-emerald-600" />
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold text-gray-900 mb-4 ${language === 'ur' ? 'font-urdu text-right lg:text-left' : ''}`}>
                  {language === 'en' ? 'Council of Scholars' : 'علماء کونسل'}
                </h3>
                <div className="space-y-3">
                  {[
                    language === 'en' ? 'Local Imams and Muftis' : 'مقامی ائمہ اور مفتیان',
                    language === 'en' ? 'Huffaz (Quran Memorizers)' : 'حفاظ (قرآن حافظ)',
                    language === 'en' ? 'Community Elders' : 'معاشرتی بزرگ',
                    language === 'en' ? 'Islamic Scholars' : 'اسلامی اسکالرز'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className={`text-gray-700 ${language === 'ur' ? 'font-urdu' : ''}`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className={`text-base md:text-lg text-gray-700 mb-4 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {language === 'en' 
                    ? 'Our leadership structure ensures that all decisions are made through consultation (Shura) and aligned with Islamic principles.'
                    : 'ہماری قیادتی ڈھانچہ اس بات کو یقینی بناتا ہے کہ تمام فیصلے مشاورت (شوریٰ) کے ذریعے کیے جائیں اور اسلامی اصولوں کے مطابق ہوں۔'
                  }
                </p>
                <p className={`text-base md:text-lg text-gray-700 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {language === 'en'
                    ? 'This collective approach ensures transparency and adherence to Islamic governance principles.'
                    : 'یہ اجتماعی نقطہ نظر شفافیت اور اسلامی اصولوں کی پابندی کو یقینی بناتا ہے۔'
                  }
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;