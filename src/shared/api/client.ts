import { authSdk } from '$shared/helpers';
import { i18n } from '$shared/i18n';

import { Api, HttpClient } from './generated/api';

export const marketingApi = () => {
  const httpClient = new HttpClient({
    baseURL: import.meta.env.VITE_APP_ENDPOINT,
    headers: {
      'Access-Content-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    responseType: 'json',
    withCredentials: true,
  });

  httpClient.instance.interceptors.request.use(
    async (config) => {
      const accessToken = await authSdk.getToken();

      config.headers.Authorization = `Bearer ${accessToken}`;
      config.headers['accept-language'] = i18n.global.locale.value;

      return config;
    },
    (error) => Promise.reject(error),
  );

  const api = new Api(httpClient);

  return {
    faq: api.main,
  };
};
