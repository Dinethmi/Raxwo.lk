import React, { useState } from 'react';
import { Search, Play, ArrowRight, Sparkles, Layers, Check, Zap, X } from 'lucide-react';
import { getTranslation } from '../i18n/translations';

export default function ProductsPage({ 
  products = [], 
  currency = 'LKR', 
  currencyRates, 
  onSelectProduct,
  onOpenSandbox,
  onOpenCompare,
  theme = 'dark',
  lang = 'en'
}) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTech, setActiveTech] = useState('All');
  const [activePriceTier, setActivePriceTier] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [compareList, setCompareList] = useState([]);

  const isDark = theme === 'dark';
  const t = (k) => getTranslation(lang, k);

  const categories = [
    'All',
    'Retail',
    'Hospitality',
    'Education',
    'Healthcare',
    'Construction',
    'Transport',
    'Business Services'
  ];

  const techStacks = [
    'All',
    'React',
    'Node.js',
    'Electron',
    'PostgreSQL',
    'Vue.js',
    'MySQL',
    'SQLite'
  ];

  const priceTiers = [
    { label: 'All Prices', value: 'All' },
    { label: '< LKR 70,000', value: 'under70' },
    { label: 'LKR 70K – 90K', value: '70to90' },
    { label: '> LKR 90,000', value: 'above90' }
  ];

  // Price converter
  const formatPrice = (lkrAmount) => {
    if (!currencyRates || !currencyRates[currency]) {
      return `LKR ${Number(lkrAmount).toLocaleString()}`;
    }
    const rateInfo = currencyRates[currency];
    const converted = Math.round(lkrAmount * rateInfo.rate);
    return `${rateInfo.symbol} ${converted.toLocaleString()}`;
  };

  // Toggle comparison item
  const toggleCompare = (product) => {
    if (compareList.some(p => p.id === product.id)) {
      setCompareList(compareList.filter(p => p.id !== product.id));
    } else {
      if (compareList.length >= 3) {
        alert('You can compare a maximum of 3 ERP systems at a time.');
        return;
      }
      setCompareList([...compareList, product]);
    }
  };

  const filteredProducts = products.filter(p => {
    // Category match
    const matchesCat = activeCategory === 'All' || 
      p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
      (p.badge && p.badge.toLowerCase().includes(activeCategory.toLowerCase()));
    
    // Tech Stack match
    const matchesTech = activeTech === 'All' ||
      (p.techStack && p.techStack.some(t => t.toLowerCase() === activeTech.toLowerCase()));

    // Price Tier match
    let matchesPrice = true;
    if (activePriceTier === 'under70') matchesPrice = p.priceLKR < 70000;
    else if (activePriceTier === '70to90') matchesPrice = p.priceLKR >= 70000 && p.priceLKR <= 90000;
    else if (activePriceTier === 'above90') matchesPrice = p.priceLKR > 90000;

    // Search query match
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.subtitle && p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCat && matchesTech && matchesPrice && matchesSearch;
  });

  // App Icons generator
  const renderProductIcon = (product) => {
    if (product.id === 'mobixa') {
      return (
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-700 via-indigo-900 to-slate-900 border border-blue-500/40 flex items-center justify-center p-2.5 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          <svg className="w-full h-full text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="3" />
            <path d="M12 18h.01" />
            <path d="M9 6h6" />
            <path d="M8 12l2 2 4-4" stroke="#38bdf8" strokeWidth="2.5" />
          </svg>
        </div>
      );
    }
    if (product.id === 'gymora') {
      return (
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 via-orange-900 to-slate-900 border border-amber-500/40 flex items-center justify-center p-2.5 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
          <svg className="w-full h-full text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12" />
          </svg>
        </div>
      );
    }
    if (product.id === 'exxplan') {
      return (
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-700 via-blue-950 to-slate-900 border border-blue-400/40 flex items-center justify-center p-2.5 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
          <span className="text-2xl font-black text-cyan-400 tracking-tighter">E</span>
        </div>
      );
    }
    return (
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${product.iconColor || 'from-indigo-600 to-slate-900'} border border-indigo-500/40 flex items-center justify-center p-2.5 shadow-md`}>
        <span className="text-lg font-bold text-white uppercase">{product.name.substring(0, 2)}</span>
      </div>
    );
  };

  const categoryLabels = {
    'All': lang === 'si' ? 'සියල්ල' : lang === 'ta' ? 'அனைத்தும்' : 'All',
    'Retail': lang === 'si' ? 'සිල්ලර' : lang === 'ta' ? 'சில்லறை' : 'Retail',
    'Hospitality': lang === 'si' ? 'හෝටල්' : lang === 'ta' ? 'விருந்தோம்பல்' : 'Hospitality',
    'Education': lang === 'si' ? 'අධ්‍යාපන' : lang === 'ta' ? 'கல்வி' : 'Education',
    'Healthcare': lang === 'si' ? 'සෞඛ්‍ය' : lang === 'ta' ? 'சுகாதாரம்' : 'Healthcare',
    'Construction': lang === 'si' ? 'ඉදිකිරීම්' : lang === 'ta' ? 'கட்டுமானம்' : 'Construction',
    'Transport': lang === 'si' ? 'ප්‍රවාහන' : lang === 'ta' ? 'போக்குவரத்து' : 'Transport',
    'Business Services': lang === 'si' ? 'ව්‍යාපාරික සේවා' : lang === 'ta' ? 'வணிக சேவைகள்' : 'Business Services'
  };

  return (
    <div className="w-full pt-10 pb-32 px-6 sm:px-10 lg:px-16 xl:px-20 relative">
      
      {/* Header Badge & Title */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <span className={`text-[11px] font-bold tracking-[0.25em] uppercase mb-4 inline-block ${
          isDark ? 'text-cyan-400' : 'text-cyan-700'
        }`}>
          {lang === 'si' ? 'RAXWO ව්‍යවසාය ERP නාමාවලිය' : lang === 'ta' ? 'RAXWO நிறுவன ERP பட்டியல்' : 'RAXWO ENTERPRISE ERP CATALOG'}
        </span>
        <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          {lang === 'si' ? 'අපගේ සූදානම් කළ ERP පද්ධති' : lang === 'ta' ? 'எங்கள் ஆயத்த ERP அமைப்புகள்' : 'Our Ready-Made ERP Systems'}
        </h1>
        <p className={`text-base sm:text-lg ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          {lang === 'si' ? '100% මූල කේතයේ පූර්ණ අයිතිය සහ මාසික ගාස්තු රහිත සම්පූර්ණ ව්‍යාපාරික මෘදුකාංග විසඳුම්.' : lang === 'ta' ? '100% முழு மூலக் குறியீடு உரிமை மற்றும் மாதாந்திர கட்டணங்கள் இல்லாத முழுமையான வணிக தீர்வுகள்.' : 'Complete business management solutions with 100% full source code ownership & zero subscription fees.'}
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mt-8">
          <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`} />
          <input
            type="text"
            placeholder={lang === 'si' ? 'නිෂ්පාදන හෝ අංග අනුව සොයන්න...' : lang === 'ta' ? 'பெயர் அல்லது அம்சங்கள் மூலம் தேடுங்கள்...' : 'Search systems by name, features, or industry...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-11 pr-24 py-3.5 rounded-2xl text-sm focus:outline-none transition-all shadow-inner ${
              isDark 
                ? 'bg-[#0e1428] border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500' 
                : 'bg-white border border-slate-300 text-slate-800 placeholder-slate-400 focus:border-blue-500 shadow-sm'
            }`}
          />
          <span className={`absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold px-2.5 py-1 rounded-lg ${
            isDark ? 'bg-slate-800/90 text-slate-400' : 'bg-slate-100 text-slate-600'
          }`}>
            {filteredProducts.length} {lang === 'si' ? 'ප්‍රතිඵල' : lang === 'ta' ? 'முடிவுகள்' : 'results'}
          </span>
        </div>

        {/* Multi-Faceted Filters (Category, Tech Stack, Price Tier) */}
        <div className="mt-7 space-y-3">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                    : isDark 
                      ? 'bg-[#11172e] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/60' 
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>

          {/* Sub-Filters: Tech Stack & Price Tiers */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs">
            
            {/* Tech Stack Dropdown */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
              <span className="text-slate-500 font-medium">Tech:</span>
              <select
                value={activeTech}
                onChange={e => setActiveTech(e.target.value)}
                className="bg-transparent text-white focus:outline-none cursor-pointer"
              >
                {techStacks.map(t => (
                  <option key={t} value={t} className="bg-slate-900 text-white">{t}</option>
                ))}
              </select>
            </div>

            {/* Price Tier Dropdown */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
              <span className="text-slate-500 font-medium">Price:</span>
              <select
                value={activePriceTier}
                onChange={e => setActivePriceTier(e.target.value)}
                className="bg-transparent text-white focus:outline-none cursor-pointer"
              >
                {priceTiers.map(pt => (
                  <option key={pt.value} value={pt.value} className="bg-slate-900 text-white">{pt.label}</option>
                ))}
              </select>
            </div>

            {(activeCategory !== 'All' || activeTech !== 'All' || activePriceTier !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setActiveTech('All');
                  setActivePriceTier('All');
                  setSearchQuery('');
                }}
                className="text-cyan-400 hover:underline cursor-pointer font-medium ml-1"
              >
                Reset filters
              </button>
            )}

          </div>

        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-12">
        {filteredProducts.map((product) => {
          const isComparing = compareList.some(p => p.id === product.id);
          return (
            <div
              key={product.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 border relative ${
                isDark 
                  ? 'bg-[#0c1024]/85 border-slate-800/80 hover:border-slate-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]' 
                  : 'bg-white border-slate-200 shadow-lg hover:shadow-2xl hover:border-blue-400'
              }`}
            >
              <div>
                {/* Card Header: Icon, Category Badge & Compare Checkbox */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  {renderProductIcon(product)}
                  <div className="flex items-center gap-2">
                    {/* Compare Button */}
                    <button
                      onClick={() => toggleCompare(product)}
                      title="Add to 3-way comparison matrix"
                      className={`px-2 py-1 rounded-lg text-[10px] font-semibold flex items-center gap-1 border transition-all cursor-pointer ${
                        isComparing
                          ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40'
                          : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      <Layers className="w-3 h-3" />
                      <span>{isComparing ? 'Comparing' : 'Compare'}</span>
                    </button>

                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                      isDark 
                        ? 'bg-slate-900 text-slate-400 border-slate-800' 
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      {product.badge || product.category}
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className={`text-xl font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {product.name}
                </h3>
                <p className={`text-xs font-medium mt-0.5 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {product.subtitle || `${product.category} ERP`}
                </p>

                {/* Description */}
                <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {product.tagline}
                </p>

                {/* Tech Stack Pills */}
                {product.techStack && (
                  <div className="flex flex-wrap gap-1 mt-4">
                    {product.techStack.map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-slate-900/80 text-slate-400 border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Row: Starting price & Action buttons */}
              <div className={`mt-6 pt-5 border-t flex items-center justify-between ${
                isDark ? 'border-slate-800/80' : 'border-slate-100'
              }`}>
                <div>
                  <span className={`text-[10px] block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Full Source Code
                  </span>
                  <span className={`text-sm sm:text-base font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {formatPrice(product.priceLKR)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Live Sandbox Button */}
                  <button
                    onClick={() => onOpenSandbox && onOpenSandbox(product)}
                    className="px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <Zap className="w-3 h-3" />
                    <span>{t('liveDemo')}</span>
                  </button>

                  {/* View Details */}
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="group flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors"
                  >
                    <span>{t('viewDetails')}</span>
                    <div className="w-5 h-5 rounded-full border border-cyan-500/40 flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                    </div>
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Floating 3-Way Comparison Tray (US1.2) */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-2xl p-3 sm:p-4 rounded-2xl bg-[#090d19]/95 border border-cyan-500/40 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 flex items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {compareList.map(p => (
                <div key={p.id} className="w-8 h-8 rounded-full bg-blue-600 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white">
                  {p.name.substring(0, 1)}
                </div>
              ))}
            </div>
            <div>
              <span className="text-xs font-bold text-white block">
                {compareList.length} of 3 ERP systems selected
              </span>
              <span className="text-[11px] text-slate-400">
                {compareList.map(p => p.name).join(', ')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCompareList([])}
              className="text-xs text-slate-400 hover:text-white p-1 cursor-pointer"
            >
              Clear
            </button>
            <button
              onClick={() => onOpenCompare && onOpenCompare(compareList)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-95 shadow-lg shadow-cyan-500/25 flex items-center gap-1.5 cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Compare Matrix</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
