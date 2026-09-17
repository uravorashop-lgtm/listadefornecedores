import React, { useState } from 'react';
import { Image as ImageIcon, Plus, Edit2, AlertCircle } from 'lucide-react';
import { useImages } from '../context/ImageContext';

interface ImageSlotProps {
  id: string;
  label?: string;
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'wide' | 'auto';
  rounded?: string;
  allowEdit?: boolean;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  id,
  label = 'Imagem',
  className = '',
  aspectRatio = 'square',
  rounded = 'rounded-2xl',
  allowEdit = true,
}) => {
  const { images, openModalForSlot } = useImages();
  const [hasError, setHasError] = useState(false);
  const currentUrl = images[id] || '';

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

  const handleSlotClick = (e: React.MouseEvent) => {
    if (allowEdit) {
      e.preventDefault();
      e.stopPropagation();
      openModalForSlot(id);
    }
  };

  return (
    <div
      id={`image-slot-${id}`}
      onClick={handleSlotClick}
      className={`group relative overflow-hidden transition-all duration-300 ${getAspectClass()} ${rounded} ${
        currentUrl && !hasError
          ? 'bg-slate-100 shadow-sm'
          : 'bg-gradient-to-b from-purple-50/70 via-white to-purple-50/40 border-2 border-dashed border-purple-200/90 hover:border-purple-400 hover:shadow-md'
      } ${allowEdit ? 'cursor-pointer' : ''} ${className}`}
      title={allowEdit ? `Clique para adicionar ou alterar link da imagem (${label})` : undefined}
    >
      {currentUrl && !hasError ? (
        <>
          <img
            src={currentUrl}
            alt={label}
            onError={() => setHasError(true)}
            onLoad={() => setHasError(false)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {allowEdit && (
            <div className="absolute inset-0 bg-purple-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 text-purple-900 text-xs font-semibold rounded-full shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-all">
                <Edit2 className="w-3.5 h-3.5 text-purple-600" />
                Trocar link
              </span>
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center select-none">
          {hasError ? (
            <div className="flex flex-col items-center gap-1 text-red-500 mb-1">
              <AlertCircle className="w-6 h-6 text-red-400" />
              <span className="text-xs font-medium">Link inválido</span>
            </div>
          ) : (
            <div className="w-12 h-12 rounded-xl bg-purple-100/90 flex items-center justify-center text-purple-700 shadow-inner group-hover:scale-110 group-hover:bg-purple-200 transition-all mb-2">
              <ImageIcon className="w-6 h-6 stroke-[1.8]" />
            </div>
          )}

          <span className="text-xs font-semibold text-slate-700 max-w-[90%] truncate">
            {label}
          </span>
          <span className="text-[11px] text-purple-600/90 mt-0.5 flex items-center gap-1">
            <Plus className="w-3 h-3" />
            Inserir link
          </span>
        </div>
      )}
    </div>
  );
};
