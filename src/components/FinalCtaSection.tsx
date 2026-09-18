import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="final-cta-section" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <div
        id="final-decision-card"
        className="relative w-full rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#4a141d] via-[#581722] to-[#340b12] py-12 sm:py-16 px-5 sm:px-12 text-center text-white shadow-2xl shadow-rose-950/30 overflow-hidden border border-rose-900/40"
      >
        {/* Soft background glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Outline Heart Icon */}
        <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center text-rose-300/85">
          <Heart className="w-7 h-7 stroke-[1.6]" />
        </div>

        {/* Heading */}
        <h2
          id="final-cta-title"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight mb-4"
        >
          Você já viu tudo. Agora é só decidir.
        </h2>

        {/* Subtitle */}
        <p
          id="final-cta-desc"
          className="text-sm sm:text-base text-rose-100/90 max-w-xl mx-auto leading-relaxed mb-6 font-normal"
        >
          Continuar pagando preço de loja... ou entrar agora e comprar o que quiser por uma fração — com 7 dias de garantia e o risco todo meu.
        </p>

        {/* Micro reassurance */}
        <p className="text-xs sm:text-sm text-rose-200/70 mb-6 font-normal">
          Você vai pra uma página de pagamento segura — Pix ou cartão.
        </p>

        {/* CTA Button */}
        <button
          id="final-cta-btn"
          onClick={onCtaClick}
          className="group w-full max-w-md py-4 px-6 bg-[#00b04a] hover:bg-[#009e42] active:scale-[0.99] text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-black/30 transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
        >
          <span className="tracking-wide">QUERO MINHA LISTA VIP — R$ 37,90</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
        </button>

        {/* Security badges */}
        <div
          id="final-cta-guarantee"
          className="mt-4 flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-rose-200/80 font-medium"
        >
          <span>🔒 Compra segura · acesso na hora · 7 dias de garantia · pagamento único</span>
        </div>
      </div>
    </section>
  );
};
