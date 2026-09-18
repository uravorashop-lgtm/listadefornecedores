import React, { createContext, useContext } from 'react';

export const SITE_IMAGES: Record<string, string> = {
  prod_bolsa: '/images/bolsa.webp',
  prod_joias: '/images/joias.webp',
  prod_perfumes: '/images/perfumes.webp',
  mentor_story: '',
  supplier_showcase: '',
  feedback_1: '/images/feedback-1.webp',
  feedback_2: '/images/feedback-2.webp',
  feedback_3: '/images/feedback-3.webp',
  feedback_4: '/images/feedback-4.webp',
  feedback_5: '',
  feedback_6: '',
  feedback_7: '',
  feedback_8: '',
  feedback_9: '',
  feedback_10: '',
};

interface ImageContextType {
  images: Record<string, string>;
}

const ImageContext = createContext<ImageContextType>({ images: SITE_IMAGES });

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ImageContext.Provider value={{ images: SITE_IMAGES }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  return useContext(ImageContext);
};
