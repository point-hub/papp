// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'
import '../../../dist/style.css'
import 'virtual:uno.css'
import Demo from './components/demo.vue'
import { PluginInputMask, PluginTooltip } from '@point-hub/papp'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Demo', Demo)
    app.use(PluginInputMask)
    app.use(PluginTooltip)
  }
} satisfies Theme
