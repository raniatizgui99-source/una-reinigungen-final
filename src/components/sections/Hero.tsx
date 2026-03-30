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
        Base color is deep slate/black. High-resolution cinematic image overlay.
      */}
      <div id="hero" className="relative pt-32 md:pt-40 pb-24 md:pb-32 px-6 overflow-hidden bg-slate-950 min-h-[95vh] flex flex-col justify-center items-center text-center">
        
        {/* Flawless Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.catbox.moe/vmfe3p.jpg" 
            alt="Professional Cleaning Service" 
            className="w-full h-full object-cover scale-[1.02]"
            referrerPolicy="no-referrer"
          />
          
          {/* Smooth, bug-free, rich dark overlay to create absolute contrast for the White Form */}
          <div className="absolute inset-0 bg-slate-950/70"></div>
          
          {/* Subtle bottom fade to blend smoothly into the next white section */}
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#f8f9fa] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 w-full flex flex-col items-center">
          
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-10 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
             <div className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-red" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white whitespace-nowrap">
                  {t.locationInfo}
                </span>
             </div>
             <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
             <div className="flex items-center gap-2">
                <div className="flex text-amber-400 drop-shadow-md">
                   {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-xs font-black text-white whitespace-nowrap tracking-wide">{t.topRated}</span>
             </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tighter mb-8 leading-[1.05] text-white drop-shadow-2xl whitespace-pre-line max-w-3xl">
            {t.h1}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-16 max-w-2xl font-medium leading-relaxed drop-shadow-lg">
            {t.sub}
          </p>

          <div className="w-full max-w-4xl relative">
             <HeroForm t={formT} />
             
             {/* Friction Reducers directly attached to the form base, upgraded for Dark Stage legibility */}
             <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                <div className="flex items-center gap-3 text-sm font-bold tracking-tight text-white/80 drop-shadow-md">
                   <ShieldCheck size={20} className="text-brand-red" />
                   100% Abnahmegarantie
                </div>
                <div className="flex items-center gap-3 text-sm font-bold tracking-tight text-white/80 drop-shadow-md">
                   <ShieldCheck size={20} className="text-brand-red" />
                   Fixpreis ohne versteckte Kosten
                </div>
             </div>
             
             {t.urgency && (
               <div className="mt-6 inline-block bg-brand-red/20 text-brand-red px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest animate-pulse border border-brand-red/30 drop-shadow-md">
                 🔥 {t.urgency}
               </div>
             )}
          </div>

        </div>
      </div>
    </>
  );
};
