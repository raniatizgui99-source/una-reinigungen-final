import React from 'react';
import { ShieldCheck, Users, Calendar } from 'lucide-react';

interface AboutProps {
  t: any;
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <div className="max-w-7xl mx-auto py-32 md:py-48 px-6">
      
      {/* Massive Statistics Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 md:mb-32">
        {t.stats.map((stat: any, idx: number) => (
          <div key={idx} className="flex flex-col items-center justify-center text-center p-8 bg-brand-cream/30 rounded-[2.5rem] border border-brand-cream hover:bg-white hover:shadow-2xl hover:border-brand-red/10 transition-all duration-500">
            <div className="text-6xl md:text-7xl lg:text-[6rem] font-black text-brand-red tracking-tighter leading-none mb-4">{stat.value}</div>
            <div className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-black/60">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        <div className="lg:col-span-5 relative order-2 lg:order-1">
          <div className="aspect-[4/5] bg-brand-cream rounded-[3rem] overflow-hidden relative group">
             {/* 2.5D Image Layering */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
             <img 
               src="https://files.catbox.moe/5t6bsi.jpg" 
               alt={t.title} 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
               referrerPolicy="no-referrer"
             />
             {/* Trust Badge Floating */}
             <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-xl p-5 md:p-6 rounded-3xl shadow-2xl border border-white/40 flex items-center gap-4 max-w-[240px] z-20 hover:-translate-y-2 transition-transform duration-500">
                <div className="w-12 h-12 bg-brand-red rounded-2xl flex items-center justify-center text-white shrink-0 shadow-inner">
                   <ShieldCheck size={24} />
                </div>
                <div className="text-left">
                   <div className="text-xs font-black uppercase tracking-widest text-black/80">{t.badgeTitle}</div>
                   <div className="text-[10px] md:text-xs text-black/50 leading-tight font-medium mt-1">{t.badgeDesc}</div>
                </div>
             </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8 text-left order-1 lg:order-2">
          <div className="inline-block bg-brand-cream px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest text-brand-red">
            {t.label}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-[1.05] tracking-tighter text-black">
            {t.title}
          </h2>
          
          <div className="space-y-6 md:space-y-8">
            <p className="text-lg sm:text-xl md:text-2xl text-black/60 font-medium leading-relaxed">
              {t.description}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-black/40 font-medium leading-relaxed border-l-4 border-brand-red/20 pl-6 py-2">
              {t.moreText}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
