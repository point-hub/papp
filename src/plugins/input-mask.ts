import Cleave from 'cleave.js'
import type { App } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PluginInputMask: any = {
  install(app: App) {
    app.directive('input-mask', {
      mounted: (el, binding) => {
        el.cleave = new Cleave(el, binding.value || {})
      }
    })
  }
}

export default PluginInputMask
