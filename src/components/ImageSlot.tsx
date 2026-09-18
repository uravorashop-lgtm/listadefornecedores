import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { useImages } from '../context/ImageContext';

interface ImageSlotProps {
  id: string;
  label?: string;
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'wide' | 'auto';
  rounded?: string;
  defaultUrl?: string;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  id,
  label = 'Imagem',
  className = '',
  aspectRatio = 'square',
  rounded = 'rounded-2xl',
  defaultUrl,
}) => {
  const { images } = useImages();
  const [hasError, setHasError] = useState(false);
  const currentUrl = images[id] || defaultUrl || '';

  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square';
      case 'portrait':
        return 'aspect-[9/16] sm:aspect-[3/4]';
      case 'wide':
        return 'aspect-[16/10]';
      case 'auto':
      default:
        return 'h-full min-h-[160px]';
    }
  };

  return (
    <div
      id={`image-slot-${id}`}
      className={`relative overflow-hidden transition-all duration-300 ${getAspectClass()} ${rounded} ${
        currentUrl && !hasError
          ? 'bg-transparent'
          : 'bg-gradient-to-b from-purple-50/60 via-white to-purple-50/40 border border-dashed border-purple-200/80'
      } ${className}`}
    >
      {currentUrl && !hasError ? (
        <img
          src={currentUrl}
          alt={label}
          width="400"
          height="400"
          loading="lazy"
          decoding="async"
          onError={() => setHasError(true)}
          onLoad={() => setHasError(false)}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center select-none">
          <div className="w-10 h-10 rounded-xl bg-purple-100/90 flex items-center justify-center text-purple-700 shadow-inner mb-2">
            <ImageIcon className="w-5 h-5 stroke-[1.8]" />
          </div>
          <span className="text-xs font-medium text-slate-500 max-w-[90%] truncate">
            {label}
          </span>
        </div>
      )}
    </div>
  );
};
