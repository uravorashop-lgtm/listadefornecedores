import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface StoryVideo {
  id: number;
  title: string;
  subtitle: string;
  url: string;
  poster: string;
}

const STORY_VIDEOS: StoryVideo[] = [
  {
    id: 1,
    title: 'Bastidores & Garimpo',
    subtitle: 'Comprando direto nos galpões',
    url: 'https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/video%201.mp4',
    poster: '/videos/video-1-poster.jpg',
  },
  {
    id: 2,
    title: 'Qualidade & Detalhes',
    subtitle: 'Acabamento premium de primeira linha',
    url: 'https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/video%202.mp4',
    poster: '/videos/video-2-poster.jpg',
  },
  {
    id: 3,
    title: 'Preço de Fábrica',
    subtitle: 'O valor que as lojas não revelam',
    url: 'https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/video%203.mp4',
    poster: '/videos/video-3-poster.jpg',
  },
];

export const MentorStorySection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = 280;
    const index = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(Math.min(Math.max(index, 0), STORY_VIDEOS.length - 1));
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleVideoPlay = (idx: number) => {
    const targetVideo = videoRefs.current[idx];
    if (!targetVideo) return;

    if (playingVideoId === idx) {
      // Pause current
      targetVideo.pause();
      setPlayingVideoId(null);
    } else {
      // Pause all other videos
      videoRefs.current.forEach((vid, i) => {
        if (vid && i !== idx) {
          vid.pause();
        }
      });

      // Play target video
      const playPromise = targetVideo.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setPlayingVideoId(idx);
          })
          .catch(() => {
            // In case autoplay is restricted on older iOS without unmuting
            targetVideo.muted = true;
            targetVideo.play();
            setPlayingVideoId(idx);
          });
      }
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

  const scrollToSlide = (index: number) => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  };

  return (
    <section
      id="mentor-story-section"
      className="py-16 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center text-center overflow-hidden"
    >
      {/* Section Title with italic luxury accent */}
      <h2
        id="mentor-story-title"
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
      >
        <span>Há 4 anos parei de pagar preço de vitrine</span>
        <span className="block mt-1 font-serif-luxury italic font-medium text-[#7a1c28] tracking-normal">
          e comecei a comprar o que amo direto da fonte.
        </span>
      </h2>

      <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mb-6">
        Toque no play em qualquer vídeo para assistir aos bastidores e garimpos reais direto dos galpões
      </p>

      {/* Navigation Controls Bar */}
      <div className="w-full flex items-center justify-between px-2 mb-3 max-w-3xl">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-950 bg-rose-50/90 px-3 py-1 rounded-full border border-rose-100">
          <Sparkles className="w-3.5 h-3.5 text-rose-700" />
          <span>Vídeos nos galpões e lojas</span>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            id="story-prev-btn"
            onClick={scrollPrev}
            disabled={!canScrollLeft}
            aria-label="Vídeo anterior"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              canScrollLeft
                ? 'bg-white text-slate-900 border-slate-200 hover:bg-rose-50 shadow-xs active:scale-95'
                : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          <button
            type="button"
            id="story-next-btn"
            onClick={scrollNext}
            disabled={!canScrollRight}
            aria-label="Próximo vídeo"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              canScrollRight
                ? 'bg-white text-slate-900 border-slate-200 hover:bg-rose-50 shadow-xs active:scale-95'
                : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-5 h-5 stroke-[2.2]" />
          </button>
        </div>
      </div>

      {/* Video Carousel Track (Optimized for iOS/Safari & Android touch momentum) */}
      <div
        id="story-videos-carousel"
        ref={carouselRef}
        className="w-full flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-4 px-2 sm:px-4 scroll-smooth items-center"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {STORY_VIDEOS.map((video, idx) => {
          const isPlaying = playingVideoId === idx;

          return (
            <div
              key={video.id}
              id={`story-video-card-${video.id}`}
              className="snap-center shrink-0 w-[260px] sm:w-[290px] md:w-[310px] rounded-[26px] overflow-hidden shadow-xl shadow-purple-950/10 bg-black border-2 border-white transition-all duration-300 group select-none relative"
            >
              {/* Video container with portrait aspect ratio */}
              <div
                onClick={() => toggleVideoPlay(idx)}
                className="relative w-full aspect-[9/16] cursor-pointer overflow-hidden flex items-center justify-center"
              >
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={video.url}
                  poster={video.poster}
                  playsInline
                  preload="auto"
                  onEnded={() => setPlayingVideoId(null)}
                  className="w-full h-full object-cover"
                />

                {/* Central Play Button Overlay when paused */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 backdrop-blur-[1px] transition-all p-4">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/95 text-[#7a1c28] flex items-center justify-center shadow-2xl shadow-black/60 border border-white/80 transform group-hover:scale-110 transition-transform mb-3">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-[#7a1c28] text-[#7a1c28] stroke-[1.5]" />
                    </div>
                    <span className="text-white text-xs sm:text-sm font-bold tracking-wide drop-shadow-md">
                      {video.title}
                    </span>
                    <span className="text-white/80 text-[11px] font-normal drop-shadow-xs">
                      {video.subtitle}
                    </span>
                  </div>
                )}

                {/* Subtle pause icon indicator on hover while playing */}
                {isPlaying && (
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="w-9 h-9 rounded-full bg-black/55 backdrop-blur-sm text-white flex items-center justify-center border border-white/30">
                      <Pause className="w-4 h-4 fill-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div id="story-carousel-dots" className="flex items-center justify-center gap-2 mt-4 mb-8">
        {STORY_VIDEOS.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => scrollToSlide(dotIdx)}
            aria-label={`Ir para vídeo ${dotIdx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === dotIdx
                ? 'w-7 h-2 bg-[#7a1c28]'
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
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
