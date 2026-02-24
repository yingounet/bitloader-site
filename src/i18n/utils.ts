import { ui, type Locale, type UIKey } from './index';

export function getTranslation(locale: Locale, key: UIKey): string {
  return ui[locale][key] || ui.en[key];
}

export function getLocaleFromPath(pathname: string): Locale {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return 'en';
  
  const firstPart = parts[0];
  const validLocales = ['en', 'zh-Hans', 'zh-Hant', 'ja', 'fr', 'de', 'es', 'ko', 'pt-BR', 'ru', 'it', 'pl', 'nl'];
  if (validLocales.includes(firstPart)) {
    return firstPart as Locale;
  }
  return 'en';
}

export function getPathWithoutLocale(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return '/';
  
  const firstPart = parts[0];
  const validLocales = ['en', 'zh-Hans', 'zh-Hant', 'ja', 'fr', 'de', 'es', 'ko', 'pt-BR', 'ru', 'it', 'pl', 'nl'];
  if (validLocales.includes(firstPart)) {
    return '/' + parts.slice(1).join('/');
  }
  return '/' + parts.join('/');
}

export function getPathWithLocale(pathname: string, locale: Locale): string {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  if (locale === 'en') {
    return pathWithoutLocale;
  }
  return `/${locale}${pathWithoutLocale}`;
}

export const supportedLocales = ['en', 'zh-Hans', 'zh-Hant', 'ja', 'fr', 'de', 'es', 'ko', 'pt-BR', 'ru', 'it', 'pl', 'nl'] as const;
