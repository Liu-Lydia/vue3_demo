import { URL, fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { svgBuilder } from './src/plugins/svgBuilder'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgBuilder('./src/assets/icons/')],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `
      @import "./src/assets/css/utils/_variable.scss";
      @import "./src/assets/css/utils/_viewport.scss";
      @import "./src/assets/css/components/_button.scss";
      ` },
    },
  }
})
