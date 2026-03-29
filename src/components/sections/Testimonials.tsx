'use client';
import React, { useState } from 'react';
import { Star, ThumbsUp, MoreVertical } from 'lucide-react';

interface TestimonialsProps {
  currentLang: 'de' | 'en';
}

const reviews = {
  de: {
    label: 'Kundenrezensionen',
    title: 'Das sagen unsere Kunden auf Google',
    subtitle: 'Ausgezeichnet mit 5.0 Sternen',
    readMore: 'Mehr ansehen',
    items: [
      {
        name: 'Sandra M.',
        initial: 'S',
        color: 'bg-purple-600',
        timeAgo: 'vor 2 Wochen',
        text: 'Unglaublich gründlich! Die Verwaltung hat die Wohnung ohne einzige Beanstandung abgenommen. Meine gesamte Kaution kam zurück. Absolute Empfehlung. Das Team war pünktlich, freundlich und hat selbst die schwierigsten Flecken im Backofen und Bad komplett entfernt. Ich musste mich um rein gar nichts kümmern.',
        isLocalGuide: true,
        reviewCount: '14 Rezensionen'
      },
      {
        name: 'Marco T.',
        initial: 'M',
        color: 'bg-blue-600',
        timeAgo: 'vor 1 Monat',
        text: 'Ich war skeptisch wegen der Abnahmegarantie, aber sie haben Wort gehalten. Eine kleine Nachreinigung wurde sofort und kostenlos erledigt. Top Service! Die Kommunikation im Vorfeld war extrem professionell und der Preis war genau wie auf der Offerte – keine bösen Überraschungen.',
        isLocalGuide: false,
        reviewCount: '3 Rezensionen'
      },
      {
        name: 'Lisa K.',
        initial: 'L',
        color: 'bg-green-600',
        timeAgo: 'vor 2 Monaten',
        text: 'Als berufstätige Mutter hatte ich keine Zeit für die Endreinigung. UNA hat alles perfekt übernommen und war sogar bei der Übergabe dabei. Stressfrei umgezogen! Werde sie bei meinem nächsten Umzug definitiv wieder buchen.',
        isLocalGuide: true,
        reviewCount: '42 Rezensionen · 18 Fotos'
      },
      {
        name: 'Amir H.',
        initial: 'A',
        color: 'bg-orange-600',
        timeAgo: 'vor 3 Monaten',
        text: 'Fairer Fixpreis, pünktlich und extrem sauber. Mein Vermieter war bekannt dafür, streng zu sein — trotzdem hat alles beim ersten Mal gepasst. Sehr zu empfehlen für alle, die auf Nummer sicher gehen wollen bei der Wohnungsübergabe.',
        isLocalGuide: false,
        reviewCount: '1 Rezension'
      }
    ]
  },
  en: {
    label: 'Customer Reviews',
    title: 'What our customers say on Google',
    subtitle: 'Rated 5.0 Stars',
    readMore: 'Read more',
    items: [
      {
        name: 'Sandra M.',
        initial: 'S',
        color: 'bg-purple-600',
        timeAgo: '2 weeks ago',
        text: 'Incredibly thorough! The management accepted the apartment without a single complaint. My entire deposit came back. Absolute recommendation. The team was punctual, friendly and completely removed even the toughest stains in the oven and bathroom.',
        isLocalGuide: true,
        reviewCount: '14 reviews'
      },
      {
        name: 'Marco T.',
        initial: 'M',
        color: 'bg-blue-600',
        timeAgo: '1 month ago',
        text: 'I was skeptical about the handover guarantee, but they kept their word. A small re-clean was done immediately and for free. Top service! The communication beforehand was extremely professional and the price was exactly as formulated.',
        isLocalGuide: false,
        reviewCount: '3 reviews'
      },
      {
        name: 'Lisa K.',
        initial: 'L',
        color: 'bg-green-600',
        timeAgo: '2 months ago',
        text: 'As a working mother, I had no time for the final cleaning. UNA handled everything perfectly and was even present at the handover. Moved stress-free! I will definitely book them again for my next move.',
        isLocalGuide: true,
        reviewCount: '42 reviews · 18 photos'
      },
      {
        name: 'Amir H.',
        initial: 'A',
        color: 'bg-orange-600',
        timeAgo: '3 months ago',
        text: 'Fair fixed price, on time and extremely clean. My landlord was known to be very strict — yet everything passed the first time. Highly recommended for anyone who wants to play it safe during the apartment handover.',
        isLocalGuide: false,
        reviewCount: '1 review'
      }
    ]
  }
};

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const ReviewCard = ({ review, readMoreText }: { review: any, readMoreText: string }) => {
  const [expanded, setExpanded] = useState(false);
  const textThreshold = 140;
  const isLong = review.text.length > textThreshold;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col font-sans hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={"w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-medium " + review.color}>
            {review.initial}
          </div>
          <div>
            <div className="font-semibold text-[15px] text-gray-900 leading-tight">{review.name}</div>
            <div className="text-[13px] text-gray-500 flex items-center gap-1 mt-0.5">
              {review.isLocalGuide && (
                <>
                   <span className="font-medium">Local Guide</span>
                   <span>·</span>
                </>
              )}
              <span>{review.reviewCount}</span>
            </div>
          </div>
        </div>
        <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full transition-colors">
           <MoreVertical size={20} />
        </button>
      </div>

      {/* Stars & Time */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#fbbc04" stroke="#fbbc04" />
          ))}
        </div>
        <span className="text-[13px] text-gray-500">{review.timeAgo}</span>
      </div>

      {/* Review Text */}
      <div className="text-[15px] text-gray-800 leading-[1.6] mb-4 flex-grow">
        {expanded || !isLong ? (
          review.text
        ) : (
          <>
            {review.text.substring(0, textThreshold)}...
            <button 
              onClick={() => setExpanded(true)}
              className="text-gray-500 font-medium hover:underline ml-1"
            >
              {readMoreText}
            </button>
          </>
        )}
      </div>

      {/* Action Bar */}
      <div className="flex items-center text-gray-400 text-sm mt-auto pt-4 border-t border-gray-100/50">
         <button className="flex items-center gap-2 hover:bg-gray-50 px-3 py-1.5 rounded-full transition-colors border border-gray-200">
            <ThumbsUp size={16} />
            <span className="font-medium text-gray-600">Hilfreich</span>
         </button>
      </div>

    </div>
  );
};

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const t = reviews[currentLang];

  return (
    <div id="reviews" className="bg-[#f8f9fa] py-32 md:py-40 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Google Reviews Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 mb-8">
             <GoogleIcon />
             <span className="font-bold text-gray-800 text-sm md:text-base tracking-wide">Google Rezensionen</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black mb-6">
            {t.title}
          </h2>
          
          <div className="flex items-center gap-4 bg-white px-8 py-4 rounded-3xl shadow-md border border-gray-100">
             <div className="text-4xl font-black text-gray-900">5.0</div>
             <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#fbbc04" stroke="#fbbc04" />
                  ))}
                </div>
                <div className="text-sm font-medium text-gray-500 text-left">
                  Basierend auf echten Kunden
                </div>
             </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((review, idx) => (
            <ReviewCard key={idx} review={review} readMoreText={t.readMore} />
          ))}
        </div>
        
      </div>
    </div>
  );
};
