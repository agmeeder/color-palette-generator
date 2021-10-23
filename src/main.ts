import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

import './index.css'
import 'primevue/resources/themes/tailwind-light/theme.css'

const app = createApp(App)
app.use(PrimeVue, { ripple: true })
app.mount('#app')
