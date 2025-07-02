import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users, Shield, Youtube, Facebook, Instagram, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';


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
    console.log('Form submitted:', formData);
    alert(language === 'en' ? 'Thank you for your message. We will contact you soon.' : 'آپ کے پیغام کے لیے شکریہ۔ ہم جلد آپ سے رابطہ کریں گے۔');
  };

  const contactMethods = [
    {
      icon: MapPin,
      title: t('contact.address'),
      details: [
        'Kamla Raman Nagar, Behind Saibaba Mandir',
        'Near Rickshaw Stand, Eidgah Maidan, Baiganwadi,',
        'Govandi, Mumbai - 400043',
        'Maharashtra, India'
      ],
      color: 'bg-emerald-100 text-emerald-700',
      image: 'https://www.weandour.com/content/images/2023/06/google-map-features-.jpg'
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      details: [
        '+91 92217 43368 (Main Office)',
        '+91 95940 33165 (Emergency)',
        '+91 72753 10501 (Darul Qaza)',
      ],
      color: 'bg-blue-100 text-blue-700',
      image: 'https://cdn2.vectorstock.com/i/1000x1000/21/76/businessman-phone-call-vector-27282176.jpg'
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: [
        'tanzeemulmigovandi@gmail.com',
        'darulqazagovandi@gmail.com',
      ],
      color: 'bg-purple-100 text-purple-700',
      image: 'https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png'
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      details: [
        language === 'en'
          ? 'Darul Qaza Timings: 9:00 AM - 1:00 PM'
          : 'دارالقضاء کا وقت: صبح 9:00 بجے سے دوپہر 1:00 بجے تک',
        language === 'en'
          ? 'Tanzeem Timings: 5:00 PM - 8:00 PM'
          : 'تنظیم کا وقت: شام 5:00 بجے سے رات 8:00 بجے تک',
        language === 'en'
          ? 'Friday: Closed'
          : 'جمعہ: بند'
      ],
      color: 'bg-orange-100 text-orange-700',
      image: 'https://acgov.org/cda/ecd/images/OfficeHoursGraphic1.jpg'
    }
  ];

  const socialMedia = [
    {
      icon: Youtube,
      name: 'YouTube',
      url: 'https://youtube.com/yourchannel',
      color: 'bg-red-100 text-red-600',
      hover: 'hover:bg-red-600 hover:text-white',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1BdVo9RRZu/',
      color: 'bg-blue-100 text-blue-600',
      hover: 'hover:bg-blue-600 hover:text-white',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/tanzeem3979?igsh=d2k4anE0eTNoaW8y',
      color: 'bg-pink-100 text-pink-600',
      hover: 'hover:bg-pink-600 hover:text-white',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'
    },
    {
      icon: MessageSquare,
      name: 'WhatsApp',
      url: 'https://whatsapp.com/channel/0029VaXjbW0Jpe8aZ1kpng0Y',
      color: 'bg-green-100 text-green-600',
      hover: 'hover:bg-green-600 hover:text-white',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2048px-WhatsApp.svg.png'
    }
  ];

  const FloatingSocialBar = () => {
    return (
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-3">
        {socialMedia.map((item, index) => {
          return (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg ${item.color} ${item.hover} transition-all duration-300`}
            >
              <img 
                src={item.logo} 
                alt={item.name}
                className="w-6 h-6 object-contain"
              />
            </motion.a>
          );
        })}
      </div>
    );
  };

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
      contact: '+91 95940 33165'
    },
    {
      icon: Calendar,
      title: language === 'en' ? 'Schedule Appointment' : 'ملاقات کا وقت طے کریں',
      description: language === 'en'
        ? 'Book a consultation with our scholars for detailed discussion of your concerns'
        : 'اپنے خدشات کی تفصیلی بحث کے لیے ہمارے علماء کے ساتھ مشاورت بک کریں',
      action: language === 'en' ? 'Book Consultation' : 'مشاورت بک کریں',
      contact: 'tanzeemulmigovandi@gmail.com'
    },
    {
      icon: Users,
      title: language === 'en' ? 'Community Programs' : 'کمیونٹی پروگرام',
      description: language === 'en'
        ? 'Join our educational seminars, social reform programs, and community events'
        : 'ہمارے تعلیمی سیمینارز، سماجی اصلاح پروگراموں، اور کمیونٹی ایونٹس میں شامل ہوں',
      action: language === 'en' ? 'View Programs' : 'پروگرام دیکھیں',
      contact: 'darulqazagovandi@gmail.com'
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
     
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet"
        />
        <style>{`
          @font-face {
            font-family: 'Noori Nastaliq';
            src: url('/fonts/NooriNastaliq.ttf') format('truetype');
            font-display: swap;
          }
          .font-noori {
            font-family: 'Noori Nastaliq', serif;
            line-height: 1.8;
          }
          body {
            font-family: 'Poppins', sans-serif;
          }
        `}</style>
      

      {/* Floating Social Media Bar */}
      <FloatingSocialBar />

      {/* Hero Section with Contact Methods */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-6xl font-bold text-emerald-800 mb-6 ${language === 'ur' ? 'font-noori' : ''}`}>
              {t('contact.title')}
            </h1>
            <div className="w-32 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className={`text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed ${language === 'ur' ? 'font-noori text-right' : ''}`}>
              {language === 'en' 
                ? 'We are here to serve you with Islamic guidance, professional support, and compassionate assistance. Reach out to us through any of the convenient methods below, and our dedicated team will respond promptly to address your needs with the respect and attention you deserve.'
                : 'ہم یہاں اسلامی رہنمائی، پیشہ ورانہ مدد، اور ہمدردانہ امداد کے ساتھ آپ کی خدمت کے لیے موجود ہیں۔ نیچے دیے گئے کسی بھی آسان طریقے سے ہم سے رابطہ کریں، اور ہماری وقف ٹیم آپ کی ضروریات کو اس احترام اور توجہ کے ساتھ پورا کرنے کے لیے فوری طور پر جواب دے گی جس کے آپ مستحق ہیں۔'
              }
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
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
                    <h3 className={`text-xl font-bold text-gray-900 mb-4 ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                      {method.title}
                    </h3>
                    <div className="space-y-2">
                      {method.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className={`text-gray-600 text-sm ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'font-noori' : ''}`}>
              {language === 'en' ? 'Quick Actions' : 'فوری اقدامات'}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'ur' ? 'font-noori text-right' : ''}`}>
              {language === 'en'
                ? 'Need immediate assistance or want to take quick action? Choose from these convenient options.'
                : 'فوری مدد کی ضرورت ہے یا فوری اقدام کرنا چاہتے ہیں؟ ان آسان اختیارات میں سے انتخاب کریں۔'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className={`text-2xl font-bold text-gray-900 mb-4 text-center ${language === 'ur' ? 'font-noori' : ''}`}>
                    {action.title}
                  </h3>
                  <p className={`text-gray-600 mb-6 text-center leading-relaxed ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                    {action.description}
                  </p>
                  <div className="text-center">
                    <button className={`bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 mb-2 ${language === 'ur' ? 'font-noori flex-row-reverse space-x-reverse' : ''}`}>
                      {action.action}
                    </button>
                    <p className={`text-sm text-gray-500 ${language === 'ur' ? 'font-noori' : ''}`}>{action.contact}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${language === 'ur' ? 'font-noori' : ''}`}>
              {language === 'en' ? 'Connect With Us' : 'ہمارے ساتھ جڑیں'}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'ur' ? 'font-noori text-right' : ''}`}>
              {language === 'en'
                ? 'Follow us on social media for updates, events, and Islamic content'
                : 'اپ ڈیٹس، تقریبات اور اسلامی مواد کے لیے ہمیں سوشل میڈیا پر فالو کریں'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {socialMedia.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`${platform.color} ${platform.hover} rounded-xl p-6 text-center transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <img 
                  src={platform.logo} 
                  alt={platform.name}
                  className="w-12 h-12 mx-auto mb-3 object-contain"
                />
                <p className={`font-medium ${language === 'ur' ? 'font-noori' : ''}`}>{platform.name}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-lg">
              <h2 className={`text-3xl font-bold text-gray-900 mb-8 ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                {language === 'en' ? 'Send us a Detailed Message' : 'ہمیں تفصیلی پیغام بھیجیں'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                      {language === 'en' ? 'Full Name *' : 'مکمل نام *'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 ${language === 'ur' ? 'text-right font-noori' : ''}`}
                      placeholder={language === 'en' ? 'Enter your full name' : 'اپنا مکمل نام درج کریں'}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                      {language === 'en' ? 'Phone Number *' : 'فون نمبر *'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 ${language === 'ur' ? 'text-right font-noori' : ''}`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                    {language === 'en' ? 'Email Address *' : 'ای میل ایڈریس *'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 ${language === 'ur' ? 'text-right font-noori' : ''}`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                      {language === 'en' ? 'Department *' : 'شعبہ *'}
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 ${language === 'ur' ? 'font-noori text-right' : ''}`}
                    >
                      {departments.map((dept) => (
                        <option key={dept.value} value={dept.value}>
                          {dept.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                      {language === 'en' ? 'Subject *' : 'موضوع *'}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 ${language === 'ur' ? 'font-noori text-right' : ''}`}
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
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                    {language === 'en' ? 'Detailed Message *' : 'تفصیلی پیغام *'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 ${language === 'ur' ? 'text-right font-noori' : ''}`}
                    placeholder={language === 'en' ? 'Please provide detailed information about your inquiry or concern...' : 'براہ کرم اپنے استفسار یا خدشے کے بارے میں تفصیلی معلومات فراہم کریں...'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg ${language === 'ur' ? 'font-noori flex-row-reverse space-x-reverse' : ''}`}
                >
                  <Send className="w-5 h-5" />
                  <span>{language === 'en' ? 'Send Message' : 'پیغام بھیجیں'}</span>
                </button>
              </form>
            </div>

            {/* Additional Information & FAQ */}
            <div className="space-y-8">
              {/* Office Location */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className={`text-2xl font-bold text-gray-900 mb-6 ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                  {language === 'en' ? 'Visit Our Office' : 'ہمارے دفتر کا دورہ کریں'}
                </h3>

                {/* Embedded Google Map */}
                <div className="rounded-lg overflow-hidden h-72 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d120671.68281947436!2d72.84791577991847!3d19.06417340743695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7c66c924bcbc5%3A0xace3d410131278!2sGovandi%20Slums%2C%20Govandi%20West%2C%20Kamala%20Nagar%2C%20Shivaji%20Nagar%2C%20Mumbai%2C%20Maharashtra%20400043!3m2!1d19.0641917!2d72.9303175!5e0!3m2!1sen!2sin!4v1750663182595!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="space-y-3">
                  <p className={`text-gray-700 font-semibold ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                    Tanzeem Ulma Ahle Sunnat Wal Jamaat
                  </p>
                  <p className={`text-gray-600 ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                    {language === 'en'
                      ? 'Kamla Raman Nagar, Behind Saibaba Mandir, Near Rickshaw Stand, Eidgah Maidan, Baiganwadi, Govandi, Mumbai - 400043.'
                      : 'کملہ رمن نگر، سائی بابا مندر کے پیچھے، رکشہ اسٹینڈ کے قریب، عیدگاہ میدان، بیگن واڑی، گوونڈی، ممبئی - 400043۔'}
                  </p>
                  <div className="pt-4 border-t">
                    <p className={`text-sm text-gray-500 ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                      {language === 'en'
                        ? 'Our office is easily accessible by public transport. Visitors are welcome during office hours.'
                        : 'ہمارا دفتر پبلک ٹرانسپورٹ سے آسانی سے پہنچا جا سکتا ہے۔ دفتری اوقات میں زائرین کا خیرمقدم ہے۔'}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-emerald-50 rounded-2xl p-8"
              >
                <h3 className={`text-2xl font-bold text-emerald-800 mb-6 ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                  {language === 'en' ? 'Frequently Asked Questions' : 'اکثر پوچھے جانے والے سوالات'}
                </h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-lg p-6 shadow-sm"
                    >
                      <h4 className={`text-lg font-semibold text-gray-900 mb-3 ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                        {faq.question}
                      </h4>
                      <p className={`text-gray-600 leading-relaxed ${language === 'ur' ? 'font-noori text-right' : ''}`}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;