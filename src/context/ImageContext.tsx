import React, { createContext, useContext } from 'react';

export const SITE_IMAGES: Record<string, string> = {
  prod_bolsa: 'https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/images%20(5).jpg',
  prod_joias: 'https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/ChatGPT%20Image%2017%20de%20set.%20de%202026%2C%2021_40_15.png',
  prod_perfumes: 'https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/ChatGPT%20Image%2017_09_2026%2C%2017_21_58.png',
  mentor_story: '',
  supplier_showcase: '',
  feedback_1: 'https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/bolsa%202.png',
  feedback_2: 'https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/bolsa%203.png',
  feedback_3: 'https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/bolssa%201.png',
  feedback_4: 'https://pub-e98fe6f2b8484822bbbe71897426f3c0.r2.dev/relogio.png',
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
