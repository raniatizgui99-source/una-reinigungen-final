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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#services', label: t.services },
    { href: '#about', label: t.about },
    { href: '#reviews', label: t.reviews },
    { href: '#faq', label: t.faq },
  ];

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('main');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (onNavigate) {
      onNavigate('main');
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 transition-all duration-700 ease-out flex items-center justify-between px-5 md:px-8 py-3 md:py-4 rounded-[2rem] border ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-white/40' 
          : 'bg-white/40 backdrop-blur-xl border-white/20 hover:bg-white/60'
      }`}>
        <Logo onClick={handleLogoClick} />
        
        <nav className="hidden lg:flex items-center space-x-1 text-sm font-bold bg-black/5 rounded-full px-2 py-1">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className="px-5 py-2 text-black/60 hover:text-black hover:bg-white rounded-full transition-all"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-3 md:space-x-4">
          <button 
            onClick={toggleLanguage}
            className="text-[10px] md:text-xs font-black uppercase tracking-widest border-2 border-brand-red/10 px-3 py-1.5 rounded-xl hover:bg-brand-red hover:border-brand-red hover:text-white transition-all text-brand-red"
          >
            {currentLang === 'de' ? 'EN' : 'DE'}
          </button>
          
          <a 
            href="#hero" 
            className="hidden sm:flex bg-black text-white text-xs md:text-sm font-bold px-6 py-3 rounded-xl hover:bg-brand-red hover:shadow-lg hover:shadow-brand-red/20 transition-all transform hover:-translate-y-0.5 active:scale-95"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            {t.cta}
          </a>
          
          <button 
            className="lg:hidden w-10 h-10 bg-black text-white rounded-full flex items-center justify-center active:scale-90 transition-transform z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl lg:hidden flex flex-col justify-center px-8 animate-in fade-in duration-300">
          <nav className="flex flex-col space-y-6 text-center">
            {navLinks.map((link, idx) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-3xl font-black tracking-tight text-black hover:text-brand-red transition-colors animate-in slide-in-from-bottom-8 opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: (idx * 50) + "ms" }}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            
            <div className="w-12 h-1 bg-brand-red/20 mx-auto rounded-full my-4"></div>
            
            <a 
              href="#hero" 
              className="mx-auto w-full max-w-sm bg-brand-red text-white text-lg font-bold py-5 rounded-2xl shadow-2xl shadow-brand-red/20 animate-in slide-in-from-bottom-8 opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: (navLinks.length * 50) + "ms" }}
              onClick={(e) => handleNavClick(e, '#hero')}
            >
              {t.cta}
            </a>
          </nav>
        </div>
      )}
    </>
  );
};
