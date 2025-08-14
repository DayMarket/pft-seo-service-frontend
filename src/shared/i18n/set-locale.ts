import { getLocale } from '$shared/i18n/get-locale.ts';

const LOCALE_KEY = 'language';

export const setLocale = (locale: 'uz' | 'ru') => {
  const oldLocale = getLocale();

  localStorage.setItem(LOCALE_KEY, locale);

  if (window.location.host + '/' + oldLocale !== window.location.host + '/' + locale) {
    window.location.href = window.location.href.replace(
      window.location.host + '/' + oldLocale,
      window.location.host + '/' + locale,
    );
  }
};
