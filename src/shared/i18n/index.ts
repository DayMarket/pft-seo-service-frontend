import type { WritableComputedRef } from 'vue';
import { createI18n } from 'vue-i18n';

import ru from '$assets/locales/ru.json';
import uz from '$assets/locales/uz.json';
import { getLocale } from '$shared/i18n/get-locale.ts';

import { ELocale } from './types';

function customRule(choice: number, choicesLength: number) {
  if (choice === 0) {
    return 0;
  }

  const teen = choice > 10 && choice < 20;
  const endsWithOne = choice % 10 === 1;

  if (choicesLength < 4) {
    return !teen && endsWithOne ? 1 : 2;
  }

  if (!teen && endsWithOne) {
    return 1;
  }

  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
    return 2;
  }

  return choicesLength < 4 ? 2 : 3;
}

export const i18n = createI18n({
  legacy: false,
  locale: getLocale(),
  fallbackLocale: ELocale.DEFAULT,
  // pluralRules: {
  //   [ELocale.RU]: customRule,
  // },
  messages: {
    ru,
    uz,
  },
});
