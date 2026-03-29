import React from 'react';
import { MapPin, Star, ShieldCheck } from 'lucide-react';
import { HeroForm } from './HeroForm';

interface HeroProps {
  t: any;
  formT: any;
}

export const Hero: React.FC<HeroProps> = ({ t, formT }) => {
  return (
    <>
      {/* 
        Hero Container: 
        Base color is pure white to blend with the rest of the site,
        but the cinematic image is brought back.
      */}
      <div id="hero" className="relative pt-32 md:pt-40 pb-24 md:pb-32 px-6 overflow-hidden bg-white min-h-[95vh] flex flex-col justify-center items-center text-center">
        
        {/* Cinematic Background with Premium Spotlight Fade */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.catbox.moe/vmfe3p.jpg" 
            alt="Professional Cleaning Service" 
            className="w-full h-full object-cover opacity-60 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          
          {/* Edge Fade to blend with page */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-white/95"></div>
          
          {/* Spotlight Radial Fade - This creates the "Apple/Google Stage" effect behind the form */}
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px] pointer-events-none">
             {/* The blazing core of the spotlight directly behind the form */}
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white/80 to-transparent"></div>
          </div>
          
        </div>

        <div className="max-w-4xl mx-auto relative z-10 w-full flex flex-col items-center">
          
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-10 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-full border border-black/5 shadow-sm">
             <div className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-red" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 whitespace-nowrap">
                  {t.locationInfo}
                </span>
             </div>
             <div className="hidden sm:block w-1 h-1 rounded-full bg-black/10"></div>
             <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                   {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-xs font-black text-gray-900 whitespace-nowrap tracking-wide">{t.topRated}</span>
             </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tighter mb-8 leading-[1.05] text-gray-900 drop-shadow-sm whitespace-pre-line max-w-3xl">
            {t.h1}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-16 max-w-2xl font-medium leading-relaxed">
            {t.sub}
          </p>

          <div className="w-full max-w-4xl relative">
             <HeroForm t={formT} />
             
             {/* Friction Reducers directly attached to the form base */}
             <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 opacity-80">
                <div className="flex items-center gap-3 text-sm font-bold tracking-tight text-gray-600">
                   <ShieldCheck size={20} className="text-brand-red" />
                   100% Abnahmegarantie
                </div>
                <div className="flex items-center gap-3 text-sm font-bold tracking-tight text-gray-600">
                   <ShieldCheck size={20} className="text-brand-red" />
                   Fixpreis ohne versteckte Kosten
                </div>
             </div>
             
             {t.urgency && (
               <div className="mt-6 inline-block bg-brand-red/10 text-brand-red px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest animate-pulse">
                 🔥 {t.urgency}
               </div>
             )}
          </div>

        </div>
      </div>
    </>
  );
};
