import React from 'react';
import { Zap, MapPin, Star } from 'lucide-react';

interface WhyUsProps {
  t: any;
}

const icons = [Zap, MapPin, Star];

export const WhyUs: React.FC<WhyUsProps> = ({ t }) => {
  return (
    <div className="bg-brand-cream/30 py-32 md:py-40 px-6 relative overflow-hidden">
      {/* Abstract Background Blur */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 md:mb-28 gap-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-red mb-6 inline-flex items-center gap-2 bg-brand-red/10 px-4 py-1.5 rounded-full">
               <Star size={12} className="text-brand-red fill-brand-red" />
               {t.title}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black leading-[1.05]">{t.subtitle}</h2>
          </div>
          <div className="text-black/50 max-w-sm text-sm sm:text-base leading-relaxed md:pb-3 font-medium">
            {t.description}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {t.points.map((point: any, idx: number) => {
            const Icon = icons[idx];
            return (
              <div 
                key={idx} 
                className="group relative p-8 md:p-12 bg-white/70 backdrop-blur-xl border border-white rounded-[2.5rem] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
              >
                {/* 2.5D Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-brand-red/5 rounded-full blur-2xl group-hover:bg-brand-red/10 transition-colors duration-500"></div>

                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 text-brand-red transform group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={160} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="mb-8 w-16 h-16 bg-brand-red/5 border border-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shadow-sm">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-4 text-black tracking-tight">{point.title}</h3>
                  <p className="text-sm sm:text-base text-black/60 font-medium leading-relaxed">{point.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
