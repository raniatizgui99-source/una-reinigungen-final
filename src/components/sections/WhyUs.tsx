import React from 'react';
import { Zap, MapPin, Star } from 'lucide-react';

interface WhyUsProps {
  t: any;
}

const icons = [Zap, MapPin, Star];

export const WhyUs: React.FC<WhyUsProps> = ({ t }) => {
  return (
    <div className="max-w-7xl mx-auto py-24 md:py-32 px-6">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-20 gap-8">
        <div className="max-w-3xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-red mb-6">{t.title}</h2>
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-black leading-[1.1]">{t.subtitle}</p>
        </div>
        <div className="text-black/40 max-w-xs text-[10px] sm:text-sm leading-relaxed">
          {t.description}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {t.points.map((point: any, idx: number) => {
          const Icon = icons[idx];
          return (
            <div key={idx} className="group relative p-6 md:p-10 bg-white border border-brand-cream rounded-[2rem] md:rounded-[2.5rem] hover:shadow-2xl hover:shadow-brand-cream transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-brand-red">
                <Icon size={120} strokeWidth={1} />
              </div>
              <div className="mb-6 md:mb-8 w-12 h-12 md:w-14 md:h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-500">
                <Icon size={24} />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black">{point.title}</h3>
              <p className="text-[10px] sm:text-sm md:text-base text-black/50 font-light leading-relaxed">{point.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
