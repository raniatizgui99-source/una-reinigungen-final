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
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 px-4 py-2 rounded-full shrink-0 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
             <div className={"w-2 h-2 rounded-full " + (step === 1 ? 'bg-brand-red animate-pulse' : 'bg-green-500')}></div>
             <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
                {step === 1 ? t.step1 : t.step2}
             </span>
          </div>
        </div>

        {step === 1 ? (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Ultra Premium Segmented Control / Cards */}
            <div>
              <label className="flex items-center gap-2 text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                 <Sparkles size={14} className="text-amber-400" />
                 {t.rooms}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['1.5-2.5', '3.5-4.5', '5.5+'].map((room) => (
                  <button
                    key={room}
                    type="button"
                    onClick={() => setFormData({ ...formData, rooms: room })}
                    className={"relative p-5 rounded-[1.25rem] border-2 text-base font-black transition-all duration-300 overflow-hidden group " + (
                      formData.rooms === room
                        ? 'bg-brand-red border-brand-red text-white shadow-[0_8px_20px_rgba(201,48,44,0.3),inset_0_2px_0_rgba(255,255,255,0.2)] scale-[1.02] -translate-y-1'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]'
                    )}
                  >
                    <span className="relative z-10 flex flex-col items-center justify-center gap-1.5">
                       {formData.rooms === room ? (
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mb-1 shadow-inner">
                             <CheckCircle2 size={16} className="text-white" />
                          </div>
                       ) : (
                          <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mb-1 group-hover:bg-slate-100 transition-colors">
                             <span className="text-slate-400 font-bold opacity-50">#</span>
                          </div>
                       )}
                       {room}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Icon-Anchored Deep Input a la Apple */}
            <div>
              <label className="flex items-center gap-2 text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                 {t.zip}
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Apple 2.5D Style Icon Container */}
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                    <MapPin size={20} className="text-white drop-shadow-sm" />
                  </div>
                </div>
                {/* Recessed physical input */}
                <input
                  type="text"
                  placeholder={t.zipPlaceholder}
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-brand-red rounded-[1.5rem] py-5 pl-16 pr-5 text-gray-900 focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-red/10 transition-all font-black text-xl placeholder:text-slate-400/70 placeholder:font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                />
              </div>
            </div>

            {/* Super CTA */}
            <button
              onClick={() => setStep(2)}
              disabled={!isStep1Valid}
              className={"w-full py-6 rounded-[1.5rem] font-black text-[19px] flex items-center justify-center gap-3 transition-all duration-500 group relative overflow-hidden " + (
                isStep1Valid 
                ? 'bg-gradient-to-b from-gray-800 to-black text-white hover:from-black hover:to-black shadow-[0_15px_40px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-1 cursor-pointer' 
                : 'bg-slate-100/80 border border-slate-200/50 text-slate-400 cursor-not-allowed shadow-none'
              )}
            >
              {isStep1Valid && (
                 <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              )}
              <span className="relative z-10 drop-shadow-sm">{t.next}</span>
              <ArrowRight size={22} className={"relative z-10 " + (isStep1Valid ? 'group-hover:translate-x-1.5 transition-transform duration-300' : '')} />
            </button>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            
            <div className="space-y-5">
               {/* Name Input */}
               <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                       <User size={20} className="text-white drop-shadow-sm" />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder={t.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-brand-red rounded-[1.25rem] py-4 pl-16 pr-5 text-gray-900 focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-red/10 transition-all font-bold text-lg placeholder:text-slate-400/70 placeholder:font-semibold shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                  />
               </div>
               
               {/* Email Input */}
               <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                       <Mail size={20} className="text-white drop-shadow-sm" />
                    </div>
                  </div>
                  <input
                    type="email"
                    placeholder={t.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-brand-red rounded-[1.25rem] py-4 pl-16 pr-5 text-gray-900 focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-red/10 transition-all font-bold text-lg placeholder:text-slate-400/70 placeholder:font-semibold shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                  />
               </div>
               
               {/* Phone Input */}
               <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                       <Phone size={20} className="text-white drop-shadow-sm" />
                    </div>
                  </div>
                  <input
                    type="tel"
                    placeholder={t.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-brand-red rounded-[1.25rem] py-4 pl-16 pr-5 text-gray-900 focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand-red/10 transition-all font-bold text-lg placeholder:text-slate-400/70 placeholder:font-semibold shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                  />
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full sm:w-auto px-8 py-5 rounded-[1.25rem] font-bold text-slate-500 bg-white border-2 border-slate-200 hover:border-slate-300 hover:text-slate-800 transition-all shadow-sm hover:shadow-md"
              >
                {t.back}
              </button>
              <button
                onClick={handleSubmit}
                disabled={!isStep2Valid || isLoading}
                className={"flex-1 py-5 rounded-[1.25rem] font-black text-[19px] flex items-center justify-center gap-3 transition-all duration-500 overflow-hidden relative group " + (
                  isStep2Valid 
                  ? 'bg-gradient-to-b from-brand-red to-[#b22622] text-white hover:from-[#c92520] hover:to-[#9c1e1a] shadow-[0_15px_40px_rgba(201,48,44,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_20px_50px_rgba(201,48,44,0.5)] hover:-translate-y-1' 
                  : 'bg-slate-100/80 border border-slate-200/50 text-slate-400 cursor-not-allowed shadow-none'
                )}
              >
                {isLoading ? (
                   <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                   <>
                     {isStep2Valid && (
                       <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                     )}
                     <span className="relative z-10 drop-shadow-sm">{t.submit}</span>
                     <Sparkles size={20} className="relative z-10 drop-shadow-sm" />
                   </>
                )}
              </button>
            </div>
            
            <p className="text-center text-[11px] font-black text-slate-300 pt-6 uppercase tracking-[0.15em]">{t.successText}</p>
          </div>
        )}
      </div>
    </div>
  );
};
