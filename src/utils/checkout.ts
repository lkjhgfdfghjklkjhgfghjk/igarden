import { CHECKOUT_URL } from '../data';
import { trackTikTokInitiateCheckout } from './tiktokPixel';

let isNavigating = false;

/**
 * Generates the checkout URL enhanced with return parameters so that Shopify checkout's
 * "Return to store" / "Return to cart" button brings the customer back to this exact page.
 */
export const buildCheckoutUrlWithReturn = (rawUrl: string): string => {
  if (typeof window === 'undefined') return rawUrl;

  try {
    const urlObj = new URL(rawUrl);
    const currentUrl = window.location.href;

    // Shopify checkout return parameters:
    // - return_to: Standard Shopify return parameter
    // - return_url: Supported by checkout extensibility and custom gateways
    // - back_to_cart_url: Supported by cart/checkout return flows
    urlObj.searchParams.set('return_to', currentUrl);
    urlObj.searchParams.set('return_url', currentUrl);
    urlObj.searchParams.set('back_to_cart_url', currentUrl);

    return urlObj.toString();
  } catch (_e) {
    const separator = rawUrl.includes('?') ? '&' : '?';
    const currentUrl = encodeURIComponent(window.location.href);
    return `${rawUrl}${separator}return_to=${currentUrl}&return_url=${currentUrl}`;
  }
};

/**
 * Single-execution checkout redirect handler.
 * Guarantees that only ONE checkout instance opens per user click.
 */
export const redirectToCheckout = (url?: string, quantity: number = 1) => {
  const baseTargetUrl = url || CHECKOUT_URL;
  if (!baseTargetUrl || typeof window === 'undefined') return;

  const targetUrl = buildCheckoutUrlWithReturn(baseTargetUrl);

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

