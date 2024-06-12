import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import autoImport from 'unplugin-auto-import/vite';

export default defineConfig((config) => {
  return {
    base: '/',
    resolve: {
      alias: {
        '@': 'src',
      },
    },
    plugins: [
      vue(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      autoImport({
        imports: ['vue', 'vue-router', '@vueuse/core'],
        dts: 'src/typings/auto-imports.d.ts',
      }),
    ],
    server: {
      port: 9527,
    },
  };
});
