import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './lib/i18n'
import { router } from './router'
import ui from '@nuxt/ui/vue-plugin'

createApp(App)
  .use(i18n)
  .use(router)
  .use(ui)
  .mount('#app')
