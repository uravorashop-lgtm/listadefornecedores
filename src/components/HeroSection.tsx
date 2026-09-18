import React, { useRef, useState } from 'react';
import { Sparkles, ArrowRight, Tag, Heart, Play, Pause } from 'lucide-react';
import { trackVideoPlay } from '../utils/analytics';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      trackVideoPlay('Vídeo de Apresentação Hero', '/videos/video-1-1.mp4');
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

      {/* Hero Video Showcase Card (No controls bar, only Play icon) */}
      <div
        id="hero-video-card"
        className="relative w-full max-w-[340px] sm:max-w-[380px] mb-4 group select-none"
      >
        <div
          onClick={togglePlay}
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/20 bg-black cursor-pointer aspect-[9/16] sm:aspect-[4/5] max-h-[480px] flex items-center justify-center"
        >
          <video
            ref={videoRef}
            poster="/videos/video-1-1-poster.jpg"
            playsInline
            preload="none"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            className="w-full h-full object-cover"
          >
            <source src="/videos/video-1-1.mp4" type="video/mp4" />
            <source src="https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/video%201.1.mp4" type="video/mp4" />
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

        {/* Badge pinned below the video */}
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
        className="group relative w-full max-w-md py-3.5 sm:py-4 px-4 sm:px-6 bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] text-white font-bold text-sm sm:text-lg rounded-full shadow-lg shadow-emerald-950/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-center"
      >
        <span className="tracking-wide text-white">QUERO MINHA LISTA VIP — R$ 37,90</span>
        <ArrowRight className="w-5 h-5 shrink-0 text-white group-hover:translate-x-1 transition-transform" />
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
