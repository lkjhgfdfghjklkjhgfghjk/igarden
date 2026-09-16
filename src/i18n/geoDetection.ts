import { MarketId } from './types';
import { DEFAULT_MARKET_ID } from './config';

const STORAGE_KEY = 'igarden_market_pref';
const STORAGE_LANG_KEY = 'igarden_lang_pref';
const STORAGE_CONFIRMED_KEY = 'igarden_pref_confirmed';

export interface UserPreferences {
  marketId: MarketId | null;
  languageId: string | null;
  isConfirmed: boolean;
}

/**
 * Maps country code (ISO 3166-1 alpha-2) to one of our supported market IDs.
 */
export function mapCountryToMarket(countryCode?: string | null): MarketId {
  if (!countryCode) return DEFAULT_MARKET_ID;
  const code = countryCode.toUpperCase().trim();

  if (code === 'US' || code === 'CA') {
    return 'us';
  }

  if (code === 'AE') {
    return 'ae';
  }

  if (code === 'SA' || code === 'KW' || code === 'QA' || code === 'BH' || code === 'OM') {
    return 'sa';
  }

  // European countries default to EU market
  const europeanCountries = [
    'FR', 'DE', 'IT', 'ES', 'PT', 'BE', 'NL', 'AT', 'IE', 'GB', 'UK', 'CH',
    'SE', 'NO', 'DK', 'FI', 'PL', 'CZ', 'GR', 'RO', 'HU', 'BG', 'HR', 'SK',
    'SI', 'LU', 'EE', 'LV', 'LT', 'CY', 'MT', 'IS'
  ];

  if (europeanCountries.includes(code)) {
    return 'eu';
  }

  // Fallback to EU
  return DEFAULT_MARKET_ID;
}

/**
 * Safely reads saved preferences from localStorage without throwing errors.
 */
export function getSavedPreferences(): UserPreferences {
  try {
    if (typeof window === 'undefined') {
      return { marketId: null, languageId: null, isConfirmed: false };
    }
    const marketId = localStorage.getItem(STORAGE_KEY) as MarketId | null;
    const languageId = localStorage.getItem(STORAGE_LANG_KEY);
    const isConfirmed = localStorage.getItem(STORAGE_CONFIRMED_KEY) === 'true';

    const validMarkets: MarketId[] = ['us', 'eu', 'ae', 'sa'];
    const validMarketId = marketId && validMarkets.includes(marketId) ? marketId : null;
    const validLanguageId = languageId === 'en' || languageId === 'ar' ? languageId : null;

    return {
      marketId: validMarketId,
      languageId: validLanguageId,
      isConfirmed
    };
  } catch (_e) {
    return { marketId: null, languageId: null, isConfirmed: false };
  }
}

/**
 * Safely saves user preferences.
 */
export function savePreferences(marketId: MarketId, languageId: string, confirmed: boolean = true) {
  try {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, marketId);
    localStorage.setItem(STORAGE_LANG_KEY, languageId);
    if (confirmed) {
      localStorage.setItem(STORAGE_CONFIRMED_KEY, 'true');
    }
  } catch (_e) {
    // Fail-safe: localStorage issues do not break app
  }
}

/**
 * Detects country by IP with strict timeout and fallback.
 * Guarantees to resolve within timeoutMs without throwing.
 */
export async function detectCountryByIP(timeoutMs: number = 1500): Promise<MarketId> {
  // If user already has a saved and confirmed preference, return that immediately
  const saved = getSavedPreferences();
  if (saved.marketId && saved.isConfirmed) {
    return saved.marketId;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    // Fast, CORS-friendly IP geolocation
    const response = await fetch('https://ipapi.co/json/', {
      signal: controller.signal,
      headers: { Accept: 'application/json' }
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data && data.country_code) {
        return mapCountryToMarket(data.country_code);
      }
    }
  } catch (_e) {
    // Timeout or network error: gracefully proceed with fallback
  }

  return DEFAULT_MARKET_ID;
}
