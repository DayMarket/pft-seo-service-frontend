import {
  ClickstreamClient,
  type IClientConfig,
  type IClientSend,
  type IUpdatedConfigOptions,
  type ClientRuntimeSend,
  type PerformanceSend
} from '@market-tech/clickstream-client-js';

import type { TEventsMap, TErrorsEventsMap, PerformanceEventsMap } from './models/events';

export class Clickstream {
  // eslint-disable-next-line no-undef, @typescript-eslint/no-explicit-any
  [key: string]: any;
  client = ClickstreamClient.getInstance<TEventsMap, TErrorsEventsMap, PerformanceEventsMap>();

  constructor(config: IClientConfig) {
    this.init(config);
  }

  private init(config: IClientConfig) {
    this.client.init(config);
  }

  public updateConfig(updatedConfig: IUpdatedConfigOptions): void {
    if (!this.client) {
      return;
    }

    this.client.updateConfig(updatedConfig);
  }

  public sendEvent<T extends keyof TEventsMap>(
    options: IClientSend<T, TEventsMap[T]>,
  ): Promise<boolean> {
    if (!this.client || import.meta.env.VITE_APP_TESTING_ENVIRONMENT === 'enabled') {
      return Promise.resolve(false);
    }

    return this.client.send(options);
  }

  public sendError = <T extends keyof TErrorsEventsMap>(
    options: ClientRuntimeSend<T, TErrorsEventsMap[T]>,
  ): Promise<boolean> => {
    if (!this.client || import.meta.env.VITE_APP_TESTING_ENVIRONMENT === 'enabled') {
      return Promise.resolve(false);
    }

    return this.client.sendError(options);
  };

  public sendPerformance = <T extends keyof PerformanceEventsMap>(
    options: PerformanceSend<T, PerformanceEventsMap[T]>,
  ): Promise<boolean> => {
    if (!this.client || import.meta.env.VITE_APP_TESTING_ENVIRONMENT === 'enabled') {
      return Promise.resolve(false);
    }

    return this.client.sendPerformance(options);
  };

  public getInstallId() {
    const testingEnvironment = import.meta.env.VITE_APP_TESTING_ENVIRONMENT === 'enabled';

    return testingEnvironment ? Promise.resolve(false) : this.client.getInstallId();
  }

  public addMethod(name: string, method: (...args: unknown[]) => void) {
    this[name] = method;
  }
}

export default Clickstream;
