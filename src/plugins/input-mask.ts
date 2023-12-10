import { type App } from 'vue'
import Cleave from 'cleave.js'

export default {
  install(Vue: App) {
    Vue.directive('input-mask', {
      mounted: (el, binding) => {
        el.cleave = new Cleave(el, binding.value || {})
      }
    })
  }
}
