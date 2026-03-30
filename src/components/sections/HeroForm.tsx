'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, User, Mail, Phone, Sparkles } from 'lucide-react';

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
            category: 'Premium Hero Quote',
            addons: [],
            message: 'Submitted via V3 Premium Hero Form.'
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
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-[2.5rem] p-12 text-center animate-fade-in shadow-[0_20px_50px_rgba(0,0,0,0.2),_0_0_0_1px_rgba(0,0,0,0.05)] w-full max-w-xl mx-auto relative z-20">
        <div className="w-24 h-24 bg-gradient-to-br from-green-50 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-500 shadow-inner border border-emerald-100/50">
          <CheckCircle2 size={40} className="stroke-[2.5]" />
        </div>
        <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">{t.successTitle}</h3>
        <p className="text-gray-500 text-lg font-medium">{t.successText}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.2),_0_0_0_1px_rgba(0,0,0,0.05)] relative overflow-visible w-full max-w-[42rem] mx-auto z-20 font-sans">
      
      <div className="space-y-10">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 pb-8">
          <h3 className="text-2xl sm:text-[32px] font-black tracking-tighter text-gray-900 leading-tight">
            {t.title}
          </h3>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full shrink-0">
             <div className={"w-2 h-2 rounded-full " + (step === 1 ? 'bg-brand-red animate-pulse' : 'bg-green-500')}></div>
             <span className="text-[11px] font-bold text-gray-600 uppercase tracking-widest">
                {step === 1 ? t.step1 : t.step2}
             </span>
          </div>
        </div>

        {step === 1 ? (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Ultra Premium Segmented Control / Cards */}
            <div>
              <label className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest mb-4">
                 <Sparkles size={14} className="text-gray-300" />
                 {t.rooms}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['1.5-2.5', '3.5-4.5', '5.5+'].map((room) => (
                  <button
                    key={room}
                    type="button"
                    onClick={() => setFormData({ ...formData, rooms: room })}
                    className={"relative p-5 rounded-[1.25rem] border-2 text-base font-bold transition-all duration-300 overflow-hidden " + (
                      formData.rooms === room
                        ? 'bg-brand-red/5 border-brand-red text-brand-red shadow-[0_8px_20px_rgba(201,48,44,0.12)] scale-[1.02]'
                        : 'bg-gray-50/50 border-gray-100 text-gray-500 hover:bg-gray-50 hover:border-gray-200 hover:shadow-sm'
                    )}
                  >
                    {formData.rooms === room && (
                       <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-brand-red/10 to-transparent rounded-bl-full"></div>
                    )}
                    <span className="relative z-10">{room}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Icon-Anchored Deep Input */}
            <div>
              <label className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest mb-4">
                 {t.zip}
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <MapPin size={22} className="text-gray-400 group-focus-within:text-brand-red transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder={t.zipPlaceholder}
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-red rounded-[1.5rem] py-5 pl-14 pr-5 text-gray-900 focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-red/10 transition-all font-bold text-xl placeholder:text-gray-400 placeholder:font-medium shadow-inner"
                />
              </div>
            </div>

            {/* Super CTA */}
            <button
              onClick={() => setStep(2)}
              disabled={!isStep1Valid}
              className={"w-full py-6 rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-3 transition-all duration-500 group relative overflow-hidden " + (
                isStep1Valid 
                ? 'bg-gray-900 text-white hover:bg-black shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 cursor-pointer' 
                : 'bg-gray-100 text-gray-300 cursor-not-allowed'
              )}
            >
              {isStep1Valid && (
                 <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              )}
              <span className="relative z-10">{t.next}</span>
              <ArrowRight size={22} className={"relative z-10 " + (isStep1Valid ? 'group-hover:translate-x-1.5 transition-transform duration-300' : '')} />
            </button>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            
            <div className="space-y-4">
               {/* Name Input */}
               <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <User size={22} className="text-gray-400 group-focus-within:text-brand-red transition-colors" />
                  </div>
                  <input
                    type="text"
                    placeholder={t.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-red rounded-[1.25rem] py-4 pl-14 pr-5 text-gray-900 focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-red/10 transition-all font-bold text-lg placeholder:text-gray-400 placeholder:font-medium shadow-inner"
                  />
               </div>
               
               {/* Email Input */}
               <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Mail size={22} className="text-gray-400 group-focus-within:text-brand-red transition-colors" />
                  </div>
                  <input
                    type="email"
                    placeholder={t.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-red rounded-[1.25rem] py-4 pl-14 pr-5 text-gray-900 focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-red/10 transition-all font-bold text-lg placeholder:text-gray-400 placeholder:font-medium shadow-inner"
                  />
               </div>
               
               {/* Phone Input */}
               <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Phone size={22} className="text-gray-400 group-focus-within:text-brand-red transition-colors" />
                  </div>
                  <input
                    type="tel"
                    placeholder={t.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-red rounded-[1.25rem] py-4 pl-14 pr-5 text-gray-900 focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-red/10 transition-all font-bold text-lg placeholder:text-gray-400 placeholder:font-medium shadow-inner"
                  />
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full sm:w-auto px-8 py-5 rounded-[1.25rem] font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 hover:text-gray-900 transition-all border-2 border-transparent"
              >
                {t.back}
              </button>
              <button
                onClick={handleSubmit}
                disabled={!isStep2Valid || isLoading}
                className={"flex-1 py-5 rounded-[1.25rem] font-black text-lg flex items-center justify-center gap-3 transition-all duration-500 overflow-hidden relative group " + (
                  isStep2Valid 
                  ? 'bg-brand-red text-white hover:bg-red-700 shadow-[0_15px_40px_rgba(201,48,44,0.3)] hover:shadow-[0_20px_50px_rgba(201,48,44,0.4)] hover:-translate-y-1' 
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                )}
              >
                {isLoading ? (
                   <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                   <>
                     {isStep2Valid && (
                       <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                     )}
                     <span className="relative z-10">{t.submit}</span>
                     <Sparkles size={20} className="relative z-10" />
                   </>
                )}
              </button>
            </div>
            
            <p className="text-center text-[11px] font-bold text-gray-400 pt-6 uppercase tracking-[0.15em]">{t.successText}</p>
          </div>
        )}
      </div>
    </div>
  );
};
