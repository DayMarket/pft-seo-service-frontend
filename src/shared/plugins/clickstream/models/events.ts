import type { PageViewDto } from './dto';

export enum EEventKey {
  PAGE_VIEW = 'PAGE_VIEW',
}

export type TEventsMap = {
  [EEventKey.PAGE_VIEW]: PageViewDto;
};

export type TErrorsEventsMap = {};
export type PerformanceEventsMap = {};
