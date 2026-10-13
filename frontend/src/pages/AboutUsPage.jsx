import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  Code2, 
  Headphones, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Award,
  Zap,
  Globe2,
  Building2,
  Laptop,
  Layers,
  Clock,
  TrendingUp,
  MapPin,
  Check
} from 'lucide-react';

export default function AboutUsPage({
  theme = 'dark',
  onExploreProducts,
  onContactClick
}) {
  const isDark = theme === 'dark';

  const stats = [
    { value: '500+', label: 'Businesses Automated', desc: 'Across Sri Lanka, UAE & Maldives' },
    { value: '18+', label: 'Ready-Made ERP Systems', desc: 'Instant deployment within 48 hours' },
    { value: '100%', label: 'Source Code Ownership', desc: 'Zero monthly SaaS seat fees' },
    { value: '99.9%', label: 'System Uptime & SLA', desc: 'Offline-first failover reliability' }
  ];

  const coreValues = [
    {
      icon: ShieldCheck,
      color: 'blue',
      title: 'Full Source Code Ownership',
      desc: 'We never lock you into monthly user seat subscriptions. When you purchase a Raxwo ERP, you receive 100% full, unminified source code and perpetual rights.'
    },
    {
      icon: Code2,
      color: 'emerald',
      title: 'Engineered for Local Compliance',
      desc: 'Built specifically for Sri Lankan commerce: RAMIS tax guidelines, VAT 18%, SSCL 2.5%, ESC/POS thermal printers, weighing scales, and tri-lingual interfaces (Sinhala, Tamil, English).'
    },
    {
      icon: Users,
      color: 'purple',
      title: 'User-Friendly for Every Age',
      desc: 'Software shouldn\'t require an IT degree. Our interfaces are designed so a cashier or warehouse staff member can master billing and stock transfer in less than 30 minutes.'
    },
    {
      icon: Headphones,
      color: 'cyan',
      title: 'Dedicated Sri Lankan Tech Support',
      desc: 'Direct hotline and WhatsApp support from local software engineers who understand your actual daily business workflows and hardware equipment.'
    }
  ];

  const leadershipTeam = [
    {
      name: 'Dr. Rohan Jayasinghe',
      role: 'Chief Technology Officer & Co-Founder',
      experience: '14+ Years in Enterprise Architecture',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      bio: 'Former principal architect for regional telecom & banking platforms. Leads Raxwo core ERP engine and security framework.'
    },
    {
      name: 'Dineli Senanayake',
      role: 'Head of Product Design & Human UX',
      experience: 'Ex-Silicon Valley Design Specialist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      bio: 'Obsessed with simplicity and fast keyboard navigation for cashiers, doctors, and multi-store warehouse managers.'
    },
    {
      name: 'Kaveen Fernando',
      role: 'Head of Hardware & POS Integrations',
      experience: '10+ Years in Retail Automation',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      bio: 'Master of ESC/POS thermal protocols, serial scale communication, and barcode scanner drivers for all global printer models.'
    },
    {
      name: 'Natasha Perera',
      role: 'Director of Customer Operations & SLA',
      experience: 'Enterprise Client Success Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      bio: 'Ensures every business deployment goes live within 48 hours with on-site or remote staff training workshops.'
    }
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Founded in Colombo',
      desc: 'Launched with a single mission: free local business owners from expensive foreign SaaS subscriptions with battle-tested retail software.'
    },
    {
      year: '2023',
      title: '10+ Production-Ready ERPs',
      desc: 'Expanded into specialized sectors including Mobile Phone & Repair (Mobixa), Multi-Branch Restaurants (DineFlow), and Wholesale (Exxplan).'
    },
    {
      year: '2025',
      title: '500+ Clients & RAMIS Tax Engine',
      desc: 'Built built-in compliance for Sri Lanka Inland Revenue RAMIS requirements and introduced live offline-to-cloud automatic synchronization.'
    },
    {
      year: '2026',
      title: 'Raxwo Next Level Tech Marketplace',
      desc: 'Pioneered the transparent one-time purchase ERP marketplace, giving enterprise customers full source code ownership and unlimited scaling.'
    }
  ];

  return (
    <div className={`w-full pt-8 pb-32 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
      
      {/* 1. HERO SECTION WITH HIGH-IMPACT VISUALS */}
      <section className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 mb-20">
        
        {/* Breadcrumb / Top Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${
            isDark 
              ? 'text-cyan-400 bg-cyan-950/40 border-cyan-800/50' 
              : 'text-blue-700 bg-blue-50 border-blue-200'
          }`}>
            ABOUT RAXWO GLOBAL SOFTWARE &amp; DIGITAL SOLUTIONS
          </span>
        </div>

        {/* Hero Title & Mission Statement */}
        <div className="max-w-4xl">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6 ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            Empowering Modern Businesses with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400">
              Lifetime Software Ownership
            </span>
          </h1>
          <p className={`text-base sm:text-lg lg:text-xl leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            We bridge the gap between rigid, overpriced SaaS subscriptions and chaotic spreadsheets. At Raxwo, we engineer production-ready, customizable ERP systems that you own forever — with 100% full source code, zero monthly seat taxes, and dedicated Sri Lankan technical support.
          </p>
        </div>

        {/* Hero Image Showcase Grid (3 stunning photography cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12 items-stretch">
          
          {/* Main Large Photo: Engineering Team in Action */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl border min-h-[380px] lg:min-h-[460px] group border-slate-700/60">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
              alt="Raxwo Engineering Team in Colombo"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            {/* Overlay Badge & Location */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-900/90 text-white border border-slate-700 backdrop-blur-md shadow-lg">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Level 05, Raxwo Tech Tower, Colombo 03</span>
              </span>
            </div>

            {/* Bottom Card Overlay Caption */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                OUR ENGINEERING CULTURE
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white drop-shadow-md">
                Built by Developers Who Care About Real Business Realities
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-1.5 line-clamp-2">
                Every ERP in our catalog is battle-tested in live supermarkets, repair centers, and factories before being released to our marketplace.
              </p>
            </div>
          </div>

          {/* Right 2 Stacked Photo Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Top Right Card: Modern Office & Client Meeting */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border flex-1 min-h-[210px] group border-slate-700/60">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                alt="Raxwo Executive Boardroom"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute bottom-4 left-5 right-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                  CLIENT PARTNERSHIP
                </span>
                <h4 className="text-base font-bold text-white">
                  Direct In-Person & Remote Consultations
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  We walk through your counter and warehouse operations before recommending any solution.
                </p>
              </div>
            </div>

            {/* Bottom Right Card: Technical Architecture */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border flex-1 min-h-[210px] group border-slate-700/60">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                alt="Software Architecture and Code Review"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute bottom-4 left-5 right-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block">
                  CLEAN CODE STANDARDS
                </span>
                <h4 className="text-base font-bold text-white">
                  Modern React, Node.js &amp; PostgreSQL Stack
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Unminified, modular code that your in-house engineers can easily maintain and extend.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* 2. STATS STRIP SECTION */}
      <section className={`w-full py-12 px-6 sm:px-10 lg:px-16 xl:px-20 border-y mb-24 ${
        isDark ? 'border-slate-800 bg-[#070b1a]/90' : 'border-slate-200 bg-slate-50'
      }`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 tracking-tight mb-1">
                {s.value}
              </span>
              <span className={`text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {s.label}
              </span>
              <span className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {s.desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR STORY & THE "WHY RAXWO" MISSION */}
      <section className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: The Story */}
          <div className="lg:col-span-6 space-y-5">
            <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border inline-block ${
              isDark 
                ? 'text-cyan-400 bg-cyan-950/40 border-cyan-800/50' 
                : 'text-blue-700 bg-blue-50 border-blue-200'
            }`}>
              OUR ORIGIN STORY
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              Why We Rejected the SaaS Subscription Model
            </h2>
            <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <p>
                In 2020, we watched dozens of thriving Sri Lankan shops, pharmacies, and manufacturers get trapped by foreign SaaS ERP platforms. Business owners were paying \$150 to \$500 every single month just for user seats and basic barcode printing. When currency exchange rates shifted, their software bills tripled overnight.
              </p>
              <p>
                Worse, if their internet dropped during heavy monsoon rains, cashiers couldn’t print bills, halting store operations. And if a business owner stopped paying the monthly subscription, they lost immediate access to their own customer database and sales history.
              </p>
              <p>
                We decided to change that forever. We founded <strong className={isDark ? 'text-cyan-400' : 'text-blue-600'}>RAXWO</strong> on a radical premise: <em>"Software you pay for should be software you truly own."</em> We engineer complete, standalone ERP solutions that run offline, connect directly with local POS hardware, and are handed over with complete source code.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>Browse Our 18+ ERP Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onContactClick}
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-xs sm:text-sm border transition-colors cursor-pointer ${
                  isDark 
                    ? 'bg-slate-900/80 border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800' 
                    : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Talk to an ERP Consultant</span>
              </button>
            </div>
          </div>

          {/* Right Column: Mission & Vision Interactive Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Card 1: Our Mission */}
            <div className={`p-7 sm:p-8 rounded-3xl border transition-all ${
              isDark 
                ? 'bg-[#0c1228]/90 border-slate-800/90 hover:border-slate-700 shadow-xl' 
                : 'bg-white border-slate-200 hover:border-blue-300 shadow-lg'
            }`}>
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/30">
                <TargetIcon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                Our Mission
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Democratize enterprise software for SMEs and corporations across Sri Lanka and emerging markets by delivering high-performance, perpetually licensed software that eliminates predatory recurring fees.
              </p>
              <ul className="mt-4 space-y-2 text-xs">
                {['Perpetual lifetime license guarantee', 'Full source code repository handover', 'Complete offline capability with cloud sync'].map((item, idx) => (
                  <li key={idx} className={`flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Our Vision */}
            <div className={`p-7 sm:p-8 rounded-3xl border transition-all ${
              isDark 
                ? 'bg-[#0c1228]/90 border-slate-800/90 hover:border-slate-700 shadow-xl' 
                : 'bg-white border-slate-200 hover:border-purple-300 shadow-lg'
            }`}>
              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-4 border border-purple-500/30">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                Our Vision
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                To power over 10,000 retail, healthcare, manufacturing, and hospitality enterprises worldwide by 2030 with the most modular, dependable, and customizable business software suite in Asia.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CORE VALUES GRID */}
      <section className={`w-full py-20 px-6 sm:px-10 lg:px-16 xl:px-20 border-y mb-28 ${
        isDark ? 'border-slate-800 bg-[#060a17]/90' : 'border-slate-200 bg-slate-50'
      }`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border inline-block mb-3 ${
            isDark 
              ? 'text-cyan-400 bg-cyan-950/40 border-cyan-800/50' 
              : 'text-blue-700 bg-blue-50 border-blue-200'
          }`}>
            WHAT WE STAND FOR
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            Four Principles Behind Every Line of Code
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            We build software designed for durability, data privacy, and immediate commercial efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-[#0b1024]/90 border-slate-800/90 hover:border-slate-700 shadow-lg' 
                    : 'bg-white border-slate-200 hover:border-blue-400 shadow-md'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-lg font-bold mb-2.5 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    {v.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {v.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. LEADERSHIP & ENGINEERING ARCHITECTS */}
      <section className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 mb-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border inline-block mb-3 ${
            isDark 
              ? 'text-cyan-400 bg-cyan-950/40 border-cyan-800/50' 
              : 'text-blue-700 bg-blue-50 border-blue-200'
          }`}>
            LEADERSHIP &amp; ARCHITECTS
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            Meet the Minds Powering Raxwo
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Senior systems architects, hardware engineers, and enterprise consultants dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {leadershipTeam.map((member, idx) => (
            <div 
              key={idx}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${
                isDark 
                  ? 'bg-[#0b1022]/90 border-slate-800/90 hover:border-slate-700 shadow-xl' 
                  : 'bg-white border-slate-200 hover:border-blue-400 shadow-md'
              }`}
            >
              {/* Photo */}
              <div className="relative w-full h-64 overflow-hidden bg-slate-950">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-bold text-cyan-400 block uppercase tracking-wider">
                    {member.experience}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-500 mt-0.5 mb-2.5">
                    {member.role}
                  </p>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GROWTH JOURNEY / TIMELINE */}
      <section className={`w-full py-20 px-6 sm:px-10 lg:px-16 xl:px-20 border-y mb-28 ${
        isDark ? 'border-slate-800 bg-[#060a17]/90' : 'border-slate-200 bg-slate-50'
      }`}>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border inline-block mb-3 ${
            isDark 
              ? 'text-cyan-400 bg-cyan-950/40 border-cyan-800/50' 
              : 'text-blue-700 bg-blue-50 border-blue-200'
          }`}>
            OUR TIMELINE
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            The Journey of Raxwo Global
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {milestones.map((m, idx) => (
            <div 
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl border flex flex-col sm:flex-row sm:items-center gap-5 transition-all ${
                isDark 
                  ? 'bg-[#0c1228]/80 border-slate-800/80 hover:border-slate-700 shadow-md' 
                  : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
              }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/30">
                {m.year}
              </div>
              <div>
                <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                  {m.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM ENTERPRISE CTA BANNER */}
      <section className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className={`p-8 sm:p-14 rounded-3xl border text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-r from-blue-950 via-[#0d1430] to-indigo-950 border-blue-900/40 text-white' 
            : 'bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border-slate-800 text-white'
        }`}>
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 border border-blue-400/30 inline-block mb-4">
              TAKE BACK CONTROL OF YOUR SOFTWARE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Ready to Upgrade Your Company to a Raxwo ERP?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
              Schedule a live remote or in-person demonstration with our senior systems architect. We will show you the exact system with your company’s logo and products loaded.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onExploreProducts}
                className="px-8 py-3.5 rounded-2xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all cursor-pointer hover:scale-105"
              >
                Explore ERP Solutions
              </button>
              <button
                type="button"
                onClick={onContactClick}
                className="px-8 py-3.5 rounded-2xl font-bold text-sm text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer hover:scale-105"
              >
                Schedule Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Inline Target Icon Helper
function TargetIcon(props) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
