import process from 'node:process'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig, type UserConfig } from 'vite'
import UnoCSS from 'unocss/vite'

const isVitepress = process.env.VITEPRESS === 'true'

const config: UserConfig = {
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
}

// https://vitejs.dev/config/
export default defineConfig(isVitepress ? {} : config)
