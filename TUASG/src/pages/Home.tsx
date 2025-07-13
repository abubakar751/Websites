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
const testimonial2 = "/qasmi.jpg";
const testimonial3 = "/muzaffarpuri.jpg";
const testimonial4 = "/gorakhpuri.jpg";
const testimonial5 = "/asadi.jpg";

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

        {/* Brochure Download Section - Added Here */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className={`bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all ${language === 'ur' ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 bg-emerald-50 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className={`font-medium text-gray-800 ${language === 'ur' ? 'urdu-font' : ''}`}>
                  {language === 'en' ? 'Organization Brochure' : 'تنظیم کا بروشر'}
                </h4>
                <div className="flex gap-3 mt-2">
                  <a 
                    href="/tanzeem ulma ahle sunnat wal jamaat Broucher .pdf" 
                    download
                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center"
                  >
                    {language === 'en' ? 'Download' : 'ڈاؤن لوڈ'}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 ${language === 'ur' ? 'mr-1' : 'ml-1'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                  <span className="text-gray-400">|</span>
                  <a 
                    href="/tanzeem ulma ahle sunnat wal jamaat Broucher .pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-800 font-medium flex items-center"
                  >
                    {language === 'en' ? 'View Online' : 'آن لائن دیکھیں'}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 ${language === 'ur' ? 'mr-1' : 'ml-1'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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
{/* Timeline Section - After Organization Introduction */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'urdu-font text-5xl' : ''}`}>
        {language === 'en' ? 'Our Journey' : 'ہمارا سفر'}
      </h2>
      <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'ur' ? 'urdu-font text-2xl text-right' : ''}`}>
        {language === 'en'
          ? 'Milestones and achievements over the years'
          : 'سالوں کے دوران اہم سنگ میل اور کامیابیاں'}
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* 2001-2010 Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4">
            <h3 className={`text-xl font-bold text-white ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
              {language === 'en' ? '2001-2010 Timeline' : '۲۰۰۱-۲۰۱۰ ٹائم لائن'}
            </h3>
          </div>
          
          <div className="p-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-emerald-50">
                <tr>
                  <th scope="col" className={`px-4 py-3 text-left text-xs font-medium text-emerald-700 uppercase tracking-wider ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                    {language === 'en' ? 'Year' : 'سال'}
                  </th>
                  <th scope="col" className={`px-4 py-3 text-left text-xs font-medium text-emerald-700 uppercase tracking-wider ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                    {language === 'en' ? 'Event' : 'تقریب'}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { year: '2001', event: language === 'en' ? 'General introductory program about Ahl-e-Sunnat wal Jamaat' : 'ابتدایی عام به عنوان تعارف ابل سنت والجماعت' },
                  { year: '2004', event: language === 'en' ? 'Fasting program for social reform' : 'روزه پروگرام به عنوان اصالح معاشره' },
                  { year: '2005', event: language === 'en' ? 'Establishment of Darul Qaza (Baghna Wari)' : 'درالقضاء کا قیام (بغنه واری)' },
                  { year: '2006', event: language === 'en' ? 'General program about the role of scholars in the freedom struggle' : 'ابتدایی عام به عنوان جنگ آزادی می علماً بند کا کردار' },
                  { year: '2007', event: language === 'en' ? 'One-day seminar on the importance of judicial system' : 'یک روزه سپیناز به عنوان نظام قضاء کی ایمیت' },
                  { year: '2008', event: language === 'en' ? 'General program on revival of Sunnah and prevention of innovations' : 'ابتدایی عام به عنوان احیالی سنت ویژگ متکرات' },
                  { year: '2010', event: language === 'en' ? 'General program on social reform and social reform conference' : 'ابتدایی عام به عنوان اصالح معاشره | جلسة اصالح معاشره' }
                ].map((item, index) => (
                  <motion.tr
                    key={index}
                    whileHover={{ backgroundColor: 'rgba(5, 150, 105, 0.05)' }}
                    className="hover:bg-emerald-50 transition-colors duration-200"
                  >
                    <td className={`px-4 py-3 whitespace-nowrap text-sm font-medium text-emerald-800 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                      {item.year}
                    </td>
                    <td className={`px-4 py-3 text-sm text-gray-700 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                      {item.event}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* 2012-2022 Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
            <h3 className={`text-xl font-bold text-white ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
              {language === 'en' ? '2012-2022 Timeline' : '۲۰۱۲-۲۰۲۲ ٹائم لائن'}
            </h3>
          </div>
          
          <div className="p-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th scope="col" className={`px-4 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                    {language === 'en' ? 'Year' : 'سال'}
                  </th>
                  <th scope="col" className={`px-4 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                    {language === 'en' ? 'Event' : 'تقریب'}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { year: '2012', event: language === 'en' ? 'Scholars conference on the role of scholars in freedom struggle | Publication of three financial treatises' : 'اجلاس علم به عنوان جنگ آزادی مین عامله کا کردار | اجراء سه مالی رساله "تزممان اول سنت والجماعت"' },
                  { year: '2013', event: language === 'en' ? 'Scholars conference on the message of humanity' : 'اجلاس علم به عنوان پیام انسانیت وهمیت' },
                  { year: '2014', event: language === 'en' ? 'Establishment of Masjid and Madrasa Fasiya | Anti-drug campaign' : 'مسجد ومدرسه فاسمیه کا غیام | نشه مخالف مهم' },
                  { year: '2015', event: language === 'en' ? 'Prayer for rain program | Three-day training program for judges' : 'نماز استفسخه کا اتهام | سه روزه تربیتی کیفیتی براق قضائه' },
                  { year: '2016', event: language === 'en' ? 'Sharia research conference' : 'تحقیق شریعت کافوزسی' },
                  { year: '2017', event: language === 'en' ? 'Programs on the life of Prophet Muhammad (PBUH) | Program on rights and duties of people' : 'سیرت النبی چیز کوتار مقابله | روز پرومگرام به عنوان ماه مردم که حقیقت او درادات' },
                  { year: '2019', event: language === 'en' ? 'Program on invitation and practice' : 'دعوت مگروعمل' },
                  { year: '2020', event: language === 'en' ? 'Joint program against all sects and anti-NRC protest' : 'تمام مسلاک او پارالوی کا مشترکه سی بـا - او این آرسی مخالف مطابره' },
                  { year: '2021', event: language === 'en' ? 'Program on youth guidance' : 'روز پرومگرام به عنوان نوجوان مین لافتنی یا راه روی' },
                  { year: '2022', event: language === 'en' ? 'Scholars conference on social reform and importance of judiciary' : 'اجلاس علم به عنوان اطلبع معاشره وحرالقضاء کی ایمیت' }
                ].map((item, index) => (
                  <motion.tr
                    key={index}
                    whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                    className="hover:bg-blue-50 transition-colors duration-200"
                  >
                    <td className={`px-4 py-3 whitespace-nowrap text-sm font-medium text-blue-800 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                      {item.year}
                    </td>
                    <td className={`px-4 py-3 text-sm text-gray-700 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                      {item.event}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="text-center mt-16"
    >
      <Link
        to="/about"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 group"
      >
        {language === 'en' ? 'View Full History' : 'مکمل تاریخ دیکھیں'}
        <ArrowRight className={`w-5 h-5 ${language === 'ur' ? 'mr-2' : 'ml-2'} transform group-hover:translate-x-1 transition-transform`} />
      </Link>
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

     
    
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Cards without top images */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "⚖️", // Scale emoji for Darul Qaza
                color: "bg-purple-500",
                title: language === 'en' ? 'Darul Qaza' : 'دار القضاء',
                subtitle: language === 'en' ? 'Islamic Justice System' : 'اسلامی نظام عدل',
                description: language === 'en'
                  ? 'Providing Islamic legal solutions and dispute resolution according to Shariah principles.'
                  : 'شرعی اصولوں کے مطابق اسلامی قانونی حل اور تنازعات کا حل فراہم کرنا۔',
                highlight: language === 'en'
                  ? 'Shariah-compliant dispute resolution'
                  : 'شرعی اصولوں کے مطابق تنازعات کا حل',
                slug: 'darul-qaza'
              },
              {
                icon: "👥", // People emoji for Moral Reform
                color: "bg-indigo-500",
                title: language === 'en' ? 'Moral and Social Reform' : 'اصلاح معاشره',
                subtitle: language === 'en' ? 'Community Betterment' : 'معاشرتی بہتری',
                description: language === 'en'
                  ? 'Programs to improve moral character and social conduct based on Islamic teachings.'
                  : 'اسلامی تعلیمات کی بنیاد پر اخلاقی کردار اور معاشرتی برتاؤ کو بہتر بنانے کے پروگرام۔',
                highlight: language === 'en'
                  ? 'Character building workshops'
                  : 'کردار سازی کے ورکشاپس',
                slug: 'islah-e-muashrah'
              },
              {
                icon: "📚", // Books emoji for Education
                color: "bg-blue-500",
                title: language === 'en' ? 'Education' : 'تعلیم',
                subtitle: language === 'en' ? 'Islamic & Modern Education' : 'اسلامی و جدید تعلیم',
                description: language === 'en'
                  ? 'Comprehensive educational programs combining Islamic and contemporary knowledge.'
                  : 'اسلامی اور عصری علم کو یکجا کرتے ہوئے جامع تعلیمی پروگرام۔',
                highlight: language === 'en'
                  ? 'Integrated curriculum'
                  : 'مربوط نصاب',
                slug: 'education'
              },
              {
                icon: "📰", // Newspaper emoji for Media
                color: "bg-teal-500",
                title: language === 'en' ? 'Media & Publications' : 'میڈیا و اشاعت',
                subtitle: language === 'en' ? 'Spreading Islamic Knowledge' : 'اسلامی علم کی اشاعت',
                description: language === 'en'
                  ? 'Publishing Islamic content and managing media outreach to spread authentic knowledge.'
                  : 'اسلامی مواد کی اشاعت اور معتبر علم کی ترویج کے لیے میڈیا آؤٹ ریچ کا انتظام۔',
                highlight: language === 'en'
                  ? 'Daily Islamic messages'
                  : 'روزانہ اسلامی پیغامات',
                slug: 'publicationmedia'
              },
              {
                icon: "❤️", // Heart emoji for Welfare
                color: "bg-red-500",
                title: language === 'en' ? 'Welfare' : 'فلاحی',
                subtitle: language === 'en' ? 'Social Services' : 'سماجی خدمات',
                description: language === 'en'
                  ? 'Programs to support widows, orphans, and the underprivileged in our community.'
                  : 'ہماری کمیونٹی میں بیواؤں، یتیموں اور ضرورت مندوں کی مدد کے پروگرام۔',
                highlight: language === 'en'
                  ? 'Support for 500+ families'
                  : '500+ خاندانوں کی مدد',
                slug: 'welfare'
              }
            ].map((dept, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                onClick={() => window.location.href = `/${dept.slug}`}
                className="cursor-pointer bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 ${dept.color} rounded-xl flex items-center justify-center text-2xl`}>
                    {dept.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold text-gray-900 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                      {dept.title}
                    </h3>
                    <h4 className={`text-md text-emerald-600 font-semibold ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                      {dept.subtitle}
                    </h4>
                  </div>
                </div>
                <p className={`text-gray-700 leading-relaxed mb-4 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                  {dept.description.length > 120 ? dept.description.substring(0, 120) + '...' : dept.description}
                </p>

                {dept.highlight && (
                  <div className="bg-emerald-50 rounded-lg p-3 border-l-4 border-emerald-600 mb-3">
                    <p className={`text-emerald-700 font-semibold ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                      ✓ {dept.highlight}
                    </p>
                  </div>
                )}

                <div className={`${language === 'ur' ? 'text-right' : 'text-left'}`}>
                  <Link
                    to={`/${dept.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block mt-2 text-white bg-emerald-600 hover:bg-emerald-700 transition px-4 py-2 rounded-md text-sm font-semibold"
                  >
                    {language === 'ur' ? 'مزید پڑھیں' : 'Know More'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
	  

	  
	  
	  {/* Aims & Future Plans Section */}

   <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${language === 'ur' ? 'font-urdu text-5xl' : ''}`}>
        {language === 'en' ? 'Aims & Future Plans' : 'مقاصد اور مستقبل کے منصوبے'}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
      <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'ur' ? 'font-urdu text-2xl text-right' : ''}`}>
        {language === 'en'
          ? 'Our vision for the future development of the community'
          : 'کمیونٹی کی ترقی کے لیے ہمارے مستقبل کے وژن'}
      </p>
    </motion.div>

    {/* Cards */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 }
        }
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {[
        {
          title: language === 'en' ? 'Islamic School' : 'اسلامی اسکول',
          description: language === 'en'
            ? 'To protect Muslim children from polytheistic teachings and to instill Islamic and moral values.'
            : 'مسلم بچوں کو شرکیہ تعلیمات سے بچانے اور اسلامی اور اخلاقی اقدار کو فروغ دینے کے لیے۔',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          ),
          color: 'from-blue-50 to-white',
          border: 'border-blue-200'
        },
        {
          title: language === 'en' ? 'Family Counseling Center' : 'خاندانی مشاورتی مرکز',
          description: language === 'en'
            ? 'To guide individuals before marriage and resolve post-marital domestic issues through evaluation and consultation.'
            : 'شادی سے پہلے افراد کی رہنمائی اور شادی کے بعد گھریلو مسائل کو تشخیص اور مشاورت کے ذریعے حل کرنا۔',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
          color: 'from-purple-50 to-white',
          border: 'border-purple-200'
        },
        {
          title: language === 'en' ? 'Charitable Clinic' : 'خیراتی کلینک',
          description: language === 'en'
            ? 'To provide free or low-cost medical treatment and medicines to the poor and needy.'
            : 'غریبوں اور ضرورت مندوں کو مفت یا کم قیمت پر طبی علاج اور ادویات فراہم کرنا۔',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          ),
          color: 'from-red-50 to-white',
          border: 'border-red-200'
        },
        {
          title: language === 'en' ? 'Public Library' : 'عوامی لائبریری',
          description: language === 'en'
            ? 'To promote a culture of reading and help students prepare for exams.'
            : 'پڑھنے کی ثقافت کو فروغ دینے اور طلباء کو امتحانات کی تیاری میں مدد کرنے کے لیے۔',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          ),
          color: 'from-green-50 to-white',
          border: 'border-green-200'
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          whileHover={{ y: -5 }}
          className={`bg-gradient-to-br ${item.color} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border ${item.border} flex flex-col h-full`}
        >
          <div className="mb-4 p-2 bg-white rounded-lg w-16 h-16 flex items-center justify-center shadow-sm">
            {item.icon}
          </div>
          <h3 className={`text-xl font-semibold text-gray-900 mb-3 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
            {item.title}
          </h3>
          <p className={`text-gray-700 leading-relaxed mb-4 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
            {item.description}
          </p>
          <div className="mt-auto pt-4 border-t border-gray-200">
            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${language === 'ur' ? 'font-urdu' : ''} ${
              index === 0 ? 'bg-blue-100 text-blue-800' :
              index === 1 ? 'bg-purple-100 text-purple-800' :
              index === 2 ? 'bg-red-100 text-red-800' :
              'bg-green-100 text-green-800'
            }`}>
              {language === 'en' ? 'Coming Soon' : 'جلد آرہا ہے'}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>

  {/* Global Style for Fonts */}
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

    @font-face {
      font-family: 'Noori Nastaliq';
      src: url('/fonts/NooriNastaliq.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
  
    .font-urdu {
      font-family: 'Noori Nastaliq', serif;
      line-height: 1.9;
    }

    body {
      font-family: 'Poppins', sans-serif;
    }
  `}</style>
</section>
	  
	  
	  
	  
	  
	  {/* Needs & Requirements Section */}
  <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mosque Expansion Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mr-4">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <h3 className={`text-2xl font-bold text-gray-900 ${language === 'ur' ? 'urdu-font' : ''}`}>
                    {language === 'en' ? 'Mosque Expansion' : 'مسجد کی توسیع'}
                  </h3>
                </div>
                <p className={`text-gray-700 mb-6 leading-relaxed ${language === 'ur' ? 'urdu-font text-right text-xl' : ''}`}>
                  {language === 'en'
                    ? 'The current mosque building has become narrow and dilapidated. Purchasing new land and constructing a new mosque is extremely necessary for our growing community.'
                    : 'موجودہ مسجد کی عمارت تنگ اور خستہ حال ہو چکی ہے۔ بڑھتی ہوئی کمیونٹی کے لیے نئی زمین خریدنے اور نئی مسجد تعمیر کرنا انتہائی ضروری ہے۔'}
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r">
                  <p className={`text-amber-700 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                    {language === 'en'
                      ? 'Urgent need for community support and donations'
                      : 'کمیونٹی کی حمایت اور عطیات کی فوری ضرورت'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Other Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                {
                  icon: Book,
                  title: language === 'en' ? 'Reference Books' : 'حوالہ جات کی کتابیں',
                  description: language === 'en'
                    ? 'For Darul Qaza, there is a growing need for additional reference books and scholarly sources to properly resolve cases.'
                    : 'دارالقضاء کے لیے مقدمات کو صحیح طریقے سے حل کرنے کے لیے اضافی حوالہ جات اور علمی مصادر کی ضرورت ہے۔',
                  color: 'bg-blue-100 text-blue-700'
                },
                {
                  icon: PlusCircle,
                  title: language === 'en' ? 'Darul Qaza Building' : 'دارالقضاء کی عمارت',
                  description: language === 'en'
                    ? 'Need for a dedicated space for Darul Qaza where proceedings can be conducted smoothly without disruption.'
                    : 'دارالقضاء کے لیے ایک مختص جگہ کی ضرورت ہے جہاں کارروائی بغیر کسی رکاوٹ کے ہمواری سے کی جا سکے۔',
                  color: 'bg-purple-100 text-purple-700'
                },
                {
                  icon: Scale,
                  title: language === 'en' ? 'Legal Resources' : 'قانونی وسائل',
                  description: language === 'en'
                    ? 'Requirement for updated legal resources and training for our scholars to handle complex cases.'
                    : 'پیچیدہ مقدمات کو سنبھالنے کے لیے ہمارے علماء کے لیے جدید قانونی وسائل اور تربیت کی ضرورت ہے۔',
                  color: 'bg-green-100 text-green-700'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex items-start"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className={`font-bold text-gray-900 mb-1 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                      {item.title}
                    </h4>
                    <p className={`text-gray-600 text-sm ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Donation Options Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <h3 className={`text-2xl font-bold text-center mb-8 ${language === 'ur' ? 'urdu-font' : ''}`}>
                {language === 'en' ? 'Donation Options' : 'عطیہ دینے کے طریقے'}
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {/* UPI Payment */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-center mb-4">
                    <Smartphone className="w-10 h-10 mx-auto text-indigo-600" />
                    <h4 className={`font-bold text-lg mt-2 ${language === 'ur' ? 'urdu-font' : ''}`}>
                      {language === 'en' ? 'UPI Payment' : 'یو پی آئی ادائیگی'}
                    </h4>
                  </div>
                  <div className="text-center">
                    <p className={`text-gray-700 mb-2 ${language === 'ur' ? 'urdu-font' : ''}`}>
                      {language === 'en' ? 'Scan QR Code or use UPI ID:' : 'QR کوڈ اسکین کریں یا UPI ID استعمال کریں:'}
                    </p>
                    <img
                      src="/qrcode.jpg"
                      alt="UPI QR Code"
                      className="w-48 h-48 mx-auto mb-4 border border-gray-200 rounded-lg"
                    />
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <p className="font-mono text-lg font-bold text-gray-800">bqtanzeemuaswjm-1@okicici</p>
                    </div>
                    <a
                      href="upi://pay?pa=bqtanzeemuaswjm-1@okicici&pn=Tanzeem&cu=INR"
                      className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                    >
                      {language === 'en' ? 'Pay via UPI' : 'یو پی آئی سے ادائیگی کریں'}
                    </a>
                  </div>
                </div>

                {/* Bank Transfer */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-center mb-4">
                    <Landmark className="w-10 h-10 mx-auto text-green-600" />
                    <h4 className={`font-bold text-lg mt-2 ${language === 'ur' ? 'urdu-font' : ''}`}>
                      {language === 'en' ? 'Bank Transfer' : 'بینک ٹرانسفر'}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className={`text-sm text-gray-500 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                        {language === 'en' ? 'Account Name' : 'اکاؤنٹ کا نام'}
                      </p>
                      <p className="font-semibold">TANZEEM ULMA E AHLE SUNNAT WAL JAMAAT</p>
                    </div>
                    <div>
                      <p className={`text-sm text-gray-500 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                        {language === 'en' ? 'Account Number' : 'اکاؤنٹ نمبر'}
                      </p>
                      <p className="font-semibold">750061001031878</p>
                    </div>
                    <div>
                      <p className={`text-sm text-gray-500 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                        {language === 'en' ? 'Bank Name' : 'بینک کا نام'}
                      </p>
                      <p className="font-semibold">KOKAN MERCANTILE CO-OP BANK </p>
                    </div>
                    <div>
                      <p className={`text-sm text-gray-500 ${language === 'ur' ? 'urdu-font text-right' : ''}`}>
                        {language === 'en' ? 'Branch & IFSC' : 'برانچ اور IFSC'}
                      </p>
                      <p className="font-semibold">GOANDI BRANCH ,KKBK0KMCB02</p>
                    </div>
                  </div>
                </div>

                {/* Online Donation */}
                
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className={`text-gray-600 mb-4 ${language === 'ur' ? 'urdu-font text-xl' : ''}`}>
              {language === 'en'
                ? 'Your support can make a difference'
                : 'آپ کی حمایت ایک فرق پیدا کر سکتی ہے'}
            </p>
            <Link
              to="/donate"
              className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {language === 'en' ? 'Support Our Cause' : 'ہمارے مقصد کی حمایت کریں'}
              <Heart className={`w-5 h-5 ${language === 'ur' ? 'mr-2' : 'ml-2'}`} />
            </Link>
          </motion.div>
        </div>
  </section>

      {/* Testimonials Carousel Section */}
<section className="py-16 bg-emerald-50 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className={`text-3xl font-bold text-gray-900 mb-4 ${language === 'ur' ? 'urdu-font text-4xl' : ''}`}>
        {language === 'en' ? 'Testimonials' : 'تاثرات'}
      </h2>
      <p className={`text-xl text-gray-600 ${language === 'ur' ? 'urdu-font text-2xl' : ''}`}>
        {language === 'en' 
          ? 'What prominent scholars say about us' 
          : 'بزرگ علماء کرام ہمارے بارے میں کیا کہتے ہیں'}
      </p>
    </motion.div>

    <div className="relative px-4 sm:px-6 lg:px-10">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={80}
        swipeable={true}
        emulateTouch={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-emerald-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-emerald-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )
        }
      >
        {(language === 'en' ? [
          {
            id: 1,
            name: "Maulana Khalid Saifullah Rahmani",
            title: "President, All India Muslim Personal Law Board",
            quote: "I had the opportunity to observe the activities here, especially to review the system of Darul Qaza. I was very pleased and realized that this institution is rendering a great and beneficial service with lofty ambitions. I pray that Allah grants it continued success.",
            image: "/rahmani.jpg"
          },
          {
            id: 2,
            name: "Maulana Muhammad Yamin Qasmi",
            title: "Preacher, Darul Uloom Deoband",
            quote: "Listening to the performance and religious services of this Tanzeem gave me immense spiritual joy. Undoubtedly, in this era of trials, ignorance, and irreligiousness, the establishment of such an organization is a commendable and praiseworthy step.",
            image: "/qasmi.jpeg"
          },
          {
            id: 3,
            name: "Maulana Shah Alam Gorakhpuri",
            title: "Teacher & Deputy Administrator, All India Majlis Tahaffuz Khatm-e-Nubuwwat",
            quote: "MashaAllah, the Tanzeem is also actively aware of the threats posed by apostasy-related fitnas and is supported by the scholars of truth. May Allah grant it further progress, acceptance, and widespread benefit.",
            image: "/gorakhpuri.jpeg"
          },
          {
            id: 4,
            name: "Qazi Qasim Muzaffarpuri",
            title: "Former Shariah Judge, Darul Qaza, Imarat-e-Shariah, Phulwari Sharif, Patna",
            quote: "I was also taken on a tour of the Darul Qaza. I had the opportunity to go through many case files and their rulings. MashaAllah, the judgments were well-reasoned, and the proceedings were thorough.",
            image: "/muzaffarpuri.jpeg"
          },
          {
            id: 5,
            name: "Maulana Obaidullah Al-Asa'di",
            title: "Sheikh-ul-Hadith, Jamia Arabia Hathoura, Banda",
            quote: "By the grace of Allah, this Darul Qaza has been functioning effectively for the past several years in this densely populated Muslim area. The average number of cases handled is also notable. May Allah increase its benefit and reach.",
            image: "/asadi.jpeg"
          }
        ] : [
          {
            id: 1,
            name: "مولانا خالد سیف اللہ رحمانی",
            title: "صدر، آل انڈیا مسلم پرسنل لاء بورڈ",
            quote: "مجھے یہاں کی سرگرمیوں کا مشاہدہ کرنے کا موقع ملا، خاص طور پر دارالقضاء کے نظام کا جائزہ لینے کا۔ میں بہت خوش ہوا اور محسوس کیا کہ یہ ادارہ بلند عزائم کے ساتھ عظیم اور مفید خدمت انجام دے رہا ہے۔ میں دعا گو ہوں کہ اللہ اسے مسلسل کامیابی عطا فرمائے۔",
            image: "/rahmani.jpg"
          },
          {
            id: 2,
            name: "مولانا محمد یامین قاسمی",
            title: "واعظ، دارالعلوم دیوبند",
            quote: "اس تنظیم کی کارکردگی اور مذہبی خدمات سن کر مجھے بے پناہ روحانی خوشی محسوس ہوئی۔ بلاشبہ، آزمائش، جہالت اور بے دینی کے اس دور میں ایسے ادارے کا قائم ہونا قابل ستائش اور تعریف کا قدم ہے۔",
            image: "/qasmi.jpeg"
          },
          {
            id: 3,
            name: "مولانا شاہ عالم گورکھپوری",
            title: "معلم و نائب ناظم، آل انڈیا مجلس تحفظ ختم نبوت",
            quote: "ماشاءاللہ، تنظیم ارتداد سے متعلق فتنوں کے خطرات سے بھی بخوبی آگاہ ہے اور اہل حق علماء کی تائید حاصل ہے۔ اللہ اسے مزید ترقی، قبولیت اور وسیع تر فوائد عطا فرمائے۔",
            image: "/gorakhpuri.jpeg"
          },
          {
            id: 4,
            name: "قاضی قاسم مظفرپوری",
            title: "سابق شریعت جج، دارالقضاء، امارت شرعیہ، پھلوار ی شریف، پٹنہ",
            quote: "مجھے دارالقضاء کا دورہ بھی کرایا گیا۔ مجھے بہت سے مقدمات کی فائلیں اور ان کے فیصلے دیکھنے کا موقع ملا۔ ماشاءاللہ، فیصلے مضبوط دلائل پر مبنی تھے اور کاروائی مکمل تھی۔",
            image: "/muzaffarpuri.jpeg"
          },
          {
            id: 5,
            name: "مولانا عبید اللہ الاسعدی",
            title: "شیخ الحدیث، جامعہ عربیہ ہاتھورہ، بانڈہ",
            quote: "الحمدللہ، یہ دارالقضاء گزشتہ کئی سالوں سے اس کثیر آباد مسلم علاقے میں مؤثر طریقے سے کام کر رہا ہے۔ زیر التواء مقدمات کی اوسط تعداد بھی قابل ذکر ہے۔ اللہ اس کے فوائد اور رسائی میں اضافہ فرمائے۔",
            image: "/asadi.jpeg"
          }
        ]).map((testimonial) => (
          <div key={testimonial.id} className="px-2 sm:px-4 h-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg h-full flex flex-col mx-1 sm:mx-2"
            >
              <div className="mb-4 sm:mb-6">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className={`text-gray-700 mb-6 sm:mb-8 flex-grow ${language === 'ur' ? 'urdu-font text-right text-lg sm:text-xl leading-relaxed' : 'text-sm sm:text-base'}`}>
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mr-3 sm:mr-4 border-2 border-emerald-500">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.jpg'; // fallback image
                    }}
                  />
                </div>
                <div className={language === 'ur' ? 'text-right' : ''}>
                  <h4 className={`font-bold text-gray-900 ${language === 'ur' ? 'urdu-font text-lg' : 'text-sm sm:text-base'}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-emerald-600 ${language === 'ur' ? 'urdu-font text-sm' : 'text-xs sm:text-sm'}`}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Carousel>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="text-center mt-8"
    >
      <Link
        to="/testimonials"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 group"
      >
        {language === 'en' ? 'View All Testimonials' : 'تمام تاثرات دیکھیں'}
        <svg className={`w-5 h-5 ${language === 'ur' ? 'mr-2' : 'ml-2'} transform group-hover:translate-x-1 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={language === 'ur' ? "M10 19l-7-7m0 0l7-7m-7 7h18" : "M14 5l7 7m0 0l-7 7m7-7H3"}></path>
        </svg>
      </Link>
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