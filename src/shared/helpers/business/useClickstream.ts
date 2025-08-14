import { getCurrentInstance } from 'vue';

import { getClickstreamFromVueInstance } from './getClickstreamFromVueInstance';

export const useClickstream = () => {
  const instance = getCurrentInstance();

  if (!instance) {
    throw new Error('useClickstream must be used within a Vue component');
  }

  return getClickstreamFromVueInstance(instance.appContext.app);
};
