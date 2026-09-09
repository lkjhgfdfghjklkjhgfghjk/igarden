import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { SupportedLanguage, SupportedCountry, CountryInfo, TranslationDictionary } from './types';
import { COUNTRIES_CONFIG, DEFAULT_COUNTRY, DEFAULT_LANGUAGE } from './countries';
import { fr } from './locales/fr';
import { de } from './locales/de';
import { es } from './locales/es';
import { it } from './locales/it';
import { en } from './locales/en';
import { pt } from './locales/pt';
import { nl } from './locales/nl';
import { getStoredCountryAndLanguage, saveManualCountryAndLanguage, detectCountryFromIP } from './geoDetection';

const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  fr,
  de,
  es,
  it,
  en,
  pt,
  nl
};

interface I18nContextType {
  language: SupportedLanguage;
  country: SupportedCountry;
  countryInfo: CountryInfo;
  t: TranslationDictionary;
  setCountry: (country: SupportedCountry, lang?: SupportedLanguage) => void;
  setLanguage: (lang: SupportedLanguage) => void;
  formatCurrency: (amount: number) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize with fast synchronous local lookup
  const initial = useMemo(() => getStoredCountryAndLanguage(), []);
  const [country, setCountryState] = useState<SupportedCountry>(initial.country);
  const [language, setLanguageState] = useState<SupportedLanguage>(initial.lang);

  // Background IP detection if user hasn't made a manual choice
  useEffect(() => {
    if (!initial.isManual) {
      detectCountryFromIP().then((result) => {
        if (result) {
          setCountryState(result.country);
          setLanguageState(result.lang);
        }
      });
    }
  }, [initial.isManual]);

  // Sync document title, meta description & lang attribute
  useEffect(() => {
    const currentT = TRANSLATIONS[language] || TRANSLATIONS[DEFAULT_LANGUAGE];
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      if (currentT?.meta?.title) {
        document.title = currentT.meta.title;
      }
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && currentT?.meta?.description) {
        metaDesc.setAttribute('content', currentT.meta.description);
      }
    }
  }, [language]);

  const setCountry = (newCountry: SupportedCountry, newLang?: SupportedLanguage) => {
    const validCountry = COUNTRIES_CONFIG[newCountry] ? newCountry : DEFAULT_COUNTRY;
    const finalLang = newLang || COUNTRIES_CONFIG[validCountry]?.lang || DEFAULT_LANGUAGE;
    setCountryState(validCountry);
    setLanguageState(finalLang);
    saveManualCountryAndLanguage(validCountry, finalLang);
  };

  const setLanguage = (newLang: SupportedLanguage) => {
    const validLang = TRANSLATIONS[newLang] ? newLang : DEFAULT_LANGUAGE;
    setLanguageState(validLang);
    saveManualCountryAndLanguage(country, validLang);
  };

  const countryInfo = useMemo(() => {
    return COUNTRIES_CONFIG[country] || COUNTRIES_CONFIG[DEFAULT_COUNTRY];
  }, [country]);

  const t = useMemo(() => {
    return TRANSLATIONS[language] || TRANSLATIONS[DEFAULT_LANGUAGE];
  }, [language]);

  const formatCurrency = (amount: number): string => {
    const symbol = countryInfo.currencySymbol;
    if (['EUR', 'CHF'].includes(countryInfo.currency)) {
      if (language === 'de' || language === 'nl') {
        return `€ ${amount.toFixed(2).replace('.', ',')}`;
      } else if (language === 'fr' || language === 'es' || language === 'it' || language === 'pt') {
        return `${amount.toFixed(2).replace('.', ',')} €`;
      }
    }
    if (countryInfo.currency === 'GBP') return `£${amount.toFixed(2)}`;
    if (countryInfo.currency === 'USD') return `$${amount.toFixed(2)}`;
    if (countryInfo.currency === 'CAD') return `CA$${amount.toFixed(2)}`;
    if (countryInfo.currency === 'AUD') return `A$${amount.toFixed(2)}`;
    if (countryInfo.currency === 'CHF') return `CHF ${amount.toFixed(2)}`;
    return `${symbol}${amount.toFixed(2)}`;
  };

  const value = useMemo(
    () => ({
      language,
      country,
      countryInfo,
      t,
      setCountry,
      setLanguage,
      formatCurrency
    }),
    [language, country, countryInfo, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
