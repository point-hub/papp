import '@unocss/reset/tailwind.css'
import '@/assets/css/main.css'
import 'virtual:uno.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { PluginBaseComponents, PluginInputMask, PluginTooltip } from '@/index'

import App from './app.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(PluginInputMask)
app.use(PluginTooltip)
app.use(PluginBaseComponents)
app.mount('#app')
