/**
 * Checkout Initiated Email Notification Trigger
 * 
 * Non-blocking, secure trigger that notifies backend when a visitor clicks the buy button.
 * Sends an email notification to maikesilvaoficial2@gmail.com via server-side email service.
 */

interface CheckoutNotificationPayload {
  timestamp: string;
  page_url: string;
  referrer: string;
  device_type: string;
  browser: string;
  os: string;
  checkout_url?: string;
}

function detectDeviceAndBrowser() {
  if (typeof navigator === 'undefined') {
    return { device: 'Desktop', browser: 'Desconhecido', os: 'Desconhecido' };
  }

  const ua = navigator.userAgent || '';
  
  // Device
  let device = 'Desktop';
  if (/ipad|tablet|(android(?!.*mobile))/i.test(ua)) {
    device = 'Tablet';
  } else if (/mobile|iphone|ipod|android.*mobile/i.test(ua)) {
    device = 'Mobile (Smartphone)';
  }

  // OS
  let os = 'Outro';
  if (/windows/i.test(ua)) os = 'Windows';
  else if (/macintosh|mac os x/i.test(ua) && !/iphone|ipad|ipod/i.test(ua)) os = 'macOS';
  else if (/iphone|ipad|ipod/i.test(ua)) os = 'iOS';
  else if (/android/i.test(ua)) os = 'Android';
  else if (/linux/i.test(ua)) os = 'Linux';

  // Browser
  let browser = 'Outro';
  if (/edg\//i.test(ua)) browser = 'Microsoft Edge';
  else if (/opr\/|opera/i.test(ua)) browser = 'Opera';
  else if (/chrome|crios/i.test(ua)) browser = 'Google Chrome';
  else if (/firefox|fxios/i.test(ua)) browser = 'Mozilla Firefox';
  else if (/safari/i.test(ua) && !/chrome|crios/i.test(ua)) browser = 'Apple Safari';

  return { device, browser, os };
}

/**
 * Triggers the checkout notification in the background without delaying redirection.
 */
export function notifyCheckoutInitiated(checkoutUrl?: string): void {
  if (typeof window === 'undefined') return;

  try {
    const { device, browser, os } = detectDeviceAndBrowser();

    const payload: CheckoutNotificationPayload = {
      timestamp: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      page_url: window.location.href || '',
      referrer: document.referrer || 'Acesso direto',
      device_type: device,
      browser: browser,
      os: os,
      checkout_url: checkoutUrl || ''
    };

    const endpoint = '/api/notify/checkout-initiated';
    const jsonString = JSON.stringify(payload);

    // 1. Try navigator.sendBeacon (ideal for button clicks and redirects)
    let beaconSent = false;
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      try {
        const blob = new Blob([jsonString], { type: 'application/json' });
        beaconSent = navigator.sendBeacon(endpoint, blob);
      } catch (_err) {
        beaconSent = false;
      }
    }

    // 2. Fallback to fetch with keepalive: true
    if (!beaconSent && typeof fetch === 'function') {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonString,
        keepalive: true
      }).catch(() => {
        // Silently ignore any network errors so the visitor is never blocked
      });
    }
  } catch (_e) {
    // Fail-safe: Never throw or interrupt the purchase process
  }
}
