import React from 'react';
import { 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Code2, 
  Headphones, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export default function AboutUsPage({
  theme = 'dark',
  onExploreProducts,
  onContactClick
}) {
  const isDark = theme === 'dark';

  const stats = [
    { value: '14+', label: 'Business Solutions' },
    { value: '500+', label: 'Happy Customers' },
    { value: '100%', label: 'Professional Support' }
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: 'Trust First',
      desc: 'Clear pricing and honest advice.'
    },
    {
      icon: Users,
      title: 'People Friendly',
      desc: 'Designed for every age and skill level.'
    },
    {
      icon: Code2,
      title: '100% Source Code',
      desc: 'Full intellectual property ownership with zero vendor lock-in.'
    },
    {
      icon: Headphones,
      title: 'Direct Support',
      desc: 'Dedicated Sri Lankan engineering team standing behind your operations.'
    }
  ];

  return (
    <div className="w-full pt-8 pb-28">
      
      {/* 1. Hero Section matching media_1791216241399.png */}
      <section className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold tracking-widest text-cyan-400 uppercase mb-3 block">
              TECHNOLOGY MADE PRACTICAL
            </span>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              About RAXWO
            </h1>
            <p className={`text-base sm:text-lg max-w-xl leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              We provide ready-made and customizable ERP solutions that help businesses work more clearly, confidently and efficiently.
            </p>
          </div>

          {/* Right Hero Graphic: Next Level Tech organic card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className={`relative w-full max-w-md p-10 rounded-[3rem] border transition-all text-center flex flex-col items-center justify-center ${
              isDark 
                ? 'bg-gradient-to-br from-[#0c122c]/90 via-[#0a0f24]/90 to-[#070b1a]/90 border-slate-800 shadow-[0_0_50px_rgba(30,58,138,0.25)]' 
                : 'bg-gradient-to-br from-blue-50/80 via-white to-slate-50 border-slate-200 shadow-xl'
            }`}>
              
              {/* Glow backdrop behind chart icon */}
              <div className="absolute w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none"></div>

              {/* Bar chart icon */}
              <div className="relative mb-6">
                <BarChart3 className="w-16 h-16 text-cyan-400 stroke-[2.2]" />
              </div>

              <h3 className={`text-xl font-bold mb-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Next Level Tech
              </h3>
              <p className="text-xs text-slate-400 max-w-xs">
                Built around real business needs.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Stats Strip Section matching media_1791216241399.png */}
      <section className={`w-full py-12 px-6 sm:px-10 lg:px-16 xl:px-20 border-y ${
        isDark ? 'border-slate-800/80 bg-[#060814]/70' : 'border-slate-200 bg-slate-50/70'
      } mb-20`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800/60">
          {stats.map((s, idx) => (
            <div key={idx} className={`${idx > 0 ? 'pt-6 md:pt-0' : ''}`}>
              <div className="text-4xl sm:text-5xl font-black text-cyan-400 tracking-tight mb-2">
                {s.value}
              </div>
              <div className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our Story & Values Section matching media_1791216241399.png */}
      <section className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Our Story */}
          <div className="lg:col-span-6">
            <span className="text-[11px] font-bold tracking-widest text-cyan-400 uppercase mb-3 block">
              OUR STORY
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Better software should feel simple.
            </h2>
            <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <p>
                RAXWO started with one belief: useful business technology should not be confusing or out of reach. We listened to owners, managers, and everyday staff who struggled with outdated spreadsheets, rigid software, and overpriced consultancy fees.
              </p>
              <p>
                That inspired us to create a marketplace of battle-tested ERP systems that deliver full source code ownership, zero subscription locks, and tailor-made customization built specifically for local and international markets.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(99,102,241,0.3)] cursor-pointer transition-all duration-200 hover:scale-[1.02]"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onContactClick}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-xs sm:text-sm border transition-colors cursor-pointer ${
                  isDark 
                    ? 'bg-[#11172e]/80 border-slate-800 text-slate-300 hover:text-white' 
                    : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900'
                }`}
              >
                <span>Talk to Us</span>
              </button>
            </div>
          </div>

          {/* Right Column: Values Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border transition-all ${
                    isDark 
                      ? 'bg-[#0a0f22]/90 border-slate-800/80 hover:border-slate-700 shadow-lg' 
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-md'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-sm font-bold mb-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
