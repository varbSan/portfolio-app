import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './lib/i18n'
import { router } from './router'
import ui from '@nuxt/ui/vue-plugin'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(ui)

app.mount('#app')
