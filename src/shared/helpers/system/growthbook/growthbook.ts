import { GrowthBook } from '@growthbook/growthbook';
import { EPlatform } from '@market-tech/clickstream-client-js';
import type { InjectionKey } from 'vue';
import { reactive } from 'vue';

import { clickstream } from '$shared/plugins/clickstream';

import pkg from '../../../../../package.json';

const enableDevMode =
  (import.meta.env.PROD && import.meta.env.VITE_APP_GROWTHBOOK_ENABLE_DEV_MODE === 'true') ||
  !import.meta.env.PROD;

const gbInstance = reactive(
  new GrowthBook({
    clientKey: import.meta.env.VITE_APP_GROWTHBOOK_CLIENT_KEY,
    attributes: {
      install_id: clickstream.getInstallId() || '',
      platform: EPlatform.WEB,
      app_version: pkg.version,
    },
    enableDevMode,
  }),
);

// Share the provider type with other components
export const gbKey = Symbol('gb') as InjectionKey<typeof gbInstance | null>;

// Initialize GrowthBook with streaming enabled for real-time updates
const initializeGrowthBook = async () => {
  try {
    await gbInstance.init({ streaming: true, timeout: 3000 });

    return gbInstance;
  } catch (e) {
    console.error('Error initializing GrowthBook:', e);

    return null;
  }
};

export { initializeGrowthBook };
