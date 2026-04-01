import React from 'react';
import { ShieldCheck, CheckCircle2, RefreshCw, Banknote } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

interface GuaranteeProps {
}

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  shield: ShieldCheck,
  refresh: RefreshCw,
  money: Banknote,
};

export const Guarantee: React.FC<GuaranteeProps> = () => {
  const { t: fullT } = useTranslation();
  const t = (fullT as any).guaranteeSection;

  return (
    <div className="bg-brand-cream py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-brand-red/10 px-4 py-1.5 rounded-full mb-8">
          <ShieldCheck size={14} className="text-brand-red" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">{t.label}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-black mb-6 leading-[1.1] max-w-3xl mx-auto">
          {t.title}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-black/50 max-w-2xl mx-auto mb-16 leading-relaxed">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {t.points.map((point: any, idx: number) => {
            const Icon = iconMap[point.icon];
            return (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-brand-red/10 shadow-sm hover:shadow-xl hover:shadow-brand-cream transition-all duration-500 group text-left">
                <div className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-500">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{point.title}</h3>
                <p className="text-sm text-black/50 leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>

        <a
          href="#quote-form"
          className="inline-flex items-center gap-3 bg-brand-red text-white font-bold px-10 py-5 rounded-xl shadow-xl shadow-brand-red/20 hover:bg-red-700 transform hover:-translate-y-1 active:scale-95 transition-all text-sm md:text-base"
        >
          <CheckCircle2 size={20} />
          {t.cta}
        </a>
      </div>
    </div>
  );
};
