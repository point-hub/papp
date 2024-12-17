// https://vitepress.dev/guide/custom-theme
import './style.css'
import './custom.css'
import '../../../dist/index.css'
import 'virtual:uno.css'

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
    app.component('Demo', Demo as any)
    app.use(PluginInputMask as any)
    app.use(PluginTooltip as any)
    app.use(PluginBaseComponents as any)
  }
} satisfies Theme
