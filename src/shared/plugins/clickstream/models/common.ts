import type {
  EUiPropertiesAction,
  EUiPropertiesSpaceType,
  EUiPropertiesWidgetType,
} from '@market-tech/clickstream-client-js';

export interface IUiProperties {
  action?: EUiPropertiesAction;
  position?: number;
  promo_status?: string;
  promo_name?: string;
  promocode?: string;
  error_type?: string;
  widget_name?: string;
  widget_type?: EUiPropertiesWidgetType;
  widget_text?: string;
  widget_position?: number;
  section_name?: string;
  text?: string;
  space_id?: string;
  space_name: string;
  space_type: EUiPropertiesSpaceType;
  section_id?: number;
  filter_id?: number;
  query?: string;
  page_type?: string;
  group_name?: string;
  delivery_point_id?: string;
}

export type TTrackerPayload<T> = T extends undefined ? IUiProperties : T & IUiProperties;

export enum MediaSourceType {
  VIDEO = 'VIDEO',
  PHOTO = 'PHOTO',
}

export enum SourceType {
  PRODUCT = 'PRODUCT',
  REVIEW = 'REVIEW',
}

export enum WidgetNames {
  QUICK_ATC = 'QUICK_ATC',
  MEDIA = 'MEDIA',
  TAP_PAUSE_VIDEO = 'TAP_PAUSE_VIDEO',
  TAP_PLAY_VIDEO = 'TAP_PLAY_VIDEO',
  MUTE_VIDEO = 'MUTE_VIDEO',
  UNMUTE_VIDEO = 'UNMUTE_VIDEO',
  SIZES_TABLE = 'SIZES_TABLE',
  INSTALLMENT_LANDING_OPEN = 'INSTALLMENT_LANDING_OPEN',
  FAST_FILTER = 'FAST_FILTER',
  SEARCH_ALL_CATEGORIES = 'SEARCH_ALL_CATEGORIES',
  FAST_CATEGORY = 'FAST_CATEGORY',
  FAST_CATEGORY_LESS = 'FAST_CATEGORY_LESS',
  FAST_CATEGORY_MORE = 'FAST_CATEGORY_MORE',
  PRODUCT = 'PRODUCT',
}

export enum SectionNames {
  PRODUCT_VIDEO = 'PRODUCT_VIDEO',
  LIST = 'LIST',
}

export enum FilterTypes {
  CATEGORY = 'CATEGORY',
  SEARCH_ALL_CATEGORIES = 'SEARCH_ALL_CATEGORIES',
  INSTALLMENT_POPUP_OPEN = 'INSTALLMENT_POPUP_OPEN',
  INSTALLMENT_LANDING_OPEN = 'INSTALLMENT_LANDING_OPEN',
  SEE_ALSO_CATEGORY = 'SEE_ALSO_CATEGORY',
  SHOP = 'SHOP',
  PRODUCT_VIDEO = 'PRODUCT_VIDEO',
  PRODUCT_PHOTO360 = 'PRODUCT_PHOTO360',
  TO_ALL_REVIEWS = 'TO_ALL_REVIEWS',
  MEDIA = 'MEDIA',
  MUTE_VIDEO = 'MUTE_VIDEO',
  UNMUTE_VIDEO = 'UNMUTE_VIDEO',
  TAP_PAUSE_VIDEO = 'TAP_PAUSE_VIDEO',
  TAP_PLAY_VIDEO = 'TAP_PLAY_VIDEO',
}
