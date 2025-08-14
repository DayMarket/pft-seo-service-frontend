import { inject } from 'vue';

import { gbKey } from './growthbook';

export const useGrowthbook = () => {
  const growthbook = inject(gbKey);

  const isOn = (feature: string) => {
    if (!growthbook) {
      console.error('[Growthbook] growthbook is not initialized');

      return false;
    }

    return growthbook?.isOn(feature);
  };

  return {
    isOn,
  };
};
