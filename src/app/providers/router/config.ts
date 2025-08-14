import { fastIsEqual } from 'fast-is-equal';
import isEmpty from 'lodash.isempty';
import {
  createWebHistory,
  type RouteLocationNormalized,
  type Router,
  type RouterOptions,
} from 'vue-router';

import { routesWithPrefix } from '$app/providers/router/routes.ts';
import { getLocale } from '$shared/i18n/get-locale.ts';
import { setLocale } from '$shared/i18n/set-locale.ts';

export const options: RouterOptions = {
  routes: routesWithPrefix,
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
    const lang =
      typeof to.params.lang === 'string'
        ? to.params.lang.toLowerCase()
        : to.params.lang?.[0]?.toLowerCase();

    const locale = getLocale();
    const pathIsNotSame = from.name ? !isSameRoute(to, from) : to.path !== window.location.pathname;

    if (lang && pathIsNotSame) {
      window.location.href = to.fullPath;

      return false;
    }

    document.documentElement.lang = locale;
    document.querySelector('meta[http-equiv="content-language"]')?.setAttribute('content', locale);

    const routeToWithLocale = {
      name: to.name,
      params: {
        ...to.params,
        lang: lang || locale,
      },
      query: to.query,
    };

    if (!lang) {
      if (isSameRoute(from, routeToWithLocale as unknown as RouteLocationNormalized)) {
        next(routeToWithLocale);

        return false;
      } else {
        next(routeToWithLocale);

        return false;
      }
    } else if (lang !== locale) {
      setLocale(lang as 'uz' | 'ru');
      next(routeToWithLocale);

      return false;
    } else {
      next();

      return true;
    }
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
