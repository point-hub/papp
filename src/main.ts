import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@unocss/reset/tailwind.css'
import '@/assets/css/main.css'
import 'virtual:uno.css'
import App from './app.vue'
import router from './router'
import PluginInputMask from './plugins/input-mask'
import PluginTooltip from './plugins/tooltip'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(PluginInputMask)
app.use(PluginTooltip)
app.mount('#app')
