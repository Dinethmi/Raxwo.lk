import React from 'react';
import { X, Check, Star, Layers, ShieldCheck, Zap, ArrowRight, Trash2 } from 'lucide-react';

export default function CompareModal({ 
  isOpen, 
  onClose, 
  products = [], 
  onRemoveProduct, 
  onSelectProduct,
  currentCurrency = 'LKR',
  currencyRates = {},
  theme = 'dark' 
}) {
  if (!isOpen || products.length === 0) return null;

  const isDark = theme === 'dark';

  const formatPrice = (prod) => {
    if (!prod) return '';
    if (currentCurrency === 'USD') return `$${prod.priceUSD}`;
    const rateObj = currencyRates[currentCurrency];
    if (rateObj && rateObj.rate) {
      const converted = Math.round(prod.priceLKR * rateObj.rate);
      return `${rateObj.symbol} ${converted.toLocaleString()}`;
    }
    return `LKR ${prod.priceLKR.toLocaleString()}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className={`relative w-full max-w-5xl my-auto rounded-3xl shadow-2xl border p-6 sm:p-8 overflow-hidden transition-all ${
        isDark ? 'bg-[#0a0e1a] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>

        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
              <Layers className="w-3.5 h-3.5" />
              US1.2 ERP Comparison Matrix
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Compare ERP Solutions</h2>
            <p className={`text-sm mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Comparing {products.length} of 3 systems side-by-side to match your exact business requirements.
            </p>
          </div>
          <button 
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              isDark ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-500'
            }`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Matrix Grid */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-800/60">
                <th className="py-4 px-4 w-1/4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Feature / Specs
                </th>
                {products.map((p) => (
                  <th key={p.id} className="py-4 px-4 w-1/4 align-top">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {p.category}
                        </span>
                        <h3 className="text-lg font-bold mt-1">{p.name}</h3>
                        <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{p.subtitle}</p>
                      </div>
                      <button
                        onClick={() => onRemoveProduct(p.id)}
                        title="Remove from comparison"
                        className="text-slate-500 hover:text-red-400 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-3">
                      <span className="text-xl font-extrabold text-cyan-400">{formatPrice(p)}</span>
                      <span className="text-[11px] text-slate-400 block">One-time / Full Source</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50 text-sm">
              
              {/* Rating & Review */}
              <tr>
                <td className="py-3.5 px-4 font-medium text-slate-400">Rating & Reviews</td>
                {products.map(p => (
                  <td key={p.id} className="py-3.5 px-4">
                    <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-xs">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{p.rating || 4.9}</span>
                      <span className="text-slate-400 font-normal">({p.reviewsCount || 60}+ clients)</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Tech Stack */}
              <tr>
                <td className="py-3.5 px-4 font-medium text-slate-400">Technology Stack</td>
                {products.map(p => (
                  <td key={p.id} className="py-3.5 px-4">
                    <div className="flex flex-wrap gap-1">
                      {(p.techStack || ['React', 'Node.js', 'PostgreSQL']).map(tech => (
                        <span key={tech} className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Core Features */}
              <tr>
                <td className="py-3.5 px-4 font-medium text-slate-400 align-top">Key Capabilities</td>
                {products.map(p => (
                  <td key={p.id} className="py-3.5 px-4 align-top">
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {(p.features || []).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Target Audience */}
              <tr>
                <td className="py-3.5 px-4 font-medium text-slate-400 align-top">Target Business</td>
                {products.map(p => (
                  <td key={p.id} className="py-3.5 px-4 align-top">
                    <div className="flex flex-wrap gap-1">
                      {(p.audience || []).map((aud, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-[10px] rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">
                          {aud}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Sri Lanka Compliance */}
              <tr>
                <td className="py-3.5 px-4 font-medium text-slate-400">Hardware & Compliance</td>
                {products.map(p => (
                  <td key={p.id} className="py-3.5 px-4">
                    <div className="space-y-1 text-xs text-slate-300">
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                        <span>ESC/POS & Cash Drawer</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-cyan-400">
                        <Check className="w-3.5 h-3.5" />
                        <span>Sri Lanka VAT & RAMIS ready</span>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Action Buttons */}
              <tr>
                <td className="py-4 px-4 font-medium text-slate-400">Action</td>
                {products.map(p => (
                  <td key={p.id} className="py-4 px-4">
                    <button
                      onClick={() => {
                        onClose();
                        if (onSelectProduct) onSelectProduct(p);
                      }}
                      className="w-full py-2 px-3 rounded-xl font-semibold text-xs bg-blue-600 hover:bg-blue-500 text-white transition-all flex items-center justify-center gap-1 shadow-md shadow-blue-600/25 cursor-pointer"
                    >
                      <span>Select Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
