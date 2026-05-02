import React from 'react';
import { Camera, ArrowRight, MessageCircle } from 'lucide-react';

export const PhotoQuote: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-brand-cream border-y border-white/20">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-center">
        {/* Background Accent */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
            <Camera size={32} />
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-slate-900">
            Offerte per Fotos erhalten
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl font-medium leading-relaxed">
            Schicken Sie uns einfach Fotos Ihrer Wohnung per WhatsApp — wir senden Ihnen innerhalb von 5 Minuten ein verbindliches Angebot.
          </p>

          <a 
            href="https://wa.me/41788171368"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'whatsapp_click', { event_category: 'engagement' });
              }
            }}
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_30px_rgba(37,211,102,0.3)] group"
          >
            <MessageCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            Fotos per WhatsApp senden <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
