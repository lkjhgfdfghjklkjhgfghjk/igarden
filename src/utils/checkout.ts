import { CHECKOUT_URL } from '../data';
import { trackTikTokInitiateCheckout, TikTokTrackItemInput } from './tiktokPixel';

let isNavigating = false;

/**
 * Single-execution checkout redirect handler.
 * Guarantees that only ONE checkout instance opens per user click,
 * and fires TikTok InitiateCheckout BEFORE navigating.
 */
export const redirectToCheckout = (url?: string, item?: TikTokTrackItemInput) => {
  const targetUrl = url || CHECKOUT_URL;
  if (!targetUrl || typeof window === 'undefined') return;

  // Prevent multiple rapid triggers from double-clicking
  if (isNavigating) return;
  isNavigating = true;
  setTimeout(() => {
    isNavigating = false;
  }, 2000);

  // TikTok Pixel - InitiateCheckout
  // Dispatched immediately BEFORE redirecting to external checkout
  trackTikTokInitiateCheckout(item);

  // Check if running inside an iframe (like development preview environments)
  let isIframe = false;
  try {
    isIframe = window.self !== window.top;
  } catch (_err) {
    isIframe = true;
  }

  if (isIframe) {
    // In iframe preview, open exactly one new tab
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  } else {
    // In regular standalone browser window, allow 150ms for TikTok beacon/fetch dispatch then navigate
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 150);
  }
};
