import React from 'react';
import { Calendar, Users, Target, BookOpen, Award, Shield, Heart, Star, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Carousel from '../components/Carousel';

const About: React.FC = () => {
  const { language, t } = useLanguage();

  const stats = [
    { icon: Calendar, label: language === 'en' ? '22+ Years' : '22+ سال', description: language === 'en' ? 'Serving Community' : 'کمیونٹی کی خدمت' },
    { icon: Users, label: '1,300+', description: language === 'en' ? 'Cases Resolved' : 'حل شدہ مقدمات' },
    { icon: Target, label: '5', description: language === 'en' ? 'Core Missions' : 'بنیادی مقاصد' },
    { icon: BookOpen, label: '100+', description: language === 'en' ? 'Publications' : 'اشاعات' }
  ];

  const achievements = [
    {
      title: language === 'en' ? 'Islamic Arbitration Excellence' : 'اسلامی ثالثی میں بہترین',
      description: language === 'en' 
        ? 'Our Darul Qaza has successfully resolved over 1,300 family disputes using Islamic principles, earning recognition from the All India Muslim Personal Law Board.'
        : 'ہمارے دارالقضاء نے اسلامی اصولوں کا استعمال کرتے ہوئے 1,300 سے زیادہ خاندانی تنازعات کو کامیابی سے حل کیا ہے، جس سے آل انڈیا مسلم پرسنل لا بورڈ سے پہچان حاصل ہوئی ہے۔',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Shield
    },
    {
      title: language === 'en' ? 'Community Education Impact' : 'کمیونٹی تعلیم کا اثر',
      description: language === 'en'
        ? 'Through Madrasa Qasmiya and various educational programs, we have provided religious education and moral training to hundreds of children, shaping the next generation of conscious Muslims.'
        : 'مدرسہ قاسمیہ اور مختلف تعلیمی پروگراموں کے ذریعے، ہم نے سینکڑوں بچوں کو مذہبی تعلیم اور اخلاقی تربیت فراہم کی ہے، باشعور مسلمانوں کی اگلی نسل کو تشکیل دیا ہے۔',
      image: 'https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: BookOpen
    },
    {
      title: language === 'en' ? 'Welfare Services Reach' : 'فلاحی خدمات کی رسائی',
      description: language === 'en'
        ? 'Our welfare department has provided monthly stipends to over 500 widows, orphans, and needy families, while also offering emergency assistance during critical times.'
        : 'ہمارے فلاحی شعبے نے 500 سے زیادہ بیواؤں، یتیموں، اور ضرورت مند خاندانوں کو ماہانہ وظائف فراہم کیے ہیں، جبکہ نازک اوقات میں ہنگامی امداد بھی پیش کی ہے۔',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Heart
    }
  ];

  const timeline = [
    {
      year: '2002',
      title: language === 'en' ? 'Foundation' : 'بنیاد',
      description: language === 'en' 
        ? 'Established by local scholars and Huffaz with the vision of serving the Muslim community'
        : 'مقامی علماء اور حفاظ کرام کی جانب سے مسلم کمیونٹی کی خدمت کے وژن کے ساتھ قائم'
    },
    {
      year: '2005',
      title: language === 'en' ? 'Darul Qaza Launch' : 'دارالقضاء کا آغاز',
      description: language === 'en'
        ? 'Launched Islamic arbitration center under All India Muslim Personal Law Board supervision'
        : 'آل انڈیا مسلم پرسنل لا بورڈ کی نگرانی میں اسلامی ثالثی مرکز کا آغاز'
    },
    {
      year: '2008',
      title: language === 'en' ? 'Educational Expansion' : 'تعلیمی توسیع',
      description: language === 'en'
        ? 'Established Madrasa Qasmiya for comprehensive Islamic education'
        : 'جامع اسلامی تعلیم کے لیے مدرسہ قاسمیہ کا قیام'
    },
    {
      year: '2012',
      title: language === 'en' ? 'Welfare Programs' : 'فلاحی پروگرام',
      description: language === 'en'
        ? 'Launched systematic welfare support for widows, orphans, and needy families'
        : 'بیواؤں، یتیموں، اور ضرورت مند خاندانوں کے لیے منظم فلاحی مدد کا آغاز'
    },
    {
      year: '2018',
      title: language === 'en' ? 'Digital Outreach' : 'ڈیجیٹل رسائی',
      description: language === 'en'
        ? 'Started daily religious messages and digital publication distribution'
        : 'یومیہ مذہبی پیغامات اور ڈیجیٹل اشاعات کی تقسیم کا آغاز'
    },
    {
      year: '2024',
      title: language === 'en' ? 'Continued Growth' : 'مسلسل ترقی',
      description: language === 'en'
        ? 'Expanding services with modern technology while maintaining Islamic principles'
        : 'اسلامی اصولوں کو برقرار رکھتے ہوئے جدید ٹیکنالوجی کے ساتھ خدمات کی توسیع'
    }
  ];

  const values = [
    {
      title: language === 'en' ? 'Islamic Integrity' : 'اسلامی دیانت',
      description: language === 'en' 
        ? 'All our decisions and actions are guided by the Quran and Sunnah, ensuring authenticity in every service we provide.'
        : 'ہمارے تمام فیصلے اور اعمال قرآن و سنت کی رہنمائی میں ہیں، جو ہماری ہر خدمت میں صداقت کو یقینی بناتے ہیں۔',
      icon: BookOpen
    },
    {
      title: language === 'en' ? 'Community First' : 'کمیونٹی پہلے',
      description: language === 'en'
        ? 'We prioritize community needs above all else, working tirelessly to address social, educational, and welfare challenges.'
        : 'ہم کمیونٹی کی ضروریات کو سب سے اوپر رکھتے ہیں، سماجی، تعلیمی، اور فلاحی چیلنجز سے نمٹنے کے لیے انتھک محنت کرتے ہیں۔',
      icon: Users
    },
    {
      title: language === 'en' ? 'Justice & Fairness' : 'انصاف اور منصفانہ',
      description: language === 'en'
        ? 'Our arbitration services ensure fair resolution of disputes, treating all parties with equal respect and Islamic justice.'
        : 'ہماری ثالثی خدمات تنازعات کا منصفانہ حل یقینی بناتی ہیں، تمام فریقوں کے ساتھ برابر احترام اور اسلامی انصاف کا سلوک کرتی ہیں۔',
      icon: Shield
    },
    {
      title: language === 'en' ? 'Educational Excellence' : 'تعلیمی بہترین',
      description: language === 'en'
        ? 'We strive for the highest standards in Islamic education, combining traditional knowledge with contemporary understanding.'
        : 'ہم اسلامی تعلیم میں اعلیٰ ترین معیار کے لیے کوشش کرتے ہیں، روایتی علم کو عصری فہم کے ساتھ ملاتے ہیں۔',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="w-32 h-32 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl overflow-hidden">
  <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-full" />
</div>

            <h1 className={`text-4xl md:text-6xl font-bold text-emerald-800 mb-6 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {t('about.title')}
            </h1>
            <div className="w-32 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className={`text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'For over two decades, Tanzeem Ulma Ahle Sunnat Wal Jamaat Govandi has stood as a pillar of Islamic guidance, community service, and social welfare in Mumbai. Our journey began with a simple yet profound mission: to serve the Muslim community with dedication, integrity, and unwavering commitment to Islamic principles.'
                : 'دو دہائیوں سے زیادہ عرصے سے، تنظیم علماء اہل سنت والجماعت گووندی ممبئی میں اسلامی رہنمائی، کمیونٹی سروس، اور سماجی فلاح کے ایک ستون کے طور پر کھڑی ہے۔ ہمارا سفر ایک سادہ لیکن گہرے مشن کے ساتھ شروع ہوا: لگن، دیانت، اور اسلامی اصولوں کے لیے غیر متزلزل عزم کے ساتھ مسلم کمیونٹی کی خدمت کرنا۔'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Organization Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-4xl font-bold text-gray-900 mb-8 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                {language === 'en' ? 'Our Foundation Story' : 'ہماری بنیاد کی کہانی'}
              </h2>
              <div className="space-y-6">
                <p className={`text-lg text-gray-700 leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {language === 'en'
                    ? 'In 2002, a group of dedicated local scholars, Huffaz (memorizers of the Quran), and community leaders came together with a shared vision. They witnessed the growing challenges faced by the Muslim community in Govandi - from family disputes requiring Islamic resolution to the need for proper religious education and social welfare support.'
                    : '2002 میں، وقف مقامی علماء، حفاظ (قرآن کے حافظ)، اور کمیونٹی کے رہنماؤں کا ایک گروپ مشترکہ وژن کے ساتھ اکٹھا آیا۔ انہوں نے گووندی میں مسلم کمیونٹی کو درپیش بڑھتے ہوئے چیلنجز کو دیکھا - اسلامی حل کی ضرورت والے خاندانی تنازعات سے لے کر مناسب مذہبی تعلیم اور سماجی فلاحی مدد کی ضرورت تک۔'
                  }
                </p>
                <p className={`text-lg text-gray-700 leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {language === 'en'
                    ? 'What started as informal gatherings in local mosques gradually evolved into a structured organization. The founders recognized that the community needed more than just religious guidance - it needed comprehensive support that addressed spiritual, educational, legal, and welfare needs within the framework of Islamic principles.'
                    : 'جو مقامی مساجد میں غیر رسمی اجتماعات کے طور پر شروع ہوا وہ بتدریج ایک منظم تنظیم میں تبدیل ہو گیا۔ بانیوں نے تسلیم کیا کہ کمیونٹی کو صرف مذہبی رہنمائی سے زیادہ کی ضرورت ہے - اسے جامع مدد کی ضرورت ہے جو اسلامی اصولوں کے فریم ورک کے اندر روحانی، تعلیمی، قانونی، اور فلاحی ضروریات کو پورا کرے۔'
                  }
                </p>
                <p className={`text-lg text-gray-700 leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {language === 'en'
                    ? 'Today, our organization stands as a testament to what can be achieved when community members unite with a common purpose. We have grown from a small group of concerned individuals to a comprehensive institution serving thousands of families across Mumbai, while never losing sight of our core mission and Islamic values.'
                    : 'آج، ہماری تنظیم اس بات کا ثبوت ہے کہ جب کمیونٹی کے ممبران مشترکہ مقصد کے ساتھ متحد ہوتے ہیں تو کیا حاصل کیا جا سکتا ہے۔ ہم فکر مند افراد کے ایک چھوٹے گروپ سے بڑھ کر ممبئی بھر میں ہزاروں خاندانوں کی خدمت کرنے والے ایک جامع ادارے بن گئے ہیں، جبکہ کبھی بھی اپنے بنیادی مشن اور اسلامی اقدار سے نظر نہیں ہٹائی۔'
                  }
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8728562/pexels-photo-8728562.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Islamic Community Gathering"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-8 rounded-xl shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">2002</div>
                  <div className={`text-sm ${language === 'ur' ? 'font-urdu' : ''}`}>
                    {language === 'en' ? 'Established' : 'قائم'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Design */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {language === 'en' ? 'Our Impact in Numbers' : 'اعداد و شمار میں ہمارا اثر'}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'These numbers represent real lives touched, families helped, and positive changes brought to our community.'
                : 'یہ اعداد و شمار حقیقی زندگیوں کو چھونے، خاندانوں کی مدد، اور ہماری کمیونٹی میں لائے گئے مثبت تبدیلیوں کی نمائندگی کرتے ہیں۔'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <div className="text-5xl font-bold text-emerald-800 mb-3">{stat.label}</div>
                  <div className={`text-gray-600 text-lg ${language === 'ur' ? 'font-urdu' : ''}`}>{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section with Enhanced Visual Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {t('about.mission')}
            </h2>
            <p className={`text-xl text-gray-600 max-w-4xl mx-auto ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'Our mission is deeply rooted in Islamic principles, focusing on five core areas that address the comprehensive needs of our community. Each mission point represents our commitment to serving with excellence and integrity.'
                : 'ہمارا مشن اسلامی اصولوں میں گہری جڑیں رکھتا ہے، پانچ بنیادی علاقوں پر توجہ مرکوز کرتا ہے جو ہماری کمیونٹی کی جامع ضروریات کو پورا کرتے ہیں۔ ہر مشن پوائنٹ بہترین اور دیانت کے ساتھ خدمت کرنے کے لیے ہمارے عزم کی نمائندگی کرتا ہے۔'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="group bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                    {num}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                      {language === 'en' ? `Mission ${num}` : `مشن ${num}`}
                    </h3>
                    <p className={`text-gray-700 leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                      {t(`about.mission.${num}`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {language === 'en' ? 'Our Journey Through Time' : 'وقت کے ساتھ ہمارا سفر'}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'From humble beginnings to comprehensive community service - explore the key milestones in our organizational growth.'
                : 'عاجزانہ شروعات سے جامع کمیونٹی سروس تک - ہماری تنظیمی ترقی کے اہم سنگ میل کو دریافت کریں۔'
              }
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                          {item.year.slice(-2)}
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-emerald-600">{item.year}</div>
                          <h3 className={`text-xl font-bold text-gray-900 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className={`text-gray-700 leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {language === 'en' ? 'Our Key Achievements' : 'ہماری اہم کامیابیاں'}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'Celebrating the milestones that have defined our journey and the positive impact we have made in the community.'
                : 'ان سنگ میلوں کا جشن منانا جنہوں نے ہمارے سفر کو متعین کیا ہے اور کمیونٹی میں ہمارے مثبت اثرات۔'
              }
            </p>
          </div>

          <Carousel autoPlay={true} interval={7000}>
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-xl overflow-hidden mx-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className={`text-3xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                        {achievement.title}
                      </h3>
                      <p className={`text-lg text-gray-700 leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                        {achievement.description}
                      </p>
                      <div className="mt-6 flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-white mb-6 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {language === 'en' ? 'Our Core Values' : 'ہماری بنیادی اقدار'}
            </h2>
            <p className={`text-xl text-emerald-100 max-w-3xl mx-auto ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'These fundamental values guide every decision we make and every service we provide to the community.'
                : 'یہ بنیادی اقدار ہمارے ہر فیصلے اور کمیونٹی کو فراہم کردہ ہر خدمت کی رہنمائی کرتی ہیں۔'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold text-white mb-4 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                        {value.title}
                      </h3>
                      <p className={`text-emerald-100 leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {language === 'en' ? 'Our Leadership & Governance' : 'ہماری قیادت اور گورننس'}
            </h2>
            <p className={`text-xl text-gray-600 max-w-4xl mx-auto ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'Our organization is guided by a distinguished council of scholars, each bringing decades of Islamic knowledge, community experience, and unwavering dedication to serving the Muslim community with wisdom and compassion.'
                : 'ہماری تنظیم کی رہنمائی علماء کی ایک ممتاز کونسل کرتی ہے، ہر ایک کئی دہائیوں کا اسلامی علم، کمیونٹی کا تجربہ، اور حکمت اور ہمدردی کے ساتھ مسلم کمیونٹی کی خدمت کے لیے غیر متزلزل لگن لاتا ہے۔'
              }
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-8">
                  <Users className="w-16 h-16 text-emerald-600" />
                </div>
                <h3 className={`text-3xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'font-urdu text-right lg:text-left' : ''}`}>
                  {language === 'en' ? 'Council of Scholars' : 'علماء کونسل'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className={`text-gray-700 ${language === 'ur' ? 'font-urdu' : ''}`}>
                      {language === 'en' ? 'Local Imams and Muftis' : 'مقامی ائمہ اور مفتیان'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className={`text-gray-700 ${language === 'ur' ? 'font-urdu' : ''}`}>
                      {language === 'en' ? 'Huffaz (Quran Memorizers)' : 'حفاظ (قرآن حافظ)'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className={`text-gray-700 ${language === 'ur' ? 'font-urdu' : ''}`}>
                      {language === 'en' ? 'Community Elders' : 'کمیونٹی کے بزرگ'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className={`text-gray-700 ${language === 'ur' ? 'font-urdu' : ''}`}>
                      {language === 'en' ? 'Islamic Scholars' : 'اسلامی اسکالرز'}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <p className={`text-lg text-gray-700 leading-relaxed mb-6 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {language === 'en' 
                    ? 'Our leadership structure ensures that all decisions are made through consultation (Shura) and are aligned with Islamic principles. The council meets regularly to discuss community needs, review our programs, and plan future initiatives.'
                    : 'ہماری قیادت کا ڈھانچہ اس بات کو یقینی بناتا ہے کہ تمام فیصلے مشاورت (شوریٰ) کے ذریعے کیے جائیں اور اسلامی اصولوں کے مطابق ہوں۔ کونسل کمیونٹی کی ضروریات پر بحث، ہمارے پروگراموں کا جائزہ، اور مستقبل کی اقدامات کی منصوبہ بندی کے لیے باقاعدگی سے ملتی ہے۔'
                  }
                </p>
                <p className={`text-lg text-gray-700 leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {language === 'en'
                    ? 'This collective leadership approach ensures transparency, accountability, and adherence to Islamic governance principles while maintaining the flexibility needed to address modern community challenges effectively.'
                    : 'یہ اجتماعی قیادت کا نقطہ نظر شفافیت، احتساب، اور اسلامی گورننس کے اصولوں کی پابندی کو یقینی بناتا ہے جبکہ جدید کمیونٹی کے چیلنجز سے مؤثر طریقے سے نمٹنے کے لیے درکار لچک کو برقرار رکھتا ہے۔'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;