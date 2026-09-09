// TikTok Pixel Tracker for iGarden Swim Jet
// Official TikTok Pixel IDs:
// Pixel ART #01: DAE8J73C77U47UVQGM3G
// Pixel Germany (Alemanha): D9CN8LBC77U9058HL3Q0

export const TIKTOK_PIXEL_IDS = {
  GERMANY: 'D9CN8LBC77U9058HL3Q0',
  ART_01: 'DAE8J73C77U47UVQGM3G'
} as const;

// Active Pixel ID: Pixel ART #01
export const ACTIVE_TIKTOK_PIXEL_ID = TIKTOK_PIXEL_IDS.ART_01;

declare global {
  interface Window {
    TiktokAnalyticsObject?: string;
    __TIKTOK_PIXEL_ID__?: string;
    ttq?: {
      track: (eventName: string, params?: Record<string, unknown>) => void;
      page: () => void;
      load: (pixelId: string, options?: Record<string, unknown>) => void;
      [key: string]: unknown;
    };
  }
}

/**
 * Resolves which TikTok Pixel ID is active for the current session.
 * Default: Pixel ART #01 ('DAE8J73C77U47UVQGM3G')
 * Can also be switched to Germany via query param (?pixel=de or ?pixel=germany or ?pixel=D9CN8LBC77U9058HL3Q0)
 * or via window.__TIKTOK_PIXEL_ID__ or localStorage.
 */
export function getActiveTikTokPixelId(): string {
  if (typeof window !== 'undefined') {
    if (window.__TIKTOK_PIXEL_ID__) {
      return window.__TIKTOK_PIXEL_ID__;
    }
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const pixelParam = urlParams.get('pixel')?.toLowerCase();
      if (pixelParam === 'de' || pixelParam === 'germany' || pixelParam === TIKTOK_PIXEL_IDS.GERMANY.toLowerCase()) {
        return TIKTOK_PIXEL_IDS.GERMANY;
      }
      if (pixelParam === 'art' || pixelParam === 'art01' || pixelParam === TIKTOK_PIXEL_IDS.ART_01.toLowerCase()) {
        return TIKTOK_PIXEL_IDS.ART_01;
      }
      const stored = localStorage.getItem('active_tiktok_pixel');
      if (stored === TIKTOK_PIXEL_IDS.GERMANY || stored === TIKTOK_PIXEL_IDS.ART_01) {
        return stored;
      }
    } catch (_e) {
      // Ignore storage/url errors in restricted iframes
    }
  }
  return TIKTOK_PIXEL_IDS.ART_01;
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

// Deduplication guards
let hasTrackedPageView = false;
let lastAddToCartTime = 0;
let lastInitiateCheckoutTime = 0;
let lastTrackedViewContentId = '';

/**
 * Ensures TikTok Pixel snippet is initialized on the page.
 */
export function ensureTikTokPixelInitialized(): void {
  if (typeof window === 'undefined') return;

  const pixelId = getActiveTikTokPixelId();

  if (!window.ttq) {
    (function (w: any, d: any, t: string) {
      w.TiktokAnalyticsObject = t;
      const ttq = (w[t] = w[t] || []);
      ttq.methods = [
        'page',
        'track',
        'identify',
        'instances',
        'debug',
        'on',
        'off',
        'once',
        'ready',
        'alias',
        'group',
        'enableCookie',
        'disableCookie',
        'holdConsent',
        'revokeConsent',
        'grantConsent'
      ];
      ttq.setAndDefer = function (target: any, method: string) {
        target[method] = function () {
          target.push([method].concat(Array.prototype.slice.call(arguments, 0)));
        };
      };
      for (let i = 0; i < ttq.methods.length; i++) {
        ttq.setAndDefer(ttq, ttq.methods[i]);
      }
      ttq.instance = function (instanceTarget: string) {
        const instanceQueue = ttq._i[instanceTarget] || [];
        for (let n = 0; n < ttq.methods.length; n++) {
          ttq.setAndDefer(instanceQueue, ttq.methods[n]);
        }
        return instanceQueue;
      };
      ttq.load = function (id: string, options?: any) {
        const r = 'https://analytics.tiktok.com/i18n/pixel/events.js';
        ttq._i = ttq._i || {};
        ttq._i[id] = [];
        ttq._i[id]._u = r;
        ttq._t = ttq._t || {};
        ttq._t[id] = +new Date();
        ttq._o = ttq._o || {};
        ttq._o[id] = options || {};
        const scriptEl = d.createElement('script');
        scriptEl.type = 'text/javascript';
        scriptEl.async = true;
        scriptEl.src = r + '?sdkid=' + id + '&lib=' + t;
        const firstScript = d.getElementsByTagName('script')[0];
        if (firstScript && firstScript.parentNode) {
          firstScript.parentNode.insertBefore(scriptEl, firstScript);
        } else {
          d.head.appendChild(scriptEl);
        }
      };

      ttq.load(pixelId);
      ttq.page();
    })(window, document, 'ttq');
  }
}

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

  return {
    content_type: 'product',
    content_id: contentId,
    content_name: contentName,
    value: value,
    currency: currency,
    quantity: quantity
  };
}

/**
 * TikTok Pixel - PageView
 * Fired once on real page load.
 */
export const trackTikTokPageView = () => {
  if (typeof window === 'undefined') return;
  if (hasTrackedPageView) return;
  hasTrackedPageView = true;

  ensureTikTokPixelInitialized();

  if (window.ttq && typeof window.ttq.page === 'function') {
    try {
      // TikTok Pixel - PageView
      window.ttq.page();
      console.log('[TikTok Pixel] PageView dispatched (Pixel ID:', getActiveTikTokPixelId(), ')');
    } catch (e) {
      console.error('[TikTok Pixel] Error tracking PageView:', e);
    }
  }
};

/**
 * TikTok Pixel - ViewContent
 * Fired when the product is viewed.
 */
export const trackTikTokViewContent = (item?: TikTokTrackItemInput) => {
  if (typeof window === 'undefined') return;

  const currentId = item?.id || DEFAULT_PRODUCT.id;
  // Deduplicate identical immediate view content calls
  if (lastTrackedViewContentId === currentId) return;
  lastTrackedViewContentId = currentId;

  ensureTikTokPixelInitialized();

  const payload = buildProductPayload(item, 1);
  const viewContentPayload = {
    content_type: payload.content_type,
    content_id: payload.content_id,
    content_name: payload.content_name,
    value: payload.value,
    currency: payload.currency
  };

  const execute = () => {
    if (window.ttq && typeof window.ttq.track === 'function') {
      try {
        // TikTok Pixel - ViewContent
        window.ttq.track('ViewContent', viewContentPayload);
        console.log('[TikTok Pixel] ViewContent dispatched:', viewContentPayload);
      } catch (e) {
        console.error('[TikTok Pixel] Error tracking ViewContent:', e);
      }
    }
  };

  if (window.ttq && typeof window.ttq.track === 'function') {
    execute();
  } else {
    setTimeout(execute, 200);
  }
};

/**
 * TikTok Pixel - AddToCart
 * Fired EXCLUSIVELY when the user clicks the "In den Warenkorb" button.
 * Protected against rapid double-clicks.
 * Does NOT trigger InitiateCheckout. Does NOT trigger Purchase.
 */
export const trackTikTokAddToCart = (item?: TikTokTrackItemInput, quantity = 1) => {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  if (now - lastAddToCartTime < 1200) {
    return;
  }
  lastAddToCartTime = now;

  ensureTikTokPixelInitialized();

  const payload = buildProductPayload({ ...item, quantity }, quantity);
  const addToCartPayload = {
    content_type: payload.content_type,
    content_id: payload.content_id,
    content_name: payload.content_name,
    value: payload.value,
    currency: payload.currency,
    quantity: payload.quantity
  };

  if (window.ttq && typeof window.ttq.track === 'function') {
    try {
      // TikTok Pixel - AddToCart
      window.ttq.track('AddToCart', addToCartPayload);
      console.log('[TikTok Pixel] AddToCart dispatched:', addToCartPayload);
    } catch (e) {
      console.error('[TikTok Pixel] Error tracking AddToCart:', e);
    }
  }
};

/**
 * TikTok Pixel - InitiateCheckout
 * Fired EXCLUSIVELY when the user clicks a direct purchase or checkout button,
 * IMMEDIATELY BEFORE redirecting to the external Shopify checkout.
 * Protected against rapid double-clicks.
 * Does NOT trigger AddToCart. Does NOT trigger Purchase.
 */
export const trackTikTokInitiateCheckout = (item?: TikTokTrackItemInput, quantity = 1) => {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  if (now - lastInitiateCheckoutTime < 1500) {
    return;
  }
  lastInitiateCheckoutTime = now;

  ensureTikTokPixelInitialized();

  const payload = buildProductPayload({ ...item, quantity }, quantity);
  const checkoutPayload = {
    content_type: payload.content_type,
    content_id: payload.content_id,
    content_name: payload.content_name,
    value: payload.value,
    currency: payload.currency,
    quantity: payload.quantity
  };

  if (window.ttq && typeof window.ttq.track === 'function') {
    try {
      // TikTok Pixel - InitiateCheckout
      window.ttq.track('InitiateCheckout', checkoutPayload);
      console.log('[TikTok Pixel] InitiateCheckout dispatched:', checkoutPayload);
    } catch (e) {
      console.error('[TikTok Pixel] Error tracking InitiateCheckout:', e);
    }
  }
};
