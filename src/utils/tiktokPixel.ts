// TikTok Pixel Tracker for iGarden Swim Jet
// Official TikTok Pixel IDs:
// Pixel ART #01: DAE8J73C77U47UVQGM3G
// Pixel Germany (Alemanha): D9CN8LBC77U9058HL3Q0

export const TIKTOK_PIXEL_IDS = {
  GERMANY: 'D9CN8LBC77U9058HL3Q0',
  ART_01: 'DAE8J73C77U47UVQGM3G'
} as const;

// Active Pixel ID for the current German store version
export const ACTIVE_TIKTOK_PIXEL_ID = TIKTOK_PIXEL_IDS.GERMANY;

declare global {
  interface Window {
    TiktokAnalyticsObject?: string;
    ttq?: {
      track: (eventName: string, params?: Record<string, unknown>) => void;
      page: () => void;
      load: (pixelId: string, options?: Record<string, unknown>) => void;
      [key: string]: unknown;
    };
  }
}

export interface TikTokProductPayload {
  content_type: 'product';
  content_id: string;
  content_name: string;
  value: number;
  currency: string;
  quantity?: number;
}

export interface TikTokTrackItemInput {
  id?: string;
  name?: string;
  price?: number;
  currency?: string;
  quantity?: number;
}

const DEFAULT_PRODUCT = {
  id: 'swim-jet-1000w',
  name: 'Tragbare Gegenstromanlage iGarden Swim Jet — 1.000 W',
  price: 209.00,
  currency: 'EUR'
};

// Deduplication and debouncing state guards
let hasTrackedPageView = false;
let hasTrackedViewContent = false;
let lastAddToCartTime = 0;
let lastInitiateCheckoutTime = 0;

/**
 * Builds the sanitized TikTok product payload using real application data.
 */
function buildProductPayload(item?: TikTokTrackItemInput, defaultQuantity = 1): TikTokProductPayload {
  const contentId = item?.id || DEFAULT_PRODUCT.id;
  const contentName = item?.name || DEFAULT_PRODUCT.name;
  const quantity = typeof item?.quantity === 'number' && item.quantity > 0 ? item.quantity : defaultQuantity;
  const unitPrice = typeof item?.price === 'number' && !isNaN(item.price) ? item.price : DEFAULT_PRODUCT.price;
  const value = Number((unitPrice * quantity).toFixed(2));
  const currency = item?.currency || 'EUR';

  const payload: TikTokProductPayload = {
    content_type: 'product',
    content_id: contentId,
    content_name: contentName,
    value: value,
    currency: currency,
    quantity: quantity
  };

  return payload;
}

/**
 * TikTok Pixel - PageView
 * Fired once on real page load via the official snippet in index.html.
 * Deduplicated: Protected against React Strict Mode and re-renders.
 */
export const trackTikTokPageView = () => {
  if (typeof window === 'undefined') return;
  if (hasTrackedPageView) return;
  hasTrackedPageView = true;

  if (window.ttq && typeof window.ttq.page === 'function') {
    try {
      // TikTok Pixel - PageView
      window.ttq.page();
    } catch (e) {
      console.error('[TikTok Pixel] Error tracking PageView:', e);
    }
  }
};

/**
 * TikTok Pixel - ViewContent
 * Fired when the user views the product details / product section.
 * Deduplicated: Only triggers once per product view lifecycle.
 */
export const trackTikTokViewContent = (item?: TikTokTrackItemInput) => {
  if (typeof window === 'undefined') return;
  if (hasTrackedViewContent) return;
  hasTrackedViewContent = true;

  const payload = buildProductPayload(item, 1);
  // ViewContent standard payload
  const viewContentPayload: Record<string, unknown> = {
    content_type: payload.content_type,
    content_id: payload.content_id,
    content_name: payload.content_name,
    value: payload.value,
    currency: payload.currency
  };

  const trigger = () => {
    if (window.ttq && typeof window.ttq.track === 'function') {
      try {
        // TikTok Pixel - ViewContent
        window.ttq.track('ViewContent', viewContentPayload);
      } catch (e) {
        console.error('[TikTok Pixel] Error tracking ViewContent:', e);
      }
    }
  };

  if (window.ttq && typeof window.ttq.track === 'function') {
    trigger();
  } else {
    // If pixel is still loading in head, wait briefly
    setTimeout(trigger, 300);
  }
};

/**
 * TikTok Pixel - AddToCart
 * Fired EXCLUSIVELY when the user clicks the "In den Warenkorb" / Add to Cart button.
 * Protected against rapid double-clicks and duplication.
 * Does NOT trigger InitiateCheckout. Does NOT trigger Purchase.
 */
export const trackTikTokAddToCart = (item?: TikTokTrackItemInput, quantity = 1) => {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  // Debounce rapid duplicate clicks within 1.5 seconds
  if (now - lastAddToCartTime < 1500) {
    return;
  }
  lastAddToCartTime = now;

  const payload = buildProductPayload({ ...item, quantity }, quantity);

  if (window.ttq && typeof window.ttq.track === 'function') {
    try {
      // TikTok Pixel - AddToCart
      window.ttq.track('AddToCart', {
        content_type: payload.content_type,
        content_id: payload.content_id,
        content_name: payload.content_name,
        value: payload.value,
        currency: payload.currency,
        quantity: payload.quantity
      });
    } catch (e) {
      console.error('[TikTok Pixel] Error tracking AddToCart:', e);
    }
  }
};

/**
 * TikTok Pixel - InitiateCheckout
 * Fired EXCLUSIVELY when the user clicks a direct purchase or checkout button,
 * IMMEDIATELY BEFORE redirecting to the external Shopify checkout.
 * Protected against rapid double-clicks and duplication.
 * Does NOT trigger AddToCart. Does NOT trigger Purchase.
 */
export const trackTikTokInitiateCheckout = (item?: TikTokTrackItemInput, quantity = 1) => {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  // Debounce duplicate clicks within 2.5 seconds
  if (now - lastInitiateCheckoutTime < 2500) {
    return;
  }
  lastInitiateCheckoutTime = now;

  const payload = buildProductPayload({ ...item, quantity }, quantity);

  if (window.ttq && typeof window.ttq.track === 'function') {
    try {
      // TikTok Pixel - InitiateCheckout
      window.ttq.track('InitiateCheckout', {
        content_type: payload.content_type,
        content_id: payload.content_id,
        content_name: payload.content_name,
        value: payload.value,
        currency: payload.currency,
        quantity: payload.quantity
      });
    } catch (e) {
      console.error('[TikTok Pixel] Error tracking InitiateCheckout:', e);
    }
  }
};
