import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQProps {
  t: any;
}

export const FAQ: React.FC<FAQProps> = ({ t }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto py-24 md:py-32 px-6">
      <div className="text-center mb-12 md:mb-16 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-red">{t.label}</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-black">{t.title}</h3>
        <p className="text-black/50 max-w-xl mx-auto font-light text-[10px] sm:text-sm md:text-base">
          {t.subtitle}
        </p>
      </div>
      
      <div className="space-y-3 md:space-y-5">
        {t.items.map((item: any, idx: number) => (
          <div 
            key={idx} 
            className={`group border rounded-[1.2rem] md:rounded-[2rem] transition-all duration-500 ${
              openIdx === idx 
                ? 'border-brand-red bg-white shadow-2xl shadow-brand-cream' 
                : 'border-brand-cream hover:border-brand-red/20 bg-white'
            }`}
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex items-center justify-between p-5 md:p-8 text-left"
            >
              <span className={`font-bold text-xs sm:text-base md:text-lg lg:text-xl transition-colors ${openIdx === idx ? 'text-brand-red' : 'text-black/70'}`}>
                {item.q}
              </span>
              <div className={`w-6 h-6 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-500 shrink-0 ml-4 ${
                openIdx === idx 
                  ? 'bg-brand-red border-brand-red text-white rotate-0' 
                  : 'border-brand-cream text-brand-red group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red'
              }`}>
                {openIdx === idx ? <Minus size={12} className="md:w-4 md:h-4" /> : <Plus size={12} className="md:w-4 md:h-4" />}
              </div>
            </button>
            
            {openIdx === idx && (
              <div className="px-5 md:px-8 pb-6 md:pb-10 text-black/50 text-xs sm:text-base md:text-lg font-light leading-relaxed animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="pt-4 md:pt-6 border-t border-brand-cream">
                  {item.a}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-20 p-6 md:p-10 bg-brand-cream rounded-[1.5rem] md:rounded-[3rem] border border-brand-red/10 text-center space-y-4 md:space-y-6">
         <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black">{t.moreQuestionsTitle}</h4>
         <p className="text-[10px] sm:text-sm md:text-base text-black/50">{t.moreQuestionsDesc}</p>
         <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:0433888281" className="w-full sm:w-auto min-w-[200px] bg-white border border-brand-red/20 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold hover:shadow-md transition-all text-brand-red text-center text-sm md:text-base">{t.callUs}</a>
            <a href="mailto:info@una-reinigungen.ch" className="w-full sm:w-auto min-w-[200px] bg-brand-red text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold hover:bg-red-700 transition-all text-center text-sm md:text-base">{t.emailUs}</a>
         </div>
      </div>
    </div>
  );
};
