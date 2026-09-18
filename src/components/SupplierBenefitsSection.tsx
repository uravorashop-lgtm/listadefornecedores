import React, { useRef, useState } from 'react';
import { Zap, Gem, Users, RefreshCw, MessageSquare, Play, Pause } from 'lucide-react';

export const SupplierBenefitsSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play();
              setIsPlaying(true);
            }
          });
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

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

      {/* Showcase Video Card (No bar, Play icon centered) */}
      <div
        id="supplier-showcase-box"
        className="w-full max-w-xs sm:max-w-sm mb-10 group select-none"
      >
        <div
          onClick={togglePlay}
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/15 bg-slate-900 cursor-pointer aspect-[9/16] sm:aspect-[4/5] max-h-[480px] flex items-center justify-center border-2 border-purple-100"
        >
          <video
            ref={videoRef}
            poster="/videos/video-5-1-poster.jpg"
            playsInline
            preload="auto"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            className="w-full h-full object-cover"
          >
            <source src="/videos/video-5-1.mp4" type="video/mp4" />
            <source src="https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/video%205.1.mp4" type="video/mp4" />
          </video>

          {/* Central Play Icon Overlay when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/25 backdrop-blur-[1px] transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-purple-950 flex items-center justify-center shadow-2xl shadow-black/40 border border-white/60 transform group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 sm:w-9 sm:h-9 ml-1 fill-purple-950 text-purple-950 stroke-[1.5]" />
              </div>
            </div>
          )}

          {/* Subtle pause icon indicator on hover while playing */}
          {isPlaying && (
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center border border-white/30">
                <Pause className="w-4 h-4 fill-white" />
              </div>
            </div>
          )}
        </div>
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
