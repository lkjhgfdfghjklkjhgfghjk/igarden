// TikTok Pixel Helper Functions
// TikTok Pixel ID: D9CN8LBC77U9058HL3Q0

declare global {
  interface Window {
    TiktokAnalyticsObject?: string;
    ttq?: {
      page: () => void;
      track: (eventName: string, params?: Record<string, any>) => void;
      identify?: (params?: Record<string, any>) => void;
      [key: string]: any;
    };
  }
}

const PRODUCT_DATA = {
  content_id: 'iGarden-Swim-Jet-1000W',
  content_type: 'product',
  content_name: 'Jet de natation portable iGarden Swim Jet — 1 000 W',
  value: 209,
  currency: 'EUR',
};

/**
 * Fires the TikTok PageView event.
 */
export const trackTikTokPageView = () => {
  if (typeof window !== 'undefined' && window.ttq && typeof window.ttq.page === 'function') {
    window.ttq.page();
  }
};

/**
 * Fires the TikTok ViewContent event once when the product is viewed.
 */
export const trackTikTokViewContent = () => {
  if (typeof window !== 'undefined' && window.ttq && typeof window.ttq.track === 'function') {
    window.ttq.track('ViewContent', {
      content_id: PRODUCT_DATA.content_id,
      content_type: PRODUCT_DATA.content_type,
      content_name: PRODUCT_DATA.content_name,
      value: PRODUCT_DATA.value,
      currency: PRODUCT_DATA.currency,
    });
  }
};

/**
 * Fires the TikTok AddToCart event when clicking "Ajouter au panier".
 */
export const trackTikTokAddToCart = (quantity: number = 1) => {
  if (typeof window !== 'undefined' && window.ttq && typeof window.ttq.track === 'function') {
    window.ttq.track('AddToCart', {
      content_id: PRODUCT_DATA.content_id,
      content_type: PRODUCT_DATA.content_type,
      content_name: PRODUCT_DATA.content_name,
      value: PRODUCT_DATA.value,
      currency: PRODUCT_DATA.currency,
      quantity: quantity > 0 ? quantity : 1,
    });
  }
};

/**
 * Fires the TikTok InitiateCheckout event when clicking direct checkout or cart checkout.
 */
export const trackTikTokInitiateCheckout = (quantity: number = 1) => {
  if (typeof window !== 'undefined' && window.ttq && typeof window.ttq.track === 'function') {
    window.ttq.track('InitiateCheckout', {
      content_id: PRODUCT_DATA.content_id,
      content_type: PRODUCT_DATA.content_type,
      content_name: PRODUCT_DATA.content_name,
      value: PRODUCT_DATA.value,
      currency: PRODUCT_DATA.currency,
      quantity: quantity > 0 ? quantity : 1,
    });
  }
};
