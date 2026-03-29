import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface LegalPageProps {
  title: string;
  content: React.ReactNode;
  onBack: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, content, onBack }) => {
  return (
    <div className="min-h-screen bg-brand-cream pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-red font-bold mb-12 hover:gap-3 transition-all"
        >
          <ChevronLeft size={20} />
          Zurück / Back
        </button>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-8 md:mb-12 tracking-tight text-black">{title}</h1>
        
        <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-brand-cream shadow-xl shadow-brand-cream/50 text-black/70 leading-relaxed space-y-8">
          {content}
        </div>
      </div>
    </div>
  );
};

export const ImprintContent: React.FC<{ t: any }> = ({ t }) => (
  <div className="space-y-6">
    <section>
      <h2 className="text-xl font-bold text-black mb-4">{t.company}</h2>
      <p>{t.address}</p>
      <p>{t.city}</p>
      <p>{t.owner}</p>
    </section>
    
    <section>
      <h2 className="text-xl font-bold text-black mb-4">{t.contact}</h2>
      <p>{t.phone}</p>
      <p>{t.email}</p>
    </section>
    
    <section>
      <h2 className="text-xl font-bold text-black mb-4">{t.disclaimer}</h2>
      <p className="text-sm">{t.disclaimerText}</p>
    </section>
  </div>
);

export const PrivacyContent: React.FC<{ t: any }> = ({ t }) => (
  <div className="space-y-6">
    <p>{t.intro}</p>
    
    <section>
      <h2 className="text-xl font-bold text-black mb-4">{t.collection}</h2>
      <p>{t.collectionText}</p>
    </section>
    
    <section>
      <h2 className="text-xl font-bold text-black mb-4">{t.cookies}</h2>
      <p>{t.cookiesText}</p>
    </section>
    
    <section>
      <h2 className="text-xl font-bold text-black mb-4">{t.rights}</h2>
      <p>{t.rightsText}</p>
    </section>
  </div>
);
