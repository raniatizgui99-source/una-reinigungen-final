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
        name: 'Branimir Soldat',
        initial: 'B',
        color: 'bg-purple-600',
        timeAgo: 'vor 2 Jahren',
        text: 'Alles bestens. Das Team war pünktlich vor Ort und kam auch zur Wohnungsabgabe mit einem Mitarbeiter. Beanstandet wurde aber nichts seitens Verwaltung. Vielen Dank und gerne wieder.',
        isLocalGuide: true,
        reviewCount: '12 Rezensionen'
      },
      {
        name: 'Michael Hoffmann',
        initial: 'M',
        color: 'bg-blue-600',
        timeAgo: 'vor 4 Monaten',
        text: 'Tip top, kann ich voll und ganz weiterempfehlen. Hatte schon einige Umzüge hinter mir, aber noch nie so einfach, gut und preiswert wie mit Una-Reinigung.',
        isLocalGuide: false,
        reviewCount: '4 Rezensionen'
      },
      {
        name: 'Jakub Tuleja',
        initial: 'J',
        color: 'bg-green-600',
        timeAgo: 'vor 1 Monat',
        text: 'Bester Preis, TOP-Qualität, mit Garantie für die Abnahme bei der Wohnungsübergabe, hervorragende Reinigung, freundlicher Service. Sehr empfehlenswert.',
        isLocalGuide: true,
        reviewCount: '34 Rezensionen · 5 Fotos'
      },
      {
        name: 'L. Lussi',
        initial: 'L',
        color: 'bg-orange-600',
        timeAgo: 'vor 3 Wochen',
        text: 'Ich bin sehr zufrieden mit der Endreinigung meiner Wohnung. Herr Lukac war pünktlich und der Kontakt sehr angenehm. Kann ihn nur empfehlen.',
        isLocalGuide: false,
        reviewCount: '2 Rezensionen'
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
        name: 'Branimir Soldat',
        initial: 'B',
        color: 'bg-purple-600',
        timeAgo: '2 years ago',
        text: 'Everything perfect. The team arrived on time and even attended the apartment handover with an employee. The administration had zero complaints. Thank you very much, gladly again.',
        isLocalGuide: true,
        reviewCount: '12 reviews'
      },
      {
        name: 'Michael Hoffmann',
        initial: 'M',
        color: 'bg-blue-600',
        timeAgo: '4 months ago',
        text: 'Tip top, I can fully recommend them. I have had several moves in the past, but it was never as easy, good and affordable as with Una-Reinigung.',
        isLocalGuide: false,
        reviewCount: '4 reviews'
      },
      {
        name: 'Jakub Tuleja',
        initial: 'J',
        color: 'bg-green-600',
        timeAgo: 'a month ago',
        text: 'Best price, TOP quality, with a guarantee for acceptance at the apartment handover, excellent cleaning, friendly service. Highly recommended.',
        isLocalGuide: true,
        reviewCount: '34 reviews · 5 photos'
      },
      {
        name: 'L. Lussi',
        initial: 'L',
        color: 'bg-orange-600',
        timeAgo: '3 weeks ago',
        text: 'I am very satisfied with the final cleaning of my apartment. Mr. Lukac was punctual and the contact was very pleasant. Can only recommend him.',
        isLocalGuide: false,
        reviewCount: '2 reviews'
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
