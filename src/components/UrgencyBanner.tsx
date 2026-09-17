import React, { useMemo } from 'react';
import { AlertTriangle } from 'lucide-react';

export const UrgencyBanner: React.FC = () => {
  const formattedDate = useMemo(() => {
    try {
      const now = new Date();
      const day = now.getDate();
      const weekdays = [
        'domingo',
        'segunda-feira',
        'terça-feira',
        'quarta-feira',
        'quinta-feira',
        'sexta-feira',
        'sábado',
      ];
      const weekday = weekdays[now.getDay()];
      return `dia ${day}, ${weekday}`;
    } catch {
      return 'dia 17, quinta-feira';
    }
  }, []);

  return (
    <div
      id="urgency-top-banner"
      className="w-full bg-[#1e142b] text-purple-100 text-xs sm:text-sm font-medium py-2.5 px-4 text-center border-b border-purple-900/40 shadow-xs flex items-center justify-center gap-1.5 sticky top-0 z-40 backdrop-blur-md"
    >
      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
      <span>
        <strong className="text-amber-300 font-bold uppercase tracking-wide">Atenção:</strong> Essa página sairá do ar <strong className="text-white underline decoration-amber-400 underline-offset-2">HOJE</strong>, {formattedDate}.
      </span>
    </div>
  );
};
