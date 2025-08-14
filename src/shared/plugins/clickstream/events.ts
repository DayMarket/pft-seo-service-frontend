import { Clickstream } from './clickstream';
import { type TEventPayload } from './models/event-payload';
import { EEventKey, type TEventsMap } from './models/events';

export class Events extends Clickstream {
  public pageView({
    uiProperties,
    eventParameters,
  }: TEventPayload<TEventsMap[EEventKey.PAGE_VIEW]>) {
    return this.sendEvent<EEventKey.PAGE_VIEW>({
      event: EEventKey.PAGE_VIEW,
      payload: {
        uiProperties,
        eventParameters,
      },
    });
  }
}

export type TEventKeys = keyof typeof Events.prototype;
