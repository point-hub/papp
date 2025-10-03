import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      content: {
        filesystem: ['src/**/*.vue'],
      },
    }),
    dts({
      entryRoot: './src/',
      tsconfigPath: './tsconfig.app.json'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // Ensure '@' points to the './src' directory
    },
    dedupe: ['vue'] // Dedupe Vue to avoid bundling multiple instances
  },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Papp',
      fileName: 'index'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'pinia', 'vue-router'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          pinia: 'pinia',
          'vue-router': 'vueRouter'
        }
      }
    }
  }
})
