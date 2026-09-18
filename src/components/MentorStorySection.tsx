import React from 'react';
import { ImageSlot } from './ImageSlot';

export const MentorStorySection: React.FC = () => {
  return (
    <section
      id="mentor-story-section"
      className="py-16 sm:py-20 px-4 sm:px-6 max-w-3xl mx-auto flex flex-col items-center text-center"
    >
      {/* Section Title with italic luxury accent */}
      <h2
        id="mentor-story-title"
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8"
      >
        <span>Há 4 anos parei de pagar preço de vitrine</span>
        <span className="block mt-1 font-serif-luxury italic font-medium text-[#7a1c28] tracking-normal">
          e comecei a comprar o que amo direto da fonte.
        </span>
      </h2>

      {/* Mentor Photo Container */}
      <div
        id="mentor-photo-card"
        className="relative w-full max-w-[340px] sm:max-w-[380px] mb-8"
      >
        <div className="w-full rounded-[28px] overflow-hidden shadow-2xl shadow-purple-950/10 border-4 border-white">
          <ImageSlot
            id="mentor_story"
            label="Foto nos bastidores / loja"
            aspectRatio="portrait"
            rounded="rounded-[24px]"
            className="w-full"
          />
        </div>
      </div>

      {/* Story Narrative with High Social Proof */}
      <div id="mentor-story-content" className="max-w-xl mx-auto space-y-4 text-center">
        <h3 className="text-base sm:text-lg font-bold text-slate-900">
          Hoje mais de 10 mil mulheres entram comigo nessa mesma porta.
        </h3>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Durante muito tempo, eu achava que ter produtos de luxo — bolsas impecáveis, perfumes importados e semijoias finas — era privilégio de quem tinha rios de dinheiro para gastar em shopping centers.
        </p>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Até que descobri o universo dos galpões e fornecedores fechados da 25 de Março e do Brás. Percebi que existia um mundo paralelo de preços que ninguém revela: os mesmos modelos de primeira linha que custam R$ 1.500 nas vitrines saindo por R$ 40 a R$ 90 na fonte.
        </p>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium text-slate-700">
          Em 4 anos de garimpo diário, separei os contatos de ouro de quem realmente entrega com pontualidade e respeito. Virei o atalho definitivo que eu mesma queria ter tido no começo — e agora abro esse mesmo caminho com você.
        </p>
      </div>
    </section>
  );
};
