import {
  EPlatform,
  type IClientConfig,
  type IClientUserProperties,
} from '@market-tech/clickstream-client-js';

import { getTokenFromCookie } from '$shared/helpers';

import pkg from '../../../../package.json';

export default function getClickstreamConfig(userProperties: IClientUserProperties) {
  const clickstreamUrl = import.meta.env.VITE_APP_CLICKSTREAM_ENDPOINT;
  const logTraceVersion = import.meta.env.VITE_APP_CLICKSTREAM_LOG_TRACE_VERSION === 'true';

  const config: IClientConfig = {
    deviceProperties: {
      platform: EPlatform.WEB,
    },
    userProperties,
    appProperties: {
      appVersion: pkg.version,
      packageName: pkg.name,
    },
    eventsDebounceTime: 1000,
    clickstreamUrl,
    accessToken: getTokenFromCookie(),
    logTraceVersion,
  };

  return config;
}
