import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const { language } = useLanguage();

  const testimonials = {
    en: [
      {
        id: 1,
        name: "Maulana Khalid Saifullah Rahmani",
        title: "President, All India Muslim Personal Law Board",
        quote: "I had the opportunity to observe the activities here, especially to review the system of Darul Qaza. I was very pleased and realized that this institution is rendering a great and beneficial service with lofty ambitions. May Allah grant it continued success.",
        image: "/rahmani.jpg"
      },
      {
        id: 2,
        name: "Maulana Muhammad Yamin Qasmi",
        title: "Preacher, Darul Uloom Deoband",
        quote: "Listening to the performance and religious services of this Tanzeem gave me immense spiritual joy. Undoubtedly, in this era of trials, ignorance, and irreligiousness, the establishment of such an organization is a commendable and praiseworthy step.",
        image: "/qasmi.jpg"
      },
      {
        id: 3,
        name: "Maulana Shah Alam Gorakhpuri",
        title: "Teacher & Deputy Administrator, All India Majlis Tahaffuz Khatm-e-Nubuwwat",
        quote: "MashaAllah, the Tanzeem is also actively aware of the threats posed by apostasy-related fitnas and is supported by the scholars of truth. May Allah grant it further progress, acceptance, and widespread benefit.",
        image: "/images/scholars/gorakhpuri.jpg"
      },
      {
        id: 4,
        name: "Qazi Qasim Muzaffarpuri",
        title: "Former Shariah Judge, Darul Qaza, Imarat-e-Shariah, Phulwari Sharif, Patna",
        quote: "I was also taken on a tour of the Darul Qaza. I had the opportunity to go through many case files and their rulings. MashaAllah, the judgments were well-reasoned, and the proceedings were thorough.",
        image: "/images/scholars/muzaffarpuri.jpg"
      },
      {
        id: 5,
        name: "Maulana Obaidullah Al-Asa'di",
        title: "Sheikh-ul-Hadith, Jamia Arabia Hathoura, Banda",
        quote: "By the grace of Allah, this Darul Qaza has been functioning effectively for the past several years in this densely populated Muslim area. The average number of cases handled is also notable. May Allah increase its benefit and reach.",
        image: "/images/scholars/al-asaadi.jpg"
      },
      {
        id: 6,
        name: "Maulana Nematullah Azmi",
        title: "Principal, Madrasa Arabia Qasmia, Ghosi",
        quote: "I have observed the working of this Darul Qaza closely. The cases are decided with justice and fairness, and the judgments are based on authentic Islamic jurisprudence. This is a much-needed service for the Muslim community.",
        image: "/images/scholars/azmi.jpg"
      }
    ],
    ur: [
      {
        id: 1,
        name: "مولانا خالد سیف اللہ رحمانی",
        title: "صدر، آل انڈیا مسلم پرسنل لاء بورڈ",
        quote: "مجھے یہاں کی سرگرمیوں کا مشاہدہ کرنے کا موقع ملا، خاص طور پر دارالقضاء کے نظام کا جائزہ لینے کا۔ میں بہت خوش ہوا اور محسوس کیا کہ یہ ادارہ بلند عزائم کے ساتھ ایک عظیم اور مفید خدمت انجام دے رہا ہے۔ اللہ اسے مزید کامیابی عطا فرمائے۔",
        image: "/rahmani.jpg"
      },
      {
        id: 2,
        name: "مولانا محمد یامین قاسمی",
        title: "واعظ، دارالعلوم دیوبند",
        quote: "اس تنظیم کی کارکردگی اور مذہبی خدمات سن کر مجھے بے پناہ روحانی خوشی محسوس ہوئی۔ بلاشبہ، آزمائش، جہالت اور بے دینی کے اس دور میں ایسے ادارے کا قائم ہونا قابل ستائش اور تعریف کا قدم ہے۔",
        image: "/images/scholars/qasmi.jpg"
      },
      {
        id: 3,
        name: "مولانا شاہ عالم گورکھپوری",
        title: "معلم و نائب ناظم، آل انڈیا مجلس تحفظ ختم نبوت",
        quote: "ماشاءاللہ، تنظیم ارتداد سے متعلق فتنوں کے خطرات سے بھی بخوبی آگاہ ہے اور اہل حق علماء کی تائید حاصل ہے۔ اللہ اسے مزید ترقی، قبولیت اور وسیع تر فوائد عطا فرمائے۔",
        image: "/images/scholars/gorakhpuri.jpg"
      },
      {
        id: 4,
        name: "قاضی قاسم مظفرپوری",
        title: "سابق شریعت جج، دارالقضاء، امارت شرعیہ، پھلوار ی شریف، پٹنہ",
        quote: "مجھے دارالقضاء کا دورہ بھی کرایا گیا۔ مجھے بہت سے مقدمات کی فائلیں اور ان کے فیصلے دیکھنے کا موقع ملا۔ ماشاءاللہ، فیصلے مضبوط دلائل پر مبنی تھے اور کاروائی مکمل تھی۔",
        image: "/images/scholars/muzaffarpuri.jpg"
      },
      {
        id: 5,
        name: "مولانا عبید اللہ الاسعدی",
        title: "شیخ الحدیث، جامعہ عربیہ ہاتھورہ، بانڈہ",
        quote: "الحمدللہ، یہ دارالقضاء گزشتہ کئی سالوں سے اس کثیر آباد مسلم علاقے میں مؤثر طریقے سے کام کر رہا ہے۔ زیر التواء مقدمات کی اوسط تعداد بھی قابل ذکر ہے۔ اللہ اس کے فوائد اور رسائی میں اضافہ فرمائے۔",
        image: "/images/scholars/al-asaadi.jpg"
      },
      {
        id: 6,
        name: "مولانا نعمت اللہ اعظمی",
        title: "پرنسپل، مدرسہ عربیہ قاسمیہ، غوسی",
        quote: "میں نے اس دارالقضاء کے کام کا قریب سے مشاہدہ کیا ہے۔ مقدمات انصاف اور دیانتداری کے ساتھ طے کیے جاتے ہیں، اور فیصلے مستند اسلامی فقہ پر مبنی ہوتے ہیں۔ یہ مسلم معاشرے کی ایک انتہائی ضروری خدمت ہے۔",
        image: "/images/scholars/azmi.jpg"
      }
    ]
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
              {language === 'en' ? 'Remarks of Senior Scholars' : 'بزرگان دین کے تاثرات'}
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className={`text-xl md:text-2xl max-w-3xl mx-auto ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}
            >
              {language === 'en' 
                ? 'What esteemed scholars say about our organization and Darul Qaza' 
                : 'ہمارے ادارے اور دارالقضاء کے بارے میں معزز علماء کرام کے تاثرات'}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className={`text-center text-3xl font-bold text-emerald-800 mb-12 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}
            >
              {language === 'en' ? 'Scholars Testimonials' : 'علماء کے تاثرات'}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials[language].map((testimonial) => (
                <motion.div 
                  key={testimonial.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
                >
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-emerald-500">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = '/images/scholars/default.jpg';
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold text-gray-800 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}>
                        {testimonial.name}
                      </h3>
                      <p className={`text-sm text-emerald-600 ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}>
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <div className="relative pl-8">
                    <ChatBubbleLeftRightIcon className="absolute top-0 left-0 h-6 w-6 text-emerald-300" />
                    <p className={`text-gray-700 mt-1 ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}>
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="mt-4 flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white rounded-xl p-8 md:p-12 text-center shadow-lg"
          >
            <motion.h2 
              variants={itemVariants}
              className={`text-2xl md:text-3xl font-bold text-emerald-800 mb-6 ${language === 'ur' ? 'urdu-nastaliq-heading' : ''}`}
            >
              {language === 'en' 
                ? 'Want to learn more about our work?' 
                : 'ہمارے کام کے بارے میں مزید جاننا چاہتے ہیں؟'}
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className={`text-lg text-gray-600 mb-8 ${language === 'ur' ? 'urdu-nastaliq text-right' : ''}`}
            >
              {language === 'en' 
                ? 'Contact us for more information about our services and initiatives.'
                : 'ہماری خدمات اور اقدامات کے بارے میں مزید معلومات کے لیے ہم سے رابطہ کریں۔'}
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8">
              <Link to="/contact">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-md hover:shadow-lg">
                  {language === 'en' ? 'Contact Us' : 'رابطہ کریں'}
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;