
import { DE } from "./de";
import { EN } from "./en";
import { LanguageKey } from "./textTypes.tsx";

export const LANGUAGES = {
  en: EN,
  de: DE,
};

export const DEFAULT_LANGUAGE: LanguageKey = "en";

export const getLanguage = (lang: string): typeof EN => {
  return LANGUAGES[lang as LanguageKey] || LANGUAGES[DEFAULT_LANGUAGE];
};