import type { IUiPropertiesDTO } from '@market-tech/clickstream-client-js';

export type TEventPayload<T> = T extends undefined
  ? {
      uiProperties?: IUiPropertiesDTO;
    }
  : {
      uiProperties?: IUiPropertiesDTO;
      eventParameters: T;
    };
