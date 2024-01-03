import { type App } from 'vue'

import BaseIcon from '@/components/base-icon.vue'

export default {
  install(Vue: App) {
    Vue.component('BaseIcon', BaseIcon)
  }
}
