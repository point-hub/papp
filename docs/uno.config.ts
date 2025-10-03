import { presetPappIcon } from '@point-hub/preset-papp-icon'
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetPappIcon(),
  ],
  transformers: [transformerDirectives()],
})
