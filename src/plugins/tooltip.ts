import 'tippy.js/dist/tippy.css' // optional for styling

import type { App } from 'vue'
import { plugin as VueTippy } from 'vue-tippy'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PluginTooltip: any = {
  install(app: App) {
    app.use(VueTippy, {
      directive: 'tooltip', // => v-tooltip
      component: 'base-tooltip', // => <base-tooltip/>
      componentSingleton: 'base-tooltip-singleton', // => <base-tooltip-singleton/>,
      defaultProps: {
        interactive: true,
        hideOnClick: false
      }
    })
  }
}

export default PluginTooltip
