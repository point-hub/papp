import { presetPappIcon } from '@point-hub/preset-papp-icon'
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetPappIcon()
  ],
  transformers: [transformerDirectives()]
})
