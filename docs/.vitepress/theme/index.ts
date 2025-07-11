// https://vitepress.dev/guide/custom-theme
import './style.css'
import './custom.css'
import '../../../dist/index.css'

import { PluginBaseComponents, PluginInputMask, PluginTooltip } from '@point-hub/papp'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

import Demo from './components/demo.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  enhanceApp({ app, router, siteData }) {
    app.component('Demo', Demo as never)
    app.use(PluginInputMask)
    app.use(PluginTooltip)
    app.use(PluginBaseComponents)
  }
} satisfies Theme
