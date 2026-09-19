import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import { reveal } from '@/directives/reveal'

import './styles/theme.scss'

createApp(App).use(router).directive('reveal', reveal).mount('#app')
