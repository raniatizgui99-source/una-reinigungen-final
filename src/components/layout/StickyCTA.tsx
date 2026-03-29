'use client';
import React, { useState, useEffect } from 'react';
import { Phone, FileText } from 'lucide-react';

interface StickyCTAProps {
  currentLang: 'de' | 'en';
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ currentLang }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-brand-cream shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3 animate-fade-in">
      <div className="flex gap-3 max-w-lg mx-auto">
        <a
          href="tel:0433888281"
          className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-brand-red text-brand-red font-bold py-3 rounded-xl active:scale-95 transition-all text-sm"
        >
          <Phone size={18} />
          {currentLang === 'de' ? 'Anrufen' : 'Call'}
        </a>
        <a
          href="#quote-form"
          className="flex-[2] flex items-center justify-center gap-2 bg-brand-red text-white font-bold py-3 rounded-xl shadow-lg shadow-brand-red/20 active:scale-95 transition-all text-sm"
        >
          <FileText size={18} />
          {currentLang === 'de' ? 'Fixpreis berechnen' : 'Get Fixed Price'}
        </a>
      </div>
    </div>
  );
};
