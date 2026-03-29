import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { WhyUs } from '@/components/sections/WhyUs';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { LeadForm } from '@/components/sections/LeadForm';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/layout/Footer';
import { LegalPage, ImprintContent, PrivacyContent } from '@/components/pages/LegalPage';
import { Language, translations } from '@/i18n/translations';

type View = 'main' | 'imprint' | 'privacy';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('de');
  const [view, setView] = useState<View>('main');
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang(prev => (prev === 'de' ? 'en' : 'de'));
  };

  const navigateTo = (newView: View) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  if (view === 'imprint') {
    return (
      <div className="min-h-screen flex flex-col antialiased bg-brand-cream text-black">
        <Header t={t.header} currentLang={lang} toggleLanguage={toggleLanguage} />
        <LegalPage 
          title={t.legal.imprint.title} 
          content={<ImprintContent t={t.legal.imprint} />} 
          onBack={() => navigateTo('main')} 
        />
        <Footer t={t.footer} currentLang={lang} toggleLanguage={toggleLanguage} onNavigate={navigateTo} />
      </div>
    );
  }

  if (view === 'privacy') {
    return (
      <div className="min-h-screen flex flex-col antialiased bg-brand-cream text-black">
        <Header t={t.header} currentLang={lang} toggleLanguage={toggleLanguage} />
        <LegalPage 
          title={t.legal.privacy.title} 
          content={<PrivacyContent t={t.legal.privacy} />} 
          onBack={() => navigateTo('main')} 
        />
        <Footer t={t.footer} currentLang={lang} toggleLanguage={toggleLanguage} onNavigate={navigateTo} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col antialiased bg-brand-cream text-black">
      <div id="capture-area" className="flex flex-col min-h-screen w-full">
        <Header 
          t={t.header} 
          currentLang={lang} 
          toggleLanguage={toggleLanguage} 
        />
        
        <main className="flex-grow">
          <section id="hero">
            <Hero t={t.hero} />
          </section>

          <section id="why-us" className="bg-white border-y border-brand-cream">
            <WhyUs t={t.whyUs} />
          </section>

          <section id="process" className="py-24 md:py-40 px-6 bg-black text-white overflow-hidden relative">
             <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-24 space-y-6">
                   <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-brand-red">{(t as any).process.label}</h2>
                   <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">{(t as any).process.title}</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-12 md:gap-20 relative">
                   <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-white/10 z-0"></div>
                   
                   {(t as any).process.steps.map((step: any, idx: number) => (
                      <div key={idx} className="relative z-10 space-y-6 md:space-y-8 group">
                         <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-red text-white rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-2xl md:text-3xl font-black shadow-2xl shadow-brand-red/20 group-hover:scale-110 transition-transform duration-500">
                            0{idx + 1}
                         </div>
                         <div className="space-y-4">
                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold">{step.title}</h4>
                            <p className="text-brand-cream/80 text-base md:text-lg font-light leading-relaxed">{step.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-red/5 blur-[180px] pointer-events-none"></div>
          </section>

          <section id="services" className="bg-brand-cream border-b border-white/20">
            <Services t={t.services} />
          </section>

          <section id="about" className="bg-white">
            <About t={t.about} />
          </section>

          <section id="quote-form" className="bg-black py-24 md:py-40 text-white">
            <LeadForm t={t.form} currentLang={lang} />
          </section>

          <section id="faq" className="bg-white border-t border-brand-cream">
            <FAQ t={t.faq} />
          </section>
        </main>

        <Footer t={t.footer} currentLang={lang} toggleLanguage={toggleLanguage} onNavigate={navigateTo} />
      </div>
    </div>
  );
};

export default App;