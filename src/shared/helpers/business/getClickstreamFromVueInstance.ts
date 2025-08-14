import type { App } from 'vue';

export const getClickstreamFromVueInstance = (app: App) => {
  const clickstream = app.config.globalProperties.$clickstream;

  if (!clickstream) {
    throw new Error('Clickstream not found');
  }

  return clickstream;
};
