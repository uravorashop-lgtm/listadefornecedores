import React, { useRef, useState, useEffect } from 'react';
import {
  MessageCircleHeart,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { TESTIMONIALS } from '../data/content';
import { ImageSlot } from './ImageSlot';

export const TestimonialsSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update index and arrow button states on scroll
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Approximate active card index based on child scroll position
    const cardWidth = 290; // approx card width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(Math.min(Math.max(index, 0), TESTIMONIALS.length - 1));
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="testimonials-section"
      className="py-14 sm:py-16 px-4 sm:px-6 w-full max-w-5xl mx-auto flex flex-col items-center text-center overflow-hidden"
    >
      {/* Pill Badge */}
      <div
        id="testimonials-pill"
        className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200/80 text-purple-900 text-xs font-semibold tracking-wider mb-3 sm:mb-4 uppercase"
      >
        <MessageCircleHeart className="w-3.5 h-3.5 text-purple-600" />
        <span>Quem entrou, conta</span>
      </div>

      {/* Heading */}
      <h2
        id="testimonials-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-3"
      >
        Histórias reais de quem já tem a lista
      </h2>

      <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6 sm:mb-8">
        Arraste para os lados e veja os feedbacks recebidos no WhatsApp pelas alunas e revendedoras
      </p>

      {/* Desktop/Tablet Carousel Controls Bar */}
      <div className="w-full flex items-center justify-between px-2 mb-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-purple-900/80 bg-purple-50/80 px-3 py-1 rounded-full border border-purple-100">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>{TESTIMONIALS.length} depoimentos verificados</span>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            id="testimonial-prev-btn"
            onClick={scrollPrev}
            disabled={!canScrollLeft}
            aria-label="Depoimento anterior"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              canScrollLeft
                ? 'bg-white text-purple-950 border-purple-200 hover:bg-purple-50 shadow-sm active:scale-95'
                : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          <button
            type="button"
            id="testimonial-next-btn"
            onClick={scrollNext}
            disabled={!canScrollRight}
            aria-label="Próximo depoimento"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              canScrollRight
                ? 'bg-white text-purple-950 border-purple-200 hover:bg-purple-50 shadow-sm active:scale-95'
                : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-5 h-5 stroke-[2.2]" />
          </button>
        </div>
      </div>

      {/* Carousel Track with smooth snap & touch swipe */}
      <div
        id="testimonials-carousel"
        ref={carouselRef}
        className="w-full flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory py-3 px-1 sm:px-2 scroll-smooth items-stretch"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {TESTIMONIALS.map((item, idx) => (
          <div
            key={item.id}
            id={`testimonial-card-${item.id}`}
            className="snap-center shrink-0 w-[270px] sm:w-[310px] md:w-[330px] bg-white rounded-3xl p-3 sm:p-4 border border-purple-100/90 shadow-md shadow-purple-950/5 hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col text-left select-none"
          >
            {/* Top WhatsApp-like subtle header bar */}
            <div className="flex items-center justify-between px-2.5 py-1.5 mb-2.5 bg-slate-50/90 rounded-xl border border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-2 truncate">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span className="font-semibold text-slate-800 truncate text-[11px]">
                  {item.tag || `Print WhatsApp #${idx + 1}`}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-mono text-slate-400">#{idx + 1}</span>
                <CheckCheck className="w-3.5 h-3.5 text-sky-500 shrink-0" />
              </div>
            </div>

            {/* Square/Portrait Image Slot for Print screenshot */}
            <div className="w-full relative rounded-2xl overflow-hidden mb-3">
              <ImageSlot
                id={item.imageId}
                label={`Print #${idx + 1} - ${item.highlight}`}
                aspectRatio="portrait"
                rounded="rounded-2xl"
                className="w-full min-h-[240px] sm:min-h-[260px]"
              />
            </div>

            {/* Snippet text */}
            <div className="px-1.5 pb-1 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                  "{item.highlight}"
                </p>
                <p className="text-[11px] text-slate-500 mt-1 italic leading-relaxed line-clamp-2">
                  {item.previewText}
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-purple-50 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                <span>Compra verificada</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                  ✓ Aluna VIP
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Pagination Dots with tap-to-scroll */}
      <div
        id="testimonials-pagination-dots"
        className="flex items-center justify-center gap-1.5 mt-5 flex-wrap max-w-xs mx-auto"
      >
        {TESTIMONIALS.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => scrollToCard(dotIdx)}
            aria-label={`Ir para depoimento ${dotIdx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === dotIdx
                ? 'w-6 h-2 bg-purple-800'
                : 'w-2 h-2 bg-purple-200 hover:bg-purple-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
