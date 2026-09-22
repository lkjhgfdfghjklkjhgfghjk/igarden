import { CHECKOUT_URL } from '../data';
import { notifyCheckoutInitiated } from './checkoutNotifier';

let isNavigating = false;

/**
 * Single-execution checkout redirect handler.
 * Guarantees that only ONE checkout instance opens per user click.
 */
export const redirectToCheckout = (
  url?: string,
  details?: { productName?: string; price?: string }
) => {
  const targetUrl = url || CHECKOUT_URL;
  if (!targetUrl || typeof window === 'undefined') return;

  // Trigger email notification in background (non-blocking, fail-safe)
  try {
    notifyCheckoutInitiated(targetUrl, details);
  } catch (_err) {
    // Fail-safe: notification error never interrupts checkout redirect
  }

  // Prevent multiple rapid triggers from double-clicking
  if (isNavigating) return;
  isNavigating = true;
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
    // In regular standalone browser window, allow network dispatch before navigation
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 100);
  }
};

