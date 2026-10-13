import React from 'react';
import { ShieldCheck, ArrowRight, Play, CheckCircle } from 'lucide-react';
import HeroDashboardMockup from './HeroDashboardMockup';
import { getTranslation } from '../i18n/translations';

export default function Hero({ 
  stats, 
  currency, 
  currencyRates, 
  onNewSaleClick, 
  onExploreProducts, 
  onHowItWorks,
  theme = 'dark',
  lang = 'en'
}) {
  const isDark = theme === 'dark';
  const t = (k) => getTranslation(lang, k);

  return (
    <section id="home" className="relative w-full pt-8 pb-16 md:pt-14 md:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-5 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center z-10 py-6 md:py-12">
        
        {/* Badge: TRUSTED BUSINESS SOFTWARE */}
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm ${
          isDark 
            ? 'bg-cyan-950/50 border border-cyan-800/50 text-cyan-400' 
            : 'bg-cyan-100/90 border border-cyan-300 text-cyan-800'
        }`}>
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>{t('trustedSoftwareBadge')}</span>
        </div>

        {/* Main Title: Ready-Made ERP Solutions for Every Business */}
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[40px] font-extrabold tracking-tight leading-[1.2] mb-6 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          {t('heroTitlePart1')}{' '}
          <span className="text-[#20b2f5]">
            {t('heroTitlePart2')} {t('heroTitlePart3')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-8 ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {t('heroSubtitle')}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 w-full sm:w-auto">
          
          {/* Primary CTA: Explore Products */}
          <a
            href="#products"
            onClick={onExploreProducts}
            className="relative group overflow-hidden flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto cursor-pointer"
          >
            <span>{t('exploreProducts')}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          {/* Secondary CTA: How It Works */}
          <button
            onClick={onHowItWorks}
            className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto cursor-pointer ${
              isDark 
                ? 'text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/80 hover:border-slate-500' 
                : 'text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{t('howItWorks')}</span>
          </button>
        </div>

        {/* Checkmark Features list */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
          <div className={`flex items-center gap-2 text-xs sm:text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
            <span>{t('oneTimePayment')}</span>
          </div>

          <div className={`flex items-center gap-2 text-xs sm:text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
            <span>{t('sourceCodeIncluded')}</span>
          </div>

          <div className={`flex items-center gap-2 text-xs sm:text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
            <span>{t('friendlySupport')}</span>
          </div>
        </div>

      </div>

    </section>
  );
}
