import React from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function PricingPage({ 
  currency = 'LKR', 
  onCurrencyChange, 
  currencyRates, 
  onSelectPlan,
  theme = 'dark'
}) {
  const isDark = theme === 'dark';

  const currenciesList = ['LKR', 'USD', 'EUR', 'GBP', 'INR'];

  const formatPrice = (lkrAmount) => {
    if (!currencyRates || !currencyRates[currency]) {
      return `LKR ${Number(lkrAmount).toLocaleString()}`;
    }
    const rateInfo = currencyRates[currency];
    const converted = Math.round(lkrAmount * rateInfo.rate);
    return `${rateInfo.symbol} ${converted.toLocaleString()}`;
  };

  const plans = [
    {
      id: "starter",
      name: "STARTER",
      tagline: "A simple start for one location.",
      priceLKR: 75000,
      popular: false,
      features: [
        "Core business modules",
        "Full source code",
        "User documentation"
      ],
      cta: "Choose Starter"
    },
    {
      id: "professional",
      name: "PROFESSIONAL",
      badge: "MOST POPULAR",
      tagline: "The best fit for growing businesses.",
      priceLKR: 120000,
      popular: true,
      features: [
        "All core modules",
        "Full source code",
        "Complete documentation",
        "90 days support"
      ],
      cta: "Choose Professional"
    },
    {
      id: "premium",
      name: "PREMIUM",
      tagline: "More support and flexibility.",
      priceLKR: 150000,
      popular: false,
      features: [
        "Everything in Professional",
        "Advanced reports",
        "180 days support"
      ],
      cta: "Choose Premium"
    }
  ];

  return (
    <div className="w-full pt-10 pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
      
      {/* Header section (Exact match to Image 3) */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <span className={`text-[11px] font-bold tracking-[0.25em] uppercase mb-4 inline-block ${
          isDark ? 'text-cyan-400' : 'text-cyan-700'
        }`}>
          CLEAR COSTS, LASTING VALUE
        </span>
        <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Simple & Transparent Pricing
        </h1>
        <p className={`text-base sm:text-lg ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          One-time purchase. No monthly fees.
        </p>

        {/* Currency Switcher Pill Bar (Exact match to Image 3: LKR, USD, EUR, GBP, INR) */}
        <div className="inline-flex items-center p-1 rounded-2xl bg-[#0c1228] border border-slate-800 shadow-inner mt-8">
          {currenciesList.map((cur) => (
            <button
              key={cur}
              onClick={() => onCurrencyChange(cur)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all duration-200 ${
                currency === cur
                  ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cur}
            </button>
          ))}
        </div>
      </div>

      {/* 3 Pricing Tier Cards Grid (Exact match to Image 3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto mt-10">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
              plan.popular
                ? 'bg-gradient-to-b from-[#111938] via-[#0d132c] to-[#0a0f24] border-blue-500/80 shadow-[0_0_35px_rgba(59,130,246,0.2)]'
                : isDark 
                  ? 'bg-[#0b1022]/85 border-slate-800/80 hover:border-slate-700' 
                  : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            <div>
              {/* Card Header & Badge */}
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-base font-bold tracking-wider uppercase ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {plan.name}
                </h3>
                {plan.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-2.5 py-0.5 rounded">
                    {plan.badge}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-400 mb-8 min-h-[28px]">
                {plan.tagline}
              </p>

              {/* Price display */}
              <div className="mb-8">
                <span className={`text-3xl sm:text-4xl font-extrabold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {formatPrice(plan.priceLKR)}
                </span>
                <span className="text-xs text-slate-400 block mt-1 font-medium">
                  one-time payment
                </span>
              </div>

              {/* Action Button */}
              <div className="mb-8">
                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-3 rounded-2xl font-semibold text-xs sm:text-sm cursor-pointer transition-all duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98]'
                      : isDark
                        ? 'bg-[#11172e] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

              {/* Features List with Cyan Checks */}
              <div className="space-y-3 pt-2">
                {plan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
