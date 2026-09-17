import React from 'react';
import { Zap, Gem, Users, RefreshCw, MessageSquare } from 'lucide-react';
import { ImageSlot } from './ImageSlot';

export const SupplierBenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Gem,
      text: 'Primeira linha, Linha Premium e Linha Italiana, direto da fonte — por uma fração',
    },
    {
      icon: Users,
      text: 'Os mesmos fornecedores que as grandes lojas usam e onde as blogueiras compram',
    },
    {
      icon: RefreshCw,
      text: 'Toda semana entra fornecedor novo, com atualizações semanais.',
    },
    {
      icon: MessageSquare,
      text: 'Respondem rápido, sem link morto, sem vácuo!',
    },
  ];

  return (
    <section
      id="supplier-benefits-section"
      className="py-16 px-4 sm:px-6 max-w-2xl mx-auto flex flex-col items-center text-center"
    >
      {/* Pill Badge */}
      <div
        id="supplier-benefits-pill"
        className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200/80 text-purple-900 text-xs font-semibold tracking-wider mb-4 uppercase"
      >
        <Zap className="w-3.5 h-3.5 text-purple-600" />
        <span>Isso não é só uma lista</span>
      </div>

      {/* Heading */}
      <h2
        id="supplier-benefits-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8"
      >
        Fornecedor que responde de<br />
        verdade, te atende mesmo<br />
        <span className="text-purple-900 font-serif-luxury italic">por 1 peça</span>
      </h2>

      {/* Showcase Image Slot */}
      <div
        id="supplier-showcase-box"
        className="w-full max-w-xs sm:max-w-sm mb-10 bg-white p-3 rounded-3xl border border-purple-100 shadow-xl shadow-purple-900/5"
      >
        <ImageSlot
          id="supplier_showcase"
          label="Foto Fornecedor Real / Pacotes & Pedidos"
          aspectRatio="square"
          rounded="rounded-2xl"
          className="w-full"
        />
      </div>

      {/* 4 Feature Points List */}
      <div
        id="supplier-benefits-list"
        className="w-full flex flex-col gap-4 text-left max-w-lg"
      >
        {benefits.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-purple-100/70 shadow-xs"
            >
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                <IconComponent className="w-4 h-4 stroke-[2]" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
