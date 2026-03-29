"use client";
import React from 'react';
import { Check, ShieldCheck, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  t: any;
}

export const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <div id="services" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-red/10 px-3 py-1 rounded-full mb-6"
          >
            <Sparkles size={12} className="text-brand-red" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">{t.title}</span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-black mb-6 md:mb-8 leading-[1.1]"
          >
            {t.subtitle}
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-lg lg:text-xl text-black/50 font-light leading-relaxed"
          >
            {t.seo_note}
          </motion.p>
        </div>

        {/* Main Package Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-white mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center shadow-lg shadow-brand-red/20">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">{t.mainPackage.title}</h4>
              </div>
              <p className="text-white/60 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl">
                {t.mainPackage.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {t.mainPackage.badges.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-xl">
                    <Check size={16} className="text-brand-red" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <div className="text-brand-red font-black text-sm uppercase tracking-widest mb-4">{t.handoverTitle}</div>
              <ul className="space-y-4">
                {t.handoverItems.map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Detailed Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.mainPackage.features.map((section: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="bg-brand-cream/20 border border-brand-cream rounded-[2rem] p-8 hover:border-brand-red/20 transition-all group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-red shadow-sm group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <Zap size={20} />
                </div>
                <span className="text-black/10 text-3xl font-black italic">0{idx + 1}</span>
              </div>
              
              <h5 className="text-sm font-black uppercase tracking-widest text-black mb-6 border-b border-brand-cream pb-3">
                {section.category}
              </h5>
              
              <ul className="space-y-3">
                {section.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-black/60 leading-snug">
                    <Check size={14} className="text-brand-red mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CTA / Add-ons Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-brand-red rounded-[2rem] p-8 text-white flex flex-col shadow-xl shadow-brand-red/20"
          >
            <div className="mb-8">
              <h6 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">{t.addonsTitle}</h6>
              <div className="space-y-4 mb-8">
                {t.addonPrices.map((addon: any, i: number) => (
                  <div key={i} className="border-b border-white/20 pb-2">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-sm font-medium leading-tight">{addon.label}</span>
                      <span className="text-sm font-bold whitespace-nowrap">{addon.price}</span>
                    </div>
                    {addon.note && <div className="text-[10px] text-white/60 mt-1">{addon.note}</div>}
                  </div>
                ))}
              </div>
              <p className="text-white/80 text-xs font-light leading-relaxed">
                {t.addonsNote}
              </p>
            </div>
            <div className="mt-auto">
              <a 
                href="#quote-form" 
                className="inline-flex items-center justify-between w-full bg-white text-black px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand-cream transition-all group"
              >
                <span>{t.cta_button}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

