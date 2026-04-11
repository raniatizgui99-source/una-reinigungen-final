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

          <div id="quote-form" className="w-full max-w-4xl relative">
             <HeroForm t={formT} />
             
             {/* Friction Reducers directly attached to the form base, upgraded for Dark Stage legibility */}
             <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                <div className="flex items-center gap-3 text-sm font-bold tracking-tight text-white/80 drop-shadow-md">
                   <ShieldCheck size={20} className="text-brand-red" />
                   {t.guarantee}
                </div>
                <div className="flex items-center gap-3 text-sm font-bold tracking-tight text-white/80 drop-shadow-md">
                   <ShieldCheck size={20} className="text-brand-red" />
                   {t.fixedPrice}
                </div>
             </div>
             
             {/* WhatsApp Hero Button */}
             <div className="mt-10 flex flex-col items-center gap-4">
                <a 
                  href="https://wa.me/41788171368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_30px_rgba(37,211,102,0.3)] group"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="group-hover:rotate-12 transition-transform duration-300"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.752 4.415h-.012c-1.23 0-2.433-.332-3.487-.96l-.25-.148-2.592.68 1.144-2.528-.164-.241c-.689-1.121-1.053-2.417-1.052-3.8.001-3.931 3.201-7.132 7.135-7.132 1.905 0 3.695.741 5.04 2.087 1.346 1.346 2.087 3.136 2.087 5.041-.002 3.932-3.203 7.133-7.136 7.133zM12 2C6.477 2 2 6.477 2 12c0 2.186.7 4.208 1.895 5.856L2.1 23.4l5.696-1.493C9.336 22.75 10.635 23.1 12 23.1c5.523 0 10-4.477 10-10S17.523 2 12 2z"></path>
                  </svg>
                  {t.whatsappChat}
                </a>
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
