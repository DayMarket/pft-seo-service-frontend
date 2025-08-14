import type Clickstream from '$shared/plugins/clickstream/clickstream';
import type { Events } from '$shared/plugins/clickstream/events';

declare module 'vue' {
  interface ComponentCustomProperties {
    $clickstream: Clickstream & Events;
  }
}

export {};
