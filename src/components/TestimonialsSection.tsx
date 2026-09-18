import React, { useRef, useState, useEffect } from 'react';
import {
  MessageCircleHeart,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { useImages } from '../context/ImageContext';
import { trackTestimonialsInteraction } from '../utils/analytics';

const FEEDBACK_ITEMS = [
  {
    id: 'feedback_1',
    defaultUrl: '/images/feedback-1.webp',
    fallbackUrl: 'https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/bolsa%202.png',
    alt: 'Feedback WhatsApp Aluna 1',
    width: 330,
    height: 495,
  },
  {
    id: 'feedback_2',
    defaultUrl: '/images/feedback-2.webp',
    fallbackUrl: 'https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/bolsa%203.png',
    alt: 'Feedback WhatsApp Aluna 2',
    width: 330,
    height: 495,
  },
  {
    id: 'feedback_3',
    defaultUrl: '/images/feedback-3.webp',
    fallbackUrl: 'https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/bolssa%201.png',
    alt: 'Feedback WhatsApp Aluna 3',
    width: 330,
    height: 586,
  },
  {
    id: 'feedback_4',
    defaultUrl: '/images/feedback-4.webp',
    fallbackUrl: 'https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/relogio.png',
    alt: 'Feedback WhatsApp Aluna 4',
    width: 330,
    height: 495,
  },
];

export const TestimonialsSection: React.FC = () => {
  const { images } = useImages();
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

    const cardWidth = 320;
    const index = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(Math.min(Math.max(index, 0), FEEDBACK_ITEMS.length - 1));
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
        inline: 'center',
        block: 'nearest',
      });
      trackTestimonialsInteraction(index);
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
      trackTestimonialsInteraction(Math.max(currentIndex - 1, 0));
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
      trackTestimonialsInteraction(Math.min(currentIndex + 1, FEEDBACK_ITEMS.length - 1));
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

      {/* Navigation Controls Bar */}
      <div className="w-full flex items-center justify-between px-2 mb-4 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-purple-900/80 bg-purple-50/80 px-3 py-1 rounded-full border border-purple-100">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>Feedbacks reais no WhatsApp</span>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            id="testimonial-prev-btn"
            onClick={scrollPrev}
            disabled={!canScrollLeft}
            aria-label="Depoimento anterior"
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
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
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              canScrollRight
                ? 'bg-white text-purple-950 border-purple-200 hover:bg-purple-50 shadow-sm active:scale-95'
                : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-5 h-5 stroke-[2.2]" />
          </button>
        </div>
      </div>

      {/* Carousel Track with smooth snap & touch swipe - ONLY IMAGES */}
      <div
        id="testimonials-carousel"
        ref={carouselRef}
        className="w-full flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-4 px-2 sm:px-4 scroll-smooth items-center"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {FEEDBACK_ITEMS.map((item, idx) => {
          const imgUrl = images[item.id] || item.defaultUrl;

          return (
            <div
              key={item.id}
              id={`feedback-card-${idx + 1}`}
              className="snap-center shrink-0 w-[270px] sm:w-[310px] md:w-[330px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-purple-950/10 border border-purple-100/90 bg-white transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
            >
              <img
                src={imgUrl}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (item.fallbackUrl && target.src !== item.fallbackUrl) {
                    target.src = item.fallbackUrl;
                  }
                }}
                className="w-full h-auto object-contain block select-none"
              />
            </div>
          );
        })}
      </div>

      {/* Pagination Dots with 44px+ Accessible Touch Targets */}
      <div
        id="testimonials-pagination-dots"
        className="flex items-center justify-center gap-0.5 mt-4"
      >
        {FEEDBACK_ITEMS.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => scrollToCard(dotIdx)}
            aria-label={`Ir para feedback ${dotIdx + 1}`}
            className="w-11 h-11 flex items-center justify-center cursor-pointer p-0"
          >
            <span
              className={`block transition-all duration-300 rounded-full ${
                currentIndex === dotIdx
                  ? 'w-7 h-2.5 bg-purple-800'
                  : 'w-2.5 h-2.5 bg-purple-300 hover:bg-purple-400'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};
