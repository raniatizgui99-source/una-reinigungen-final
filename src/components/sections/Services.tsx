"use client";
import React from 'react';
import { Check, ShieldCheck, Zap, ArrowRight, Sparkles, Building, Briefcase, Home } from 'lucide-react';

interface ServicesProps {
  t: any;
}

export const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <div id="services" className="bg-[#FAF9F6] py-32 md:py-40 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 px-4 py-2 rounded-full mb-8">
            <Sparkles size={14} className="text-brand-red" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">{t.title}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-[4rem] font-black tracking-tighter text-black mb-8 leading-[1.05]">
            {t.subtitle}
          </h2>
          
          <p className="text-lg md:text-2xl text-black/50 font-medium leading-relaxed max-w-2xl">
            {t.seo_note}
          </p>
        </div>

        {/* BENTO GRID: 2026 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Main Acceptance Guarantee Banner (Spans 12 columns) */}
          <div className="md:col-span-12 bg-black rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.4)] transition-all duration-700">
            {/* Cinematic Background Layering */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 transition-transform duration-1000 group-hover:scale-110"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-brand-red/20 backdrop-blur-md rounded-[1.2rem] flex items-center justify-center border border-brand-red/30 text-brand-red">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter">{t.mainPackage.title}</h3>
                </div>
                <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-xl">
                  {t.mainPackage.description}
                </p>
                
                {/* Visual Tags instead of dots */}
                <div className="flex flex-wrap gap-3">
                  {t.mainPackage.badges.map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-white/90 font-bold text-xs tracking-wide">
                      <Check size={14} className="text-brand-red" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent rounded-[2.5rem] pointer-events-none"></div>
                <div className="text-brand-red font-black text-xs uppercase tracking-[0.2em] mb-6">{t.handoverTitle}</div>
                <ul className="space-y-4 relative z-10">
                  {t.handoverItems.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-4 text-base md:text-lg font-medium text-white/80">
                      <div className="w-6 h-6 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center shrink-0 mt-0.5">
                         <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Feature Squares (Mobile Native: Horizontal Scroller, Desktop: Grid) */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4">
            {t.mainPackage.features.map((section: any, idx: number) => (
              <div 
                key={idx}
                className="bg-white border border-brand-cream rounded-[2.5rem] p-8 md:p-10 hover:shadow-2xl hover:border-transparent transition-all duration-500 group flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-brand-cream/30 rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-500">
                    {idx === 0 ? <Home size={28} /> : idx === 1 ? <Building size={28} /> : <Briefcase size={28} />}
                  </div>
                  <span className="text-black/5 text-5xl font-black italic tracking-tighter">0{idx + 1}</span>
                </div>
                
                <h4 className="text-xl md:text-2xl font-black tracking-tight text-black mb-8">
                  {section.category}
                </h4>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {section.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-base font-medium text-black/60 leading-snug">
                       <div className="w-5 h-5 bg-brand-cream rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-red/10 transition-colors">
                          <Check size={12} className="text-brand-red" />
                       </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

          {/* Pricing Add-ons Bento Card (Spans 12 cols, sits at bottom) */}
          <div className="md:col-span-12 mt-4 bg-brand-red rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 text-white shadow-[0_20px_50px_rgba(201,48,44,0.3)] flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="max-w-2xl relative z-10">
              <h5 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">{t.addonsTitle}</h5>
              <p className="text-white/80 text-lg font-medium leading-relaxed mb-8">
                {t.addonsNote}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.addonPrices.map((addon: any, i: number) => (
                  <div key={i} className="bg-black/20 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-center">
                    <div className="flex justify-between items-center gap-4">
                      <span className="text-base font-bold text-white">{addon.label}</span>
                      <span className="text-xl font-black text-white">{addon.price}</span>
                    </div>
                    {addon.note && <div className="text-xs text-white/50 font-bold tracking-wide uppercase mt-1">{addon.note}</div>}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-auto relative z-10">
              <a 
                href="#quote-form" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-black px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-transform shadow-2xl"
              >
                <span>{t.cta_button}</span>
                <ArrowRight size={18} className="ml-3" />
              </a>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};
