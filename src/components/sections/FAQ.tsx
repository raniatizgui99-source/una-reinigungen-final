"use client";
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQProps {
  t: any;
}

export const FAQ: React.FC<FAQProps> = ({ t }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="max-w-5xl mx-auto py-32 md:py-48 px-6 font-sans">
      <div className="text-center mb-20 md:mb-24 space-y-6">
        <div className="inline-flex items-center gap-2 bg-brand-red/10 px-4 py-2 rounded-full mb-4">
          <HelpCircle size={14} className="text-brand-red" />
          <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-red mb-0">{t.label}</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black leading-[1.05]">{t.title}</h2>
        <p className="text-black/50 max-w-2xl mx-auto font-medium text-lg md:text-xl">
          {t.subtitle}
        </p>
      </div>
      
      <div className="space-y-4 md:space-y-6">
        {t.items.map((item: any, idx: number) => (
          <div 
            key={idx} 
            className={`group rounded-[2rem] transition-all duration-500 overflow-hidden ${
              openIdx === idx 
                ? 'bg-white shadow-[0_20px_60px_rgb(0,0,0,0.06)] border border-transparent scale-[1.02]' 
                : 'bg-brand-cream/30 border border-brand-cream hover:bg-white hover:border-brand-red/20'
            }`}
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 md:p-8 lg:p-10 text-left min-h-[80px]"
            >
              <span className={`font-black tracking-tight text-lg sm:text-xl md:text-2xl transition-colors pr-6 ${
                  openIdx === idx ? 'text-brand-red' : 'text-black'
              }`}>
                {item.q}
              </span>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${
                openIdx === idx 
                  ? 'bg-brand-red text-white rotate-180 shadow-lg shadow-brand-red/20' 
                  : 'bg-white border border-brand-cream text-brand-red group-hover:bg-brand-red/10 group-hover:border-transparent'
              }`}>
                {openIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </button>
            
            <div 
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                openIdx === idx ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 md:px-8 lg:px-10 pb-8 md:pb-10 text-black/60 text-base md:text-lg font-medium leading-relaxed">
                  <div className="pt-6 border-t border-black/5">
                    {item.a}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 md:mt-24 p-8 md:p-12 bg-black rounded-[2.5rem] md:rounded-[3rem] text-center space-y-6 shadow-2xl overflow-hidden relative group">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 transition-transform duration-1000 group-hover:scale-110 pointer-events-none"></div>
         
         <div className="relative z-10 max-w-2xl mx-auto">
           <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter mb-4">{t.moreQuestionsTitle}</h3>
           <p className="text-base md:text-lg text-white/60 font-medium mb-10">{t.moreQuestionsDesc}</p>
           
           <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="tel:0433888281" className="w-full sm:w-auto min-w-[200px] bg-white/10 backdrop-blur-md border border-white/20 px-8 py-5 rounded-2xl font-black hover:bg-white hover:text-black transition-all text-white text-center text-sm md:text-base tracking-[0.2em] uppercase">
                {t.callUs}
              </a>
              <a href="mailto:info@una-reinigungen.ch" className="w-full sm:w-auto min-w-[200px] bg-brand-red text-white px-8 py-5 rounded-2xl font-black hover:bg-red-700 transition-all shadow-xl shadow-brand-red/20 text-center text-sm md:text-base tracking-[0.2em] uppercase">
                {t.emailUs}
              </a>
           </div>
         </div>
      </div>
    </div>
  );
};
