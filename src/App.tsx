import React, { useState } from 'react';
import { ImageProvider, useImages } from './context/ImageContext';
import { UrgencyBanner } from './components/UrgencyBanner';
import { HeroSection } from './components/HeroSection';
import { PriceExamplesSection } from './components/PriceExamplesSection';
import { OfferFeatureCard } from './components/OfferFeatureCard';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SupplierBenefitsSection } from './components/SupplierBenefitsSection';
import { ValueStackSection } from './components/ValueStackSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ImageManagerModal } from './components/ImageManagerModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

function MainLandingPage() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { openModalForSlot, images } = useImages();

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const configuredCount = Object.values(images).filter((url) => Boolean(url && url.trim())).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fbf9ff] via-[#ffffff] to-[#faf7ff] text-slate-800 flex flex-col font-sans selection:bg-purple-200 selection:text-purple-900">
      {/* 1. Urgency Alert Header Banner */}
      <UrgencyBanner />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* 2. Hero Section */}
        <HeroSection onCtaClick={handleOpenCheckout} />

        {/* Subtle decorative divider */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-200 to-transparent mx-auto my-4" />

        {/* 3. Section 2: Preços da Lista */}
        <PriceExamplesSection onCtaClick={handleOpenCheckout} />

        {/* 4. Section 3: O que você recebe ao entrar */}
        <OfferFeatureCard onCtaClick={handleOpenCheckout} />

        {/* 5. Section 4: Histórias reais de quem já tem a lista */}
        <TestimonialsSection />

        {/* 6. Section 5: Fornecedor que responde de verdade */}
        <SupplierBenefitsSection />

        {/* 7. Section 6: O que você recebe hoje (Bento stack) */}
        <ValueStackSection onCtaClick={handleOpenCheckout} />

        {/* 8. Section 7: Garantia Incondicional 7 Dias */}
        <GuaranteeSection />

        {/* 9. Section 8: FAQ / Dúvidas Comuns */}
        <FaqSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating Action Button for Managing Image Links */}
      <div className="fixed bottom-4 right-3 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end gap-2">
        <button
          id="open-image-manager-btn"
          onClick={() => openModalForSlot('hero_main')}
          className="group px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-purple-900/90 hover:bg-purple-950 text-white text-[11px] sm:text-xs font-semibold shadow-xl hover:shadow-2xl border border-purple-300/40 backdrop-blur-md flex items-center gap-1.5 sm:gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer active:scale-95"
          title="Clique para adicionar ou gerenciar os links das fotos da página"
        >
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-700 flex items-center justify-center text-purple-200 shrink-0">
            <ImageIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          </div>
          <span>Configurar Fotos ({configuredCount}/15)</span>
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-300 group-hover:rotate-12 transition-transform shrink-0" />
        </button>
      </div>

      {/* Modals */}
      <ImageManagerModal />
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ImageProvider>
      <MainLandingPage />
    </ImageProvider>
  );
}
