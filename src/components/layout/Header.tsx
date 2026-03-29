"use client";
import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/Logo';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  t: any;
  currentLang: 'de' | 'en';
  toggleLanguage: () => void;
  onNavigate?: (view: 'main' | 'imprint' | 'privacy') => void;
}

export const Header: React.FC<HeaderProps> = ({ t, currentLang, toggleLanguage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: t.services },
    { href: '#about', label: t.about },
    { href: '#faq', label: t.faq },
    { href: '#reviews', label: t.reviews },
  ];

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('main');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-cream' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <Logo onClick={handleLogoClick} />
        
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-black/70 hover:text-brand-red transition-colors"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('main');
                  setTimeout(() => {
                    const el = document.querySelector(link.href);
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-2 md:space-x-4">
          <button 
            onClick={toggleLanguage}
            className="text-[10px] md:text-xs font-bold border border-brand-red/20 px-2 md:px-3 py-1 md:py-1.5 rounded-md hover:bg-brand-red hover:text-white transition-colors text-brand-red"
          >
            {currentLang === 'de' ? 'EN' : 'DE'}
          </button>
          <a 
            href="#quote-form" 
            className="hidden sm:block bg-brand-red text-white text-xs md:text-sm font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:bg-red-700 transition-all transform active:scale-95 shadow-lg shadow-brand-red/20"
          >
            {t.cta}
          </a>
          <button 
            className="lg:hidden p-2 text-black/70"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-brand-cream animate-fade-in">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-lg font-bold text-black/70 hover:text-brand-red transition-colors"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('main');
                    setTimeout(() => {
                      const el = document.querySelector(link.href);
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#quote-form" 
              className="bg-brand-red text-white text-center font-bold py-4 rounded-xl shadow-lg shadow-brand-red/20"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('main');
                  setTimeout(() => {
                    const el = document.querySelector('#quote-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
            >
              {t.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
