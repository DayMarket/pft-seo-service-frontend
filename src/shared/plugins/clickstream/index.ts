import type { App } from 'vue';
import { setupErrorLogger } from '@market-tech/clickstream-client-js/errorLogger'
import { setupPerformanceMetrics } from '@market-tech/clickstream-client-js/performanceMetrics'
import { Clickstream } from './clickstream';
import { Events } from './events';
import getClickstreamConfig from './getClickstreamConfig';
import getUserProperties from './getUserProperties';
import { addEventsToClickstream } from './helpers';

const userProperties = getUserProperties();
const config = getClickstreamConfig(userProperties);
const clickstreamWithoutEvents = new Clickstream(config);
const clickstream = addEventsToClickstream(clickstreamWithoutEvents, Events.prototype);

const clickstreamPlugin = {
  install(app: App) {
    app.config.globalProperties.$clickstream = clickstream;

    setupErrorLogger(clickstream.client.sendError, {
      app,
    })
    setupPerformanceMetrics(clickstream.client.sendPerformance)
  },
};

export { clickstream, clickstreamPlugin };
