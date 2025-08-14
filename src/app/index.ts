import '@uzum/ui-kit/dist/index.min.css';

import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import { gbKey, initializeGrowthBook } from '$shared/helpers';
import { i18n } from '$shared/i18n';
import { clickstreamPlugin } from '$shared/plugins/clickstream';

import App from './App.vue';
import router from './providers/router';

const initApp = async () => {
  const gbInstance = await initializeGrowthBook();

  const vueApp = createApp(App)
    .use(createPinia())
    .use(router)
    .use(i18n)
    .use(VueQueryPlugin)
    .use(clickstreamPlugin);

  vueApp.provide(gbKey, gbInstance);

  return vueApp.mount('#app');
};

initApp().catch((error) => {
  console.error('Failed to initialize application:', error);
});

export default initApp;
