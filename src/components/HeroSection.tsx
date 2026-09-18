import React from 'react';
import { Sparkles, ArrowRight, Tag, Heart } from 'lucide-react';
import { ImageSlot } from './ImageSlot';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-8 pb-16 px-4 sm:px-6 max-w-3xl mx-auto flex flex-col items-center text-center"
    >
      {/* Background soft ambient glow */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Social proof top pill badge */}
      <div
        id="hero-badge"
        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200/80 text-purple-900 text-xs font-semibold tracking-wide shadow-xs mb-6"
      >
        <Sparkles className="w-3.5 h-3.5 text-purple-600" />
        <span>+10 MIL MULHERES JÁ ENTRARAM</span>
      </div>

      {/* Main Title */}
      <h1
        id="hero-title"
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-8 max-w-2xl"
      >
        A lista oculta de fornecedores de{' '}
        <span className="font-serif-luxury font-black tracking-normal text-purple-950 block sm:inline">
          LUXO
        </span>{' '}
        que ninguém te entrega.
      </h1>

      {/* Hero Image Showcase Card */}
      <div
        id="hero-image-card"
        className="relative w-full max-w-[340px] sm:max-w-[380px] mb-4 group"
      >
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/15 transition-all duration-300">
          <ImageSlot
            id="hero_main"
            label="Foto Principal (Bolsas, Caixas e Luxo)"
            aspectRatio="square"
            rounded="rounded-3xl"
            className="w-full"
            defaultUrl="https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/download.png"
          />
        </div>

        {/* Badge pinned below the image */}
        <div
          id="hero-supplier-count-badge"
          className="mt-3 mx-auto w-max inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 text-purple-900 text-xs font-medium border border-purple-200/70 shadow-xs"
        >
          <Tag className="w-3.5 h-3.5 text-purple-600" />
          <span>+50 fornecedores diretos</span>
        </div>
      </div>

      {/* Subtitle / usage description */}
      <p
        id="hero-usage-desc"
        className="text-sm sm:text-base font-medium text-slate-700 mt-2 mb-6"
      >
        Pra USO PESSOAL ou REVENDA. Acesso imediato a +50 fornecedores.
      </p>

      {/* Main CTA Button */}
      <button
        id="hero-cta-button"
        onClick={onCtaClick}
        className="group relative w-full max-w-md py-3.5 sm:py-4 px-4 sm:px-6 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-bold text-sm sm:text-lg rounded-full shadow-lg shadow-emerald-700/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-center"
      >
        <span className="tracking-wide">QUERO MINHA LISTA VIP — R$ 37,90</span>
        <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Price comparison and discount tag */}
      <div id="hero-price-anchor" className="mt-4 flex flex-col items-center gap-1.5">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span>De <span className="line-through decoration-slate-400">R$ 497</span> por <strong className="text-slate-900 font-bold">R$ 37,90</strong></span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700 border border-rose-200">
            92% OFF
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs text-purple-800/80 font-medium mt-0.5">
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          <span>+10 mil mulheres já compram direto da fonte</span>
        </div>
      </div>
    </section>
  );
};
