import presetPappIcon from '@point-hub/preset-papp-icon'
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({ mode: 'vue-scoped' }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        inter: [
          {
            name: 'Inter',
            weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
            italic: true
          }
        ],
        monserrat: [
          {
            name: 'Montserrat',
            weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
            italic: true
          }
        ],
        roboto: [
          {
            name: 'Roboto',
            weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
            italic: true
          }
        ],
        'roboto-mono': 'Roboto Mono'
      }
    }),
    presetPappIcon()
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
  },
  // https://unocss.dev/guide/extracting#limitations
  safelist: ['i-fad-house-chimney', 'i-fad-wand-magic-sparkles']
})
