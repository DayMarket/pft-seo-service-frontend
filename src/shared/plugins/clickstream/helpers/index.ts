import type { Clickstream } from '../clickstream';
import type { Events } from '../events';

export function addEventsToClickstream(clickstream: Clickstream, events: typeof Events.prototype) {
  for (const key of Object.getOwnPropertyNames(events)) {
    if (key !== 'constructor') {
      clickstream[key] = events[key as keyof Events];
    }
  }

  return clickstream as Clickstream & Events;
}
