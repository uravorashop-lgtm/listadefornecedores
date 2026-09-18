import React, { useState } from 'react';
import { ImageProvider } from './context/ImageContext';
import { UrgencyBanner } from './components/UrgencyBanner';
import { HeroSection } from './components/HeroSection';
import { PriceExamplesSection } from './components/PriceExamplesSection';
import { OfferFeatureCard } from './components/OfferFeatureCard';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SupplierBenefitsSection } from './components/SupplierBenefitsSection';
import { ValueStackSection } from './components/ValueStackSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { MentorStorySection } from './components/MentorStorySection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

function MainLandingPage() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

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

        {/* 10. Section 9: História da Mentora (Foto 1) */}
        <MentorStorySection />

        {/* 11. Section 10: Chamada Final de Decisão (Foto 2) */}
        <FinalCtaSection onCtaClick={handleOpenCheckout} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Checkout Modal */}
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
