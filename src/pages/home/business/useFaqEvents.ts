import { EUiPropertiesAction, EUiPropertiesSpaceType } from '@market-tech/clickstream-client-js';

import { useClickstream } from '$shared/helpers';

export const useFaqEvents = () => {
  const clickstream = useClickstream();

  const pageView = () => {
    clickstream.pageView({
      uiProperties: {
        space: {
          name: 'faq',
          type: EUiPropertiesSpaceType.PAGE,
        },
        action: EUiPropertiesAction.SHOW,
      },
      eventParameters: {},
    });
  };

  return {
    pageView,
  };
};
