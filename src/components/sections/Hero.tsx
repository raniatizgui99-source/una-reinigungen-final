import React from 'react';
import { CheckCircle, ArrowRight, MapPin, Star } from 'lucide-react';

import { HeroForm } from './HeroForm';

interface HeroProps {
  t: any;
  formT: any;
}

export const Hero: React.FC<HeroProps> = ({ t, formT }) => {
  return (
    <>
      <div className="relative pt-24 pb-20 px-6 overflow-hidden bg-brand-cream lg:min-h-[85vh] flex items-center">
        {/* High-end Modern Background with Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.catbox.moe/vmfe3p.jpg" 
            alt="Professional Cleaning Service" 
            className="w-full h-full object-cover opacity-20 mix-blend-multiply"
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

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Copy */}
            <div className="lg:col-span-7 flex flex-col items-start text-left pt-8 lg:pt-0">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 animate-fade-in border border-brand-red/10 shadow-sm">
                <MapPin size={12} className="text-brand-red" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black whitespace-nowrap">
                  {t.locationInfo}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight mb-8 leading-[1.05] text-black drop-shadow-sm whitespace-pre-line">
                {t.h1}
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/70 mb-10 max-w-xl font-medium leading-relaxed">
                {t.sub}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full max-w-xl">
                <div className="flex flex-col items-start space-y-1">
                   <div className="flex items-center gap-1.5">
                      <div className="flex text-brand-red">
                         {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                      </div>
                      <span className="text-sm font-black text-black">{t.topRated}</span>
                   </div>
                   <span className="text-xs text-black/40 font-bold">{t.secondary}</span>
                   {t.urgency && (
                     <span className="text-xs text-brand-red font-black mt-1 animate-pulse capitalize">
                       🔥 {t.urgency}
                     </span>
                   )}
                </div>
              </div>
            </div>

            {/* Right Column: Hero Form */}
            <div className="lg:col-span-5 relative w-full xl:pl-8">
               <HeroForm t={formT} />
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
