import React from 'react';
import { CheckCircle, ArrowRight, MapPin, Star } from 'lucide-react';

interface HeroProps {
  t: any;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <>
      <div className="relative pt-24 pb-20 px-6 overflow-hidden bg-brand-cream">
        {/* High-end Modern Background with Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.catbox.moe/vmfe3p.jpg" 
            alt="Professional Cleaning Service" 
            className="w-full h-full object-cover opacity-30 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          
          {/* Animated Mesh Overlay for Depth */}
          <div className="absolute inset-0 hero-mesh-bg opacity-20"></div>
          
          {/* Faint Noise Texture Overlay */}
          <div className="noise-overlay"></div>
          
          {/* Sophisticated Floating Mist Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-white/40 rounded-full blur-[120px] animate-pulse duration-[8000ms]"></div>
            <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-brand-red/5 rounded-full blur-[100px]"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 animate-fade-in border border-brand-red/10 shadow-sm">
            <MapPin size={12} className="text-brand-red" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black whitespace-nowrap">
              {t.locationInfo}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6 md:mb-8 leading-[1.1] max-w-5xl text-black drop-shadow-sm whitespace-pre-line">
            {t.h1}
          </h1>
          
          <p className="text-[10px] sm:text-sm md:text-base lg:text-lg text-black/70 mb-8 md:mb-12 max-w-2xl mx-auto font-normal leading-relaxed px-4">
            {t.sub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl px-4">
            <a 
              href="#quote-form" 
              className="group w-full sm:w-auto bg-brand-red text-white text-sm md:text-base font-bold px-8 md:px-12 py-4 md:py-5 rounded-xl hover:bg-red-700 transition-all shadow-xl shadow-brand-red/20 flex items-center justify-center gap-3 transform hover:-translate-y-1 active:scale-95"
            >
              {t.cta}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex flex-col items-center sm:items-start space-y-0.5">
               <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <div className="flex text-brand-red">
                     {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <span className="text-xs font-black text-black whitespace-nowrap">{t.topRated}</span>
               </div>
               <span className="text-[10px] text-black/40 font-medium whitespace-nowrap">{t.secondary}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Strip - Refined & Compact */}
      <div className="bg-[#EDEAD7] border-y border-black/5 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center">
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="text-2xl font-black text-black tracking-tight">5.0 / 5.0</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">Google Zufriedenheit</div>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-2 md:border-x border-black/10 md:px-8">
              <CheckCircle size={28} className="text-brand-red" />
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">100% Abnahmegarantie</div>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="text-2xl font-black text-black tracking-tight">Fixpreis</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">Keine versteckten Kosten</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
