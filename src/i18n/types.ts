export type MarketId = 'us' | 'eu' | 'ae' | 'sa';
export type LanguageId = 'en' | 'ar';
export type CurrencyCode = 'USD' | 'EUR' | 'AED' | 'SAR';

export interface MarketConfig {
  id: MarketId;
  name: string;
  country: string;
  flag: string;
  flagImg?: string;
  currency: CurrencyCode;
  symbol: string;
  currencyName: string;
  defaultLanguage: LanguageId;
  languages: LanguageId[];
  defaultPath: string;
}

export interface LanguageConfig {
  id: LanguageId;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  htmlLang: string;
}

export interface MarketPriceConfig {
  price: number;
  originalPrice: number;
  discountAmount: number;
  couponCode: string;
  couponOff: string;
  formattedPrice: string;
  formattedOriginalPrice: string;
  checkoutUrl: string;
  currency: CurrencyCode;
  symbol: string;
}
