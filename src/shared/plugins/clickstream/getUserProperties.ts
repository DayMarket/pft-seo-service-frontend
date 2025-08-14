import type { IClientUserProperties } from '@market-tech/clickstream-client-js';
import { useCookies } from '@vueuse/integrations/useCookies.mjs';

import { i18n } from '$shared/i18n';

export default function getUserProperties() {
  const cookies = useCookies(['_ym_uid', '_ga', 'tmr_lvid']);

  const userProperties: IClientUserProperties = {
    googleCid: cookies.get('_ga'),
    myTrackerLvid: cookies.get('tmr_lvid'),
    yaMetricaId: cookies.get('_ym_uid'),
    muid: '',
    language: i18n.global.locale.value,
  };

  return userProperties;
}
