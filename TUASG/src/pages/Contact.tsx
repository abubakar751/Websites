import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Carousel from '../components/Carousel';

const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(language === 'en' ? 'Thank you for your message. We will contact you soon.' : 'آپ کے پیغام کے لیے شکریہ۔ ہم جلد آپ سے رابطہ کریں گے۔');
  };

  const contactMethods = [
    {
      icon: MapPin,
      title: t('contact.address'),
      details: [
        'Tanzeem Ulma Office',
        'Govandi, Mumbai - 400043',
        'Maharashtra, India'
      ],
      color: 'bg-emerald-100 text-emerald-700',
      image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      details: [
        '+91 XXXX XXXXXX (Main Office)',
        '+91 XXXX XXXXXX (Darul Qaza)',
        '+91 XXXX XXXXXX (Emergency)'
      ],
      color: 'bg-blue-100 text-blue-700',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: [
        'info@tanzeemulma.org',
        'darulqaza@tanzeemulma.org',
        'welfare@tanzeemulma.org'
      ],
      color: 'bg-purple-100 text-purple-700',
      image: 'https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      details: [
        language === 'en' ? 'Monday - Friday: 9:00 AM - 6:00 PM' : 'پیر - جمعہ: صبح 9:00 سے شام 6:00',
        language === 'en' ? 'Saturday: 9:00 AM - 2:00 PM' : 'ہفتہ: صبح 9:00 سے دوپہر 2:00',
        language === 'en' ? 'Sunday: Emergency Only' : 'اتوار: صرف ہنگامی'
      ],
      color: 'bg-orange-100 text-orange-700',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const departments = [
    { value: '', label: language === 'en' ? 'Select Department' : 'شعبہ منتخب کریں' },
    { value: 'darulqaza', label: language === 'en' ? 'Darul Qaza (Islamic Arbitration)' : 'دارالقضاء (اسلامی ثالثی)' },
    { value: 'education', label: language === 'en' ? 'Education (Madrasa Qasmiya)' : 'تعلیم (مدرسہ قاسمیہ)' },
    { value: 'social', label: language === 'en' ? 'Social Reform' : 'اصلاح معاشرہ' },
    { value: 'welfare', label: language === 'en' ? 'Welfare Services' : 'فلاحی خدمات' },
    { value: 'publications', label: language === 'en' ? 'Publications & Media' : 'اشاعات و میڈیا' },
    { value: 'general', label: language === 'en' ? 'General Inquiry' : 'عمومی استفسار' }
  ];

  const subjects = [
    { value: '', label: language === 'en' ? 'Select Subject' : 'موضوع منتخب کریں' },
    { value: 'nikah', label: language === 'en' ? 'Marriage (Nikah)' : 'نکاح' },
    { value: 'talaq', label: language === 'en' ? 'Divorce (Talaq)' : 'طلاق' },
    { value: 'khula', label: language === 'en' ? 'Separation (Khula)' : 'خلع' },
    { value: 'inheritance', label: language === 'en' ? 'Inheritance (Wirasat)' : 'وراثت' },
    { value: 'education', label: language === 'en' ? 'Educational Inquiry' : 'تعلیمی استفسار' },
    { value: 'welfare', label: language === 'en' ? 'Welfare Support' : 'فلاحی سپورٹ' },
    { value: 'donation', label: language === 'en' ? 'Donation' : 'عطیہ' },
    { value: 'volunteer', label: language === 'en' ? 'Volunteer Opportunity' : 'رضاکارانہ موقع' },
    { value: 'other', label: language === 'en' ? 'Other' : 'دیگر' }
  ];

  const quickActions = [
    {
      icon: Shield,
      title: language === 'en' ? 'Emergency Assistance' : 'ہنگامی امداد',
      description: language === 'en' 
        ? 'For urgent family disputes or emergency situations requiring immediate Islamic guidance'
        : 'فوری خاندانی تنازعات یا ہنگامی حالات کے لیے جن میں فوری اسلامی رہنمائی کی ضرورت ہو',
      action: language === 'en' ? 'Call Emergency Line' : 'ایمرجنسی لائن کال کریں',
      contact: '+91 XXXX XXXXXX'
    },
    {
      icon: Calendar,
      title: language === 'en' ? 'Schedule Appointment' : 'ملاقات کا وقت طے کریں',
      description: language === 'en'
        ? 'Book a consultation with our scholars for detailed discussion of your concerns'
        : 'اپنے خدشات کی تفصیلی بحث کے لیے ہمارے علماء کے ساتھ مشاورت بک کریں',
      action: language === 'en' ? 'Book Consultation' : 'مشاورت بک کریں',
      contact: 'info@tanzeemulma.org'
    },
    {
      icon: Users,
      title: language === 'en' ? 'Community Programs' : 'کمیونٹی پروگرام',
      description: language === 'en'
        ? 'Join our educational seminars, social reform programs, and community events'
        : 'ہمارے تعلیمی سیمینارز، سماجی اصلاح پروگراموں، اور کمیونٹی ایونٹس میں شامل ہوں',
      action: language === 'en' ? 'View Programs' : 'پروگرام دیکھیں',
      contact: 'programs@tanzeemulma.org'
    }
  ];

  const faqs = [
    {
      question: language === 'en' ? 'What services does Darul Qaza provide?' : 'دارالقضاء کیا خدمات فراہم کرتا ہے؟',
      answer: language === 'en'
        ? 'Our Darul Qaza provides Islamic arbitration services for family matters including marriage, divorce, inheritance, child custody, and other personal law issues according to Quranic principles and Prophetic traditions.'
        : 'ہمارا دارالقضاء خاندانی معاملات کے لیے اسلامی ثالثی خدمات فراہم کرتا ہے جن میں شادی، طلاق، وراثت، بچوں کی حضانت، اور قرآنی اصولوں اور نبوی روایات کے مطابق دیگر ذاتی قانونی مسائل شامل ہیں۔'
    },
    {
      question: language === 'en' ? 'How can I get welfare assistance?' : 'میں فلاحی امداد کیسے حاصل کر سکتا ہوں؟',
      answer: language === 'en'
        ? 'Contact our welfare department to discuss your situation. We provide monthly stipends for widows, orphans, students, and emergency assistance for urgent needs. All applications are reviewed with confidentiality and compassion.'
        : 'اپنی صورتحال پر بحث کرنے کے لیے ہمارے فلاحی شعبے سے رابطہ کریں۔ ہم بیواؤں، یتیموں، طلباء کے لیے ماہانہ وظائف، اور فوری ضروریات کے لیے ہنگامی امداد فراہم کرتے ہیں۔ تمام درخواستوں کا جائزہ رازداری اور ہمدردی کے ساتھ کیا جاتا ہے۔'
    },
    {
      question: language === 'en' ? 'Can I enroll my child in Madrasa Qasmiya?' : 'کیا میں اپنے بچے کو مدرسہ قاسمیہ میں داخل کر سکتا ہوں؟',
      answer: language === 'en'
        ? 'Yes, we welcome both boys and girls for Islamic education. Contact our education department for admission requirements, curriculum details, and enrollment procedures. We provide comprehensive religious education along with moral character development.'
        : 'جی ہاں، ہم اسلامی تعلیم کے لیے لڑکوں اور لڑکیوں دونوں کا خیرمقدم کرتے ہیں۔ داخلے کی ضروریات، نصاب کی تفصیلات، اور داخلے کے طریقہ کار کے لیے ہمارے تعلیمی شعبے سے رابطہ کریں۔ ہم اخلاقی کردار کی تعمیر کے ساتھ جامع مذہبی تعلیم فراہم کرتے ہیں۔'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Contact Methods Carousel */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-6xl font-bold text-emerald-800 mb-6 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {t('contact.title')}
            </h1>
            <div className="w-32 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className={`text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en' 
                ? 'We are here to serve you with Islamic guidance, professional support, and compassionate assistance. Reach out to us through any of the convenient methods below, and our dedicated team will respond promptly to address your needs with the respect and attention you deserve.'
                : 'ہم یہاں اسلامی رہنمائی، پیشہ ورانہ مدد، اور ہمدردانہ امداد کے ساتھ آپ کی خدمت کے لیے موجود ہیں۔ نیچے دیے گئے کسی بھی آسان طریقے سے ہم سے رابطہ کریں، اور ہماری وقف ٹیم آپ کی ضروریات کو اس احترام اور توجہ کے ساتھ پورا کرنے کے لیے فوری طور پر جواب دے گی جس کے آپ مستحق ہیں۔'
              }
            </p>
          </div>

          {/* Contact Methods Carousel for Mobile */}
          <div className="md:hidden mb-12">
            <Carousel>
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-xl p-6 mx-2">
                    <div className="relative h-32 mb-6 rounded-lg overflow-hidden">
                      <img 
                        src={method.image} 
                        alt={method.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className={`absolute bottom-2 left-2 w-10 h-10 ${method.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className={`text-xl font-bold text-gray-900 mb-4 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                      {method.title}
                    </h3>
                    <div className="space-y-2">
                      {method.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className={`text-gray-600 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>

          {/* Contact Methods Grid for Desktop */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-40">
                    <img 
                      src={method.image} 
                      alt={method.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className={`absolute bottom-4 left-4 w-12 h-12 ${method.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold text-gray-900 mb-4 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                      {method.title}
                    </h3>
                    <div className="space-y-2">
                      {method.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className={`text-gray-600 text-sm ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'font-urdu' : ''}`}>
              {language === 'en' ? 'Quick Actions' : 'فوری اقدامات'}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
              {language === 'en'
                ? 'Need immediate assistance or want to take quick action? Choose from these convenient options.'
                : 'فوری مدد کی ضرورت ہے یا فوری اقدام کرنا چاہتے ہیں؟ ان آسان اختیارات میں سے انتخاب کریں۔'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className={`text-2xl font-bold text-gray-900 mb-4 text-center ${language === 'ur' ? 'font-urdu' : ''}`}>
                    {action.title}
                  </h3>
                  <p className={`text-gray-600 mb-6 text-center leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                    {action.description}
                  </p>
                  <div className="text-center">
                    <button className={`bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 mb-2 ${language === 'ur' ? 'font-urdu' : ''}`}>
                      {action.action}
                    </button>
                    <p className="text-sm text-gray-500">{action.contact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-lg">
              <h2 className={`text-3xl font-bold text-gray-900 mb-8 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                {language === 'en' ? 'Send us a Detailed Message' : 'ہمیں تفصیلی پیغام بھیجیں'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                      {language === 'en' ? 'Full Name *' : 'مکمل نام *'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 ${language === 'ur' ? 'text-right font-urdu' : ''}`}
                      placeholder={language === 'en' ? 'Enter your full name' : 'اپنا مکمل نام درج کریں'}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                      {language === 'en' ? 'Phone Number *' : 'فون نمبر *'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                    {language === 'en' ? 'Email Address *' : 'ای میل ایڈریس *'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                      {language === 'en' ? 'Department *' : 'شعبہ *'}
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 ${language === 'ur' ? 'font-urdu' : ''}`}
                    >
                      {departments.map((dept) => (
                        <option key={dept.value} value={dept.value}>
                          {dept.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                      {language === 'en' ? 'Subject *' : 'موضوع *'}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 ${language === 'ur' ? 'font-urdu' : ''}`}
                    >
                      {subjects.map((subject) => (
                        <option key={subject.value} value={subject.value}>
                          {subject.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                    {language === 'en' ? 'Detailed Message *' : 'تفصیلی پیغام *'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 ${language === 'ur' ? 'text-right font-urdu' : ''}`}
                    placeholder={language === 'en' ? 'Please provide detailed information about your inquiry or concern...' : 'براہ کرم اپنے استفسار یا خدشے کے بارے میں تفصیلی معلومات فراہم کریں...'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg ${language === 'ur' ? 'font-urdu flex-row-reverse space-x-reverse' : ''}`}
                >
                  <Send className="w-5 h-5" />
                  <span>{language === 'en' ? 'Send Message' : 'پیغام بھیجیں'}</span>
                </button>
              </form>
            </div>

            {/* Additional Information & FAQ */}
            <div className="space-y-8">
              {/* Office Location */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className={`text-2xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {language === 'en' ? 'Visit Our Office' : 'ہمارے دفتر کا دورہ کریں'}
                </h3>
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <p className={`text-gray-600 ${language === 'ur' ? 'font-urdu' : ''}`}>
                      {language === 'en' ? 'Interactive Map Coming Soon' : 'انٹرایکٹو نقشہ جلد آ رہا ہے'}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className={`text-gray-700 font-semibold ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                    Tanzeem Ulma Ahle Sunnat Wal Jamaat
                  </p>
                  <p className={`text-gray-600 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                    Govandi, Mumbai - 400043<br />
                    Maharashtra, India
                  </p>
                  <div className="pt-4 border-t">
                    <p className={`text-sm text-gray-500 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                      {language === 'en' 
                        ? 'Our office is easily accessible by public transport. Visitors are welcome during office hours.'
                        : 'ہمارا دفتر پبلک ٹرانسپورٹ سے آسانی سے پہنچا جا سکتا ہے۔ دفتری اوقات میں زائرین کا خیرمقدم ہے۔'
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-emerald-50 rounded-2xl p-8">
                <h3 className={`text-2xl font-bold text-emerald-800 mb-6 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {language === 'en' ? 'Frequently Asked Questions' : 'اکثر پوچھے جانے والے سوالات'}
                </h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                      <h4 className={`text-lg font-semibold text-gray-900 mb-3 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                        {faq.question}
                      </h4>
                      <p className={`text-gray-600 leading-relaxed ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-500">
                <h3 className={`text-2xl font-bold text-red-800 mb-4 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {language === 'en' ? 'Emergency Contact' : 'ہنگامی رابطہ'}
                </h3>
                <p className={`text-red-700 mb-4 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {language === 'en' 
                    ? 'For urgent family disputes or emergency situations requiring immediate Islamic guidance:'
                    : 'فوری خاندانی تنازعات یا ہنگامی حالات کے لیے جن میں فوری اسلامی رہنمائی کی ضرورت ہو:'
                  }
                </p>
                <div className={`flex items-center space-x-3 ${language === 'ur' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <Phone className="w-6 h-6 text-red-600" />
                  <span className="font-bold text-red-800 text-lg">+91 XXXX XXXXXX</span>
                </div>
                <p className={`text-sm text-red-600 mt-2 ${language === 'ur' ? 'font-urdu text-right' : ''}`}>
                  {language === 'en' ? 'Available 24/7 for genuine emergencies' : '24/7 حقیقی ہنگامی حالات کے لیے دستیاب'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;