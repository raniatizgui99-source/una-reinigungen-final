import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  currentLang: 'de' | 'en';
}

const reviews = {
  de: {
    label: 'Was unsere Kunden sagen',
    title: 'Echte Bewertungen, echte Ergebnisse.',
    subtitle: '5.0 Sterne auf Google — von Mietern wie Ihnen.',
    items: [
      {
        name: 'Sandra M.',
        location: 'Regensdorf',
        date: 'März 2026',
        text: 'Unglaublich gründlich! Die Verwaltung hat die Wohnung ohne einzige Beanstandung abgenommen. Meine gesamte Kaution kam zurück. Absolute Empfehlung.',
        rooms: '3.5 Zimmer'
      },
      {
        name: 'Marco T.',
        location: 'Zürich',
        date: 'Februar 2026',
        text: 'Ich war skeptisch wegen der Abnahmegarantie, aber sie haben Wort gehalten. Eine kleine Nachreinigung wurde sofort und kostenlos erledigt. Top Service!',
        rooms: '4.5 Zimmer'
      },
      {
        name: 'Lisa K.',
        location: 'Dielsdorf',
        date: 'Januar 2026',
        text: 'Als berufstätige Mutter hatte ich keine Zeit für die Endreinigung. UNA hat alles perfekt übernommen und war sogar bei der Übergabe dabei. Stressfrei umgezogen!',
        rooms: '5.5 Zimmer'
      },
      {
        name: 'Amir H.',
        location: 'Wettingen',
        date: 'Dezember 2025',
        text: 'Fairer Fixpreis, pünktlich und extrem sauber. Mein Vermieter war bekannt dafür, streng zu sein — trotzdem hat alles beim ersten Mal gepasst.',
        rooms: '2.5 Zimmer'
      }
    ]
  },
  en: {
    label: 'What our customers say',
    title: 'Real reviews, real results.',
    subtitle: '5.0 stars on Google — from tenants like you.',
    items: [
      {
        name: 'Sandra M.',
        location: 'Regensdorf',
        date: 'March 2026',
        text: 'Incredibly thorough! The management accepted the apartment without a single complaint. My entire deposit came back. Absolute recommendation.',
        rooms: '3.5 rooms'
      },
      {
        name: 'Marco T.',
        location: 'Zurich',
        date: 'February 2026',
        text: 'I was skeptical about the handover guarantee, but they kept their word. A small re-clean was done immediately and for free. Top service!',
        rooms: '4.5 rooms'
      },
      {
        name: 'Lisa K.',
        location: 'Dielsdorf',
        date: 'January 2026',
        text: 'As a working mother, I had no time for the final cleaning. UNA handled everything perfectly and was even present at the handover. Moved stress-free!',
        rooms: '5.5 rooms'
      },
      {
        name: 'Amir H.',
        location: 'Wettingen',
        date: 'December 2025',
        text: 'Fair fixed price, on time and extremely clean. My landlord was known to be very strict — yet everything passed the first time.',
        rooms: '2.5 rooms'
      }
    ]
  }
};

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const t = reviews[currentLang];

  return (
    <div id="reviews" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-red">{t.label}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-black">{t.title}</h2>
          <p className="text-black/50 max-w-xl mx-auto font-light text-sm md:text-base">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {t.items.map((review, idx) => (
            <div
              key={idx}
              className="relative bg-brand-cream/30 border border-brand-cream rounded-3xl p-8 md:p-10 hover:shadow-xl hover:shadow-brand-cream/50 transition-all duration-500 group"
            >
              <Quote size={32} className="absolute top-6 right-6 text-brand-red/10 group-hover:text-brand-red/20 transition-colors" />
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#C9302C" className="text-brand-red" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm md:text-base text-black/70 leading-relaxed mb-8 font-normal">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer info */}
              <div className="flex items-center justify-between border-t border-brand-cream pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-black">{review.name}</div>
                    <div className="text-[10px] text-black/40">{review.location} · {review.date}</div>
                  </div>
                </div>
                <div className="bg-white px-3 py-1.5 rounded-lg border border-brand-cream text-[10px] font-bold text-black/40 uppercase tracking-wider">
                  {review.rooms}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
