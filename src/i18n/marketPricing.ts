import { MarketId, LanguageId, CurrencyCode } from './types';
import { MARKETS } from './config';

export interface ProductPricing {
  price: number;
  originalPrice: number;
  discountAmount: number;
  couponCode: string;
  couponOff: string;
  checkoutUrl?: string;
  currency: CurrencyCode;
  symbol: string;
}

export interface AccessoryPricing {
  id: string;
  price: number;
  originalPrice: number;
  saveAmount: number;
}

// Swim Jet 1000W Main Product Prices per market
export const SWIM_JET_PRICES: Record<MarketId, ProductPricing> = {
  us: {
    price: 229.00,
    originalPrice: 458.00,
    discountAmount: 229.00,
    couponCode: "SWIMJET",
    couponOff: "$229.00",
    checkoutUrl: "https://shop.igarden.ai/cart/46000000000:1",
    currency: "USD",
    symbol: "$"
  },
  eu: {
    price: 209.00,
    originalPrice: 418.00,
    discountAmount: 209.00,
    couponCode: "SWIMJET",
    couponOff: "€209,00",
    checkoutUrl: "https://eu.store.igarden.ai/cart/47000000000:1",
    currency: "EUR",
    symbol: "€"
  },
  ae: {
    price: 849.00,
    originalPrice: 1698.00,
    discountAmount: 849.00,
    couponCode: "SWIMJET",
    couponOff: "849 د.إ",
    checkoutUrl: "https://igardemm.myshopify.com/checkouts/cn/hWNGoAHYFZV2jFBIxB6IbQXa/ar-ae?_r=AQABE4WAgPbnQQ97df7JEVaXNH1njHpV7KRIUraV3Jme9hA&preview_theme_id=205072925017",
    currency: "AED",
    symbol: "د.إ"
  },
  sa: {
    price: 859.00,
    originalPrice: 1718.00,
    discountAmount: 859.00,
    couponCode: "SWIMJET",
    couponOff: "859 ر.س",
    checkoutUrl: "https://igardemm.myshopify.com/checkouts/cn/hWNGoAHYFZV2jFBIxB6IbQXa/ar-sa?_r=AQAB-WYnqYbaruoM9itLX7jWeU4rRZCD5sdtHopHCUWWv0Y&preview_theme_id=205072925017",
    currency: "SAR",
    symbol: "ر.س"
  }
};

// Accessories pricing per market
export const ACCESSORIES_PRICES: Record<string, Record<MarketId, AccessoryPricing>> = {
  "storage-bag": {
    us: { id: "storage-bag", price: 79, originalPrice: 89, saveAmount: 10 },
    eu: { id: "storage-bag", price: 79, originalPrice: 89, saveAmount: 10 },
    ae: { id: "storage-bag", price: 320, originalPrice: 360, saveAmount: 40 },
    sa: { id: "storage-bag", price: 330, originalPrice: 370, saveAmount: 40 }
  },
  "power-box": {
    us: { id: "power-box", price: 249, originalPrice: 429, saveAmount: 180 },
    eu: { id: "power-box", price: 229, originalPrice: 399, saveAmount: 170 },
    ae: { id: "power-box", price: 929, originalPrice: 1619, saveAmount: 690 },
    sa: { id: "power-box", price: 949, originalPrice: 1649, saveAmount: 700 }
  },
  "floating-lights": {
    us: { id: "floating-lights", price: 39, originalPrice: 59, saveAmount: 20 },
    eu: { id: "floating-lights", price: 35, originalPrice: 55, saveAmount: 20 },
    ae: { id: "floating-lights", price: 145, originalPrice: 225, saveAmount: 80 },
    sa: { id: "floating-lights", price: 149, originalPrice: 229, saveAmount: 80 }
  },
  "wall-lights": {
    us: { id: "wall-lights", price: 39, originalPrice: 59, saveAmount: 20 },
    eu: { id: "wall-lights", price: 35, originalPrice: 55, saveAmount: 20 },
    ae: { id: "wall-lights", price: 145, originalPrice: 225, saveAmount: 80 },
    sa: { id: "wall-lights", price: 149, originalPrice: 229, saveAmount: 80 }
  }
};

/**
 * Formats a currency number according to Market and Language
 */
export function formatCurrency(amount: number, marketId: MarketId, langId: LanguageId = 'en'): string {
  const market = MARKETS[marketId] || MARKETS.eu;
  
  if (marketId === 'us') {
    // $229.00
    return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  
  if (marketId === 'eu') {
    if (langId === 'ar') {
      return `${amount.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
    }
    // 209.00 € or €209.00
    return `${amount.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
  }

  if (marketId === 'ae') {
    if (langId === 'ar') {
      return `${amount.toLocaleString('ar-AE')} د.إ`;
    }
    return `${amount.toLocaleString('en-US')} AED`;
  }

  if (marketId === 'sa') {
    if (langId === 'ar') {
      return `${amount.toLocaleString('ar-SA')} ر.س`;
    }
    return `${amount.toLocaleString('en-US')} SAR`;
  }

  return `${amount} ${market.symbol}`;
}
