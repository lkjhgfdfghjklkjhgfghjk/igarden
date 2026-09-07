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

export const TIKTOK_CONTENT_ID_PAYLOAD = {
  content_id: 'jet-de-natation-portable-igarden-x'
} as const;

let hasTrackedViewContent = false;
let lastAddToCartTime = 0;
let lastViewCartTime = 0;
let lastInitiateCheckoutTime = 0;
let lastGalleryInteractionTime = 0;
let lastVideoStartTime = 0;
let lastSpecsInteractionTime = 0;
let lastReviewsInteractionTime = 0;
let lastFaqInteractionTime = 0;

let hasTrackedScroll50 = false;
let hasTrackedScroll75 = false;
let hasTrackedScroll90 = false;

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
 * Tracks ViewCart event when the user manually opens/views the cart.
 * Protected against duplication.
 */
export const trackTikTokViewCart = () => {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  if (now - lastViewCartTime < 1500) {
    return;
  }
  lastViewCartTime = now;

  if (window.ttq && typeof window.ttq.track === 'function') {
    try {
      window.ttq.track('ViewCart', { ...TIKTOK_PRODUCT_PAYLOAD });
    } catch (e) {
      console.error('[TikTok Pixel] Error tracking ViewCart:', e);
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

/**
 * Behavioral: Tracks FAQ interactions (opening questions/accordions).
 */
export const trackTikTokFAQInteraction = () => {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  if (now - lastFaqInteractionTime < 1000) return;
  lastFaqInteractionTime = now;

  if (window.ttq && typeof window.ttq.track === 'function') {
    try {
      window.ttq.track('FAQInteraction', { ...TIKTOK_CONTENT_ID_PAYLOAD });
    } catch (e) {
      console.error('[TikTok Pixel] Error tracking FAQInteraction:', e);
    }
  }
};

/**
 * Behavioral: Tracks Reviews interactions (clicking reviews, filters, vote helpful, etc.).
 */
export const trackTikTokReviewsInteraction = () => {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  if (now - lastReviewsInteractionTime < 1000) return;
  lastReviewsInteractionTime = now;

  if (window.ttq && typeof window.ttq.track === 'function') {
    try {
      window.ttq.track('ReviewsInteraction', { ...TIKTOK_CONTENT_ID_PAYLOAD });
    } catch (e) {
      console.error('[TikTok Pixel] Error tracking ReviewsInteraction:', e);
    }
  }
};

/**
 * Behavioral: Tracks Technical Specifications interactions.
 */
export const trackTikTokSpecificationsInteraction = () => {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  if (now - lastSpecsInteractionTime < 1000) return;
  lastSpecsInteractionTime = now;

  if (window.ttq && typeof window.ttq.track === 'function') {
    try {
      window.ttq.track('SpecificationsInteraction', { ...TIKTOK_CONTENT_ID_PAYLOAD });
    } catch (e) {
      console.error('[TikTok Pixel] Error tracking SpecificationsInteraction:', e);
    }
  }
};

/**
 * Behavioral: Tracks Product Gallery interactions (changing photos, clicking thumbnails).
 */
export const trackTikTokGalleryInteraction = () => {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  if (now - lastGalleryInteractionTime < 800) return;
  lastGalleryInteractionTime = now;

  if (window.ttq && typeof window.ttq.track === 'function') {
    try {
      window.ttq.track('ProductGalleryInteraction', { ...TIKTOK_CONTENT_ID_PAYLOAD });
    } catch (e) {
      console.error('[TikTok Pixel] Error tracking ProductGalleryInteraction:', e);
    }
  }
};

/**
 * Behavioral: Tracks Video Play start.
 */
export const trackTikTokVideoStart = () => {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  if (now - lastVideoStartTime < 1500) return;
  lastVideoStartTime = now;

  if (window.ttq && typeof window.ttq.track === 'function') {
    try {
      window.ttq.track('ProductVideoStart', { ...TIKTOK_CONTENT_ID_PAYLOAD });
    } catch (e) {
      console.error('[TikTok Pixel] Error tracking ProductVideoStart:', e);
    }
  }
};

/**
 * Behavioral: Attaches scroll depth listener (50%, 75%, 90%).
 * Each threshold is fired at most once per session.
 */
export const setupTikTokScrollTracking = () => {
  if (typeof window === 'undefined') return () => {};

  const handleScroll = () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;

    const scrollPos = window.scrollY;
    const scrollPercent = (scrollPos / docHeight) * 100;

    if (!hasTrackedScroll50 && scrollPercent >= 50) {
      hasTrackedScroll50 = true;
      if (window.ttq && typeof window.ttq.track === 'function') {
        window.ttq.track('Scroll50', { ...TIKTOK_CONTENT_ID_PAYLOAD });
      }
    }

    if (!hasTrackedScroll75 && scrollPercent >= 75) {
      hasTrackedScroll75 = true;
      if (window.ttq && typeof window.ttq.track === 'function') {
        window.ttq.track('Scroll75', { ...TIKTOK_CONTENT_ID_PAYLOAD });
      }
    }

    if (!hasTrackedScroll90 && scrollPercent >= 90) {
      hasTrackedScroll90 = true;
      if (window.ttq && typeof window.ttq.track === 'function') {
        window.ttq.track('Scroll90', { ...TIKTOK_CONTENT_ID_PAYLOAD });
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
