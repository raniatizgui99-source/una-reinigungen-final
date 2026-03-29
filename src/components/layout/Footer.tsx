import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

interface FooterProps {
  t: any;
  currentLang: 'de' | 'en';
  toggleLanguage: () => void;
  onNavigate: (view: 'main' | 'imprint' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ t, currentLang, toggleLanguage, onNavigate }) => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
          <div className="space-y-8">
            <Logo light onClick={() => onNavigate('main')} />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {t.description}
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-red">{t.contactLabel}</h4>
            <div className="space-y-4 text-sm text-white/60">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-red shrink-0" />
                <span>{t.contact.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-brand-red shrink-0" />
                <a href={`tel:${t.contact.tel.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{t.contact.tel}</a>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-brand-red shrink-0" />
                <a href={`tel:${t.contact.mob.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{t.contact.mob}</a>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} className="text-brand-red shrink-0" />
                <a href={`mailto:${t.contact.email}`} className="hover:text-white transition-colors">{t.contact.email}</a>
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-red">{t.linksLabel}</h4>
            <nav className="flex flex-col space-y-4 text-sm text-white/60">
              <button onClick={() => onNavigate('imprint')} className="text-left hover:text-white transition-colors">{t.imprint}</button>
              <button onClick={() => onNavigate('privacy')} className="text-left hover:text-white transition-colors">{t.privacy}</button>
              <a href="#quote-form" onClick={() => onNavigate('main')} className="hover:text-white transition-colors">{t.contactLabel}</a>
            </nav>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-red">{t.languageLabel}</h4>
            <div className="flex gap-4">
              <button 
                onClick={() => currentLang !== 'de' && toggleLanguage()}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${currentLang === 'de' ? 'bg-brand-red text-white' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
              >
                DEUTSCH
              </button>
              <button 
                onClick={() => currentLang !== 'en' && toggleLanguage()}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${currentLang === 'en' ? 'bg-brand-red text-white' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
              >
                ENGLISH
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/20">
          <p>{t.rights}</p>
          <div className="flex gap-8">
            <button onClick={() => onNavigate('imprint')} className="hover:text-white transition-colors uppercase">{t.imprint}</button>
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors uppercase">{t.privacy}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
