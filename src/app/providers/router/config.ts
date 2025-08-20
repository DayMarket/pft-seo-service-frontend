import { fastIsEqual } from 'fast-is-equal';
import isEmpty from 'lodash.isempty';
import {
  createWebHistory,
  type RouteLocationNormalized,
  type Router,
  type RouterOptions,
} from 'vue-router';

import { routes } from '$app/providers/router/routes.ts';

export const options: RouterOptions = {
  routes,
  history: createWebHistory(),
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 48,
      };
    } else if (to.name !== 'shop') {
      return {
        top: 0,
        behavior: 'smooth',
      };
    } else {
      const productsListEl = document.getElementById('caregory-content-wrapper-header');

      if (!productsListEl) return { top: 0, behavior: 'smooth' };

      const offset = productsListEl.offsetTop - 145;

      if (window.scrollY >= offset) {
        return {
          top: offset,
          behavior: 'smooth',
        };
      }
    }

    return savedPosition
      ? { ...savedPosition, behavior: 'smooth' }
      : { top: 0, behavior: 'smooth' };
  },
};

// Reload protection
export function guard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const pathIsNotSame = from.name ? !isSameRoute(to, from) : to.path !== window.location.pathname;

    if (pathIsNotSame) {
      window.location.href = to.fullPath;

      return false;
    }

    next();
  });

  return router;
}

function isSameRoute(
  routeTo: RouteLocationNormalized,
  routeFrom: RouteLocationNormalized,
): boolean {
  const isSameParams = fastIsEqual(routeTo.params, routeFrom.params);

  const isSameQuery =
    fastIsEqual(routeTo.query, routeFrom.query) ||
    (isEmpty(routeFrom.query) && isEmpty(routeTo.query));

  if (routeFrom.name === routeTo.name && isSameParams && isSameQuery) {
    return true;
  }

  return false;
}
