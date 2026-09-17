import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="guarantee-section" className="py-12 px-4 sm:px-6 max-w-2xl mx-auto">
      <div
        id="guarantee-card"
        className="bg-white/90 rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-md shadow-purple-900/5 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left"
      >
        {/* Shield circular badge */}
        <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0 shadow-inner">
          <ShieldCheck className="w-8 h-8 stroke-[1.8] text-purple-700" />
        </div>

        {/* Text content */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-purple-900 block mb-1">
            Garantia Incondicional
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
            7 dias de risco zero
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Entre, explore tudo. Se em até 7 dias não for para você, devolvemos 100% do valor.
          </p>
        </div>
      </div>
    </section>
  );
};
