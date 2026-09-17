import React from 'react';
import { Check, ShieldCheck, Lock, ArrowRight } from 'lucide-react';

interface OfferFeatureCardProps {
  onCtaClick: () => void;
}

export const OfferFeatureCard: React.FC<OfferFeatureCardProps> = ({ onCtaClick }) => {
  const deliverables = [
    '+50 fornecedores diretos no Brasil',
    'Lista de links dos melhores produtos',
    'Fornecedor de Bolsas',
    'Fornecedor de Sapatos',
    'Fornecedor de Moissanites e Joias',
    'Fornecedor de Roupas de Luxo',
  ];

  return (
    <section id="offer-feature-section" className="py-12 px-4 sm:px-6 max-w-xl mx-auto">
      <div
        id="offer-card"
        className="relative bg-white/95 rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-xl shadow-purple-900/5 text-center flex flex-col items-center"
      >
        {/* Offer Tag */}
        <div
          id="offer-card-tag"
          className="inline-flex items-center px-3.5 py-1 rounded-full bg-purple-900 text-white text-[11px] font-extrabold tracking-wider uppercase mb-5 shadow-xs"
        >
          OFERTA DE HOJE · 92% OFF
        </div>

        {/* Title */}
        <h3
          id="offer-card-title"
          className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6"
        >
          O que você recebe ao entrar
        </h3>

        {/* Checkmarks grid (2 columns on sm+) */}
        <div
          id="offer-deliverables-grid"
          className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left w-full mb-8"
        >
          {deliverables.map((item, index) => (
            <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Price display block */}
        <div id="offer-price-block" className="mb-6 flex flex-col items-center">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
            DE <span className="line-through decoration-slate-400">R$ 497</span> POR
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-bold text-slate-800">R$</span>
            <span className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
              37<span className="text-3xl sm:text-4xl font-extrabold">,90</span>
            </span>
          </div>
          <span className="text-xs text-slate-500 font-medium mt-1">pagamento único</span>
        </div>

        {/* CTA Button */}
        <button
          id="offer-cta-button"
          onClick={onCtaClick}
          className="group w-full py-3.5 sm:py-4 px-4 sm:px-6 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-emerald-700/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mb-5 text-center"
        >
          <span>QUERO MINHA LISTA VIP — R$ 37,90</span>
          <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Guarantee subtext */}
        <div
          id="offer-guarantee-note"
          className="flex items-center justify-center gap-2 text-xs text-slate-600 bg-purple-50/60 p-3 rounded-2xl border border-purple-100/60 w-full mb-3"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Garantia incondicional de 7 dias</strong> — não curtiu, devolvo 100%, sem perguntas. O risco é meu.
          </span>
        </div>

        {/* Security badge */}
        <div
          id="offer-security-badge"
          className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium"
        >
          <Lock className="w-3.5 h-3.5 text-purple-600" />
          <span>Pagamento 100% seguro · Pix ou cartão</span>
        </div>
      </div>
    </section>
  );
};
