export enum ELocale {
  RU = 'ru',
  UZ = 'uz',
  DEFAULT = 'uz',
}

export const RFCLocaleMap: Record<ELocale, string> = {
  [ELocale.RU]: 'ru-RU',
  [ELocale.UZ]: 'uz-UZ',
};
