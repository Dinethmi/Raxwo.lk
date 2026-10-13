import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import { getTranslation } from '../i18n/translations';

export default function ContactSection({ 
  onSubmitInquiry, 
  isSubmitting, 
  submitSuccess, 
  inquiryResult,
  theme = 'dark',
  lang = 'en'
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: 'Retail & POS',
    requirements: ''
  });

  const isDark = theme === 'dark';
  const t = (k) => getTranslation(lang, k);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    onSubmitInquiry(formData);
  };

  return (
    <section id="contact" className={`relative w-full py-20 px-6 sm:px-10 lg:px-16 xl:px-20 border-t ${
      isDark ? 'border-slate-800/60' : 'border-slate-200'
    }`}>
      
      {/* Background radial light */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Contact details & Support channels */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <span className={`text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-3 inline-block ${
              isDark 
                ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/40' 
                : 'text-cyan-800 bg-cyan-100 border border-cyan-300'
            }`}>
              {lang === 'si' ? 'අපගේ ශ්‍රී ලාංකීය ඉංජිනේරු කණ්ඩායම අමතන්න' : lang === 'ta' ? 'எங்கள் இலங்கை பொறியாளர் குழுவைத் தொடர்பு கொள்ளவும்' : 'TALK WITH OUR SRI LANKAN TECH TEAM'}
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {t('letsTalkTitle')}
            </h2>
            <p className={`text-sm mt-3 leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {t('letsTalkSubtitle')}
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <div className={`flex items-start gap-4 p-4 rounded-2xl border transition-colors ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                isDark ? 'bg-blue-950/80 border border-blue-800/60 text-blue-400' : 'bg-blue-100 border border-blue-200 text-blue-700'
              }`}>
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-xs block font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Direct Hotline / WhatsApp
                </span>
                <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  +94 77 123 4567 / +94 11 234 5678
                </span>
                <span className="text-[11px] text-emerald-500 font-medium block mt-0.5">
                  ● Available Mon - Sat (8:30 AM - 7:00 PM)
                </span>
              </div>
            </div>

            <div className={`flex items-start gap-4 p-4 rounded-2xl border transition-colors ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                isDark ? 'bg-purple-950/80 border border-purple-800/60 text-purple-400' : 'bg-purple-100 border border-purple-200 text-purple-700'
              }`}>
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-xs block font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Email Inquiries
                </span>
                <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  support@raxwo.lk / sales@raxwo.lk
                </span>
              </div>
            </div>

            <div className={`flex items-start gap-4 p-4 rounded-2xl border transition-colors ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                isDark ? 'bg-cyan-950/80 border border-cyan-800/60 text-cyan-400' : 'bg-cyan-100 border border-cyan-200 text-cyan-700'
              }`}>
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-xs block font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Head Office
                </span>
                <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Level 05, Raxwo Tech Tower, Galle Road, Colombo 03, Sri Lanka
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation & Request Form */}
        <div className="lg:col-span-7">
          <div className={`p-7 sm:p-10 rounded-3xl border backdrop-blur-xl shadow-2xl relative ${
            isDark ? 'bg-[#0b1022]/90 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Request Live ERP Demo & Quotation
            </h3>
            <p className={`text-xs sm:text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Fill in your details and we will schedule an online or on-site demo tailored to your exact store or factory.
            </p>

            {submitSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 flex flex-col items-center text-center gap-3">
                <CheckCircle className="w-12 h-12 text-emerald-400" />
                <h4 className="text-base font-bold text-white">Inquiry Received Successfully!</h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  {inquiryResult?.message || "Thank you! Our technical specialist will contact your phone number within 15 minutes."}
                </p>
                <span className="text-[11px] text-emerald-400 font-mono">
                  Reference: {inquiryResult?.inquiryId}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`text-xs font-semibold block mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {t('yourName')} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nimal Perera / Perera Stores"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-colors ${
                        isDark 
                          ? 'bg-slate-900/80 border border-slate-700/80 text-white focus:border-cyan-400' 
                          : 'bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`text-xs font-semibold block mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {t('phoneWhatsApp')} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 077 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-colors ${
                        isDark 
                          ? 'bg-slate-900/80 border border-slate-700/80 text-white focus:border-cyan-400' 
                          : 'bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-500'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`text-xs font-semibold block mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {t('emailAddress')}
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. nimal@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-colors ${
                        isDark 
                          ? 'bg-slate-900/80 border border-slate-700/80 text-white focus:border-cyan-400' 
                          : 'bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`text-xs font-semibold block mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {t('selectSolution')}
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-colors ${
                        isDark 
                          ? 'bg-slate-900/80 border border-slate-700/80 text-white focus:border-cyan-400' 
                          : 'bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-500'
                      }`}
                    >
                      <option value="Retail & POS">Retail Store & POS</option>
                      <option value="Wholesale & Van Sale">Wholesale & Van Distribution</option>
                      <option value="Restaurant & Cafe">Restaurant, Cafe & Pub</option>
                      <option value="Pharmacy & Healthcare">Pharmacy & Medical Clinic</option>
                      <option value="Garment & Apparel">Garment & Textile Factory</option>
                      <option value="Automotive & Spare Parts">Auto Spares & Garage Workshop</option>
                      <option value="Hotel & Resort">Hotel, Villa & Resort PMS</option>
                      <option value="Hardware & Paint">Hardware, Paint & Construction</option>
                      <option value="Microfinance & Lending">Micro-Finance & Leasing</option>
                      <option value="Other Custom ERP">Other Custom Business System</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`text-xs font-semibold block mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t('yourMessage')}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={lang === 'si' ? 'ඔබගේ අවශ්‍යතාවය හෝ ශාඛා ගණන මෙහි සඳහන් කරන්න...' : lang === 'ta' ? 'உங்கள் தேவைகள் அல்லது கிளைகள் பற்றி இங்கே குறிப்பிடவும்...' : 'Tell us about how many branches, thermal printers, barcode scanners, or special features you need...'}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-colors ${
                      isDark 
                        ? 'bg-slate-900/80 border border-slate-700/80 text-white focus:border-cyan-400' 
                        : 'bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-500'
                    }`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <Clock className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{isSubmitting ? (lang === 'si' ? 'යොමු වෙමින් පවතී...' : lang === 'ta' ? 'அனுப்பப்படுகிறது...' : 'Submitting Inquiry...') : t('sendInquiry')}</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
}
