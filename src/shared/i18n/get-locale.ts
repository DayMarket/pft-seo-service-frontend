import { ELocale } from './types';

export const getLocale = (): ELocale => {
  const LOCALE_KEY = 'language';
  const storage = localStorage.getItem(LOCALE_KEY);

  if (storage) {
    const value = storage.replace(/\\/g, '').replace(/"/g, '');

    return value === ELocale.UZ ? ELocale.UZ : ELocale.RU;
  }

  return ELocale.RU;
};
