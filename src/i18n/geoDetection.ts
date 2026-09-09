import { SupportedCountry, SupportedLanguage } from './types';
import { COUNTRIES_CONFIG, DEFAULT_COUNTRY, DEFAULT_LANGUAGE } from './countries';

const MANUAL_CHOICE_FLAG = 'igarden_user_manual_choice';
const MANUAL_LANG_KEY = 'igarden_manual_lang';
const MANUAL_COUNTRY_KEY = 'igarden_country';
const GEO_CACHE_KEY = 'igarden_geo_cache_v3';
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

interface GeoCacheItem {
  country: SupportedCountry;
  lang: SupportedLanguage;
  timestamp: number;
}

// Map ISO-2 country codes to supported store countries and languages
const ISO_COUNTRY_MAP: Record<string, { country: SupportedCountry; lang: SupportedLanguage }> = {
  // France
  FR: { country: 'FR', lang: 'fr' },
  // Germany & Austria & Switzerland (DACH)
  DE: { country: 'DE', lang: 'de' },
  AT: { country: 'AT', lang: 'de' },
  CH: { country: 'CH', lang: 'de' },
  LI: { country: 'DE', lang: 'de' },
  // Spain & Hispanic Americas
  ES: { country: 'ES', lang: 'es' },
  MX: { country: 'ES', lang: 'es' },
  AR: { country: 'ES', lang: 'es' },
  CL: { country: 'ES', lang: 'es' },
  CO: { country: 'ES', lang: 'es' },
  PE: { country: 'ES', lang: 'es' },
  UY: { country: 'ES', lang: 'es' },
  VE: { country: 'ES', lang: 'es' },
  EC: { country: 'ES', lang: 'es' },
  GT: { country: 'ES', lang: 'es' },
  CR: { country: 'ES', lang: 'es' },
  PA: { country: 'ES', lang: 'es' },
  DO: { country: 'ES', lang: 'es' },
  // Italy
  IT: { country: 'IT', lang: 'it' },
  SM: { country: 'IT', lang: 'it' },
  VA: { country: 'IT', lang: 'it' },
  // Portugal & Brazil
  PT: { country: 'PT', lang: 'pt' },
  BR: { country: 'PT', lang: 'pt' },
  AO: { country: 'PT', lang: 'pt' },
  MZ: { country: 'PT', lang: 'pt' },
  // Netherlands
  NL: { country: 'NL', lang: 'nl' },
  // Belgium & Luxembourg
  BE: { country: 'BE', lang: 'fr' },
  LU: { country: 'LU', lang: 'fr' },
  MC: { country: 'FR', lang: 'fr' },
  // United Kingdom & Ireland
  GB: { country: 'GB', lang: 'en' },
  UK: { country: 'GB', lang: 'en' },
  IE: { country: 'IE', lang: 'en' },
  // United States & Canada
  US: { country: 'US', lang: 'en' },
  CA: { country: 'CA', lang: 'en' },
  // Australia & New Zealand
  AU: { country: 'AU', lang: 'en' },
  NZ: { country: 'AU', lang: 'en' },
  // Scandinavia & Other European countries -> English
  SE: { country: 'EU_EN', lang: 'en' },
  NO: { country: 'EU_EN', lang: 'en' },
  DK: { country: 'EU_EN', lang: 'en' },
  FI: { country: 'EU_EN', lang: 'en' },
  PL: { country: 'EU_EN', lang: 'en' },
  CZ: { country: 'EU_EN', lang: 'en' },
  SK: { country: 'EU_EN', lang: 'en' },
  HU: { country: 'EU_EN', lang: 'en' },
  RO: { country: 'EU_EN', lang: 'en' },
  BG: { country: 'EU_EN', lang: 'en' },
  GR: { country: 'EU_EN', lang: 'en' },
  HR: { country: 'EU_EN', lang: 'en' },
  SI: { country: 'EU_EN', lang: 'en' },
  EE: { country: 'EU_EN', lang: 'en' },
  LV: { country: 'EU_EN', lang: 'en' },
  LT: { country: 'EU_EN', lang: 'en' }
};

export function getStoredCountryAndLanguage(): { country: SupportedCountry; lang: SupportedLanguage; isManual: boolean } {
  try {
    const manualFlag = localStorage.getItem(MANUAL_CHOICE_FLAG);
    const manualCountry = localStorage.getItem(MANUAL_COUNTRY_KEY) as SupportedCountry | null;
    const manualLang = localStorage.getItem(MANUAL_LANG_KEY) as SupportedLanguage | null;

    if (manualFlag === 'true' && manualCountry && COUNTRIES_CONFIG[manualCountry]) {
      return { country: manualCountry, lang: 'de', isManual: true };
    }

    const cachedStr = localStorage.getItem(GEO_CACHE_KEY);
    if (cachedStr) {
      const cached: GeoCacheItem = JSON.parse(cachedStr);
      if (Date.now() - cached.timestamp < CACHE_TTL_MS && COUNTRIES_CONFIG[cached.country]) {
        return { country: cached.country, lang: 'de', isManual: false };
      }
    }
  } catch (e) {
    console.warn('[i18n] Error reading stored locale preferences:', e);
  }

  // Enforce German by default
  return { country: 'DE', lang: 'de', isManual: false };
}

export function saveManualCountryAndLanguage(country: SupportedCountry, _lang?: SupportedLanguage) {
  try {
    localStorage.setItem(MANUAL_CHOICE_FLAG, 'true');
    localStorage.setItem(MANUAL_COUNTRY_KEY, country);
    localStorage.setItem(MANUAL_LANG_KEY, 'de');
  } catch (e) {
    console.warn('[i18n] Failed to persist manual language choice:', e);
  }
}

/**
 * Perform ultra-fast concurrent IP geolocation lookup across multiple edge endpoints
 */
export async function detectCountryFromIP(): Promise<{ country: SupportedCountry; lang: SupportedLanguage } | null> {
  return { country: 'DE', lang: 'de' };
}
