import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { MarketId, LanguageId, MarketConfig, LanguageConfig } from './types';
import { MARKETS, LANGUAGES, DEFAULT_MARKET_ID, DEFAULT_LANGUAGE_ID, parsePathname, ParsedRoute } from './config';
import { getSavedPreferences, savePreferences, detectCountryByIP } from './geoDetection';
import { getTranslations, TranslationsType } from './translations';
import { formatCurrency, SWIM_JET_PRICES, ACCESSORIES_PRICES } from './marketPricing';

export interface I18nContextValue {
  currentMarket: MarketConfig;
  currentLanguage: LanguageConfig;
  t: TranslationsType;
  pageType: 'home' | 'product';
  productSlug?: string;
  isInitialPopupOpen: boolean;
  detectedMarket: MarketConfig;
  isRegionModalOpen: boolean;
  setLanguage: (langId: LanguageId) => void;
  setMarket: (marketId: MarketId) => void;
  setMarketAndLanguage: (marketId: MarketId, langId: LanguageId) => void;
  navigateToPage: (page: 'home' | 'product', slug?: string) => void;
  openRegionModal: () => void;
  closeRegionModal: () => void;
  confirmInitialPopup: () => void;
  closeInitialPopup: () => void;
  formatPrice: (amount: number) => string;
  swimJetPrice: typeof SWIM_JET_PRICES['eu'];
  getAccessoryPrice: (accId: string) => { price: number; originalPrice: number; saveText: string };
  buildLocalizedUrl: (page: 'home' | 'product', slug?: string, lang?: LanguageId, mkt?: MarketId) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export const PRODUCT_DEFAULT_SLUG = 'jet-de-natation-portable-igarden-x';

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Initial State from current URL or saved preferences or fallback
  const getInitialState = () => {
    if (typeof window === 'undefined') {
      return {
        market: MARKETS[DEFAULT_MARKET_ID],
        language: LANGUAGES[DEFAULT_LANGUAGE_ID],
        pageType: 'home' as const,
        productSlug: undefined,
        needsPopup: true
      };
    }

    const parsed = parsePathname(window.location.pathname);
    const saved = getSavedPreferences();

    let targetMarketId: MarketId = DEFAULT_MARKET_ID;
    let targetLangId: LanguageId = DEFAULT_LANGUAGE_ID;

    if (parsed.isValidLocale) {
      targetMarketId = parsed.market;
      targetLangId = parsed.language;
    } else if (saved.marketId) {
      targetMarketId = saved.marketId;
      targetLangId = (saved.languageId as LanguageId) || MARKETS[targetMarketId].defaultLanguage;
    }

    return {
      market: MARKETS[targetMarketId] || MARKETS[DEFAULT_MARKET_ID],
      language: LANGUAGES[targetLangId] || LANGUAGES[DEFAULT_LANGUAGE_ID],
      pageType: parsed.pageType,
      productSlug: parsed.productSlug,
      needsPopup: true // Always show the market & language selector on initial load / refresh
    };
  };

  const initial = useMemo(() => getInitialState(), []);
  const [currentMarket, setCurrentMarket] = useState<MarketConfig>(initial.market);
  const [currentLanguage, setCurrentLanguage] = useState<LanguageConfig>(initial.language);
  const [pageType, setPageType] = useState<'home' | 'product'>(initial.pageType);
  const [productSlug, setProductSlug] = useState<string | undefined>(initial.productSlug);
  const [isInitialPopupOpen, setIsInitialPopupOpen] = useState(true);
  const [detectedMarket, setDetectedMarket] = useState<MarketConfig>(initial.market);
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);

  // Helper to build a localized path string preserving current query params
  const buildLocalizedUrl = useCallback(
    (targetPage: 'home' | 'product', targetSlug?: string, lang?: LanguageId, mkt?: MarketId): string => {
      const activeLang = lang || currentLanguage.id;
      const activeMkt = mkt || currentMarket.id;
      const prefix = `/${activeLang}-${activeMkt}`;

      let path = prefix;
      if (targetPage === 'product') {
        const slug = targetSlug || productSlug || PRODUCT_DEFAULT_SLUG;
        path = `${prefix}/products/${slug}`;
      }

      if (typeof window !== 'undefined' && window.location.search) {
        path += window.location.search;
      }
      return path;
    },
    [currentLanguage.id, currentMarket.id, productSlug]
  );

  // Synchronize browser URL safely without reload and avoiding redirect loops
  const syncBrowserUrl = useCallback(
    (targetPage: 'home' | 'product', targetSlug?: string, lang?: LanguageId, mkt?: MarketId, replace = false) => {
      if (typeof window === 'undefined') return;

      const targetPath = buildLocalizedUrl(targetPage, targetSlug, lang, mkt);
      const currentFullUrl = window.location.pathname + window.location.search;

      if (currentFullUrl !== targetPath) {
        if (replace) {
          window.history.replaceState({}, '', targetPath);
        } else {
          window.history.pushState({}, '', targetPath);
        }
      }
    },
    [buildLocalizedUrl]
  );

  // Non-blocking IP detection in background
  useEffect(() => {
    let isMounted = true;
    const checkGeo = async () => {
      const saved = getSavedPreferences();
      if (!saved.isConfirmed) {
        const detected = await detectCountryByIP(1500);
        if (isMounted && MARKETS[detected]) {
          setDetectedMarket(MARKETS[detected]);
          // If URL had no valid locale, update suggested market
          const parsed = parsePathname(window.location.pathname);
          if (!parsed.isValidLocale && !saved.marketId) {
            const detectedMkt = MARKETS[detected];
            setCurrentMarket(detectedMkt);
            setCurrentLanguage(LANGUAGES[detectedMkt.defaultLanguage]);
            syncBrowserUrl('home', undefined, detectedMkt.defaultLanguage, detectedMkt.id, true);
          }
        }
      }
    };
    checkGeo();
    return () => {
      isMounted = false;
    };
  }, [syncBrowserUrl]);

  // Handle popstate (Back/Forward browser buttons)
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parsePathname(window.location.pathname);
      if (parsed.isValidLocale) {
        setCurrentMarket(MARKETS[parsed.market]);
        setCurrentLanguage(LANGUAGES[parsed.language]);
      }
      setPageType(parsed.pageType);
      setProductSlug(parsed.productSlug);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update HTML tag attributes (dir, lang) and dynamic Title / SEO tags
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLanguage.htmlLang;
      document.documentElement.dir = currentLanguage.direction;

      // Update Page Title based on language and market
      const storeName = `iGarden — ${currentMarket.name}`;
      if (pageType === 'product') {
        const productTitle =
          currentLanguage.id === 'ar'
            ? `جهاز السباحة ضد التيار آي جاردن سويم جيت 1000 واط — ${storeName}`
            : `iGarden Swim Jet X Series (1,000 W) Portable Swimming Machine — ${storeName}`;
        document.title = productTitle;
      } else {
        const homeTitle =
          currentLanguage.id === 'ar'
            ? `آي جاردن — المتجر الرسمي لأجهزة تيار السباحة وروبوتات المسابح — ${currentMarket.name}`
            : `iGarden Official Store — Premium Portable Swim Machines & Pool Care — ${currentMarket.name}`;
        document.title = homeTitle;
      }
    }
  }, [currentLanguage, currentMarket, pageType]);

  // Actions
  const setLanguage = useCallback(
    (newLangId: LanguageId) => {
      if (newLangId === currentLanguage.id) return;
      const langConfig = LANGUAGES[newLangId] || LANGUAGES.en;
      setCurrentLanguage(langConfig);
      savePreferences(currentMarket.id, newLangId, true);
      syncBrowserUrl(pageType, productSlug, newLangId, currentMarket.id);
    },
    [currentLanguage.id, currentMarket.id, pageType, productSlug, syncBrowserUrl]
  );

  const setMarket = useCallback(
    (newMarketId: MarketId) => {
      if (newMarketId === currentMarket.id) return;
      const mktConfig = MARKETS[newMarketId] || MARKETS.eu;
      setCurrentMarket(mktConfig);

      // Keep current language if available in target market, else fallback to market default
      const targetLang = mktConfig.languages.includes(currentLanguage.id)
        ? currentLanguage.id
        : mktConfig.defaultLanguage;
      setCurrentLanguage(LANGUAGES[targetLang]);

      savePreferences(newMarketId, targetLang, true);
      syncBrowserUrl(pageType, productSlug, targetLang, newMarketId);
    },
    [currentMarket.id, currentLanguage.id, pageType, productSlug, syncBrowserUrl]
  );

  const setMarketAndLanguage = useCallback(
    (newMarketId: MarketId, newLangId: LanguageId) => {
      const mktConfig = MARKETS[newMarketId] || MARKETS.eu;
      const langConfig = LANGUAGES[newLangId] || LANGUAGES.en;
      setCurrentMarket(mktConfig);
      setCurrentLanguage(langConfig);
      savePreferences(newMarketId, newLangId, true);
      syncBrowserUrl(pageType, productSlug, newLangId, newMarketId);
      setIsRegionModalOpen(false);
      setIsInitialPopupOpen(false);
    },
    [pageType, productSlug, syncBrowserUrl]
  );

  const navigateToPage = useCallback(
    (targetPage: 'home' | 'product', targetSlug?: string) => {
      setPageType(targetPage);
      if (targetSlug) setProductSlug(targetSlug);
      syncBrowserUrl(targetPage, targetSlug, currentLanguage.id, currentMarket.id);
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [currentLanguage.id, currentMarket.id, syncBrowserUrl]
  );

  const closeInitialPopup = useCallback(() => {
    setIsInitialPopupOpen(false);
  }, []);

  const openRegionModal = useCallback(() => {
    setIsInitialPopupOpen(true);
    setIsRegionModalOpen(true);
  }, []);
  const closeRegionModal = useCallback(() => {
    setIsRegionModalOpen(false);
  }, []);

  const confirmInitialPopup = useCallback(() => {
    savePreferences(currentMarket.id, currentLanguage.id, true);
    setIsInitialPopupOpen(false);
    setIsRegionModalOpen(false);
    syncBrowserUrl(pageType, productSlug, currentLanguage.id, currentMarket.id, true);
  }, [currentMarket.id, currentLanguage.id, pageType, productSlug, syncBrowserUrl]);

  const formatPrice = useCallback(
    (amount: number) => {
      return formatCurrency(amount, currentMarket.id, currentLanguage.id);
    },
    [currentMarket.id, currentLanguage.id]
  );

  const swimJetPrice = useMemo(() => {
    return SWIM_JET_PRICES[currentMarket.id] || SWIM_JET_PRICES.eu;
  }, [currentMarket.id]);

  const getAccessoryPrice = useCallback(
    (accId: string) => {
      const acc = ACCESSORIES_PRICES[accId]?.[currentMarket.id] || { price: 79, originalPrice: 89, saveAmount: 10 };
      const formattedPrice = formatCurrency(acc.price, currentMarket.id, currentLanguage.id);
      const formattedOriginalPrice = formatCurrency(acc.originalPrice, currentMarket.id, currentLanguage.id);
      const formattedSave = formatCurrency(acc.saveAmount, currentMarket.id, currentLanguage.id);
      return {
        price: acc.price,
        originalPrice: acc.originalPrice,
        saveText: currentLanguage.id === 'ar' ? `وفر ${formattedSave}` : `Save ${formattedSave}`
      };
    },
    [currentMarket.id, currentLanguage.id]
  );

  const t = useMemo(() => getTranslations(currentLanguage.id), [currentLanguage.id]);

  const value: I18nContextValue = {
    currentMarket,
    currentLanguage,
    t,
    pageType,
    productSlug,
    isInitialPopupOpen,
    detectedMarket,
    isRegionModalOpen,
    setLanguage,
    setMarket,
    setMarketAndLanguage,
    navigateToPage,
    openRegionModal,
    closeRegionModal,
    confirmInitialPopup,
    closeInitialPopup,
    formatPrice,
    swimJetPrice,
    getAccessoryPrice,
    buildLocalizedUrl
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
