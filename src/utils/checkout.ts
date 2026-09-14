import { CHECKOUT_URL } from '../data';
import { trackTikTokInitiateCheckout } from './tiktokPixel';

let isNavigating = false;

/**
 * Single-execution checkout redirect handler.
 * Guarantees that only ONE checkout instance opens per user click.
 */
export const redirectToCheckout = (url?: string, quantity: number = 1) => {
  const targetUrl = url || CHECKOUT_URL;
  if (!targetUrl || typeof window === 'undefined') return;

  // Prevent multiple rapid triggers from double-clicking
  if (isNavigating) return;
  isNavigating = true;

  // Track InitiateCheckout event on TikTok Pixel
  trackTikTokInitiateCheckout(quantity);

  setTimeout(() => {
    isNavigating = false;
  }, 2000);

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
    // In regular standalone browser window, directly navigate the current window to checkout
    window.location.href = targetUrl;
  }
};

