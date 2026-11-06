export const DEFAULT_LOCALE = 'en';

export const LOCALES = [
  { id: DEFAULT_LOCALE, name: 'English', isDefault: true },
  { id: 'es', name: 'Spanish', isDefault: false },
] as const;

export type Locale = typeof DEFAULT_LOCALE | 'es';
