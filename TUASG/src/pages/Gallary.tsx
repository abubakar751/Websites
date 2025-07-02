import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface GalleryItem {
  src: string;
  title: {
    en: string;
    ur: string;
  };
  description: {
    en: string;
    ur: string;
  };
  height: number; // Relative height for masonry effect (1-3)
}

const galleryItems: GalleryItem[] = [
  {
    src: '/gallery/1.jpg',
    title: {
      en: 'Tanzeem Introduction',
      ur: 'تعارف تنظیم',
    },
    description: {
      en: 'Tanzeem Ulma Ahle Sunnat is a non-political, religious reformative group.',
      ur: 'تنظیم علماء اہل سنت ایک غیر سیاسی، دینی و اصلاحی تنظیم ہے۔',
    },
    height: 2
  },
  {
    src: '/gallery/2.jpg',
    title: {
      en: 'Ulama Services',
      ur: 'علماء کی خدمات',
    },
    description: {
      en: 'This organization is active in social welfare work.',
      ur: 'یہ تنظیم معاشرتی فلاح و بہبود میں سرگرم ہے۔',
    },
    height: 1
  },
  {
    src: '/gallery/3.jpg',
    title: {
      en: 'Darul Qaza System',
      ur: 'دار القضاء',
    },
    description: {
      en: 'Judicial services provided for community dispute resolution.',
      ur: 'تنازعات کے حل کے لیے دار القضاء کا نظام موجود ہے۔',
    },
    height: 3
  },
  {
    src: '/gallery/4.jpg',
    title: {
      en: 'Religious Education',
      ur: 'مدارس کا قیام',
    },
    description: {
      en: 'Madaris established for Islamic education and character building.',
      ur: 'تعلیمِ دین کے لیے مختلف مدارس قائم کیے گئے ہیں۔',
    },
    height: 2
  },
  {
    src: '/gallery/5.jpg',
    title: {
      en: 'Community Service',
      ur: 'سماجی خدمات',
    },
    description: {
      en: 'Helping those in need through various community programs.',
      ur: 'مختلف سماجی پروگراموں کے ذریعے ضرورت مندوں کی مدد۔',
    },
    height: 1
  },
  {
    src: '/gallery/6.jpg',
    title: {
      en: 'Islamic Lectures',
      ur: 'دینی لیکچرز',
    },
    description: {
      en: 'Weekly lectures on Islamic teachings and practices.',
      ur: 'اسلامی تعلیمات اور طریقوں پر ہفتہ وار لیکچرز۔',
    },
    height: 2
  }
];

const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Calculate the column spans based on height
  const getRowSpan = (height: number): string => {
    switch(height) {
      case 1: return 'row-span-1';
      case 2: return 'row-span-2';
      case 3: return 'row-span-3';
      default: return 'row-span-2';
    }
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold text-center mb-12 ${language === 'ur' ? 'text-right font-urdu' : ''} text-emerald-700 dark:text-emerald-400`}
        >
          {language === 'ur' ? 'ہماری گیلری' : 'Our Gallery'}
        </motion.h2>

        {/* Pinterest-style masonry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[10px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden shadow-lg ${getRowSpan(item.height)}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.src}
                alt={item.title[language] || item.title.en}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-white text-lg font-bold mb-1">
                  {item.title[language] || item.title.en}
                </h3>
                <p className="text-gray-200 text-sm">
                  {item.description[language] || item.description.en}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;