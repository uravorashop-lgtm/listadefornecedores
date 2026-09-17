import React from 'react';
import { Tag, ArrowRight } from 'lucide-react';
import { PRODUCT_EXAMPLES } from '../data/content';
import { ImageSlot } from './ImageSlot';

interface PriceExamplesSectionProps {
  onCtaClick: () => void;
}

export const PriceExamplesSection: React.FC<PriceExamplesSectionProps> = ({ onCtaClick }) => {
  return (
    <section
      id="price-examples-section"
      className="py-12 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center text-center"
    >
      {/* Section Pill Badge */}
      <div
        id="price-examples-pill"
        className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200/80 text-purple-900 text-xs font-semibold tracking-wider mb-4 uppercase"
      >
        <Tag className="w-3.5 h-3.5 text-purple-600" />
        <span>Preços da Lista</span>
      </div>

      {/* Heading */}
      <h2
        id="price-examples-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2"
      >
        Os preços que <span className="italic font-serif text-purple-900 font-semibold">só quem tem a lista paga</span>
      </h2>

      {/* Subtitle */}
      <p id="price-examples-subtitle" className="text-sm text-slate-500 mb-8">
        exemplos reais de fornecedores da lista
      </p>

      {/* 3 Product Cards Grid */}
      <div
        id="product-cards-grid"
        className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full mb-8"
      >
        {PRODUCT_EXAMPLES.map((product) => (
          <div
            key={product.id}
            id={`product-card-${product.id}`}
            onClick={onCtaClick}
            className="group bg-white rounded-3xl p-3.5 border border-purple-100/80 shadow-md shadow-purple-950/5 hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col text-left cursor-pointer"
          >
            {/* Square Image Slot with image icon placeholder */}
            <div className="w-full mb-3.5">
              <ImageSlot
                id={product.imageId}
                label={product.title}
                aspectRatio="square"
                rounded="rounded-2xl"
              />
            </div>

            {/* Product info */}
            <div className="px-1 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium text-slate-500 block">
                  {product.title}
                </span>
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight block mt-0.5">
                  {product.price}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-purple-700/80 block mt-1">
                  {product.badge}
                </span>
              </div>

              {/* Action link */}
              <div className="mt-3 pt-2 border-t border-purple-50 flex items-center gap-1 text-xs font-semibold text-slate-600 group-hover:text-purple-700 transition-colors">
                <span>toque para garantir</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Wide CTA button */}
      <button
        id="price-examples-cta-button"
        onClick={onCtaClick}
        className="group w-full max-w-xl py-3.5 sm:py-4 px-4 sm:px-6 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-bold text-xs sm:text-base rounded-full shadow-lg shadow-emerald-700/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-center"
      >
        <span className="leading-snug">TODOS OS FORNECEDORES POR R$ 37,90 — QUERO MINHA LISTA</span>
        <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
      </button>
    </section>
  );
};
