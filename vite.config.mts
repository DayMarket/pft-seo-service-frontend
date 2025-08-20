import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import vueDevTools from 'vite-plugin-vue-devtools';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), mkcert(), vueDevTools(), tsconfigPaths()],
  server: {
    // host: 'customers.dev.internal.daymarket.uz',
    // https: true,
    // port: 443,
    // host: '0.0.0.0',
    // hmr: {
    //   host: 'customers.dev.internal.daymarket.uz',
    //   port: 443,
    // }
  },
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {},
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].[hash].js`,
      },
    },
  },
});
