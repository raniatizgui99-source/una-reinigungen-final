import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight, ChevronLeft, Send, MessageSquare } from 'lucide-react';

interface LeadFormProps {
  t: any;
  currentLang: 'de' | 'en';
}

type FormData = {
  rooms: string;
  addons: string[];
  date: string;
  zip: string;
  category: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const LeadForm: React.FC<LeadFormProps> = ({ t, currentLang }) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    rooms: '',
    addons: [],
    date: '',
    zip: '',
    category: t.categories[0],
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    // Basic validation for Swiss numbers and general formats
    return /^(\+41|0)?[0-9\s\-]{7,15}$/.test(phone.replace(/\s/g, ''));
  };

  const isStep1Valid = formData.rooms !== '';
  const isStep2Valid = formData.date !== '' && formData.zip.trim().length >= 4;
  const isStep3Valid = 
    formData.name.trim().length > 2 && 
    validateEmail(formData.email) && 
    validatePhone(formData.phone);

  const canGoNext = step === 1 ? isStep1Valid : step === 2 ? isStep2Valid : isStep3Valid;

  const nextStep = () => {
    if (canGoNext) {
      setStep(prev => Math.min(prev + 1, 3));
    }
  };
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isStep3Valid) {
      try {
        const response = await fetch('/api/submit-lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ formData }),
        });
        
        if (response.ok) {
          setIsSubmitted(true);
        } else {
          console.error('Failed to submit form');
          // Fallback to success UI even if email fails to not block user
          setIsSubmitted(true);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setIsSubmitted(true);
      }
    }
  };

  const handleAddonToggle = (addon: string) => {
    setFormData(prev => ({
      ...prev,
      addons: prev.addons.includes(addon) 
        ? prev.addons.filter(a => a !== addon) 
        : [...prev.addons, addon]
    }));
  };

  const renderStep1 = () => (
    <div className="space-y-8 md:space-y-10 animate-fade-in text-left">
      <div>
        <label className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-red mb-4 md:mb-6">{t.apartmentSize}</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {t.rooms.map((room: string) => (
            <button
              key={room}
              type="button"
              onClick={() => setFormData({ ...formData, rooms: room })}
              className={`p-4 md:p-5 rounded-[1.2rem] md:rounded-[1.5rem] border-2 text-xs md:text-sm font-bold transition-all duration-300 ${
                formData.rooms === room 
                  ? 'bg-white text-black border-white shadow-xl shadow-white/10' 
                  : 'border-white/10 hover:border-white/30 text-white/40'
              }`}
            >
              {room}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-red mb-4 md:mb-6">{t.addons}</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {t.addonList.map((addon: string) => (
            <button
              key={addon}
              type="button"
              onClick={() => handleAddonToggle(addon)}
              className={`group flex items-center justify-between p-4 md:p-5 rounded-[1.2rem] md:rounded-[1.5rem] border-2 text-xs md:text-sm font-bold transition-all duration-300 ${
                formData.addons.includes(addon)
                  ? 'bg-white/10 border-white text-white'
                  : 'border-white/10 text-white/40 hover:border-white/20'
              }`}
            >
              <span className="text-left pr-2">{addon}</span>
              <div className={`w-5 h-5 md:w-6 md:h-6 rounded-lg border-2 flex items-center justify-center transition-colors shrink-0 ${
                formData.addons.includes(addon) ? 'bg-white border-white' : 'border-white/10 group-hover:border-white/20'
              }`}>
                {formData.addons.includes(addon) && <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-brand-red rounded-full" />}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6 md:space-y-10 animate-fade-in text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        <div className="relative">
          <label className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-red mb-3 md:mb-4">{t.date}</label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-red pointer-events-none" size={18} />
            <input 
              type="date"
              className="w-full bg-white/5 border-2 border-white/10 rounded-xl md:rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-brand-red/50 transition-all appearance-none text-sm md:text-base"
              style={{ colorScheme: 'dark' }}
              value={formData.date}
              onChange={e => setFormData({...formData, date: e.target.value})}
            />
          </div>
        </div>
        <div>
          <label className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-red mb-3 md:mb-4">{t.zip}</label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-red pointer-events-none" size={18} />
            <input 
              type="text"
              placeholder={t.zip}
              className="w-full bg-white/5 border-2 border-white/10 rounded-xl md:rounded-2xl p-4 pl-12 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red/50 transition-all text-sm md:text-base"
              value={formData.zip}
              onChange={e => setFormData({...formData, zip: e.target.value})}
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <label className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-red mb-3 md:mb-4">{t.category}</label>
        <div className="relative">
          <select 
            className="w-full bg-white/5 border-2 border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 text-white focus:outline-none focus:border-brand-red/50 transition-all appearance-none cursor-pointer text-sm md:text-base pr-12"
            value={formData.category}
            onChange={e => setFormData({...formData, category: e.target.value})}
          >
            {t.categories.map((cat: string) => (
              <option key={cat} value={cat} className="bg-black">{cat}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
            <ChevronRight size={18} className="rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6 animate-fade-in text-left">
      <div>
        <label className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-red mb-3 md:mb-4">{t.name}</label>
        <input 
          type="text"
          placeholder="Vorname Nachname"
          className="w-full bg-white/5 border-2 border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red/50 transition-all text-sm md:text-base"
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-red mb-3 md:mb-4">{t.email}</label>
          <input 
            type="email"
            placeholder="beispiel@mail.ch"
            className="w-full bg-white/5 border-2 border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red/50 transition-all text-sm md:text-base"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-red mb-3 md:mb-4">{t.phone}</label>
          <input 
            type="tel"
            placeholder="+41 00 000 00 00"
            className="w-full bg-white/5 border-2 border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red/50 transition-all text-sm md:text-base"
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
          />
        </div>
      </div>
      <div>
        <label className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-red mb-3 md:mb-4 flex items-center gap-2">
          {t.message} <span className="text-white/30 normal-case font-normal">{t.optional}</span>
        </label>
        <textarea 
          placeholder={t.messagePlaceholder}
          className="w-full bg-white/5 border-2 border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red/50 transition-all min-h-[100px] md:min-h-[120px] resize-none text-sm md:text-base"
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-8 tracking-tight">{t.title}</h2>
        <div className="flex justify-center items-center space-x-3 md:space-x-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex flex-col items-center gap-2 md:gap-3">
              <div className={`w-8 md:w-12 h-1 rounded-full transition-all duration-700 ${
                step >= i ? 'bg-brand-red shadow-[0_0_15px_rgba(201,48,44,0.5)]' : 'bg-white/10'
              }`} />
              <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-widest ${step >= i ? 'text-white' : 'text-white/20'}`}>
                {t.stepLabels[i-1]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black p-6 md:p-16 rounded-[2rem] md:rounded-[4rem] border border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
        {isSubmitted ? (
          <div className="py-12 md:py-20 text-center space-y-8 animate-fade-in">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-red rounded-full flex items-center justify-center text-white mx-auto shadow-2xl shadow-brand-red/20">
              <Send size={32} className="md:w-10 md:h-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white px-4">{t.success}</h3>
              <p className="text-white/40 max-w-sm mx-auto font-medium text-sm md:text-base px-6">
                {currentLang === 'de' 
                  ? 'Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.'
                  : 'We have received your request and will get back to you within 24 hours.'}
              </p>
            </div>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
                setFormData({
                  rooms: '',
                  addons: [],
                  date: '',
                  zip: '',
                  category: t.categories[0],
                  name: '',
                  email: '',
                  phone: '',
                  message: '',
                });
              }}
              className="text-brand-red font-bold uppercase tracking-widest text-[10px] md:text-xs hover:text-white transition-colors"
            >
              {currentLang === 'de' ? 'Neue Anfrage' : 'New Request'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="min-h-[420px] sm:min-h-[380px] md:min-h-[400px] flex flex-col justify-center">
               {step === 1 && renderStep1()}
               {step === 2 && renderStep2()}
               {step === 3 && renderStep3()}
            </div>

            <div className="mt-12 md:mt-16 flex items-center justify-between border-t border-white/10 pt-8 md:pt-10">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-1 md:gap-2 text-white/40 font-bold px-3 py-2 hover:text-white transition-colors text-sm md:text-base"
                >
                  <ChevronLeft size={18} />
                  {t.back}
                </button>
              ) : <div />}

              {canGoNext ? (
                <button
                  type={step === 3 ? "submit" : "button"}
                  onClick={step === 3 ? undefined : nextStep}
                  className="group font-bold px-8 md:px-12 py-4 md:py-5 rounded-[1.2rem] md:rounded-[1.5rem] transition-all transform active:scale-95 flex items-center gap-2 md:gap-3 shadow-2xl bg-brand-red text-white hover:bg-red-700 shadow-brand-red/20 animate-in fade-in zoom-in duration-300 text-sm md:text-base"
                >
                  {step === 3 ? t.submit : t.next}
                  {step === 3 ? <Send size={18} /> : <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              ) : (
                <div className="h-[52px] md:h-[64px]" /> // Placeholder to keep layout stable
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
