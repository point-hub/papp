import '@/assets/css/reset.css'
import '@/assets/css/main.css'
import 'virtual:uno.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { PluginIcon, PluginInputMask, PluginTooltip } from '@/index'

import App from './app.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(PluginInputMask)
app.use(PluginTooltip)
app.use(PluginIcon)
app.mount('#app')
