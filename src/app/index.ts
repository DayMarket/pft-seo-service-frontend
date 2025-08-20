import '@uzum/ui-kit/dist/index.min.css';

import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './providers/router';

const initApp = async () => {
  const vueApp = createApp(App).use(createPinia()).use(router).use(VueQueryPlugin);

  return vueApp.mount('#app');
};

initApp().catch((error) => {
  console.error('Failed to initialize application:', error);
});

export default initApp;
