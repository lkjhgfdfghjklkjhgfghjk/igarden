// TikTok Pixel Helper for iGarden Swim Jet

declare global {
  interface Window {
    ttq?: {
      track: (eventName: string, params?: Record<string, unknown>) => void;
      page: () => void;
      [key: string]: unknown;
    };
  }
}

export const TIKTOK_PRODUCT_PAYLOAD = {
  content_type: 'product',
  content_id: 'jet-de-natation-portable-igarden-x',
  content_name: 'Jet de natation portable iGarden Swim Jet',
  quantity: 1,
  value: 209,
  currency: 'EUR'
} as const;

let hasTrackedViewContent = false;
let lastAddToCartTime = 0;
let lastInitiateCheckoutTime = 0;

/**
 * Tracks ViewContent event when viewing the product page.
 * Deduplicated: Only triggers once per page lifecycle.
 */
export const trackTikTokViewContent = () => {
  if (typeof window === 'undefined') return;
  if (hasTrackedViewContent) return;

  hasTrackedViewContent = true;

  const trigger = () => {
    if (window.ttq && typeof window.ttq.track === 'function') {
      window.ttq.track('ViewContent', { ...TIKTOK_PRODUCT_PAYLOAD });
    }
  };

  if (window.ttq && typeof window.ttq.track === 'function') {
    trigger();
  } else {
    // If pixel is still initializing, retry after a short delay
    setTimeout(trigger, 400);
  }
};

/**
 * Tracks AddToCart event when the user clicks "Ajouter au panier".
 * Protected against rapid double-clicks and duplication.
 */
export const trackTikTokAddToCart = () => {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  // Debounce rapid multiple clicks (1.5 seconds)
  if (now - lastAddToCartTime < 1500) {
    return;
  }
  lastAddToCartTime = now;

  if (window.ttq && typeof window.ttq.track === 'function') {
    try {
      window.ttq.track('AddToCart', { ...TIKTOK_PRODUCT_PAYLOAD });
    } catch (e) {
      console.error('[TikTok Pixel] Error tracking AddToCart:', e);
    }
  }
};

/**
 * Tracks InitiateCheckout event when the user clicks a checkout / direct buy button.
 * Protected against rapid double-clicks and duplication.
 */
export const trackTikTokInitiateCheckout = () => {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  // Debounce duplicate clicks within 2.5 seconds
  if (now - lastInitiateCheckoutTime < 2500) {
    return;
  }
  lastInitiateCheckoutTime = now;

  if (window.ttq && typeof window.ttq.track === 'function') {
    try {
      window.ttq.track('InitiateCheckout', { ...TIKTOK_PRODUCT_PAYLOAD });
    } catch (e) {
      console.error('[TikTok Pixel] Error tracking InitiateCheckout:', e);
    }
  }
};
