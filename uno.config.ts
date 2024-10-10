import presetPappIcon from '@point-hub/preset-papp-icon'
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({ mode: 'vue-scoped' }),
    presetPappIcon(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        'open-sans': 'Open Sans'
      }
    })
  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      primary: '#321fda',
      secondary: '#9da5b1',
      info: '#3399ff',
      success: '#2eb85c',
      warning: '#f9b115',
      danger: '#e55353'
    }
  }
})
