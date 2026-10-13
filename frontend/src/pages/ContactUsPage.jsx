import React, { useState } from 'react';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

export default function ContactUsPage({
  theme = 'dark',
  onSubmitInquiry,
  isSubmitting = false
}) {
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const productList = [
    { id: 'mobixa', name: 'Mobixa - Mobile Shop & Repair ERP' },
    { id: 'exxplan', name: 'Exxplan - Whole-sale & Distribution ERP' },
    { id: 'toolix', name: 'Toolix - Hardware & Construction POS' },
    { id: 'restosync', name: 'RestoSync - Multi-branch Restaurant POS' },
    { id: 'mediflow', name: 'MediFlow - Pharmacy & Healthcare Suite' },
    { id: 'custom', name: 'Custom Enterprise Software' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmitInquiry) {
      onSubmitInquiry(formData);
    }
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        product: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="w-full pt-8 pb-28 px-6 sm:px-10 lg:px-16 xl:px-20">
      
      {/* Top Header matching media_1791216227671.png */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <span className="text-[11px] font-bold tracking-widest text-cyan-400 uppercase mb-3 block">
          TALK TO OUR TEAM
        </span>
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Contact Us
        </h1>
        <p className={`text-sm sm:text-base ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Tell us which solution you need.
        </p>
      </div>

      {/* Main Grid: Left Form Card + Right Contact Info Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form Card: Send us a message */}
        <div className="lg:col-span-7 w-full">
          <div className={`rounded-3xl p-7 sm:p-9 border transition-all ${
            isDark 
              ? 'bg-[#0a0f22]/90 border-slate-800/80 shadow-2xl' 
              : 'bg-white border-slate-200 shadow-xl'
          }`}>
            
            <h2 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Send us a message
            </h2>
            <p className="text-xs text-slate-400 mb-8">
              Complete the form and we will reply within one business day.
            </p>

            {isSuccess ? (
              <div className="py-12 text-center flex flex-col items-center gap-3">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 animate-bounce" />
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Message Received!
                </h3>
                <p className="text-xs text-slate-400 max-w-sm">
                  Thank you for reaching out. A Raxwo software consultant will review your business requirements and contact you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`text-xs font-semibold block mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors ${
                        isDark 
                          ? 'bg-[#11172e] border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400' 
                          : 'bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`text-xs font-semibold block mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors ${
                        isDark 
                          ? 'bg-[#11172e] border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400' 
                          : 'bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Select Product */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`text-xs font-semibold block mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+94 77 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors ${
                        isDark 
                          ? 'bg-[#11172e] border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400' 
                          : 'bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`text-xs font-semibold block mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Select Product
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors appearance-none cursor-pointer ${
                        isDark 
                          ? 'bg-[#11172e] border border-slate-800 text-white focus:border-cyan-400' 
                          : 'bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-500'
                      }`}
                    >
                      <option value="">Choose a product</option>
                      {productList.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div>
                  <label className={`text-xs font-semibold block mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us what your business needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors resize-none ${
                      isDark 
                        ? 'bg-[#11172e] border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400' 
                        : 'bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500'
                    }`}
                  ></textarea>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(99,102,241,0.4)] cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>

        {/* Right Info Card: Contact information */}
        <div className="lg:col-span-5 w-full">
          <div className={`rounded-3xl p-7 sm:p-9 border transition-all ${
            isDark 
              ? 'bg-[#0a0f22]/90 border-slate-800/80 shadow-2xl' 
              : 'bg-white border-slate-200 shadow-xl'
          }`}>
            
            <h2 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Contact information
            </h2>
            <p className="text-xs text-slate-400 mb-8">
              Choose the easiest way to reach us.
            </p>

            {/* Contact details list */}
            <div className="space-y-6 mb-8">
              
              {/* WhatsApp Support */}
              <div 
                onClick={() => window.open('https://wa.me/94771234567?text=Hi%20Raxwo%20Team', '_blank')}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-medium text-slate-400 block">
                    WhatsApp Support
                  </span>
                  <span className={`text-sm font-bold group-hover:text-cyan-400 transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    +94 77 123 4567
                  </span>
                </div>
              </div>

              {/* Phone */}
              <a href="tel:+94112345678" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-medium text-slate-400 block">
                    Phone
                  </span>
                  <span className={`text-sm font-bold group-hover:text-cyan-400 transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    +94 11 234 5678
                  </span>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:hello@raxwo.com" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-medium text-slate-400 block">
                    Email
                  </span>
                  <span className={`text-sm font-bold group-hover:text-cyan-400 transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    hello@raxwo.com
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-medium text-slate-400 block">
                    Location
                  </span>
                  <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Colombo, Sri Lanka
                  </span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-medium text-slate-400 block">
                    Business Hours
                  </span>
                  <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Mon–Sat, 8:30 AM–6:00 PM
                  </span>
                </div>
              </div>

            </div>

            {/* Quick response pill matching image */}
            <div className={`p-4 rounded-2xl border flex items-center gap-3 ${
              isDark 
                ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-400' 
                : 'bg-emerald-50 border-emerald-200 text-emerald-800'
            }`}>
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="text-xs font-bold block">
                  Quick response
                </span>
                <span className="text-[11px] opacity-80 block">
                  Most messages receive a reply in under 4 business hours.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
