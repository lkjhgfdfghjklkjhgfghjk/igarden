/**
 * TikTok Pixel Integration Utility
 * Pixel ID: DAE8J73C77U47UVQGM3G
 * 
 * Standard events supported:
 * - PageView (automatically handled by base script ttq.page())
 * - ViewContent (when visitor views the product details)
 * - AddToCart (when visitor adds item to cart)
 * - InitiateCheckout (when visitor clicks to proceed to external checkout)
 */

declare global {
  interface Window {
    TiktokAnalyticsObject?: string;
    ttq?: {
      track: (event: string, params?: Record<string, any>) => void;
      page: () => void;
      identify?: (params: Record<string, any>) => void;
      [key: string]: any;
    };
  }
}

export interface TikTokItemPayload {
  content_id: string;
  content_name: string;
  content_type?: string;
  quantity?: number;
  price?: number;
  value?: number;
  currency?: string;
}

/**
 * Generic safe tracker for TikTok Pixel events
 */
export const trackTikTokEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.ttq && typeof window.ttq.track === 'function') {
    try {
      window.ttq.track(eventName, params);
    } catch (err) {
      console.warn('[TikTok Pixel]', err);
    }
  }
};

/**
 * 2. ViewContent: Disparar quando o visitante visualizar a página principal/detalhes do produto
 */
export const trackTikTokViewContent = (payload: {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  currency?: string;
}) => {
  const qty = payload.quantity || 1;
  trackTikTokEvent('ViewContent', {
    content_id: payload.id,
    content_name: payload.name,
    content_type: 'product',
    quantity: qty,
    price: payload.price,
    value: Number((payload.price * qty).toFixed(2)),
    currency: payload.currency || 'EUR'
  });
};

/**
 * 3. AddToCart: Disparar SOMENTE quando o visitante clicar no botão real de adicionar ao carrinho
 */
export const trackTikTokAddToCart = (payload: {
  id: string;
  name: string;
  price: number;
  quantity: number;
  currency?: string;
}) => {
  const qty = payload.quantity || 1;
  trackTikTokEvent('AddToCart', {
    content_id: payload.id,
    content_name: payload.name,
    content_type: 'product',
    quantity: qty,
    price: payload.price,
    value: Number((payload.price * qty).toFixed(2)),
    currency: payload.currency || 'EUR'
  });
};

/**
 * 4. InitiateCheckout: Disparar SOMENTE quando o visitante clicar no botão que efetivamente leva para o checkout externo
 */
export const trackTikTokInitiateCheckout = (payload: {
  id: string;
  name: string;
  price: number;
  quantity: number;
  currency?: string;
  contents?: Array<{
    content_id: string;
    content_name: string;
    content_type?: string;
    quantity: number;
    price: number;
  }>;
}) => {
  const qty = payload.quantity || 1;
  trackTikTokEvent('InitiateCheckout', {
    content_id: payload.id,
    content_name: payload.name,
    content_type: 'product',
    quantity: qty,
    price: payload.price,
    value: Number((payload.price * qty).toFixed(2)),
    currency: payload.currency || 'EUR',
    ...(payload.contents && payload.contents.length > 0 ? { contents: payload.contents } : {})
  });
};
