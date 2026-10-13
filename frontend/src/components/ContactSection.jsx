import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { getTranslation } from '../i18n/translations';

export default function ContactSection({ 
  onSubmitInquiry, 
  isSubmitting, 
  contactSuccess, 
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
      isDark ? 'border-slate-800/80' : 'border-slate-200'
    }`}>
      
      {/* Background radial light */}
      <div className={`absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-cyan-500/10' : 'bg-blue-100/60'
      }`}></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Contact details & Support channels (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3 border shadow-sm backdrop-blur-md bg-emerald-500/10 text-emerald-500 border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>
                {lang === 'si' ? 'ශ්‍රී ලාංකීය ඉංජිනේරු මධ්‍යස්ථානය' : lang === 'ta' ? 'இலங்கை தொழில்நுட்பக் குழு' : 'SRI LANKAN TECH DESK ONLINE'}
              </span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              {t('letsTalkTitle')}
            </h2>
            <p className={`text-sm mt-2.5 leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {t('letsTalkSubtitle')}
            </p>
          </div>

          <div className="space-y-3.5">
            {/* WhatsApp & Hotline Card */}
            <div className={`p-5 rounded-2xl border transition-all ${
              isDark ? 'bg-[#0a0f24]/90 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      WhatsApp &amp; Direct Phone
                    </span>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500">
                      Active
                    </span>
                  </div>
                  <span className={`text-base font-black tracking-tight block mt-0.5 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    +94 77 123 4567 / +94 11 234 5678
                  </span>
                  <div className="flex items-center gap-3 mt-3">
                    <a
                      href="https://wa.me/94771234567?text=Hello%20Raxwo%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20software."
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Chat</span>
                    </a>
                    <a
                      href="tel:+94112345678"
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        isDark ? 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700' : 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      Call Office
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className={`p-4 rounded-2xl border transition-all ${
              isDark ? 'bg-[#0a0f24]/90 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs block font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Email Inquiries &amp; RFP
                  </span>
                  <span className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    sales@raxwo.lk / support@raxwo.lk
                  </span>
                </div>
              </div>
            </div>

            {/* Head Office Card */}
            <div className={`p-4 rounded-2xl border transition-all ${
              isDark ? 'bg-[#0a0f24]/90 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs block font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Colombo Hardware Test Lab &amp; HQ
                  </span>
                  <span className={`text-xs font-semibold leading-relaxed block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Level 05, Raxwo Tech Tower, Galle Road, Colombo 03, Sri Lanka
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation & Request Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className={`p-7 sm:p-9 rounded-3xl border shadow-2xl relative ${
            isDark ? 'bg-[#0a0f24]/95 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <h3 className={`text-xl sm:text-2xl font-black mb-1.5 ${isDark ? 'text-white' : 'text-slate-950'}`}>
              Request Live ERP Demo &amp; Quotation
            </h3>
            <p className={`text-xs sm:text-sm mb-6 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Fill in your contact info. We will set up a customized live demo with your shop's item categories and hardware within 15 minutes.
            </p>

            {contactSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col items-center text-center gap-3">
                <CheckCircle className="w-12 h-12 text-emerald-400" />
                <h4 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>Inquiry Received Successfully!</h4>
                <p className={`text-xs sm:text-sm max-w-md ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {inquiryResult?.message || "Thank you! Our technical specialist will contact your phone number within 15 minutes."}
                </p>
                <span className="text-xs text-emerald-500 font-mono font-bold mt-1">
                  Reference: {inquiryResult?.inquiryId}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`text-xs font-bold block mb-1.5 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                      {t('yourName')} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nimal Perera / Perera Stores"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm font-medium border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        isDark 
                          ? 'bg-slate-900/90 border-slate-700 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-950 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`text-xs font-bold block mb-1.5 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                      {t('phoneWhatsApp')} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 077 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm font-medium border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        isDark 
                          ? 'bg-slate-900/90 border-slate-700 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-950 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`text-xs font-bold block mb-1.5 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                      {t('emailAddress')}
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. nimal@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm font-medium border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        isDark 
                          ? 'bg-slate-900/90 border-slate-700 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-950 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`text-xs font-bold block mb-1.5 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                      {t('selectSolution')}
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm font-semibold border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer ${
                        isDark 
                          ? 'bg-slate-900 border-slate-700 text-white' 
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="Retail & POS" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>Retail Store &amp; POS (LankaPOS)</option>
                      <option value="Mobile Shop & Repair" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>Mobile Shop &amp; Repair (Mobixa)</option>
                      <option value="Wholesale & Van Sale" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>Wholesale &amp; Van Distribution (Exxplan)</option>
                      <option value="Restaurant & Cafe" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>Restaurant &amp; Cafe POS (DineFlow)</option>
                      <option value="Pharmacy & Healthcare" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>Pharmacy &amp; Clinic (PharmaCare)</option>
                      <option value="Garment & Apparel" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>Garment &amp; Apparel (StitchERP)</option>
                      <option value="Automotive & Spare Parts" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>Auto Spares &amp; Garage (GearMaster)</option>
                      <option value="Hotel & Resort" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>Hotel &amp; Resort PMS (VillaStay)</option>
                      <option value="Hardware & Paint" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>Hardware &amp; Construction (BuildTrack)</option>
                      <option value="Fitness & Gym" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>Fitness &amp; Biometrics (Gymora)</option>
                      <option value="Other Custom ERP" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>Custom Tailored ERP Architecture</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`text-xs font-bold block mb-1.5 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                    {t('yourMessage')}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={lang === 'si' ? 'ඔබගේ අවශ්‍යතාවය, පරිගණක ප්‍රමාණය හෝ ශාඛා ගණන මෙහි සඳහන් කරන්න...' : 'Tell us about how many branches, thermal printers, barcode scanners, or special features you need...'}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm font-medium border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${
                      isDark 
                        ? 'bg-slate-900/90 border-slate-700 text-white placeholder-slate-500' 
                        : 'bg-white border-slate-300 text-slate-950 placeholder-slate-400'
                    }`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-black text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <Clock className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{isSubmitting ? (lang === 'si' ? 'යොමු වෙමින් පවතී...' : 'Submitting to Engineers...') : t('sendInquiry')}</span>
                </button>

                <div className="flex items-center justify-between text-[11px] pt-1">
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    🔒 Direct engineer response. No pushy sales calls.
                  </span>
                  <span className="text-emerald-500 font-bold">
                    Avg Response: 12 Mins
                  </span>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
}
