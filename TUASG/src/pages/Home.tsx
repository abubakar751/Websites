import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  BookOpen,
  Heart,
  Shield,
  Award,
  CheckCircle,
  Star,
  Calendar,
  MapPin,
  Phone,
  HeartIcon,
  NewspaperIcon,
  Book,
  Landmark,
  Library,
  PlusCircle,
  Scale,
  School,
  Globe,
  Smartphone,
  Building2,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Carousel from '../components/Carousel';
import { motion } from 'framer-motion';

// Local images
const heroImage2 = "/p1.jpg";
const heroImage3 = "/p2.jpg";
const darulQazaImage = "/p3.jpg";
const socialImage = "/social.jpg";
const educationImage = "/education.jpg";
const welfareImage = "/welfare.jpg";
const aboutImage = "/about.jpg";
const testimonial1 = "/rahmani.jpg";

const logo = "/logo.jpg";

const Home: React.FC = () => {
  const { language, t } = useLanguage();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };



  const departments = [
    {
      icon: Shield,
      title: t('departments.darulqaza.title'),
      subtitle: t('departments.darulqaza.subtitle'),
      description: t('departments.darulqaza.description'),
      highlight: t('departments.darulqaza.cases'),
      color: 'bg-emerald-100 text-emerald-700',
      image: darulQazaImage,
    },
    {
      icon: Users,
      title: t('departments.social.title'),
      subtitle: t('departments.social.subtitle'),
      description: t('departments.social.description'),
      color: 'bg-blue-100 text-blue-700',
      image: socialImage,
    },
    {
      icon: BookOpen,
      title: t('departments.education.title'),
      subtitle: t('departments.education.subtitle'),
      description: t('departments.education.description'),
      color: 'bg-purple-100 text-purple-700',
      image: educationImage,
    },
    {
      icon: Heart,
      title: t('departments.welfare.title'),
      subtitle: t('departments.welfare.subtitle'),
      description: t('departments.welfare.description'),
      color: 'bg-rose-100 text-rose-700',
      image: welfareImage,
    },
  ];

  const testimonials = [
    {
      text: t('testimonial.text'),
      author: t('testimonial.author'),
      designation: t('testimonial.designation'),
      image: testimonial1,
    },

  ];

  const stats = [
    {
      number: '22+',
      label: language === 'en' ? 'Years of Service' : 'سال خدمت',
      icon: Calendar,
    },
    {
      number: '1,300+',
      label: language === 'en' ? 'Cases Resolved' : 'حل شدہ مقدمات',
      icon: Shield,
    },
    {
      number: '500+',
      label: language === 'en' ? 'Families Helped' : 'خاندانوں کی مدد',
      icon: Heart,
    },
    {
      number: '100+',
      label: language === 'en' ? 'Students Educated' : 'تعلیم یافتہ طلباء',
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Font Preload */}
      <style>
        {`
          @font-face {
            font-family: 'Noori Nastaliq';
            src: url('/fonts/NooriNastaliq.ttf') format('truetype');
            font-display: swap;
          }
          .urdu-font {
            font-family: 'Noori Nastaliq', serif;
            line-height: 1.8;
          }
        `}
      </style>




      {/* Organization Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content div - appears second on mobile, first on desktop (default order) */}
            <motion.div
              variants={itemVariants}
              className="order-2 lg:order-none" // Changed only for mobile
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'urdu-font text-right text-5xl' : ''}`}
              >
                {language === 'en'
                  ? 'About Tanzeem Ulma'
                  : 'تنظیم علماء کے بارے میں'}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-lg text-gray-700 mb-6 leading-relaxed ${language === 'ur' ? 'urdu-font text-right text-xl' : ''}`}
              >
                {language === 'en'
                  ? 'Tanzeem Ulama Ahl-e-Sunnat wal Jamaat, Govandi Mumbai is a religious and welfare organization established around 22 years ago through the dedicated efforts of concerned scholars and Huffaz of the area. Its main objectives are the religious reform of the public, protection from false ideologies, revival of the Sunnah, prevention of evil practices, and providing social and educational guidance. All local Imams, mosque administrators, scholars, Huffaz, and Muftis are members of this organization. Since its inception, the Tanzeem has been actively serving the Muslim Ummah, guided by the advice of senior scholars and intellectuals to fulfill its mission.'
                  : 'تنظیم علماء اہل سنت والجماعت گووندی ممبئی ایک دینی و فلاحی تنظیم ہے۔ آج سے تقریباً ۲۲ سال قبل علاقے کے فکر مند علماء و حفاظ کی محنت سے اس کا قیام عمل میں آیا۔ اس کا مقصد عوام کی دینی اصلاح، باطل نظریات سے حفاظت، احیائے سنت، منکرات کی روک تھام اور سماجی و تعلیمی رہنمائی ہے۔ علاقے کے تمام ائمہ مساجد، ارباب اہتمام، علماء، حفاظ اور مفتیان کرام اس کے ممبر ہیں۔ تنظیم اپنے قیام کے روزِ اوّل سے ہی اکابر علماء اور دانشوران کے مشوروں سے امت مسلمہ کی خدمت اور اپنے مقاصد کی تکمیل میں سرگرم عمل ہے۔'}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`${language === 'ur' ? 'text-right' : 'text-left'}`}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center px-5 py-2 rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  {language === 'en' ? 'Learn More' : 'مزید پڑھیں'}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 ml-2 ${language === 'ur' ? 'rotate-180 mr-2 ml-0' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 mt-6"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className={`text-gray-700 ${language === 'ur' ? 'urdu-font' : ''}`}>
                    {language === 'en'
                      ? 'Established 22+ years ago'
                      : '۲۲+ سال قبل قائم'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className={`text-gray-700 ${language === 'ur' ? 'urdu-font' : ''}`}>
                    {language === 'en'
                      ? 'All local scholars involved'
                      : 'تمام مقامی علماء شامل'}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Image div - appears first on mobile, second on desktop */}
            <motion.div
              variants={itemVariants}
              className="relative order-1 lg:order-none" // Changed only for mobile
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={heroImage3}
                alt="Islamic Community"
                className="rounded-2xl shadow-2xl w-full"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-3xl font-bold">22+</div>
                <div className={`text-sm ${language === 'ur' ? 'urdu-font' : ''}`}>
                  {language === 'en' ? 'Years of Service' : 'سال خدمت'}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl font-bold text-gray-900 mb-4 ${language === 'ur' ? 'urdu-font text-4xl' : ''
                }`}
            >
              {language === 'en'
                ? 'Our Impact in Numbers'
                : 'اعداد و شمار میں ہمارا اثر'}
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-emerald-800 mb-2">
                    {stat.number}
                  </div>
                  <div
                    className={`text-gray-600 ${language === 'ur' ? 'urdu-font' : ''
                      }`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'urdu-font text-5xl' : ''}`}>
              {t('departments.title')}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'ur' ? 'urdu-font text-2xl text-right' : ''}`}>
              {language === 'en'
                ? 'Our organization operates through specialized departments, each dedicated to serving different aspects of community needs with Islamic guidance and modern efficiency.'
                : 'ہماری تنظیم خصوصی شعبوں کے ذریعے کام کرتی ہے، ہر ایک اسلامی رہنمائی اور جدید کارکردگی کے ساتھ کمیونٹی کی مختلف ضروریات کی خدمت کے لیے وقف ہے۔'}
            </p>
          </motion.div>

          {/* Feature Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => window.location.href = '/departments'}
            className="cursor-pointer max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl hover:shadow-emerald-200 transition hover:-translate-y-1 duration-300"
          >
            <div className="flex flex-col md:flex-row items-center p-8 gap-6">
              {/* Icon or Image */}
              {/* Icon or Image */}
              <div className="bg-emerald-600 text-white w-20 h-20 flex items-center justify-center rounded-2xl text-3xl shrink-0">
                🏛️
              </div>


              {/* Content */}
              <div className="flex-1">
                <h3 className={`text-2xl font-bold text-gray-900 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                  {language === 'en' ? 'Explore All Departments' : 'تمام شعبہ جات کا جائزہ لیں'}
                </h3>
                <p className={`mt-2 text-gray-700 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                  {language === 'en'
                    ? 'Click here to discover how each department contributes to the welfare and upliftment of the community through Islamic values and social services.'
                    : 'یہاں کلک کریں تاکہ آپ ہر شعبہ کس طرح اسلامی اقدار اور سماجی خدمات کے ذریعے کمیونٹی کی فلاح و بہبود میں کردار ادا کرتا ہے، جان سکیں۔'}
                </p>
              </div>

              {/* Button */}
              <div className="mt-4 md:mt-0">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-md text-sm">
                  {language === 'ur' ? 'مزید دیکھیں' : 'View More'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {   /* Plans*/}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'urdu-font text-5xl' : ''}`}>
              {language === 'en' ? 'Aims & Future Plans' : 'مقاصد اور مستقبل کے منصوبے'}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'ur' ? 'urdu-font text-2xl text-right' : ''}`}>
              {language === 'en'
                ? 'Our vision for the future development of the community.'
                : 'کمیونٹی کی ترقی کے لیے ہمارے مستقبل کے وژن۔'}
            </p>
          </motion.div>

          {/* Feature Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => window.location.href = '/plans'}
            className="cursor-pointer max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl hover:shadow-blue-200 transition hover:-translate-y-1 duration-300"
          >
            <div className="flex flex-col md:flex-row items-center p-8 gap-6">
              {/* Icon */}
              <div className="bg-blue-600 text-white w-20 h-20 flex items-center justify-center rounded-2xl text-3xl shrink-0">
                🎯
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className={`text-2xl font-bold text-gray-900 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                  {language === 'en' ? 'Discover Our Vision' : 'ہمارے وژن کو دریافت کریں'}
                </h3>
                <p className={`mt-2 text-gray-700 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                  {language === 'en'
                    ? 'Click to learn how our plans aim to uplift the community through education, healthcare, and spiritual growth.'
                    : 'یہ جاننے کے لیے کلک کریں کہ ہمارے منصوبے تعلیم، صحت اور روحانی ترقی کے ذریعے کمیونٹی کو کیسے بہتر بنانے کا عزم رکھتے ہیں۔'}
                </p>
              </div>

              {/* Button */}
              <div className="mt-4 md:mt-0">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md text-sm">
                  {language === 'ur' ? 'مزید دیکھیں' : 'View More'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {   /*Needs & Requirements */}



      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'urdu-font text-5xl' : ''}`}>
              {language === 'en' ? 'Needs & Requirements' : 'ضروریات اور تقاضے'}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'ur' ? 'urdu-font text-2xl text-right' : ''}`}>
              {language === 'en'
                ? 'Essential requirements for our continued service to the community'
                : 'کمیونٹی کی خدمت جاری رکھنے کے لیے ضروری تقاضے'}
            </p>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => (window.location.href = '/needs')}
            className="cursor-pointer max-w-4xl mx-auto bg-white rounded-3xl shadow-xl hover:shadow-emerald-200 transition hover:-translate-y-1 duration-300"
          >
            <div className="flex flex-col md:flex-row items-center p-8 gap-6">
              {/* Icon */}
              <div className="bg-emerald-600 text-white w-20 h-20 flex items-center justify-center rounded-2xl text-3xl shrink-0">
                <Building2 className="w-8 h-8" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className={`text-2xl font-bold text-gray-900 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                  {language === 'en' ? 'Support Infrastructure Needs' : 'انفراسٹرکچر کی ضروریات میں تعاون کریں'}
                </h3>
                <p className={`mt-2 text-gray-700 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                  {language === 'en'
                    ? 'Click to learn about our current physical and resource needs like buildings, books, and facilities.'
                    : 'ہماری موجودہ عمارتوں، کتب اور سہولیات جیسی ضروریات کے بارے میں جاننے کے لیے کلک کریں۔'}
                </p>
              </div>

              {/* Button */}
              <div className="mt-4 md:mt-0">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-md text-sm">
                  {language === 'ur' ? 'مزید دیکھیں' : 'View More'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>




      <section className="py-16 bg-emerald-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className={`text-3xl font-bold text-gray-900 mb-4 ${language === 'ur' ? 'urdu-font' : ''}`}>
              {language === 'en' ? 'Testimonials' : 'تاثرات'}
            </h2>
            <Link
              to="/testimonials"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-800 transition-colors"
            >
              {language === 'en' ? 'View all testimonials' : 'تمام تاثرات دیکھیں'}
              <ArrowRight className={`w-5 h-5 ${language === 'ur' ? 'mr-2' : 'ml-2'}`} />
            </Link>
          </motion.div>

          {/* Single Testimonial Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            onClick={() => window.location.href = '/testimonials'}
            className="bg-white rounded-xl shadow-md p-6 mx-auto max-w-md cursor-pointer transition-all"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img src={testimonials[0].image} alt={testimonials[0].author} className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <p className="font-bold">{testimonials[0].author}</p>
                <p className="text-sm text-emerald-600">{testimonials[0].designation}</p>
              </div>
            </div>
            <p className={`text-gray-600 line-clamp-3 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
              "{testimonials[0].text}"
            </p>
          </motion.div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-4xl font-bold text-white mb-6 ${language === 'ur' ? 'urdu-font text-5xl' : ''
                }`}
            >
              {language === 'en'
                ? 'Need Our Services?'
                : 'ہماری خدمات کی ضرورت ہے؟'}
            </h2>
            <p
              className={`text-xl text-emerald-100 mb-8 ${language === 'ur' ? 'urdu-font text-2xl text-right' : ''
                }`}
            >
              {language === 'en'
                ? 'Contact us today for Islamic guidance, family dispute resolution, or community support services.'
                : 'اسلامی رہنمائی، خاندانی تنازعات کے حل، یا کمیونٹی سپورٹ سروسز کے لیے آج ہی ہم سے رابطہ کریں۔'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className={`inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transform transition-all duration-200 shadow-lg ${language === 'ur' ? 'urdu-font flex-row-reverse' : ''
                    }`}
                >
                  <Phone
                    className={`w-5 h-5 ${language === 'ur' ? 'mr-2' : 'ml-2'}`}
                  />
                  {language === 'en' ? 'Contact Us' : 'رابطہ کریں'}
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/departments"
                  className={`inline-flex items-center px-8 py-4 bg-emerald-800 text-white font-semibold rounded-lg hover:bg-emerald-900 transform transition-all duration-200 shadow-lg ${language === 'ur' ? 'urdu-font flex-row-reverse' : ''
                    }`}
                >
                  <BookOpen
                    className={`w-5 h-5 ${language === 'ur' ? 'mr-2' : 'ml-2'}`}
                  />
                  {language === 'en' ? 'Our Services' : 'ہماری خدمات'}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;