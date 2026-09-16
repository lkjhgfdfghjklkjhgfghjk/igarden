import { en } from './en';
import { ar } from './ar';
import { LanguageId } from '../types';

export const translations = {
  en,
  ar
};

export type TranslationsType = typeof en;

export function getTranslations(lang: LanguageId): TranslationsType {
  return translations[lang] || translations.en;
}
