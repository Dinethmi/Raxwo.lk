import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ 
  onExploreClick, 
  onExploreProducts,
  onOpenSaleModal,
  theme = 'dark',
  lang = 'en'
}) {
  const isDark = theme === 'dark';

  const handleCtaClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else if (onExploreProducts) {
      onExploreProducts();
    } else {
      const el = document.getElementById('solutions') || document.getElementById('about-raxwo');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      
      {/* ========================================================
          1. TOP HERO SECTION (Deep Midnight Violet / Navy)
          Matching media_1791915432625_6bddae32.png
         ======================================================== */}
      <section className="relative w-full bg-[#0c0827] text-white pt-12 pb-24 md:pt-16 md:pb-36 px-6 sm:px-10 lg:px-16 xl:px-20 overflow-hidden">
        
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Badge: Enter The Digital World */}
          <div className="inline-block px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wide text-slate-200 bg-white/10 border border-white/15 backdrop-blur-md mb-6 shadow-sm">
            Enter The Digital World
          </div>

          {/* Main Title: Custom Software Development in Sri Lanka & Worldwide */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.25] max-w-3xl">
            Custom Software Development in Sri Lanka &amp; Worldwide
          </h1>

          {/* Brand Accent: Raxwo */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black text-[#0094ff] tracking-tight mt-1 mb-4">
            Raxwo
          </h2>

          {/* Subtitle / Paragraph */}
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            raxwo is a software development company in sri lanka building custom software, websites, web applications, mobile apps and AI-powered digital solutions for businesses locally and worldwide. We turn business ideas into scalable, secure and high-performing digital products designed to help your business grow.
          </p>

          {/* CTA Button: What We Do ! */}
          <button
            onClick={handleCtaClick}
            className="px-7 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            What We Do !
          </button>

        </div>

        {/* Downward Angled V-Shape Chevron Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg 
            viewBox="0 0 1200 80" 
            preserveAspectRatio="none" 
            className={`w-full h-10 sm:h-14 md:h-20 block transition-colors duration-300 ${
              isDark ? 'fill-[#080b18]' : 'fill-white'
            }`}
          >
            <path d="M0,0 L600,60 L1200,0 L1200,80 L0,80 Z"></path>
          </svg>
        </div>

      </section>

      {/* ========================================================
          2. ABOUT RAXWO SECTION (Adapts gracefully in Dark/Light)
          Matching media_1791915432625_6bddae32.png
         ======================================================== */}
      <section 
        id="about-raxwo" 
        className={`w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10 transition-colors duration-300 ${
          isDark 
            ? 'bg-[#080b18] text-white border-b border-slate-800/80' 
            : 'bg-white text-slate-900 border-b border-slate-100'
        }`}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Left Column: Team Office Photo */}
          <div className="md:col-span-5 flex justify-center">
            <div className={`relative w-full max-w-md overflow-hidden rounded-2xl shadow-xl border group ${
              isDark ? 'border-slate-800 shadow-black/60' : 'border-slate-100'
            }`}>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80" 
                alt="Raxwo Software Development Team" 
                className="w-full h-[260px] sm:h-[310px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right Column: About Raxwo Content */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            
            {/* Badge: Our Company */}
            <span className={`inline-block px-3 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase mb-3 shadow-sm ${
              isDark 
                ? 'bg-cyan-950/70 border border-cyan-800/50 text-cyan-300' 
                : 'bg-[#0c0827] text-white'
            }`}>
              Our Company
            </span>

            {/* Title Line 1: About Raxwo */}
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              About Raxwo
            </h2>

            {/* Title Line 2: Global Software & Digital Solutions */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0084ff] tracking-tight leading-tight mt-1 mb-4">
              Global Software &amp; Digital Solutions
            </h3>

            {/* Paragraph */}
            <p className={`text-xs sm:text-sm md:text-base leading-relaxed font-normal mb-6 max-w-xl ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              At Raxwo Pvt Ltd, we specialize in custom software development, web solutions, and digital marketing services. Our mission is to empower businesses worldwide with innovative, reliable, and scalable digital solutions that drive growth and efficiency.
            </p>

            {/* Explore Solutions Button */}
            <button
              onClick={handleCtaClick}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all flex items-center gap-2 cursor-pointer hover:gap-3"
            >
              <span>Explore ERP Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </section>

    </div>
  );
}
