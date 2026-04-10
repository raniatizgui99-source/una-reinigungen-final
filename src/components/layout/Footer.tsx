import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

interface FooterProps {
  t: any;
  currentLang: 'de' | 'en';
  toggleLanguage: () => void;
  onNavigate: (view: 'main' | 'imprint' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ t, currentLang, toggleLanguage, onNavigate }) => {
  return (
    <footer className="bg-black text-white rounded-t-[3rem] mt-2 pb-12 px-6 pt-24 md:pt-32 font-sans relative overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Massive Pre-Footer CTA */}
        <div className="mb-24 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-white/10 pb-20">
           <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[0.9] text-white">
              UNA <br />
              <span className="text-white/40">REINIGUNGEN</span>
           </h2>
           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group"
           >
             <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
          <div className="space-y-8">
            <Logo light onClick={() => onNavigate('main')} />
            <p className="text-white/40 text-sm font-medium leading-relaxed max-w-xs">
              {t.description}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{t.contactLabel}</h3>
            <div className="space-y-4 text-base font-medium text-white/80">
              <p className="flex items-start gap-4 hover:text-white transition-colors">
                <MapPin size={20} className="text-brand-red shrink-0" />
                <span>{t.contact.address}</span>
              </p>
              <p className="flex items-center gap-4 hover:text-white transition-colors">
                <Phone size={20} className="text-brand-red shrink-0" />
                <a href={`tel:${t.contact.tel.replace(/\s/g, '')}`}>{t.contact.tel}</a>
              </p>
              <p className="flex items-center gap-4 hover:text-white transition-colors">
                <Phone size={20} className="text-brand-red shrink-0" />
                <a href={`tel:${t.contact.mob.replace(/\s/g, '')}`}>{t.contact.mob}</a>
              </p>
              <p className="flex items-center gap-4 hover:text-white transition-colors">
                <Mail size={20} className="text-brand-red shrink-0" />
                <a href="mailto:info@una-reinigungen.ch">info@una-reinigungen.ch</a>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{t.linksLabel}</h3>
            <nav className="flex flex-col space-y-4 text-base font-medium text-white/80">
              <button onClick={() => onNavigate('imprint')} className="text-left hover:text-white hover:translate-x-1 transition-all flex items-center">{t.imprint}</button>
              <button onClick={() => onNavigate('privacy')} className="text-left hover:text-white hover:translate-x-1 transition-all flex items-center">{t.privacy}</button>
              <a href="#quote-form" onClick={() => onNavigate('main')} className="hover:text-white hover:translate-x-1 transition-all flex items-center">{t.contactLabel}</a>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{t.languageLabel}</h3>
            <div className="flex gap-4">
              <button 
                onClick={() => currentLang !== 'de' && toggleLanguage()}
                className={`px-5 py-3 rounded-xl text-xs font-black tracking-widest transition-all ${currentLang === 'de' ? 'bg-white text-black shadow-lg shadow-white/10' : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10'}`}
              >
                DEUTSCH
              </button>
              <button 
                onClick={() => currentLang !== 'en' && toggleLanguage()}
                className={`px-5 py-3 rounded-xl text-xs font-black tracking-widest transition-all ${currentLang === 'en' ? 'bg-white text-black shadow-lg shadow-white/10' : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10'}`}
              >
                ENGLISH
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          <p>{t.rights}</p>
          <div className="flex gap-8">
             <button onClick={() => onNavigate('imprint')} className="hover:text-white transition-colors">{t.imprint}</button>
             <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">{t.privacy}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
