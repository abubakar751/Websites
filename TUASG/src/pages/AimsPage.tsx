import React from 'react';
import { FaSchool, FaHeart, FaClinicMedical, FaBook } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const AimsPage = () => {
  const { language } = useLanguage();

  const initiatives = [
    {
      icon: <FaSchool className="text-3xl text-white" />,
      title: {
        en: "Islamic School",
        ur: "اسلامی اسکول"
      },
      description: {
        en: "To protect Muslim children from polytheistic teachings and to impart Islamic and moral values by establishing an Islamic school.",
        ur: "مسلم بچوں کو شرکیہ تعلیمات سے بچانے اور اسلامی اور اخلاقی اقدار سکھانے کے لیے ایک اسلامی اسکول قائم کرنا۔"
      },
      progress: 65,
      color: "bg-green-500"
    },
    {
      icon: <FaHeart className="text-3xl text-white" />,
      title: {
        en: "Family Counseling Center",
        ur: "خاندانی مشاورتی مرکز"
      },
      description: {
        en: "To provide guidance for marital life before marriage and resolve domestic issues after marriage through assessment and counseling.",
        ur: "شادی سے پہلے ازدواجی زندگی کی رہنمائی اور شادی کے بعد گھریلو مسائل کا حل مشاورت کے ذریعے کرنا۔"
      },
      progress: 40,
      color: "bg-red-500"
    },
    {
      icon: <FaClinicMedical className="text-3xl text-white" />,
      title: {
        en: "Charitable Clinic",
        ur: "رسمی ڈسپنسری"
      },
      description: {
        en: "To provide medical treatment and medicines to the poor and needy either free of cost or at a very low price.",
        ur: "غریبوں اور ضرورت مندوں کو مفت یا انتہائی کم قیمت پر علاج اور ادویات فراہم کرنا۔"
      },
      progress: 30,
      color: "bg-blue-500"
    },
    {
      icon: <FaBook className="text-3xl text-white" />,
      title: {
        en: "Public Library",
        ur: "عوامی کتب خانہ"
      },
      description: {
        en: "To encourage a culture of reading among people and help students prepare for exams.",
        ur: "لوگوں میں مطالعے کا رجحان پیدا کرنا اور طلباء کو امتحانات کی تیاری میں مدد فراہم کرنا۔"
      },
      progress: 50,
      color: "bg-purple-500"
    }
  ];

  return (
    <div className={`min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ${language === 'ur' ? 'font-noori-nastaliq' : ''}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 ${language === 'ur' ? 'text-right' : ''}`}>
          <h1 className={`text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4 ${language === 'ur' ? 'text-5xl' : ''}`}>
            {language === 'en' ? 'Our Vision for the Future' : 'ہمارا مستقبل کا ویژن'}
          </h1>
          <p className={`text-xl text-gray-600 ${language === 'ur' ? 'text-2xl' : ''}`}>
            {language === 'en' 
              ? 'Building a stronger community through education, counseling, healthcare, and knowledge' 
              : 'تعلیم، مشاورت، صحت اور علم کے ذریعے مضبوط معاشرہ'}
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {initiatives.map((initiative, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className={`${initiative.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  {initiative.icon}
                </div>
                <h2 className={`text-2xl font-bold text-gray-800 mb-2 ${language === 'ur' ? 'text-3xl' : ''}`}>
                  {initiative.title[language]}
                </h2>
                <p className={`text-gray-600 mb-4 ${language === 'ur' ? 'text-lg' : ''}`}>
                  {initiative.description[language]}
                </p>
                
                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{language === 'en' ? 'Progress' : 'ترقی'}</span>
                    <span>{initiative.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`${initiative.color} h-2.5 rounded-full`} 
                      style={{ width: `${initiative.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center ${language === 'ur' ? 'text-right' : ''}`}>
          <h3 className={`text-2xl font-semibold text-gray-800 mb-4 ${language === 'ur' ? 'text-3xl' : ''}`}>
            {language === 'en' ? 'Support Our Initiatives' : 'ہمارے منصوبوں کی حمایت کریں'}
          </h3>
          <p className={`text-gray-600 mb-6 max-w-2xl mx-auto ${language === 'ur' ? 'text-lg' : ''}`}>
            {language === 'en' 
              ? 'Help us turn these visions into reality by contributing your time, skills, or resources.'
              : 'اپنا وقت، مہارت یا وسائل فراہم کر کے ہمیں ان خوابوں کو حقیقت بنانے میں مدد کریں۔'}
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
            {language === 'en' ? 'Get Involved' : 'شامل ہوں'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AimsPage;