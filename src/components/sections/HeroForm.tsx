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
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center animate-fade-in shadow-2xl">
        <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-red">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-black text-white mb-3">{t.successTitle}</h3>
        <p className="text-white/70">{t.successText}</p>
      </div>
    );
  }

  return (
    <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-brand-red/30 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl sm:text-2xl font-black text-white">{t.title}</h3>
          <div className="text-xs font-bold text-white/40 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">
            {step === 1 ? t.step1 : t.step2}
          </div>
        </div>

        {step === 1 ? (
          <div className="space-y-6 animate-fade-in">
            <div>
              <label className="block text-xs font-bold text-white/60 mb-3">{t.rooms}</label>
              <div className="grid grid-cols-3 gap-3">
                {t.roomsOptions?.map((room: string) => (
                  <button
                    key={room}
                    type="button"
                    onClick={() => setFormData({ ...formData, rooms: room })}
                    className={`p-3 rounded-xl border text-sm font-bold transition-all ${
                      formData.rooms === room
                        ? 'bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/30 scale-[1.02]'
                        : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/30'
                    }`}
                  >
                    {room}
                  </button>
                )) || (
                  // Fallback if translations aren't loaded yet
                  ['1.5-2.5', '3.5-4.5', '5.5+'].map((room) => (
                    <button
                      key={room}
                      type="button"
                      onClick={() => setFormData({ ...formData, rooms: room })}
                      className={`p-3 rounded-xl border text-sm font-bold transition-all ${
                        formData.rooms === room
                          ? 'bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/30 scale-[1.02]'
                          : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/30'
                      }`}
                    >
                      {room}
                    </button>
                  ))
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-white/60 mb-3">{t.zip}</label>
              <input
                type="text"
                placeholder={t.zipPlaceholder}
                value={formData.zip}
                onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                className="w-full bg-white/5 border-2 border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-red/50 focus:bg-white/10 transition-all font-medium text-lg placeholder:text-white/20"
              />
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!isStep1Valid}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group ${
                isStep1Valid 
                ? 'bg-white text-black hover:bg-white/90 shadow-xl' 
                : 'bg-white/10 text-white/30 cursor-not-allowed'
              }`}
            >
              {t.next}
              <ArrowRight size={18} className={isStep1Valid ? 'group-hover:translate-x-1 transition-transform' : ''} />
            </button>
          </div>
        ) : (
          <div className="space-y-4 animate-fade-in">
            <input
              type="text"
              placeholder={t.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border-2 border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-red/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/40"
            />
            <input
              type="email"
              placeholder={t.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border-2 border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-red/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/40"
            />
            <input
              type="tel"
              placeholder={t.phone}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-white/5 border-2 border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-red/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/40"
            />

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-4 rounded-xl font-bold text-white/60 bg-white/5 hover:bg-white/10 hover:text-white transition-all border border-white/10"
              >
                {t.back}
              </button>
              <button
                onClick={handleSubmit}
                disabled={!isStep2Valid || isLoading}
                className={`flex-1 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  isStep2Valid 
                  ? 'bg-brand-red text-white hover:bg-red-700 shadow-xl shadow-brand-red/20' 
                  : 'bg-white/10 text-white/30 cursor-not-allowed'
                }`}
              >
                {isLoading ? (
                   <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                   t.submit
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
