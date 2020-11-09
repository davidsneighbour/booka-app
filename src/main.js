import { createApp } from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

const bookaApp = createApp(App)
bookaApp.use(BootstrapVue)
bookaApp.use(IconsPlugin)
bookaApp.mount('#app')
