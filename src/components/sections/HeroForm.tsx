'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroFormProps {
  t: any;
}

export const HeroForm: React.FC<HeroFormProps> = ({ t }) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    rooms: '',
    zip: '',
    name: '',
    email: '',
    phone: '',
  });

  const isStep1Valid = formData.rooms !== '' && formData.zip.length >= 4;
  const isStep2Valid = formData.name.length > 2 && formData.email.includes('@') && formData.phone.length > 5;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep2Valid) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formData: {
            ...formData,
            date: 'TBD',
            category: 'Quick Quote Landing',
            addons: [],
            message: 'Submitted via simplified Hero Form.'
          }
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
      // Fail open so users don't get stuck if SMTP fails
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-[2rem] p-10 text-center animate-fade-in shadow-[0_40px_80px_rgba(0,0,0,0.12)] border border-[#e5e5e5] max-w-lg mx-auto w-full relative z-20">
        <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-red shadow-inner">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-black text-black mb-4 tracking-tight">{t.successTitle}</h3>
        <p className="text-black/60 text-lg font-medium">{t.successText}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-[#f0f0f0] relative overflow-visible w-full max-w-2xl mx-auto z-20">
      
      {/* Decorative Outer Glow tied to the form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-red/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="space-y-8">
        <div className="flex items-center justify-between pb-6 border-b border-[#f5f5f5]">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-black">{t.title}</h3>
          <div className="text-[10px] font-black text-brand-red uppercase tracking-[0.2em] bg-brand-red/10 px-4 py-1.5 rounded-full">
            {step === 1 ? t.step1 : t.step2}
          </div>
        </div>

        {step === 1 ? (
          <div className="space-y-6 animate-fade-in">
            <div>
              <label className="block text-xs font-black text-black/40 uppercase tracking-widest mb-3">{t.rooms}</label>
              <div className="grid grid-cols-3 gap-3">
                {t.roomsOptions?.map((room: string) => (
                  <button
                    key={room}
                    type="button"
                    onClick={() => setFormData({ ...formData, rooms: room })}
                    className={`p-4 rounded-2xl border-2 text-base font-bold transition-all duration-200 ${
                      formData.rooms === room
                        ? 'bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/30 scale-[1.02]'
                        : 'bg-zinc-50 border-transparent text-zinc-600 hover:bg-zinc-100'
                    }`}
                  >
                    {room}
                  </button>
                )) || (
                  ['1.5-2.5', '3.5-4.5', '5.5+'].map((room) => (
                    <button
                      key={room}
                      type="button"
                      onClick={() => setFormData({ ...formData, rooms: room })}
                      className={`p-4 rounded-2xl border-2 text-base font-bold transition-all duration-200 ${
                        formData.rooms === room
                          ? 'bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/30 scale-[1.02]'
                          : 'bg-zinc-50 border-transparent text-zinc-600 hover:bg-zinc-100'
                      }`}
                    >
                      {room}
                    </button>
                  ))
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-black/40 uppercase tracking-widest mb-3">{t.zip}</label>
              <input
                type="text"
                placeholder={t.zipPlaceholder}
                value={formData.zip}
                onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                className="w-full bg-zinc-50 border-2 border-transparent focus:border-brand-red rounded-2xl p-5 text-black focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-red/10 transition-all font-bold text-xl placeholder:text-zinc-400 placeholder:font-medium shadow-inner"
              />
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!isStep1Valid}
              className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 group ${
                isStep1Valid 
                ? 'bg-black text-white hover:bg-zinc-800 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1' 
                : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
              }`}
            >
              {t.next}
              <ArrowRight size={22} className={isStep1Valid ? 'group-hover:translate-x-1 transition-transform' : ''} />
            </button>
          </div>
        ) : (
          <div className="space-y-5 animate-fade-in">
            <input
              type="text"
              placeholder={t.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-zinc-50 border-2 border-transparent focus:border-brand-red rounded-2xl p-5 text-black focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-red/10 transition-all font-bold text-lg placeholder:text-zinc-400 placeholder:font-medium shadow-inner"
            />
            <input
              type="email"
              placeholder={t.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-zinc-50 border-2 border-transparent focus:border-brand-red rounded-2xl p-5 text-black focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-red/10 transition-all font-bold text-lg placeholder:text-zinc-400 placeholder:font-medium shadow-inner"
            />
            <input
              type="tel"
              placeholder={t.phone}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-zinc-50 border-2 border-transparent focus:border-brand-red rounded-2xl p-5 text-black focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-red/10 transition-all font-bold text-lg placeholder:text-zinc-400 placeholder:font-medium shadow-inner"
            />

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full sm:w-auto px-8 py-5 rounded-2xl font-bold text-zinc-500 bg-zinc-50 hover:bg-zinc-100 hover:text-black transition-all border-2 border-transparent"
              >
                {t.back}
              </button>
              <button
                onClick={handleSubmit}
                disabled={!isStep2Valid || isLoading}
                className={`flex-1 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                  isStep2Valid 
                  ? 'bg-brand-red text-white hover:bg-red-700 shadow-[0_10px_30px_rgba(201,48,44,0.3)] hover:shadow-[0_15px_40px_rgba(201,48,44,0.4)] hover:-translate-y-1' 
                  : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                }`}
              >
                {isLoading ? (
                   <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                   t.submit
                )}
              </button>
            </div>
            
            <p className="text-center text-xs font-bold text-black/40 pt-4 uppercase tracking-widest">{t.successText}</p>
          </div>
        )}
      </div>
    </div>
  );
};
