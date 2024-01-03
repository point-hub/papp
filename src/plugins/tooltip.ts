import 'tippy.js/dist/tippy.css' // optional for styling

import { type App } from 'vue'
import { plugin as VueTippy } from 'vue-tippy'

export default {
  install(Vue: App) {
    Vue.use(VueTippy, {
      directive: 'tooltip', // => v-tooltip
      component: 'base-tooltip', // => <base-tooltip/>
      componentSingleton: 'base-tooltip-singleton', // => <base-tooltip-singleton/>,
      defaultProps: {
        interactive: true
      }
    })
  }
}
