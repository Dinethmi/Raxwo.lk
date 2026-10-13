import React from 'react';
import { getTranslation } from '../i18n/translations';

export default function Footer({ theme = 'dark', onRouteChange, lang = 'en' }) {
  const t = (k) => getTranslation(lang, k);
  const handleNav = (route, hash) => {
    if (onRouteChange) {
      onRouteChange(route);
    }
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <footer className="relative w-full bg-[#060813] text-white pt-16 pb-10 px-6 sm:px-10 lg:px-16 xl:px-20 overflow-hidden font-sans">
      
      {/* Subtle World Map Silhouette Vector Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.08) 0%, transparent 70%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500' fill='%231e293b' opacity='0.35'%3E%3Cpath d='M150,120 Q170,100 200,110 T250,140 T300,130 T280,180 T220,200 T180,220 T140,180 Z' /%3E%3Cpath d='M230,260 Q260,250 280,290 T270,360 T240,410 T210,380 T215,310 Z' /%3E%3Cpath d='M470,110 Q520,90 560,110 T600,140 T570,170 T500,160 Z' /%3E%3Cpath d='M480,190 Q530,180 570,220 T580,310 T540,380 T500,360 T460,280 T465,220 Z' /%3E%3Cpath d='M640,90 Q720,70 820,90 T900,140 T880,200 T800,210 T720,180 T650,150 Z' /%3E%3Cpath d='M780,290 Q850,280 880,330 T850,390 T770,370 T750,320 Z' /%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* 4 Columns Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 pb-14">
          
          {/* Column 1: Brand Logo & Contact */}
          <div className="flex flex-col space-y-5">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => onRouteChange && onRouteChange('home')}
                className="text-left focus:outline-none cursor-pointer group"
              >
                <img 
                  src="/raxwo-logo.png" 
                  alt="RAXWO - NEXT LEVEL TECH" 
                  className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" 
                />
              </button>
            </div>

            {/* Head Office */}
            <div className="space-y-1 text-sm pt-2">
              <span className="text-[#38bdf8] font-bold block text-sm">
                {t('headOffice')}
              </span>
              <span className="text-white font-medium block">
                {t('headOfficeLocation')}
              </span>
            </div>

            {/* Contact */}
            <div className="space-y-1 text-sm">
              <span className="text-[#38bdf8] font-bold block text-sm">
                {t('contactLabel')}
              </span>
              <a 
                href="tel:+94743573333" 
                className="text-white hover:text-cyan-400 transition-colors font-medium block"
              >
                +94 74 357 3333
              </a>
            </div>

            {/* Social Icons (5 Cyan/Blue Circular Buttons) */}
            <div className="flex items-center gap-2.5 pt-2">
              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#0095ff] hover:bg-[#0080e0] flex items-center justify-center text-white transition-transform hover:scale-110 shadow-md shadow-blue-500/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#0095ff] hover:bg-[#0080e0] flex items-center justify-center text-white transition-transform hover:scale-110 shadow-md shadow-blue-500/20"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#0095ff] hover:bg-[#0080e0] flex items-center justify-center text-white transition-transform hover:scale-110 shadow-md shadow-blue-500/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#0095ff] hover:bg-[#0080e0] flex items-center justify-center text-white transition-transform hover:scale-110 shadow-md shadow-blue-500/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.761 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full bg-[#0095ff] hover:bg-[#0080e0] flex items-center justify-center text-white transition-transform hover:scale-110 shadow-md shadow-blue-500/20"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48 6.3 6.3 0 0 0 1.86-4.49v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.86-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div className="space-y-4">
            <h4 className="text-[#38bdf8] font-bold text-lg tracking-wide">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="hover:text-[#38bdf8] transition-colors cursor-pointer text-left"
                >
                  {t('home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-[#38bdf8] transition-colors cursor-pointer text-left"
                >
                  {t('whoWeAre')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="hover:text-[#38bdf8] transition-colors cursor-pointer text-left"
                >
                  {t('contact')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('support')} 
                  className="hover:text-[#38bdf8] transition-colors cursor-pointer text-left"
                >
                  {t('faqs')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-[#38bdf8] transition-colors cursor-pointer text-left"
                >
                  {t('careers')}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-[#38bdf8] font-bold text-lg tracking-wide">
              {t('services')}
            </h4>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>
                <button 
                  onClick={() => handleNav('home', '#solutions')} 
                  className="hover:text-[#38bdf8] transition-colors cursor-pointer text-left"
                >
                  {t('allServices')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('products')} 
                  className="hover:text-[#38bdf8] transition-colors cursor-pointer text-left"
                >
                  {t('devHub')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('customize')} 
                  className="hover:text-[#38bdf8] transition-colors cursor-pointer text-left"
                >
                  {t('designStudio')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('home', '#solutions')} 
                  className="hover:text-[#38bdf8] transition-colors cursor-pointer text-left"
                >
                  {t('marketingLab')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('products')} 
                  className="hover:text-[#38bdf8] transition-colors cursor-pointer text-left"
                >
                  {t('servicesProducts')}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Products */}
          <div className="space-y-4">
            <h4 className="text-[#38bdf8] font-bold text-lg tracking-wide">
              {t('products')}
            </h4>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>
                <button 
                  onClick={() => handleNav('products')} 
                  className="hover:text-[#38bdf8] transition-colors cursor-pointer text-left font-medium"
                >
                  {lang === 'si' ? 'මෘදුකාංග නිෂ්පාදන' : lang === 'ta' ? 'மென்பொருள் தயாரிப்புகள்' : 'Software Products'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('products')} 
                  className="hover:text-[#38bdf8] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>{lang === 'si' ? 'ජංගම දුරකථන වෙළඳසැල් ERP' : lang === 'ta' ? 'மொபைல் கடை ERP' : 'Mobile Shop ERP'}</span>
                  <span>📱</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('products')} 
                  className="hover:text-[#38bdf8] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>{lang === 'si' ? 'රූපලාවණ්‍යාගාර කළමනාකරණ ERP' : lang === 'ta' ? 'சலூன் மேலாண்மை ERP' : 'Salon Management ERP'}</span>
                  <span>💇</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('products')} 
                  className="hover:text-[#38bdf8] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>{lang === 'si' ? 'ආපනශාලා සහ හෝටල් ERP' : lang === 'ta' ? 'உணவகம் & ஹோட்டல் ERP' : 'Restaurant & Hotel ERP'}</span>
                  <span>🍽️</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('products')} 
                  className="hover:text-[#38bdf8] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>{lang === 'si' ? 'දෘඩාංග සහ බෙදාහැරීම් ERP' : lang === 'ta' ? 'வன்பொருள் & விநியோக ERP' : 'Hardware & Distribution ERP'}</span>
                  <span>🏗️</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Dotted Divider Line (Exact match to image) */}
        <div className="w-full border-t border-dotted border-slate-700/80 mb-6"></div>

        {/* Bottom Bar: Copyright & Privacy / Terms */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-400 gap-3">
          <p>©2026 – Raxwo (Pvt) Ltd. | {t('allRightsReserved')}</p>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => handleNav('about')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t('privacyPolicy')}
            </button>
            <span className="text-slate-600">|</span>
            <button 
              onClick={() => handleNav('about')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t('termsConditions')}
            </button>
          </div>
        </div>

      </div>

      {/* Floating Bottom-Right WhatsApp Button (Exact match to image) */}
      <a 
        href="https://wa.me/94743573333?text=Hi%20Raxwo%2C%20I%20would%20like%20to%20inquire%20about%20your%20ERP%20solutions."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sm:rounded-3xl bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center text-white shadow-2xl shadow-green-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

    </footer>
  );
}
