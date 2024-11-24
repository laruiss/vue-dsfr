import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'
import { defineConfig, type UserConfig } from 'vite'
import UnoCSS from 'unocss/vite'

const projectDir = dirname(new URL(import.meta.url).pathname)

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
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
    },
  },
  build: {
    cssMinify: 'lightningcss',
    lib: {
      name: 'vue-dsfr',
      entry: resolve(projectDir, 'src', 'index.ts'),
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        exports: 'named',
        dir: 'dist',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
}

// https://vitejs.dev/config/
export default defineConfig(isVitepress ? {} : config)
