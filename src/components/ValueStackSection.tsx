import React from 'react';
import {
  Package,
  Shirt,
  ShoppingBag,
  Sparkles,
  Footprints,
  Watch,
  Link2,
  ArrowRight,
  Lock,
} from 'lucide-react';
import { VALUE_ITEMS } from '../data/content';

interface ValueStackSectionProps {
  onCtaClick: () => void;
}

export const ValueStackSection: React.FC<ValueStackSectionProps> = ({ onCtaClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shirt':
        return Shirt;
      case 'ShoppingBag':
        return ShoppingBag;
      case 'Sparkles':
        return Sparkles;
      case 'Footprints':
        return Footprints;
      case 'Watch':
        return Watch;
      case 'Link2':
      default:
        return Link2;
    }
  };

  return (
    <section
      id="value-stack-section"
      className="py-16 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center text-center"
    >
      {/* Pill Badge */}
      <div
        id="value-stack-pill"
        className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200/80 text-purple-900 text-xs font-semibold tracking-wider mb-4 uppercase"
      >
        <Package className="w-3.5 h-3.5 text-purple-600" />
        <span>Tudo incluso</span>
      </div>

      {/* Heading */}
      <h2
        id="value-stack-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-10"
      >
        O que você <span className="italic font-serif text-purple-900 font-semibold">recebe hoje</span>
      </h2>

      {/* Bento Container */}
      <div
        id="value-stack-container"
        className="w-full bg-white/95 rounded-3xl p-5 sm:p-8 border border-purple-100 shadow-xl shadow-purple-950/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
      >
        {/* Left Side: Value items list (7 cols) */}
        <div id="value-items-column" className="lg:col-span-7 flex flex-col gap-3">
          {VALUE_ITEMS.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.id}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#fdfcff] border border-purple-100/80 hover:border-purple-200 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-100/70 text-purple-700 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {item.title}
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-700 shrink-0 ml-2">
                  {item.originalPrice}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Side: Pricing checkout block (5 cols) */}
        <div
          id="checkout-summary-box"
          className="lg:col-span-5 bg-gradient-to-b from-[#faf5ff] to-white p-6 rounded-3xl border border-purple-200/80 shadow-md flex flex-col items-center text-center relative"
        >
          {/* Top discount badge */}
          <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-purple-900 text-white text-[10px] font-extrabold tracking-wider uppercase shadow-xs">
            92% OFF
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-2">
            Valor Total
          </span>
          <span className="text-sm font-bold text-slate-600 line-through decoration-slate-400 mt-0.5">
            R$ 497
          </span>

          <span className="text-xs font-bold uppercase tracking-wider text-purple-900 mt-4">
            Hoje você paga
          </span>

          <div className="flex items-baseline gap-1 my-1">
            <span className="text-2xl font-bold text-slate-800">R$</span>
            <span className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
              37<span className="text-3xl sm:text-4xl font-extrabold">,90</span>
            </span>
          </div>

          <span className="text-xs text-slate-600 font-medium mb-5">
            pagamento único
          </span>

          {/* CTA Button */}
          <button
            id="value-stack-cta-button"
            onClick={onCtaClick}
            className="group w-full py-3.5 sm:py-4 px-4 sm:px-5 bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] text-white font-bold text-xs sm:text-base rounded-full shadow-lg shadow-emerald-950/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mb-4 text-center"
          >
            <span className="text-white">QUERO MINHA LISTA VIP — R$ 37,90</span>
            <ArrowRight className="w-4 h-4 shrink-0 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Security subtext */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
            <Lock className="w-3.5 h-3.5 text-purple-600" />
            <span>Pagamento 100% seguro · Pix ou cartão</span>
          </div>
        </div>
      </div>
    </section>
  );
};
