import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/listings',
  },
  {
    path: '/listings',
    name: 'listings',
    component: () => import('$pages/listings'),
  },
  {
    path: '/listings/:id',
    name: 'listing-detail',
    component: () => import('$pages/listing-detail'),
  },
];
