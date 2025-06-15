import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ur';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.departments': 'Departments',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Tanzeem Ulma Ahle Sunnat Wal Jamaat',
    'hero.subtitle': 'Govandi',
    'hero.description': 'A religious and welfare-based organization serving the Muslim community for over 22 years with dedication to Islamic principles and community welfare.',
    'hero.cta': 'Learn More',
    
    // About Section
    'about.title': 'About the Organization',
    'about.description': 'Tanzeem Ulma Ahle Sunnat Wal Jamaat Govandi is a religious and welfare-based organization established approximately 22 years ago by concerned local scholars and Huffaz (memorizers of the Qur\'an).',
    'about.mission': 'Our Mission',
    'about.mission.1': 'Reforming the religious beliefs and practices of the public',
    'about.mission.2': 'Protecting against false ideologies',
    'about.mission.3': 'Reviving the Sunnah (Prophetic traditions)',
    'about.mission.4': 'Preventing social evils',
    'about.mission.5': 'Providing religious and educational guidance',
    
    // Departments
    'departments.title': 'Our Departments',
    'departments.darulqaza.title': 'Darul Qaza',
    'departments.darulqaza.subtitle': 'Islamic Arbitration Center',
    'departments.darulqaza.description': 'Under the supervision of the All India Muslim Personal Law Board, resolving family-related issues in light of the Qur\'an and Hadith.',
    'departments.darulqaza.cases': '1,300+ cases resolved',
    
    'departments.social.title': 'Social Reform',
    'departments.social.subtitle': 'Islah-e-Muashrah',
    'departments.social.description': 'Organizing reform programs, seminars, and workshops to combat social evils and harmful traditions.',
    
    'departments.education.title': 'Education',
    'departments.education.subtitle': 'Madrasa Qasmiya',
    'departments.education.description': 'Religious education and moral upbringing for boys and girls with comprehensive Islamic curriculum.',
    
    'departments.publications.title': 'Publications & Media',
    'departments.publications.subtitle': 'Islamic Literature',
    'departments.publications.description': 'Publishing pamphlets, booklets, and daily religious messages to guide the community.',
    
    'departments.welfare.title': 'Welfare Services',
    'departments.welfare.subtitle': 'Community Support',
    'departments.welfare.description': 'Monthly stipends for widows, orphans, students, and emergency assistance for urgent situations.',
    
    // Services
    'services.title': 'Our Services',
    'services.nikah': 'Marriage (Nikah)',
    'services.talaq': 'Divorce (Talaq)',
    'services.khula': 'Separation (Khula, Faskh-e-Nikah)',
    'services.iddah': 'Waiting period (Iddah)',
    'services.nafaqah': 'Maintenance (Nafaqah)',
    'services.wirasat': 'Inheritance (Wirasat)',
    'services.wasiyyat': 'Wills (Wasiyyat)',
    'services.hibah': 'Gifts (Hibah)',
    'services.hizanat': 'Child custody (Hizanat)',
    
    // Testimonial
    'testimonial.title': 'Endorsement',
    'testimonial.text': 'I had the honor of visiting the office of Tanzeem Ulama Ahl-e-Sunnat wal Jamaat (Mumbai) located in Govandi, upon the invitation of Maulana Badruddin Qasmi and his companions. I had the opportunity to observe their activities, especially to review the system of Darul Qaza (Islamic Arbitration Center). I was deeply pleased and realized that the organization is doing highly beneficial work and has lofty aspirations. I pray that Allah Almighty grants them success and helps them achieve their noble objectives.',
    'testimonial.author': 'Mufti Khalid Saifullah Rahmani',
    'testimonial.designation': 'General Secretary, All India Muslim Personal Law Board',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Office Hours',
    
    // Footer
    'footer.description': 'Serving the Muslim community for over 22 years with dedication to Islamic principles and community welfare.',
    'footer.quicklinks': 'Quick Links',
    'footer.departments': 'Departments',
    'footer.connect': 'Connect With Us',
  },
  ur: {
    // Navigation - Urdu
    'nav.home': 'گھر',
    'nav.about': 'تعارف',
    'nav.departments': 'شعبہ جات',
    'nav.contact': 'رابطہ',
    
    // Hero Section - Urdu
    'hero.title': 'تنظیم علماء اہل سنت والجماعت',
    'hero.subtitle': 'گووندی',
    'hero.description': 'ایک مذہبی اور فلاحی تنظیم جو 22 سال سے زیادہ عرصے سے اسلامی اصولوں اور کمیونٹی فلاح کے لیے مسلم کمیونٹی کی خدمت کر رہی ہے۔',
    'hero.cta': 'مزید جانیں',
    
    // About Section - Urdu
    'about.title': 'تنظیم کا تعارف',
    'about.description': 'تنظیم علماء اہل سنت والجماعت گووندی ایک مذہبی اور فلاحی تنظیم ہے جو تقریباً 22 سال قبل مقامی علماء اور حفاظ کرام کی جانب سے قائم کی گئی۔',
    'about.mission': 'ہمارا مشن',
    'about.mission.1': 'عوام کے مذہبی عقائد اور اعمال کی اصلاح',
    'about.mission.2': 'باطل نظریات سے تحفظ',
    'about.mission.3': 'سنت نبوی کا احیاء',
    'about.mission.4': 'سماجی برائیوں کا خاتمہ',
    'about.mission.5': 'مذہبی اور تعلیمی رہنمائی',
    
    // Departments - Urdu
    'departments.title': 'ہمارے شعبہ جات',
    'departments.darulqaza.title': 'دارالقضاء',
    'departments.darulqaza.subtitle': 'اسلامی عدالت',
    'departments.darulqaza.description': 'آل انڈیا مسلم پرسنل لاء بورڈ کی نگرانی میں سے ارسالوں سے مسلمانوں کے خاندانی مسائل جیسے : نکاح ، طلاق خلع ، فسخ نکاح ، عدت، نفقہ، وراثت ، وصیت ، ہبہ اور حضانت و وغیرہ کو قرآن و حدیث کی روشنی میں حل کر رہا ہے ۔ اب تک تقریباً ۱۳۰۰ فیملی کے مسائل حل کیے گئے ہیں ',
    'departments.darulqaza.cases': '1,300+ مقدمات حل',
    
    'departments.social.title': 'اصلاح معاشرہ',
'departments.social.subtitle': 'سماجی اصلاح',
'departments.social.description': `اصلاحی و تربیتی پروگرام: معاشرے میں پائی جانے والی برائیوں اور رسومات کو ختم کرنے کے لیے موقع محل کی مناسبت سے مساجد اور مختلف مقامات پر جلسے، سیمینارز اور ورکشاپس منعقد کیے جاتے ہیں۔

سیرت النبی ﷺ کوئز مقابلہ: اسکول کے طلبہ کو سیرت رسول ﷺ سے واقف کرانے کے لیے یہ کوئز مقابلے منعقد کیے جاتے ہیں۔`
,
    
    'departments.education.title': 'تعلیم',
    'departments.education.subtitle': 'مدرسہ قاسمیہ',
    'departments.education.description': 'جامع اسلامی نصاب کے ساتھ لڑکوں اور لڑکیوں کی مذہبی تعلیم اور اخلاقی تربیت۔',
    
    'departments.publications.title': 'اشاعات و میڈیا',
    'departments.publications.subtitle': 'اسلامی ادبیات',
    'departments.publications.description': 'کمیونٹی کی رہنمائی کے لیے پمفلٹس، کتابچے اور یومیہ مذہبی پیغامات کی اشاعت۔',
    
    'departments.welfare.title': 'فلاحی خدمات',
    'departments.welfare.subtitle': 'کمیونٹی سپورٹ',
    'departments.welfare.description': 'بیواؤں، یتیموں، طلباء کے لیے ماہانہ وظائف اور ہنگامی حالات میں فوری امداد۔',
    
    // Services - Urdu
    'services.title': 'ہماری خدمات',
    'services.nikah': 'نکاح',
    'services.talaq': 'طلاق',
    'services.khula': 'خلع، فسخ نکاح',
    'services.iddah': 'عدت',
    'services.nafaqah': 'نفقہ',
    'services.wirasat': 'وراثت',
    'services.wasiyyat': 'وصیت',
    'services.hibah': 'ہبہ',
    'services.hizanat': 'حضانت',
    
    // Testimonial - Urdu
    'testimonial.title': 'تائید',
    'testimonial.text': 'حقیر کو جناب مولانا بدرالدجی صاحب قاسمی اور ان کے رفقاء کی دعوت پر تنظیم علماء اہل سنت و الجماعت (ممبئی) کے دفتر واقع گوونڈی میں حاضر ہونے کا اور یہاں کے کاموں کو دیکھنے خاص کر دار القضاء کے نظام کا جائزہ لینے کا موقع ملا ، دل بہت خوش ہوا، اندازہ ہوا کہ بیتنظیم بہت مفید کام کر رہی ہے اور اس کے عزائم بہت بلند ہیں، دعا ہے کہ اللہ تعالیٰ کامیابی عطا فرمائے اور اس کے جلیل القدر مقاصد حاصل ہوں',
    'testimonial.author': 'مفتی خالد سیف اللہ رحمانی',
    'testimonial.designation': 'جنرل سیکرٹری، آل انڈیا مسلم پرسنل لا بورڈ',
    
    // Contact - Urdu
    'contact.title': 'رابطہ کریں',
    'contact.address': 'پتہ',
    'contact.phone': 'فون',
    'contact.email': 'ای میل',
    'contact.hours': 'دفتری اوقات',
    
    // Footer - Urdu
    'footer.description': '22 سال سے زیادہ عرصے سے اسلامی اصولوں اور کمیونٹی فلاح کے لیے مسلم کمیونٹی کی خدمت۔',
    'footer.quicklinks': 'فوری لنکس',
    'footer.departments': 'شعبہ جات',
    'footer.connect': 'ہم سے جڑیں',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};