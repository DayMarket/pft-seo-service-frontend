import AuthSDK, { UzumStrategy } from '@market-tech/frontend-auth-sdk';
import Cookies from 'universal-cookie';

import { ECookieKeys } from '$shared/helpers';

const authSdk = new AuthSDK(
  UzumStrategy.getInstance()
    .getOptionsBuilder()
    .setAuthEndpoint(import.meta.env.VITE_APP_AUTH_ENDPOINT)
    .getStrategy(),
);

const cookies = new Cookies(null, { path: '/' });

authSdk.getTokenStream().subscribe((token: string) => {
  cookies.set(ECookieKeys.ACCESS_TOKEN, token);
});

const getTokenFromCookie = () => {
  return cookies.get(ECookieKeys.ACCESS_TOKEN);
};

export { authSdk, getTokenFromCookie };
