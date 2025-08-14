import type { RouteRecordRaw } from 'vue-router';

import { ELocale } from '$shared/i18n/types.ts';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'home',
    component: () => import('$pages/home'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('$pages/auth'),
  },
];

export const routesWithPrefix = routes.map((route) => {
  const prefix = `/:lang(${ELocale.RU}|${ELocale.UZ})?`;
  const clonedRoute = { ...route };

  if (clonedRoute.path !== '*') {
    clonedRoute.path = prefix + clonedRoute.path;
  }

  return clonedRoute;
});

