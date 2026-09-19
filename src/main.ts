import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'

import './styles/theme.scss'

createApp(App).use(router).mount('#app')
