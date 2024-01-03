import '@unocss/reset/tailwind.css'
import '@/assets/css/main.css'
import 'virtual:uno.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './app.vue'
import PluginInputMask from './plugins/input-mask'
import PluginTooltip from './plugins/tooltip'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(PluginInputMask)
app.use(PluginTooltip)
app.mount('#app')
