"use client";
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Testimonials } from '@/components/sections/Testimonials';
import { HeroForm } from '@/components/sections/HeroForm';
import { StickyCTA } from '@/components/layout/StickyCTA';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { LanguageProvider, useTranslation } from '@/context/LanguageContext';
import { Check, ShieldCheck, Home, Building, Briefcase, Zap, MapPin, Star, ArrowRight, Shield } from 'lucide-react';

interface SEOProps {
  city: string;
  areaText: string;
  areas: string[];
}

const SEOContent: React.FC<SEOProps> = ({ city, areaText, areas }) => {
  const { lang, t, toggleLanguage } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col antialiased bg-brand-cream text-black font-sans">
      <Header t={t.header} currentLang={lang} toggleLanguage={toggleLanguage} />
      
      <main className="flex-grow pt-32 pb-20">
        
        {/* Section 1 - Hero */}
        <section className="px-6 py-20 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-[5rem] font-black tracking-tighter text-black mb-6 leading-tight">
            Endreinigung {city}
          </h1>
          <p className="text-xl md:text-2xl text-black/60 font-medium mb-12 max-w-2xl mx-auto">
            Professionelle Endreinigung mit 100% Abnahmegarantie in {city} und Umgebung. Fixpreis, keine versteckten Kosten.
          </p>
          <a href="#quote-form" className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(201,48,44,0.3)]">
            Jetzt Offerte anfordern
            <ArrowRight size={20} />
          </a>
        </section>

        {/* Section 2 - What is Endreinigung */}
        <section className="bg-white py-24 px-6 border-y border-brand-cream">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
              Was ist eine Endreinigung?
            </h2>
            <p className="text-lg text-black/70 font-medium leading-relaxed">
              In der Schweiz sind Mieter gesetzlich verpflichtet, ihre Wohnung bei Auszug in makellosem Zustand zurückzugeben. 
              Eine professionelle Endreinigung in {city} durch UNA Reinigungen garantiert die erfolgreiche Wohnungsabgabe ohne Mängel. 
              Ohne eine gründliche und fachgerechte Reinigung riskieren Mieter, dass die Verwaltung die Abnahme verweigert und Tausende von Franken von der Mietkaution einbehalten werden.
            </p>
          </div>
        </section>

        {/* Section 3 - What is included */}
        <section id="services" className="bg-[#FAF9F6] py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-black mb-6">
                Was ist im Preis inbegriffen?
              </h2>
            </div>
            
            <div className="bg-black rounded-[2.5rem] p-8 md:p-12 text-white mb-10 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-brand-red/20 rounded-xl flex items-center justify-center border border-brand-red/30 text-brand-red">
                      <ShieldCheck size={28} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter">{t.services.mainPackage.title}</h3>
                  </div>
                  <p className="text-white/60 text-lg font-medium leading-relaxed mb-8">
                    {t.services.mainPackage.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {t.services.mainPackage.badges.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/90 font-bold text-xs">
                        <Check size={14} className="text-brand-red" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.services.mainPackage.features.map((section: any, idx: number) => (
                <div key={idx} className="bg-white border border-brand-cream rounded-[2.5rem] p-8 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-brand-cream/50 rounded-xl flex items-center justify-center text-brand-red mb-6">
                     {idx === 0 ? <Home size={24} /> : idx === 1 ? <Building size={24} /> : <Briefcase size={24} />}
                  </div>
                  <h4 className="text-xl font-black tracking-tight mb-6">{section.category}</h4>
                  <ul className="space-y-3">
                    {section.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-black/60">
                         <div className="mt-1"><Check size={14} className="text-brand-red" /></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 - Service areas */}
        <section className="bg-white py-24 px-6 border-y border-brand-cream">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
              Unser Einsatzgebiet in {city}
            </h2>
            <p className="text-xl text-black/70 font-medium">
              {areaText}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((area, idx) => (
                <span key={idx} className="bg-brand-red/10 text-brand-red px-5 py-3 rounded-xl font-bold tracking-wide">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 - Why choose UNA */}
        <section className="bg-brand-cream/30 py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black mb-16 text-center">
              Warum UNA Reinigungen in {city}?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: ShieldCheck, title: "100% Abnahmegarantie" },
                { icon: Zap, title: "Fixpreis-Garantie" },
                { icon: MapPin, title: "Regionale Präsenz" },
                { icon: Star, title: "Über 1000 erfolgreiche Übergaben" },
                { icon: Shield, title: "Vollversichert" }
              ].map((point, idx) => (
                <div key={idx} className="bg-white/70 backdrop-blur-xl border border-white rounded-[2rem] p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 bg-brand-red/5 text-brand-red flex flex-col items-center justify-center rounded-2xl mx-auto mb-4">
                    <point.icon size={28} />
                  </div>
                  <h3 className="text-lg font-black tracking-tight">{point.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 - Google Reviews */}
        <section id="reviews" className="bg-white">
          <Testimonials />
        </section>

        {/* Section 7 - Contact Form */}
        <section id="quote-form" className="py-24 px-6 relative bg-gray-50">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-6">
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
                   Jetzt Endreinigung {city} anfragen
                 </h2>
                 <p className="text-xl text-black/60 font-medium max-w-2xl mx-auto">
                   Fordern Sie jetzt Ihren kostenlosen Fixpreis an. Kein Risiko, keine versteckten Kosten.
                 </p>
              </div>
              <HeroForm t={(t as any).heroForm} />
           </div>
        </section>
        
      </main>
      
      <Footer t={t.footer} currentLang={lang} toggleLanguage={toggleLanguage} onNavigate={(v) => { if (v !== 'main') window.location.href = '/'; }} />
      <StickyCTA />
      <WhatsAppButton />
    </div>
  );
};

export const SEOLandingPage: React.FC<SEOProps> = (props) => {
  return (
    <LanguageProvider>
      <SEOContent {...props} />
    </LanguageProvider>
  );
};
