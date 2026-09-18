import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-50ZGT0WDSR';

/**
 * Sends an event to Google Analytics 4
 */
export const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  try {
    if (typeof window !== 'undefined') {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, {
          send_to: GA_MEASUREMENT_ID,
          ...eventParams,
        });
      }
      if (window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: eventName,
          ...eventParams,
        });
      }
    }
  } catch (err) {
    console.debug('Analytics event failed silently:', err);
  }
};

/**
 * 1. Tracks clicking on any Buy / CTA button
 */
export const trackBeginCheckout = (buttonLocation: string, value = 37.90) => {
  trackEvent('begin_checkout', {
    currency: 'BRL',
    value,
    items: [
      {
        item_id: 'lista-vip-fornecedores-luxo',
        item_name: 'Lista VIP de Fornecedores de Luxo (+50 Contatos)',
        item_category: 'Lista Digital / E-book / Contatos',
        price: value,
        quantity: 1,
      },
    ],
    button_location: buttonLocation,
  });
};

/**
 * 2. Tracks video playback start
 */
export const trackVideoPlay = (videoTitle: string, videoUrl: string) => {
  trackEvent('video_start', {
    video_title: videoTitle,
    video_url: videoUrl,
  });
};

/**
 * 3. Tracks payment interactions in checkout modal (Pix Copy, Tab Change, etc.)
 */
export const trackPaymentInteraction = (action: string, method?: string) => {
  trackEvent('payment_interaction', {
    action,
    payment_method: method || 'pix',
    value: 37.90,
    currency: 'BRL',
  });
};

/**
 * 4. Tracks final purchase confirmation / order approved
 */
export const trackPurchase = (method: string, value = 37.90) => {
  trackEvent('purchase', {
    transaction_id: `VIP-${Date.now()}`,
    value,
    currency: 'BRL',
    payment_type: method,
    items: [
      {
        item_id: 'lista-vip-fornecedores-luxo',
        item_name: 'Lista VIP de Fornecedores de Luxo (+50 Contatos)',
        item_category: 'Lista Digital / E-book / Contatos',
        price: value,
        quantity: 1,
      },
    ],
  });
};

/**
 * 5. Tracks user expanding an FAQ question
 */
export const trackFaqClick = (question: string) => {
  trackEvent('faq_click', {
    faq_question: question,
  });
};

/**
 * 6. Tracks user navigating feedback / testimonials carousel
 */
export const trackTestimonialsInteraction = (slideIndex: number) => {
  trackEvent('testimonial_view', {
    testimonial_index: slideIndex + 1,
  });
};

/**
 * 7. Scroll Depth Tracking Hook (25%, 50%, 75%, 90%)
 */
export const useScrollDepthTracking = () => {
  useEffect(() => {
    const trackedDepths = new Set<number>();

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const scrollPercentage = Math.round((window.scrollY / scrollHeight) * 100);

      [25, 50, 75, 90].forEach((depth) => {
        if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth);
          trackEvent('scroll_depth', {
            percent_scrolled: depth,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
