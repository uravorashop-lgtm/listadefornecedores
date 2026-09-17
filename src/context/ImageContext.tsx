import React, { createContext, useContext, useState, useEffect } from 'react';

interface ImageContextType {
  images: Record<string, string>;
  setImageUrl: (id: string, url: string) => void;
  bulkSetImages: (newImages: Record<string, string>) => void;
  activeModalSlot: string | null;
  openModalForSlot: (slotId: string) => void;
  closeModal: () => void;
}

const STORAGE_KEY = 'vip_lista_custom_images';

const DEFAULT_IMAGES: Record<string, string> = {
  hero_main: '',
  prod_bolsa: '',
  prod_joias: '',
  prod_perfumes: '',
  supplier_showcase: '',
  feedback_1: '',
  feedback_2: '',
  feedback_3: '',
  feedback_4: '',
  feedback_5: '',
  feedback_6: '',
  feedback_7: '',
  feedback_8: '',
  feedback_9: '',
  feedback_10: '',
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...DEFAULT_IMAGES, ...JSON.parse(saved) } : DEFAULT_IMAGES;
    } catch {
      return DEFAULT_IMAGES;
    }
  });

  const [activeModalSlot, setActiveModalSlot] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    } catch {
      // ignore
    }
  }, [images]);

  const setImageUrl = (id: string, url: string) => {
    setImages(prev => ({
      ...prev,
      [id]: url.trim(),
    }));
  };

  const bulkSetImages = (newImages: Record<string, string>) => {
    setImages(prev => ({
      ...prev,
      ...newImages,
    }));
  };

  const openModalForSlot = (slotId: string) => {
    setActiveModalSlot(slotId);
  };

  const closeModal = () => {
    setActiveModalSlot(null);
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        setImageUrl,
        bulkSetImages,
        activeModalSlot,
        openModalForSlot,
        closeModal,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImages must be used within an ImageProvider');
  }
  return context;
};
