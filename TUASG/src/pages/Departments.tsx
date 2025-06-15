import React from 'react';
import { Shield, Users, BookOpen, FileText, Heart, CheckCircle, Award, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Carousel from '../components/Carousel';

const Departments: React.FC = () => {
  const { language, t } = useLanguage();

  const departments = [
    {
      icon: Shield,
      title: t('departments.darulqaza.title'),
      subtitle: t('departments.darulqaza.subtitle'),
      description: t('departments.darulqaza.description'),
      detailedDescription: language === 'en' 
        ? 'Our Darul Qaza operates under the direct supervision of the All India Muslim Personal Law Board, ensuring that all arbitration follows authentic Islamic jurisprudence. Our qualified Muftis and Islamic judges handle complex family matters with wisdom, compassion, and strict adherence to Quranic principles and Prophetic traditions. The center has successfully resolved over 1,300 cases, providing fair and just solutions that preserve family relationships while upholding Islamic law.'
        : 'ہمارا دارالقضاء آل انڈیا مسلم پرسنل لا بورڈ کی براہ راست نگرانی میں کام کرتا ہے، اس بات کو یقینی بناتے ہوئے کہ تمام ثالثی مستند اسلامی فقہ کے مطابق ہو۔ ہمارے اہل مفتیان اور اسلامی ججز پیچیدہ خاندانی معاملات کو حکمت، ہمدردی، اور قرآنی اصولوں اور نبوی روایات کی سخت پابندی کے ساتھ سنبھالتے ہیں۔ مرکز نے کامیابی سے 1,300 سے زیادہ مقدمات کو حل کیا ہے، منصفانہ اور عادلانہ حل فراہم کیے ہیں جو اسلامی قانون کو برقرار رکھتے ہوئے خاندانی رشتوں کو محفوظ رکھتے ہیں۔',
      features: [
        t('services.nikah'),
        t('services.talaq'),
        t('services.khula'),
        t('services.iddah'),
        t('services.nafaqah'),
        t('services.wirasat'),
        t('services.wasiyyat'),
        t('services.hibah'),
        t('services.hizanat')
      ],
      highlight: t('departments.darulqaza.cases'),
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { number: '1,300+', label: language === 'en' ? 'Cases Resolved' : 'حل شدہ مقدمات' },
        { number: '95%', label: language === 'en' ? 'Success Rate' : 'کامیابی کی شرح' },
        { number: '22+', label: language === 'en' ? 'Years Experience' : 'سال تجربہ' }
      ]
    },
    {
      icon: Users,
      title: t('departments.social.title'),
      subtitle: t('departments.social.subtitle'),
      description: t('departments.social.description'),
      detailedDescription: language === 'en'
        ? 'Our Social Reform department works tirelessly to address contemporary social challenges facing the Muslim community. Through organized seminars, workshops, and community gatherings, we tackle issues such as harmful cultural practices, social evils, and misconceptions about Islamic teachings. Our programs include youth engagement initiatives, family counseling sessions, and awareness campaigns that promote authentic Islamic values while addressing modern social realities.'
        : 'ہمارا اصلاح معاشرہ شعبہ مسلم کمیونٹی کو درپیش عصری سماجی چیلنجز سے نمٹنے کے لیے انتھک محنت کرتا ہے۔ منظم سیمینارز، ورکشاپس، اور کمیونٹی اجتماعات کے ذریعے، ہم نقصان دہ ثقافتی طریقوں، سماجی برائیوں، اور اسلامی تعلیمات کے بارے میں غلط فہمیوں جیسے مسائل سے نمٹتے ہیں۔ ہمارے پروگراموں میں نوجوانوں کی شمولیت کی اقدامات، خاندانی مشاورت کے سیشن، اور آگاہی مہمات شامل ہیں جو جدید سماجی حقائق سے نمٹتے ہوئے مستند اسلامی اقدار کو فروغ دیتی ہیں۔',
      features: [
        language === 'en' ? 'Public Awareness Programs' : 'عوامی آگاہی پروگرام',
        language === 'en' ? 'Seminars & Workshops' : 'سیمینار اور ورکشاپ',
        language === 'en' ? 'Seerat-un-Nabi Competitions' : 'سیرت النبی مقابلے',
        language === 'en' ? 'Community Outreach' : 'کمیونٹی رسائی',
        language === 'en' ? 'Youth Engagement' : 'نوجوانوں کی شمولیت',
        language === 'en' ? 'Family Counseling' : 'خاندانی مشاورت',
        language === 'en' ? 'Social Media Campaigns' : 'سوشل میڈیا مہمات'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { number: '50+', label: language === 'en' ? 'Programs Annually' : 'سالانہ پروگرام' },
        { number: '2,000+', label: language === 'en' ? 'People Reached' : 'لوگوں تک رسائی' },
        { number: '15+', label: language === 'en' ? 'Partner Organizations' : 'شراکت دار تنظیمیں' }
      ]
    },
    {
      icon: BookOpen,
      title: t('departments.education.title'),
      subtitle: t('departments.education.subtitle'),
      description: t('departments.education.description'),
      detailedDescription: language === 'en'
        ? 'Madrasa Qasmiya represents our commitment to providing comprehensive Islamic education that combines traditional religious learning with contemporary educational needs. Our curriculum includes Quranic studies, Hadith, Islamic jurisprudence, Arabic language, and moral character development. We serve both boys and girls with separate facilities and specialized programs designed to nurture young minds in Islamic values while preparing them for modern challenges.'
        : 'مدرسہ قاسمیہ جامع اسلامی تعلیم فراہم کرنے کے لیے ہمارے عزم کی نمائندگی کرتا ہے جو روایتی مذہبی تعلیم کو عصری تعلیمی ضروریات کے ساتھ ملاتا ہے۔ ہمارے نصاب میں قرآنی علوم، حدیث، اسلامی فقہ، عربی زبان، اور اخلاقی کردار کی تعمیر شامل ہے۔ ہم لڑکوں اور لڑکیوں دونوں کی خدمت کرتے ہیں الگ سہولات اور خصوصی پروگراموں کے ساتھ جو جدید چیلنجز کے لیے تیار کرتے ہوئے نوجوان ذہنوں کو اسلامی اقدار میں پروان چڑھانے کے لیے ڈیزائن کیے گئے ہیں۔',
      features: [
        language === 'en' ? 'Quranic Studies & Memorization' : 'قرآنی علوم اور حفظ',
        language === 'en' ? 'Hadith & Islamic Jurisprudence' : 'حدیث اور اسلامی فقہ',
        language === 'en' ? 'Arabic Language Training' : 'عربی زبان کی تربیت',
        language === 'en' ? 'Moral Character Development' : 'اخلاقی کردار کی تعمیر',
        language === 'en' ? 'Separate Boys & Girls Classes' : 'لڑکوں اور لڑکیوں کی الگ کلاسیں',
        language === 'en' ? 'Modern Teaching Methods' : 'جدید تدریسی طریقے',
        language === 'en' ? 'Extracurricular Activities' : 'نصابی سرگرمیاں'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      image: 'https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { number: '200+', label: language === 'en' ? 'Students Enrolled' : 'داخل طلباء' },
        { number: '15+', label: language === 'en' ? 'Qualified Teachers' : 'اہل اساتذہ' },
        { number: '10+', label: language === 'en' ? 'Years of Excellence' : 'سال بہترین' }
      ]
    },
    {
      icon: FileText,
      title: t('departments.publications.title'),
      subtitle: t('departments.publications.subtitle'),
      description: t('departments.publications.description'),
      detailedDescription: language === 'en'
        ? 'Our Publications and Media department serves as the voice of authentic Islamic guidance in the community. We produce high-quality religious literature, educational materials, and contemporary Islamic guidance through various media channels. Our publications address current issues from an Islamic perspective, provide religious education materials, and distribute daily inspirational messages to thousands of community members through digital platforms.'
        : 'ہمارا اشاعات اور میڈیا شعبہ کمیونٹی میں مستند اسلامی رہنمائی کی آواز کا کام کرتا ہے۔ ہم مختلف میڈیا چینلز کے ذریعے اعلیٰ معیار کا مذہبی ادب، تعلیمی مواد، اور عصری اسلامی رہنمائی تیار کرتے ہیں۔ ہماری اشاعات اسلامی نقطہ نظر سے موجودہ مسائل کو حل کرتی ہیں، مذہبی تعلیمی مواد فراہم کرتی ہیں، اور ڈیجیٹل پلیٹ فارمز کے ذریعے ہزاروں کمیونٹی ممبران کو یومیہ حوصلہ افزا پیغامات تقسیم کرتی ہیں۔',
      features: [
        language === 'en' ? 'Religious Pamphlets & Booklets' : 'مذہبی پمفلٹس اور کتابچے',
        language === 'en' ? 'Educational Materials' : 'تعلیمی مواد',
        language === 'en' ? 'Daily Digital Messages' : 'یومیہ ڈیجیٹل پیغامات',
        language === 'en' ? 'Community Guidelines' : 'کمیونٹی رہنمائی',
        language === 'en' ? 'Islamic Literature Distribution' : 'اسلامی ادبیات کی تقسیم',
        language === 'en' ? 'Online Content Creation' : 'آن لائن مواد کی تخلیق',
        language === 'en' ? 'Translation Services' : 'ترجمے کی خدمات'
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { number: '100+', label: language === 'en' ? 'Publications Released' : 'اشاعات جاری' },
        { number: '5,000+', label: language === 'en' ? 'Daily Message Recipients' : 'یومیہ پیغام وصول کنندگان' },
        { number: '25+', label: language === 'en' ? 'Topics Covered' : 'موضوعات شامل' }
      ]
    },
    {
      icon: Heart,
      title: t('departments.welfare.title'),
      subtitle: t('departments.welfare.subtitle'),
      description: t('departments.welfare.description'),
      detailedDescription: language === 'en'
        ? 'Our Welfare Services department embodies the Islamic principle of caring for the less fortunate in our community. We provide systematic support to widows, orphans, elderly, and economically disadvantaged families through monthly stipends, emergency assistance, and special support programs. Our welfare initiatives also include healthcare assistance, educational support for underprivileged children, and emergency relief during natural disasters or personal crises.'
        : 'ہمارا فلاحی خدمات شعبہ ہماری کمیونٹی میں کم خوش قسمت لوگوں کی دیکھ بھال کے اسلامی اصول کو مجسم کرتا ہے۔ ہم ماہانہ وظائف، ہنگامی امداد، اور خصوصی سپورٹ پروگراموں کے ذریعے بیواؤں، یتیموں، بزرگوں، اور اقتصادی طور پر پسماندہ خاندانوں کو منظم مدد فراہم کرتے ہیں۔ ہماری فلاحی اقدامات میں صحت کی دیکھ بھال کی مدد، محروم بچوں کے لیے تعلیمی مدد، اور قدرتی آفات یا ذاتی بحرانوں کے دوران ہنگامی امداد بھی شامل ہے۔',
      features: [
        language === 'en' ? 'Monthly Widow Support' : 'ماہانہ بیوہ سپورٹ',
        language === 'en' ? 'Orphan Care Programs' : 'یتیم کیئر پروگرام',
        language === 'en' ? 'Student Scholarships' : 'طالب علم وظائف',
        language === 'en' ? 'Emergency Financial Aid' : 'ہنگامی مالی امداد',
        language === 'en' ? 'Healthcare Assistance' : 'صحت کی دیکھ بھال کی مدد',
        language === 'en' ? 'Food Distribution' : 'خوراک کی تقسیم',
        language === 'en' ? 'Disaster Relief Support' : 'آفات سے ریلیف سپورٹ'
      ],
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50',
      textColor: 'text-rose-700',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { number: '500+', label: language === 'en' ? 'Families Supported' : 'خاندانوں کی مدد' },
        { number: '₹50L+', label: language === 'en' ? 'Annual Aid Distributed' : 'سالانہ امداد تقسیم' },
        { number: '24/7', label: language === 'en' ? 'Emergency Response' : 'ہنگامی جواب' }
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: language === 'en' ? 'Initial Consultation' : 'ابتدائی مشاورت',
      description: language === 'en' 
        ? 'Meet with our qualified staff to discuss your needs and understand available services'
        : 'اپنی ضروریات پر بحث کرنے اور دستیاب خدمات کو سمجھنے کے لیے ہمارے اہل عملے سے ملیں'
    },
    {
      step: 2,
      title: language === 'en' ? 'Documentation Review' : 'دستاویزات کا جائزہ',
      description: language === 'en'
        ? 'Submit required documents and information for proper case assessment'
        : 'مناسب کیس کی تشخیص کے لیے مطلوبہ دستاویزات اور معلومات جمع کریں'
    },
    {
      step: 3,
      title: language === 'en' ? 'Islamic Guidance' : 'اسلامی رہنمائی',
      description: language === 'en'
        ? 'Receive guidance based on Quranic principles and Prophetic traditions'
        : 'قرآنی اصولوں اور نبوی روایات کی بنیاد پر رہنمائی حاصل کریں'
    },
    {
      step: 4,
      title: language === 'en' ? 'Resolution & Follow-up' : 'حل اور فالو اپ',
      description: language === 'en'
        ? 'Implement the recommended solution with ongoing support and monitoring'
        : 'مسلسل مدد اور نگرانی کے ساتھ تجویز کردہ حل کو نافذ کریں'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Carousel */}
      <section className="relative h-96 md:h-[500px]">
        <Carousel autoPlay={true} interval={6000} className="h-full">
          {departments.map((dept, index) => (
            <div key={index} className="relative h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${dept.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              </div>
              <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-4xl mx-auto">
                  <div className={`w-20 h-20 bg-gradient-to-br ${dept.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                    <dept.icon className="w-10 h-10 text-white" />
                  </div>
                  <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${language === 'ur' ? 'font-urdu' : ''}`}>
                    {dept.title}
                  </h1>
                  <p className={`text-lg md:text-xl mb-6 ${language === 'ur' ? 'font-urdu' : ''}`}>
                    {dept.subtitle}
                  </p>
                  <p className={`text-base md:text-lg max-w-2xl mx-auto ${language === 'ur' ? 'font-urdu' : ''}`}>
                    {dept.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-20"></div>
      </section>

      {/* Departments Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {t('departments.title')}
            </h2>
            <p className={`text-xl text-gray-600 max-w-4xl mx-auto ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'Our organization operates through five specialized departments, each dedicated to serving different aspects of community needs with Islamic guidance, modern efficiency, and unwavering commitment to excellence. Discover how each department contributes to our comprehensive mission of community service.'
                : 'ہماری تنظیم پانچ خصوصی شعبوں کے ذریعے کام کرتی ہے، ہر ایک اسلامی رہنمائی، جدید کارکردگی، اور بہترین کے لیے غیر متزلزل عزم کے ساتھ کمیونٹی کی مختلف ضروریات کی خدمت کے لیے وقف ہے۔ دریافت کریں کہ ہر شعبہ کمیونٹی سروس کے ہمارے جامع مشن میں کیسے حصہ ڈالتا ہے۔'
              }
            </p>
          </div>

          {/* Desktop Detailed View */}
          <div className="hidden lg:block space-y-20">
            {departments.map((dept, index) => {
              const IconComponent = dept.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="relative">
                      <img 
                        src={dept.image} 
                        alt={dept.title}
                        className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                      />
                      <div className={`absolute -bottom-6 -right-6 bg-gradient-to-br ${dept.color} text-white p-6 rounded-xl shadow-2xl`}>
                        <IconComponent className="w-12 h-12" />
                      </div>
                    </div>
                  </div>
                  
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className={`flex items-center space-x-4 mb-6 ${language === 'ur' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-3xl font-bold text-gray-900 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                          {dept.title}
                        </h3>
                        <p className={`text-lg ${dept.textColor} font-semibold ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                          {dept.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className={`text-lg text-gray-700 mb-6 leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                      {dept.detailedDescription}
                    </p>

                    {/* Statistics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {dept.stats.map((stat, statIndex) => (
                        <div key={statIndex} className={`text-center p-4 ${dept.bgColor} rounded-lg`}>
                          <div className={`text-2xl font-bold ${dept.textColor}`}>{stat.number}</div>
                          <div className={`text-sm text-gray-600 ${language === 'ur' ? 'font-urdu' : ''}`}>{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className={`text-xl font-semibold text-gray-900 mb-4 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                        {language === 'en' ? 'Key Services & Features:' : 'اہم خدمات اور خصوصیات:'}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {dept.features.slice(0, 6).map((feature, featureIndex) => (
                          <div key={featureIndex} className={`flex items-center space-x-3 ${language === 'ur' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            <CheckCircle className={`w-5 h-5 ${dept.textColor} flex-shrink-0`} />
                            <span className={`text-gray-700 ${language === 'ur' ? 'font-urdu' : ''}`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {dept.highlight && (
                      <div className={`mt-6 p-4 ${dept.bgColor} rounded-lg border-l-4 border-current ${dept.textColor}`}>
                        <div className="flex items-center space-x-2">
                          <Award className={`w-5 h-5 ${dept.textColor}`} />
                          <span className={`font-semibold ${dept.textColor} ${language === 'ur' ? 'font-urdu' : ''}`}>
                            {dept.highlight}
                          </span>
                        </div>
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
                  <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden mx-2">
                    <div className="relative h-48">
                      <img 
                        src={dept.image} 
                        alt={dept.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br ${dept.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className={`text-xl font-bold text-gray-900 mb-2 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                        {dept.title}
                      </h3>
                      <h4 className={`text-emerald-600 mb-3 font-semibold ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                        {dept.subtitle}
                      </h4>
                      <p className={`text-gray-700 text-sm leading-relaxed mb-4 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                        {dept.description}
                      </p>
                      
                      {/* Mobile Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {dept.stats.map((stat, statIndex) => (
                          <div key={statIndex} className={`text-center p-2 ${dept.bgColor} rounded`}>
                            <div className={`text-lg font-bold ${dept.textColor}`}>{stat.number}</div>
                            <div className={`text-xs text-gray-600 ${language === 'ur' ? 'font-urdu' : ''}`}>{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Mobile Features */}
                      <div className="space-y-2">
                        {dept.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className={`flex items-center space-x-2 ${language === 'ur' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            <CheckCircle className={`w-4 h-4 ${dept.textColor}`} />
                            <span className={`text-gray-700 text-sm ${language === 'ur' ? 'font-urdu' : ''}`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {dept.highlight && (
                        <div className={`mt-4 p-3 ${dept.bgColor} rounded-lg border-l-4 border-current ${dept.textColor}`}>
                          <div className="flex items-center space-x-2">
                            <Award className={`w-4 h-4 ${dept.textColor}`} />
                            <span className={`text-sm font-semibold ${dept.textColor} ${language === 'ur' ? 'font-urdu' : ''}`}>
                              {dept.highlight}
                            </span>
                          </div>
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {language === 'en' ? 'How We Serve You' : 'ہم آپ کی کیسے خدمت کرتے ہیں'}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'Our systematic approach ensures that every individual receives personalized attention and Islamic guidance tailored to their specific needs.'
                : 'ہمارا منظم نقطہ نظر اس بات کو یقینی بناتا ہے کہ ہر فرد کو ذاتی توجہ اور ان کی مخصوص ضروریات کے مطابق اسلامی رہنمائی ملے۔'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl">
                    {step.step}
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-4 ${language === 'ur' ? 'font-urdu' : ''}`}>
                    {step.title}
                  </h3>
                  <p className={`text-gray-600 leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-emerald-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {language === 'en' ? 'Our Collective Impact' : 'ہمارا اجتماعی اثر'}
            </h2>
            <p className={`text-xl text-emerald-100 max-w-3xl mx-auto ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'Together, our departments have created a significant positive impact on the Muslim community in Mumbai and beyond.'
                : 'مل کر، ہمارے شعبوں نے ممبئی اور اس سے آگے مسلم کمیونٹی پر نمایاں مثبت اثرات مرتب کیے ہیں۔'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">22+</div>
              <div className={`text-xl ${language === 'ur' ? 'font-urdu' : ''}`}>
                {language === 'en' ? 'Years of Service' : 'سال خدمت'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1,300+</div>
              <div className={`text-xl ${language === 'ur' ? 'font-urdu' : ''}`}>
                {language === 'en' ? 'Cases Resolved' : 'حل شدہ مقدمات'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className={`text-xl ${language === 'ur' ? 'font-urdu' : ''}`}>
                {language === 'en' ? 'Families Supported' : 'خاندانوں کی مدد'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5</div>
              <div className={`text-xl ${language === 'ur' ? 'font-urdu' : ''}`}>
                {language === 'en' ? 'Active Departments' : 'فعال شعبہ جات'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'font-urdu' : ''}`}>
            {language === 'en' ? 'Get in Touch with Our Departments' : 'ہمارے شعبوں سے رابطہ کریں'}
          </h2>
          <p className={`text-xl text-gray-600 mb-12 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
            {language === 'en'
              ? 'Each department is staffed with qualified professionals ready to assist you with your specific needs. Contact us today to learn more about our services.'
              : 'ہر شعبہ اہل پیشہ ور افراد کے ساتھ عملہ رکھتا ہے جو آپ کی مخصوص ضروریات میں آپ کی مدد کے لیے تیار ہیں۔ ہماری خدمات کے بارے میں مزید جاننے کے لیے آج ہی ہم سے رابطہ کریں۔'
            }
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-emerald-50 rounded-xl p-6">
              <MapPin className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${language === 'ur' ? 'font-urdu' : ''}`}>
                {language === 'en' ? 'Visit Us' : 'ہمارے پاس آئیں'}
              </h3>
              <p className={`text-gray-600 ${language === 'ur' ? 'font-urdu' : ''}`}>
                Govandi, Mumbai, Maharashtra
              </p>
            </div>
            
            <div className="bg-emerald-50 rounded-xl p-6">
              <Phone className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${language === 'ur' ? 'font-urdu' : ''}`}>
                {language === 'en' ? 'Call Us' : 'ہمیں کال کریں'}
              </h3>
              <p className="text-gray-600">+91 XXXX XXXXXX</p>
            </div>
            
            <div className="bg-emerald-50 rounded-xl p-6">
              <Mail className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${language === 'ur' ? 'font-urdu' : ''}`}>
                {language === 'en' ? 'Email Us' : 'ہمیں ای میل کریں'}
              </h3>
              <p className="text-gray-600">info@tanzeemulma.org</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white">
            <h3 className={`text-2xl font-bold mb-4 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {language === 'en' ? 'Ready to Get Started?' : 'شروع کرنے کے لیے تیار ہیں؟'}
            </h3>
            <p className={`text-emerald-100 mb-6 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'Contact us today to discuss your needs and discover how our departments can serve you with Islamic guidance and professional excellence.'
                : 'اپنی ضروریات پر بحث کرنے اور یہ جاننے کے لیے آج ہی ہم سے رابطہ کریں کہ ہمارے شعبے اسلامی رہنمائی اور پیشہ ورانہ بہترین کے ساتھ آپ کی کیسے خدمت کر سکتے ہیں۔'
              }
            </p>
            <a
              href="/contact"
              className={`inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-200 shadow-lg ${language === 'ur' ? 'font-urdu flex-row-reverse' : ''}`}
            >
              <Phone className={`w-5 h-5 ${language === 'ur' ? 'mr-2' : 'ml-2'}`} />
              {language === 'en' ? 'Contact Us Now' : 'اب ہم سے رابطہ کریں'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;