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
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Carousel from '../components/Carousel';

const Home: React.FC = () => {
  const { language, t } = useLanguage();

  const heroSlides = [
    {
      image:
        'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title:
        language === 'en'
          ? 'Serving the Community for 22+ Years'
          : '22+ سال سے کمیونٹی کی خدمت',
      subtitle:
        language === 'en'
          ? 'Dedicated to Islamic principles and community welfare'
          : 'اسلامی اصولوں اور کمیونٹی فلاح کے لیے وقف',
    },
    {
      image:
        'https://images.pexels.com/photos/8728562/pexels-photo-8728562.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title:
        language === 'en'
          ? 'Darul Qaza - Islamic Arbitration'
          : 'دارالقضاء - اسلامی عدالت',
      subtitle:
        language === 'en'
          ? '1,300+ family cases resolved with justice'
          : '1,300+ خاندانی مقدمات انصاف کے ساتھ حل',
    },
    {
      image:
        'https://images.pexels.com/photos/8728393/pexels-photo-8728393.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title:
        language === 'en'
          ? 'Education & Moral Training'
          : 'تعلیم اور اخلاقی تربیت',
      subtitle:
        language === 'en'
          ? 'Nurturing young minds with Islamic values'
          : 'اسلامی اقدار کے ساتھ نوجوان ذہنوں کی پرورش',
    },
  ];

  const departments = [
    {
      icon: Shield,
      title: t('departments.darulqaza.title'),
      subtitle: t('departments.darulqaza.subtitle'),
      description: t('departments.darulqaza.description'),
      highlight: t('departments.darulqaza.cases'),
      color: 'bg-emerald-100 text-emerald-700',
      image:
        'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Users,
      title: t('departments.social.title'),
      subtitle: t('departments.social.subtitle'),
      description: t('departments.social.description'),
      color: 'bg-blue-100 text-blue-700',
      image:
        'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: BookOpen,
      title: t('departments.education.title'),
      subtitle: t('departments.education.subtitle'),
      description: t('departments.education.description'),
      color: 'bg-purple-100 text-purple-700',
      image:
        'https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Heart,
      title: t('departments.welfare.title'),
      subtitle: t('departments.welfare.subtitle'),
      description: t('departments.welfare.description'),
      color: 'bg-rose-100 text-rose-700',
      image:
        'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const services = [
    t('services.nikah'),
    t('services.talaq'),
    t('services.khula'),
    t('services.iddah'),
    t('services.nafaqah'),
    t('services.wirasat'),
    t('services.wasiyyat'),
    t('services.hibah'),
    t('services.hizanat'),
  ];

  const testimonials = [
    {
      text: t('testimonial.text'),
      author: t('testimonial.author'),
      designation: t('testimonial.designation'),
      image:
        'https://www.siasat.com/wp-content/uploads/2024/06/Maulana-Khalid-Saifullah-Rahmani1.jpg',
    },
    {
      text:
        language === 'en'
          ? 'The organization has been instrumental in resolving complex family disputes with wisdom and Islamic guidance. Their dedication to justice is commendable.'
          : 'یہ تنظیم حکمت اور اسلامی رہنمائی کے ساتھ پیچیدہ خاندانی تنازعات کو حل کرنے میں اہم کردار ادا کر رہی ہے۔ انصاف کے لیے ان کی لگن قابل تعریف ہے۔',
      author: language === 'en' ? 'Dr. Ahmad Hassan' : 'ڈاکٹر احمد حسن',
      designation:
        language === 'en' ? 'Islamic Scholar, Mumbai' : 'اسلامی اسکالر، ممبئی',
      image:
        'https://images.pexels.com/photos/8728562/pexels-photo-8728562.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      text:
        language === 'en'
          ? 'Their welfare programs have touched countless lives. The monthly support for widows and orphans reflects true Islamic compassion.'
          : 'ان کے فلاحی پروگراموں نے بے شمار زندگیوں کو متاثر کیا ہے۔ بیواؤں اور یتیموں کے لیے ماہانہ مدد حقیقی اسلامی ہمدردی کو ظاہر کرتی ہے۔',
      author: language === 'en' ? 'Fatima Begum' : 'فاطمہ بیگم',
      designation: language === 'en' ? 'Community Leader' : 'کمیونٹی لیڈر',
      image:
        'https://images.pexels.com/photos/8728393/pexels-photo-8728393.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-screen">
        <Carousel autoPlay={true} interval={6000} className="h-full">
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative h-screen">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
              <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
  <div className="w-28 h-28 rounded-full overflow-hidden">
    <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
  </div>
</div>

                  <h1
                    className={`text-4xl md:text-6xl font-bold mb-6 ${
                      language === 'ur' ? 'font-urdu' : ''
                    }`}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`text-xl md:text-2xl mb-8 ${
                      language === 'ur' ? 'font-urdu' : ''
                    }`}
                  >
                    {slide.subtitle}
                  </p>
                  {index === 0 && (
                    <Link
                      to="/about"
                      className={`inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg ${
                        language === 'ur' ? 'font-urdu flex-row-reverse' : ''
                      }`}
                    >
                      {t('hero.cta')}
                      <ArrowRight
                        className={`w-5 h-5 ${
                          language === 'ur' ? 'mr-2' : 'ml-2'
                        }`}
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Organization Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className={`text-4xl font-bold text-gray-900 mb-6 ${
                  language === 'ur' ? 'font-urdu text-right' : ''
                }`}
              >
                {language === 'en'
                  ? 'About Tanzeem Ulma'
                  : 'تنظیم علماء کے بارے میں'}
              </h2>
              <p
                className={`text-lg text-gray-700 mb-6 leading-relaxed ${
                  language === 'ur' ? 'font-urdu text-right' : ''
                }`}
              >
                {language === 'en'
  ? 'Tanzeem Ulama Ahl-e-Sunnat wal Jamaat, Govandi Mumbai is a religious and welfare organization established around 22 years ago through the dedicated efforts of concerned scholars and Huffaz of the area. Its main objectives are the religious reform of the public, protection from false ideologies, revival of the Sunnah, prevention of evil practices, and providing social and educational guidance. All local Imams, mosque administrators, scholars, Huffaz, and Muftis are members of this organization. Since its inception, the Tanzeem has been actively serving the Muslim Ummah, guided by the advice of senior scholars and intellectuals to fulfill its mission.'
  : 'تنظیم علماء اہل سنت والجماعت گووندی ممبئی ایک دینی و فلاحی تنظیم ہے۔ آج سے تقریباً ۲۲ سال قبل علاقے کے فکر مند علماء و حفاظ کی محنت سے اس کا قیام عمل میں آیا۔ اس کا مقصد عوام کی دینی اصلاح، باطل نظریات سے حفاظت، احیائے سنت، منکرات کی روک تھام اور سماجی و تعلیمی رہنمائی ہے۔ علاقے کے تمام ائمہ مساجد، ارباب اہتمام، علماء، حفاظ اور مفتیان کرام اس کے ممبر ہیں۔ تنظیم اپنے قیام کے روزِ اوّل سے ہی اکابر علماء اور دانشوران کے مشوروں سے امت مسلمہ کی خدمت اور اپنے مقاصد کی تکمیل میں سرگرم عمل ہے۔'}

              </p>
              <p
                className={`text-lg text-gray-700 mb-8 leading-relaxed ${
                  language === 'ur' ? 'font-urdu text-right' : ''
                }`}
              >
                {language === 'en'
  ? 'Our comprehensive approach includes religious education, social reform, resolution of family disputes, and welfare services. We work tirelessly to bridge the gap between traditional Islamic teachings and the needs of the modern community, ensuring that every Muslim family has access to proper guidance and support.'
  : 'ہمارا جامع نقطہ نظر مذہبی تعلیم، سماجی اصلاح، خاندانی تنازعات کا حل، اور فلاحی خدمات کو شامل کرتا ہے۔ ہم روایتی اسلامی تعلیمات اور جدید کمیونٹی کی ضروریات کے درمیان خلا کو پاٹنے کے لیے انتھک محنت کرتے ہیں، اس بات کو یقینی بناتے ہوئے کہ ہر مسلم خاندان کو مناسب رہنمائی اور مدد تک رسائی حاصل ہو۔'
}

              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span
                    className={`text-gray-700 ${
                      language === 'ur' ? 'font-urdu' : ''
                    }`}
                  >
                    {language === 'en'
                      ? 'Established 22+ years ago'
                      : '22+ سال قبل قائم'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span
                    className={`text-gray-700 ${
                      language === 'ur' ? 'font-urdu' : ''
                    }`}
                  >
                    {language === 'en'
                      ? 'All local scholars involved'
                      : 'تمام مقامی علماء شامل'}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Islamic Community"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">22+</div>
                <div
                  className={`text-sm ${language === 'ur' ? 'font-urdu' : ''}`}
                >
                  {language === 'en' ? 'Years of Service' : 'سال خدمت'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl font-bold text-gray-900 mb-4 ${
                language === 'ur' ? 'font-urdu' : ''
              }`}
            >
              {language === 'en'
                ? 'Our Impact in Numbers'
                : 'اعداد و شمار میں ہمارا اثر'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-emerald-800 mb-2">
                    {stat.number}
                  </div>
                  <div
                    className={`text-gray-600 ${
                      language === 'ur' ? 'font-urdu' : ''
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold text-gray-900 mb-6 ${
                language === 'ur' ? 'font-urdu' : ''
              }`}
            >
              {t('about.mission')}
            </h2>
            <p
              className={`text-xl text-gray-600 max-w-3xl mx-auto ${
                language === 'ur' ? 'font-urdu text-right' : ''
              }`}
            >
              {language === 'en'
                ? 'Our mission is rooted in the fundamental principles of Islam, focusing on community welfare, education, and spiritual guidance.'
                : 'ہمارا مشن اسلام کے بنیادی اصولوں میں جڑا ہوا ہے، جو کمیونٹی کی فلاح، تعلیم، اور روحانی رہنمائی پر توجہ مرکوز کرتا ہے۔'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-6 font-bold text-lg">
                  {num}
                </div>
                <h3
                  className={`text-xl font-bold text-gray-900 mb-4 ${
                    language === 'ur' ? 'font-urdu text-right' : ''
                  }`}
                >
                  {language === 'en' ? 'Core Mission' : 'بنیادی مشن'} {num}
                </h3>
                <p
                  className={`text-gray-700 leading-relaxed ${
                    language === 'ur' ? 'font-urdu text-right' : ''
                  }`}
                >
                  {t(`about.mission.${num}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold text-gray-900 mb-6 ${
                language === 'ur' ? 'font-urdu' : ''
              }`}
            >
              {t('departments.title')}
            </h2>
            <p
              className={`text-xl text-gray-600 max-w-3xl mx-auto ${
                language === 'ur' ? 'font-urdu text-right' : ''
              }`}
            >
              {language === 'en'
                ? 'Our organization operates through five specialized departments, each dedicated to serving different aspects of community needs with Islamic guidance and modern efficiency.'
                : 'ہماری تنظیم پانچ خصوصی شعبوں کے ذریعے کام کرتی ہے، ہر ایک اسلامی رہنمائی اور جدید کارکردگی کے ساتھ کمیونٹی کی مختلف ضروریات کی خدمت کے لیے وقف ہے۔'}
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12">
            {departments.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-48">
                    <img
                      src={dept.image}
                      alt={dept.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div
                      className={`absolute bottom-4 left-4 w-12 h-12 ${dept.color} rounded-lg flex items-center justify-center`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3
                      className={`text-2xl font-bold text-gray-900 mb-2 ${
                        language === 'ur' ? 'font-urdu text-right' : ''
                      }`}
                    >
                      {dept.title}
                    </h3>
                    <h4
                      className={`text-lg text-emerald-600 mb-4 font-semibold ${
                        language === 'ur' ? 'font-urdu text-right' : ''
                      }`}
                    >
                      {dept.subtitle}
                    </h4>
                    <p
                      className={`text-gray-700 leading-relaxed mb-6 ${
                        language === 'ur' ? 'font-urdu text-right' : ''
                      }`}
                    >
                      {dept.description}
                    </p>
                    {dept.highlight && (
                      <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-600">
                        <p
                          className={`text-emerald-700 font-semibold ${
                            language === 'ur' ? 'font-urdu text-right' : ''
                          }`}
                        >
                          ✓ {dept.highlight}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet Carousel */}
          <div className="lg:hidden">
            <Carousel>
              {departments.map((dept, index) => {
                const IconComponent = dept.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden mx-2"
                  >
                    <div className="relative h-48">
                      <img
                        src={dept.image}
                        alt={dept.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div
                        className={`absolute bottom-4 left-4 w-12 h-12 ${dept.color} rounded-lg flex items-center justify-center`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3
                        className={`text-xl font-bold text-gray-900 mb-2 ${
                          language === 'ur' ? 'font-urdu text-right' : ''
                        }`}
                      >
                        {dept.title}
                      </h3>
                      <h4
                        className={`text-emerald-600 mb-3 font-semibold ${
                          language === 'ur' ? 'font-urdu text-right' : ''
                        }`}
                      >
                        {dept.subtitle}
                      </h4>
                      <p
                        className={`text-gray-700 text-sm leading-relaxed mb-4 ${
                          language === 'ur' ? 'font-urdu text-right' : ''
                        }`}
                      >
                        {dept.description}
                      </p>
                      {dept.highlight && (
                        <div className="bg-emerald-50 rounded-lg p-3 border-l-4 border-emerald-600">
                          <p
                            className={`text-emerald-700 font-semibold text-sm ${
                              language === 'ur' ? 'font-urdu text-right' : ''
                            }`}
                          >
                            ✓ {dept.highlight}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold text-gray-900 mb-6 ${
                language === 'ur' ? 'font-urdu' : ''
              }`}
            >
              {t('services.title')}
            </h2>
            <p
              className={`text-xl text-gray-600 max-w-3xl mx-auto ${
                language === 'ur' ? 'font-urdu text-right' : ''
              }`}
            >
              {language === 'en'
                ? 'Our Darul Qaza provides comprehensive Islamic arbitration services, resolving family matters according to Quranic principles and Prophetic traditions.'
                : 'ہمارا دارالقضاء جامع اسلامی ثالثی خدمات فراہم کرتا ہے، قرآنی اصولوں اور نبوی روایات کے مطابق خاندانی معاملات کو حل کرتا ہے۔'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-emerald-50 to-white rounded-xl p-6 border-l-4 border-emerald-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p
                    className={`text-emerald-800 font-semibold text-lg ${
                      language === 'ur' ? 'font-urdu' : ''
                    }`}
                  >
                    {service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold text-gray-900 mb-6 ${
                language === 'ur' ? 'font-urdu' : ''
              }`}
            >
              {language === 'en'
                ? 'What People Say About Us'
                : 'لوگ ہمارے بارے میں کیا کہتے ہیں'}
            </h2>
            <p
              className={`text-xl text-gray-600 max-w-3xl mx-auto ${
                language === 'ur' ? 'font-urdu text-right' : ''
              }`}
            >
              {language === 'en'
                ? 'Hear from community leaders, scholars, and families who have experienced our services firsthand.'
                : 'کمیونٹی کے رہنماؤں، علماء، اور خاندانوں سے سنیں جنہوں نے ہماری خدمات کا براہ راست تجربہ کیا ہے۔'}
            </p>
          </div>

          <Carousel autoPlay={true} interval={8000}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 mx-4"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-emerald-200">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote
                    className={`text-lg text-gray-700 mb-6 italic leading-relaxed ${
                      language === 'ur' ? 'font-urdu text-right' : ''
                    }`}
                  >
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t pt-6 w-full">
                    <p
                      className={`font-bold text-gray-900 text-lg ${
                        language === 'ur' ? 'font-urdu text-right' : ''
                      }`}
                    >
                      {testimonial.author}
                    </p>
                    <p
                      className={`text-emerald-600 font-medium ${
                        language === 'ur' ? 'font-urdu text-right' : ''
                      }`}
                    >
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`text-4xl font-bold text-white mb-6 ${
              language === 'ur' ? 'font-urdu' : ''
            }`}
          >
            {language === 'en'
              ? 'Need Our Services?'
              : 'ہماری خدمات کی ضرورت ہے؟'}
          </h2>
          <p
            className={`text-xl text-emerald-100 mb-8 ${
              language === 'ur' ? 'font-urdu text-right' : ''
            }`}
          >
            {language === 'en'
              ? 'Contact us today for Islamic guidance, family dispute resolution, or community support services.'
              : 'اسلامی رہنمائی، خاندانی تنازعات کے حل، یا کمیونٹی سپورٹ سروسز کے لیے آج ہی ہم سے رابطہ کریں۔'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className={`inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-200 shadow-lg ${
                language === 'ur' ? 'font-urdu flex-row-reverse' : ''
              }`}
            >
              <Phone
                className={`w-5 h-5 ${language === 'ur' ? 'mr-2' : 'ml-2'}`}
              />
              {language === 'en' ? 'Contact Us' : 'رابطہ کریں'}
            </Link>
            <Link
              to="/departments"
              className={`inline-flex items-center px-8 py-4 bg-emerald-800 text-white font-semibold rounded-lg hover:bg-emerald-900 transform hover:scale-105 transition-all duration-200 shadow-lg ${
                language === 'ur' ? 'font-urdu flex-row-reverse' : ''
              }`}
            >
              <BookOpen
                className={`w-5 h-5 ${language === 'ur' ? 'mr-2' : 'ml-2'}`}
              />
              {language === 'en' ? 'Our Services' : 'ہماری خدمات'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
