import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { HeartIcon, ShieldCheckIcon, HandIcon } from 'lucide-react';

const SocialWelfare: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Social Welfare - Khidmat-e-Khalq',
      subtitle: 'Serving Humanity with Compassion',
      description: 'Our social welfare programs aim to uplift the underprivileged members of society through financial support, education, and emergency relief services.',
      programs: [
        {
          title: 'Support for Widows & Orphans',
          description: 'Monthly financial assistance to poor widows, orphans, and underprivileged students',
          icon: HeartIcon,
          features: [
            'Monthly stipend for basic needs',
            'Educational support for orphans',
            'Seasonal clothing and food packages',
            'Healthcare assistance'
          ]
        },
        {
          title: 'Emergency Relief',
          description: 'Immediate assistance during disasters and emergencies',
          icon: ShieldCheckIcon,
          features: [
            'Disaster response teams',
            'Food and shelter provision',
            'Medical emergency support',
            'Rehabilitation programs'
          ]
        },
        {
          title: 'Community Support',
          description: 'Ongoing programs for the underprivileged',
          icon: HandIcon,
          features: [
            'Vocational training',
            'Microfinance opportunities',
            'Marriage assistance for poor families',
            'Elderly care programs'
          ]
        }
      ],
      stats: [
        { value: '500+', label: 'Families Supported Monthly' },
        { value: '1,200+', label: 'Orphans in Our Care' },
        { value: '50+', label: 'Emergency Responses Yearly' },
        { value: '15+', label: 'Years of Service' }
      ],
      cta: {
        title: 'Want to Support Our Social Welfare Programs?',
        button: 'Donate Now',
        contact: 'Contact us at +92 300 1234567 for more information'
      }
    },
    ur: {
      title: 'سماجی بہبود - خدمت خلق',
      subtitle: 'انسانی خدمت باہمدری',
      description: 'ہمارے سماجی بہبود کے پروگرام معاشرے کے کمزور طبقات کو مالی امداد، تعلیم اور ہنگامی امدادی خدمات کے ذریعے بہتر بنانے کا عزم رکھتے ہیں۔',
      programs: [
        {
          title: 'بیواؤں اور یتیموں کی مدد',
          description: 'غریب بیواؤں، یتیموں اور ضرورت مند طلباء کو ماہانہ مالی امداد',
          icon: HeartIcon,
          features: [
            'بنیادی ضروریات کے لیے ماہانہ وظیفہ',
            'یتیم بچوں کے لیے تعلیمی امداد',
            'موسمی کپڑے اور خوراک کے پیکجز',
            'صحت کی دیکھ بھال کی سہولیات'
          ]
        },
        {
          title: 'ہنگامی امداد',
          description: 'آفات اور ہنگامی حالات میں فوری امداد',
          icon: ShieldCheckIcon,
          features: [
            'آفات کے لیے ریسپانس ٹیمیں',
            'خوراک اور رہائش کی فراہمی',
            'طبی ہنگامی امداد',
            'بحالی کے پروگرام'
          ]
        },
        {
          title: 'معاشرتی مدد',
          description: 'ضرورت مندوں کے لیے مسلسل پروگرام',
          icon: HandIcon,
          features: [
            'پیشہ ورانہ تربیت',
            'مائیکرو فنانس کے مواقع',
            'غریب خاندانوں کے لیے شادی کی امداد',
            'بزرگوں کی دیکھ بھال کے پروگرام'
          ]
        }
      ],
      stats: [
        { value: '500+', label: 'ماہانہ مدد یافتہ خاندان' },
        { value: '1,200+', label: 'ہمارے زیر کفالت یتیم' },
        { value: '50+', label: 'سالانہ ہنگامی کارروائیاں' },
        { value: '15+', label: 'سالہ خدمات' }
      ],
      cta: {
        title: 'ہمارے سماجی بہبود کے پروگراموں میں حصہ لینا چاہتے ہیں؟',
        button: 'ابھی عطیہ دیں',
        contact: 'مزید معلومات کے لیے ہم سے رابطہ کریں +92 300 1234567 پر'
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

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative py-20 bg-gradient-to-r from-green-800 to-green-600 text-white"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/islamic-pattern.png')] bg-repeat"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              variants={itemVariants}
              className={`text-4xl md:text-5xl font-bold mb-4 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}
            >
              {content[language].title}
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className={`text-xl md:text-2xl mb-6 ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}
            >
              {content[language].subtitle}
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className={`text-lg max-w-3xl mx-auto ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}
            >
              {content[language].description}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {content[language].programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Icon className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className={`text-xl font-semibold ml-3 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
                        {program.title}
                      </h3>
                    </div>
                    <p className={`text-gray-600 mb-4 ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}>
                      {program.description}
                    </p>
                    <ul className="space-y-2">
                      {program.features.map((feature, i) => (
                        <li key={i} className={`flex items-start ${language === 'ur' ? 'flex-row-reverse justify-end' : ''}`}>
                          <svg className={`h-5 w-5 text-green-500 ${language === 'ur' ? 'ml-2' : 'mr-2'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={`${language === 'ur' ? 'urdu-nastaliq' : ''}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
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
            variants={containerVariants}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {content[language].stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className={`text-xl ${language === 'ur' ? 'urdu-nastaliq' : ''}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white rounded-xl p-8 md:p-12 text-center shadow-lg"
          >
            <motion.h2 variants={itemVariants} className={`text-2xl md:text-3xl font-bold text-green-800 mb-6 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
              {content[language].cta.title}
            </motion.h2>
            <motion.div variants={itemVariants} className="mt-8">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
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

export default SocialWelfare;