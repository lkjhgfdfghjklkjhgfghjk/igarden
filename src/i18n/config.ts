import { MarketConfig, LanguageConfig, MarketId, LanguageId } from './types';

export const MARKETS: Record<MarketId, MarketConfig> = {
  us: {
    id: 'us',
    name: 'United States',
    country: 'United States',
    flag: '🇺🇸',
    currency: 'USD',
    symbol: '$',
    currencyName: 'US Dollar',
    defaultLanguage: 'en',
    languages: ['en', 'ar'],
    defaultPath: '/en-us'
  },
  eu: {
    id: 'eu',
    name: 'Europe',
    country: 'Europe',
    flag: '🇪🇺',
    currency: 'EUR',
    symbol: '€',
    currencyName: 'Euro',
    defaultLanguage: 'en',
    languages: ['en', 'ar'],
    defaultPath: '/en-eu'
  },
  ae: {
    id: 'ae',
    name: 'United Arab Emirates',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    currency: 'AED',
    symbol: 'د.إ',
    currencyName: 'United Arab Emirates Dirham',
    defaultLanguage: 'ar',
    languages: ['ar', 'en'],
    defaultPath: '/ar-ae'
  },
  sa: {
    id: 'sa',
    name: 'Saudi Arabia',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    currency: 'SAR',
    symbol: 'ر.س',
    currencyName: 'Saudi Riyal',
    defaultLanguage: 'ar',
    languages: ['ar', 'en'],
    defaultPath: '/ar-sa'
  }
};

export const LANGUAGES: Record<LanguageId, LanguageConfig> = {
  en: {
    id: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    htmlLang: 'en'
  },
  ar: {
    id: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    htmlLang: 'ar'
  }
};

export const DEFAULT_MARKET_ID: MarketId = 'eu';
export const DEFAULT_LANGUAGE_ID: LanguageId = 'en';
export const DEFAULT_LOCALE_PATH = '/en-eu';

export const MARKET_IDS: MarketId[] = ['us', 'eu', 'ae', 'sa'];
export const LANGUAGE_IDS: LanguageId[] = ['en', 'ar'];

export function isValidMarket(market: string): market is MarketId {
  return MARKET_IDS.includes(market as MarketId);
}

export function isValidLanguage(lang: string): lang is LanguageId {
  return LANGUAGE_IDS.includes(lang as LanguageId);
}

export interface ParsedRoute {
  language: LanguageId;
  market: MarketId;
  pageType: 'home' | 'product';
  productSlug?: string;
  subPath: string;
  isValidLocale: boolean;
}

/**
 * Parses pathname such as /en-us, /ar-sa/products/jet-de-natation-portable-igarden-x, etc.
 */
export function parsePathname(pathname: string): ParsedRoute {
  const cleanPath = pathname.split('?')[0].split('#')[0];
  const segments = cleanPath.split('/').filter(Boolean);

  if (segments.length === 0) {
    return {
      language: DEFAULT_LANGUAGE_ID,
      market: DEFAULT_MARKET_ID,
      pageType: 'home',
      subPath: '',
      isValidLocale: false
    };
  }

  const firstSegment = segments[0].toLowerCase();
  
  // Format: {lang}-{market} e.g. en-us, ar-sa, en-eu, ar-ae
  if (firstSegment.includes('-')) {
    const [langPart, marketPart] = firstSegment.split('-');
    if (isValidLanguage(langPart) && isValidMarket(marketPart)) {
      const rest = segments.slice(1);
      const isProduct = rest.length > 0 && rest[0] === 'products';
      const productSlug = isProduct && rest[1] ? rest[1] : undefined;

      return {
        language: langPart,
        market: marketPart,
        pageType: isProduct ? 'product' : 'home',
        productSlug,
        subPath: rest.length > 0 ? '/' + rest.join('/') : '',
        isValidLocale: true
      };
    }
  }

  // Legacy or un-prefixed routes (e.g. /products/...)
  const isProduct = segments[0] === 'products' || cleanPath.includes('jet-de-natation');
  return {
    language: DEFAULT_LANGUAGE_ID,
    market: DEFAULT_MARKET_ID,
    pageType: isProduct ? 'product' : 'home',
    subPath: cleanPath,
    isValidLocale: false
  };
}
