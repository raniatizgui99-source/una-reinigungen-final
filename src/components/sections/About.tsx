import React from 'react';
import { ShieldCheck, Users, Calendar } from 'lucide-react';

interface AboutProps {
  t: any;
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <div className="max-w-7xl mx-auto py-32 px-6">
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="inline-block bg-brand-cream px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-red border border-brand-red/10 whitespace-nowrap">
            {t.label}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 leading-[1.1] text-black max-w-xl">
            {t.title}
          </h2>
          
          <div className="space-y-4 md:space-y-6">
            <p className="text-sm sm:text-lg md:text-xl text-black/70 font-medium leading-relaxed">
              {t.description}
            </p>
            <p className="text-[10px] sm:text-base md:text-lg text-black/50 font-light leading-relaxed">
              {t.moreText}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 pt-8 md:pt-10 border-t border-brand-cream">
            {t.stats.map((stat: any, idx: number) => (
              <div key={idx} className="space-y-1">
                <div className="text-xl sm:text-3xl md:text-4xl font-black text-brand-red tracking-tighter whitespace-nowrap">{stat.value}</div>
                <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-black/40 whitespace-nowrap">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          <div className="aspect-[4/5] bg-brand-cream rounded-[3rem] overflow-hidden border border-brand-red/10 relative group">
             <img 
               src="https://files.catbox.moe/5t6bsi.jpg" 
               alt={t.title} 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               referrerPolicy="no-referrer"
             />
             {/* Trust Badge Floating */}
             <div className="absolute bottom-8 -left-4 md:-left-8 bg-white p-4 md:p-6 rounded-3xl shadow-2xl border border-brand-cream flex items-center gap-4 max-w-[200px] md:max-w-[240px] animate-fade-in">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-red rounded-2xl flex items-center justify-center text-white shrink-0">
                   <ShieldCheck size={20} />
                </div>
                <div className="text-left">
                   <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-black whitespace-nowrap">{t.badgeTitle}</div>
                   <div className="text-[9px] md:text-[10px] text-black/40 leading-tight">{t.badgeDesc}</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
