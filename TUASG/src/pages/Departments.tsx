import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Departments = () => {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const departments = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: "from-purple-500 to-purple-700",
      title: language === 'en' ? 'Darul Qaza' : 'دار القضاء',
      subtitle: language === 'en' ? 'Islamic Justice System' : 'اسلامی نظام عدل',
      bullets: language === 'en' ? [
        'Operating under All India Muslim Personal Law Board for 17 years',
        'Resolving family matters like marriage, divorce, inheritance',
        'Solved approximately 1,300 family cases',
        'Based on Quran and Sunnah principles'
      ] : [
        'آل انڈیا مسلم پرسنل لاء بورڈ کی نگرانی میں 17 سالوں سے فعال',
        'نكاح، طلاق، خلع، فسخ نكاح، عدت، نفقه، وراثت، وصيت، حضانت کے مسائل حل',
        'تقریباً 1300 فیملی کے مسائل حل کیے گئے',
        'قرآن و حدیث کی روشنی میں فیصلے'
      ],
      stats: language === 'en' ? '1,300+ Cases Resolved' : '1300+ مقدمات حل',
      slug: 'darul-qaza'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-indigo-500 to-indigo-700",
      title: language === 'en' ? 'Moral Reform' : 'اصلاح معاشره',
      subtitle: language === 'en' ? 'Community Betterment' : 'معاشرتی بہتری',
      bullets: language === 'en' ? [
        'Reformative programs to eliminate social evils',
        'Seminars and workshops in mosques and communities',
        'Prophet\'s Seerah competitions for school students',
        'Character building initiatives'
      ] : [
        'معاشرہ کی برائیوں اور رسومات کو ختم کرنے کے پروگرام',
        'مساجد اور مختلف مقامات پر جلسے، سیمینار اور ورکشاپس',
        'سیرت النبي ﷺ كوثر مقابلے اسکول کے طلبہ کے لیے',
        'اخلاقی تربیت کے پروگرام'
      ],
      stats: language === 'en' ? 'Weekly Programs' : 'ہفتہ وار پروگرام',
      slug: 'islah-e-muashrah'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      color: "from-blue-500 to-blue-700",
      title: language === 'en' ? 'Education' : 'تعلیم',
      subtitle: language === 'en' ? 'Islamic & Modern Education' : 'اسلامی و جدید تعلیم',
      bullets: language === 'en' ? [
        'Madrasa Qasmiya for boys and girls',
        'Religious education and moral training',
        'Integrated curriculum with modern subjects',
        'Focus on character development'
      ] : [
        'مدرسہ قاسمیہ بچوں اور بچیوں کے لیے',
        'دینی تعلیم اور اصلاح و تربیت',
        'مربوط نصاب جدید مضامین کے ساتھ',
        'کردار سازی پر خصوصی توجہ'
      ],
      stats: language === 'en' ? '888 Students' : '888 طلباء',
      slug: 'education'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      color: "from-teal-500 to-teal-700",
      title: language === 'en' ? 'Media & Publications' : 'نشر واشاعت',
      subtitle: language === 'en' ? 'Spreading Islamic Knowledge' : 'اسلامی علم کی اشاعت',
      bullets: language === 'en' ? [
        'Pamphlets and booklets on various topics',
        'Daily Islamic messages via mobile',
        'Authentic Islamic content distribution',
        'Countering misinformation campaigns'
      ] : [
        'مختلف موضوعات پر کتابچے اور پمفلٹ',
        'روزانہ موبائل پر دینی پیغامات',
        'معتبر اسلامی مواد کی تقسیم',
        'غلط معلومات کے خلاف مہم'
      ],
      stats: language === 'en' ? 'Daily Messages' : 'روزانہ پیغامات',
      slug: 'publicationmedia'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-red-500 to-red-700",
      title: language === 'en' ? 'Welfare' : 'خدمت خلق',
      subtitle: language === 'en' ? 'Social Services' : 'سماجی خدمات',
      bullets: language === 'en' ? [
        'Monthly support for widows and orphans',
        'Emergency aid during crises',
        'Financial assistance to needy students',
        'Community relief programs'
      ] : [
        'بيوا اور یتیموں کو ماہانہ امداد',
        'ہنگامی حالات میں راحت رسانی',
        'ضرورت مند طلباء کی مالی معاونت',
        'کمیونٹی ریلیف پروگرام'
      ],
      stats: language === 'en' ? '500+ Families' : '500+ خاندان',
      slug: 'welfare'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white font-noori-nastaliq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            {language === 'en' ? 'Our Departments' : 'شعبہ جات'}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {language === 'en'
              ? 'The organization has various departments working for community welfare'
              : 'تنظیم کے مختلف شعبے ہیں، تمام شعبوں کا تعارف مختصراً درج ذیل ہے'}
          </motion.p>
        </motion.div>

        {/* Departments Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100">
                {/* Icon Header */}
                <div className={`bg-gradient-to-r ${dept.color} p-6 relative`}>
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-white">
                    {dept.icon}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white bg-opacity-30 px-3 py-1 rounded-full">
                    <span className="text-white font-medium text-sm">{dept.stats}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {dept.title}
                    </h3>
                    <h4 className="text-emerald-600 font-semibold">
                      {dept.subtitle}
                    </h4>
                  </div>

                  <ul className="mb-6 space-y-2">
                    {dept.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-emerald-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700 leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <Link
                      to={`/${dept.slug}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 group-hover:shadow-md"
                    >
                      {language === 'en' ? 'Explore More' : 'مزید دیکھیں'}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/departments"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {language === 'en' ? 'View All Departments' : 'تمام شعبہ جات دیکھیں'}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Departments;