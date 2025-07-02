import React from 'react';
import { motion } from 'framer-motion';
import { 
  Landmark, 
  Book, 
  PlusCircle, 
  Scale, 
  Smartphone,
  Heart
} from 'lucide-react';

const Needs = ({ language = 'en' }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
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

        {/* Main Content Grid */}
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
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-center mb-4">
                  <Heart className="w-10 h-10 mx-auto text-red-600" />
                  <h4 className={`font-bold text-lg mt-2 ${language === 'ur' ? 'urdu-font' : ''}`}>
                    {language === 'en' ? 'Online Donation' : 'آن لائن عطیہ'}
                  </h4>
                </div>
                <div className="text-center">
                  <p className={`text-gray-700 mb-4 ${language === 'ur' ? 'urdu-font' : ''}`}>
                    {language === 'en'
                      ? 'Make a secure online donation through our website'
                      : 'ہماری ویب سائٹ کے ذریعے محفوظ آن لائن عطیہ دیں'}
                  </p>
                  <button className="w-full px-4 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition flex items-center justify-center">
                    <span>{language === 'en' ? 'Donate Now' : 'ابھی عطیہ کریں'}</span>
                    <Heart className={`w-5 h-5 ${language === 'ur' ? 'mr-2' : 'ml-2'}`} />
                  </button>
                </div>
              </div>
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
          <button className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg">
            {language === 'en' ? 'Support Our Cause' : 'ہمارے مقصد کی حمایت کریں'}
            <Heart className={`w-5 h-5 ${language === 'ur' ? 'mr-2' : 'ml-2'}`} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Needs;