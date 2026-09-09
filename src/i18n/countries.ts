import { CountryInfo, SupportedCountry, SupportedLanguage } from './types';

export const COUNTRIES_CONFIG: Record<SupportedCountry, CountryInfo> = {
  FR: {
    code: 'FR',
    name: 'France',
    nativeName: 'France',
    lang: 'fr',
    langLabel: 'Français',
    currency: 'EUR',
    currencySymbol: '€',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/fr.svg',
    shippingPartner: 'Colissimo / DPD',
    shippingTime: '24-48h'
  },
  DE: {
    code: 'DE',
    name: 'Germany',
    nativeName: 'Deutschland',
    lang: 'de',
    langLabel: 'Deutsch',
    currency: 'EUR',
    currencySymbol: '€',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/de.svg',
    shippingPartner: 'DHL / DPD',
    shippingTime: '24-48h'
  },
  AT: {
    code: 'AT',
    name: 'Austria',
    nativeName: 'Österreich',
    lang: 'de',
    langLabel: 'Deutsch',
    currency: 'EUR',
    currencySymbol: '€',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/at.svg',
    shippingPartner: 'Österreichische Post / DPD',
    shippingTime: '24-48h'
  },
  CH: {
    code: 'CH',
    name: 'Switzerland',
    nativeName: 'Schweiz / Suisse',
    lang: 'de',
    langLabel: 'Deutsch / Français',
    currency: 'CHF',
    currencySymbol: 'CHF',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/ch.svg',
    shippingPartner: 'Swiss Post',
    shippingTime: '48h'
  },
  ES: {
    code: 'ES',
    name: 'Spain',
    nativeName: 'España',
    lang: 'es',
    langLabel: 'Español',
    currency: 'EUR',
    currencySymbol: '€',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/es.svg',
    shippingPartner: 'Correos Express / SEUR',
    shippingTime: '24-48h'
  },
  IT: {
    code: 'IT',
    name: 'Italy',
    nativeName: 'Italia',
    lang: 'it',
    langLabel: 'Italiano',
    currency: 'EUR',
    currencySymbol: '€',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/it.svg',
    shippingPartner: 'BRT / DHL Express',
    shippingTime: '24-48h'
  },
  PT: {
    code: 'PT',
    name: 'Portugal',
    nativeName: 'Portugal',
    lang: 'pt',
    langLabel: 'Português',
    currency: 'EUR',
    currencySymbol: '€',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/pt.svg',
    shippingPartner: 'CTT Expresso / DPD',
    shippingTime: '24-48h'
  },
  NL: {
    code: 'NL',
    name: 'Netherlands',
    nativeName: 'Nederland',
    lang: 'nl',
    langLabel: 'Nederlands',
    currency: 'EUR',
    currencySymbol: '€',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/nl.svg',
    shippingPartner: 'PostNL / DPD',
    shippingTime: '24-48h'
  },
  BE: {
    code: 'BE',
    name: 'Belgium',
    nativeName: 'Belgique / België',
    lang: 'fr',
    langLabel: 'Français / Nederlands',
    currency: 'EUR',
    currencySymbol: '€',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/be.svg',
    shippingPartner: 'bpost / DPD',
    shippingTime: '24-48h'
  },
  LU: {
    code: 'LU',
    name: 'Luxembourg',
    nativeName: 'Luxembourg',
    lang: 'fr',
    langLabel: 'Français / Deutsch',
    currency: 'EUR',
    currencySymbol: '€',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/lu.svg',
    shippingPartner: 'POST Luxembourg / DPD',
    shippingTime: '24-48h'
  },
  GB: {
    code: 'GB',
    name: 'United Kingdom',
    nativeName: 'United Kingdom',
    lang: 'en',
    langLabel: 'English',
    currency: 'GBP',
    currencySymbol: '£',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/gb.svg',
    shippingPartner: 'Royal Mail / DPD UK',
    shippingTime: '48h'
  },
  IE: {
    code: 'IE',
    name: 'Ireland',
    nativeName: 'Ireland',
    lang: 'en',
    langLabel: 'English',
    currency: 'EUR',
    currencySymbol: '€',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/ie.svg',
    shippingPartner: 'An Post / DPD',
    shippingTime: '48h'
  },
  US: {
    code: 'US',
    name: 'United States',
    nativeName: 'United States',
    lang: 'en',
    langLabel: 'English',
    currency: 'USD',
    currencySymbol: '$',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/us.svg',
    shippingPartner: 'FedEx / UPS Express',
    shippingTime: '2-4 days'
  },
  CA: {
    code: 'CA',
    name: 'Canada',
    nativeName: 'Canada',
    lang: 'en',
    langLabel: 'English / Français',
    currency: 'CAD',
    currencySymbol: 'CA$',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/ca.svg',
    shippingPartner: 'Canada Post / FedEx',
    shippingTime: '2-4 days'
  },
  AU: {
    code: 'AU',
    name: 'Australia',
    nativeName: 'Australia',
    lang: 'en',
    langLabel: 'English',
    currency: 'AUD',
    currencySymbol: 'A$',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/au.svg',
    shippingPartner: 'Australia Post / DHL',
    shippingTime: '3-5 days'
  },
  EU_EN: {
    code: 'EU_EN',
    name: 'European Union (EN)',
    nativeName: 'Europe (English)',
    lang: 'en',
    langLabel: 'English',
    currency: 'EUR',
    currencySymbol: '€',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/eu.svg',
    shippingPartner: 'DHL International',
    shippingTime: '24-48h'
  }
};

export const DEFAULT_COUNTRY: SupportedCountry = 'DE';
export const DEFAULT_LANGUAGE: SupportedLanguage = 'de';
