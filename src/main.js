import { createApp } from 'vue'
//import App from '@/pages/loginPage.vue'
import App from '@/pages/loginPage.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import axios from 'axios';
loadFonts()

const app = createApp(App);
app.config.globalProperties.$axios =axios
app.use(router)
app.use(vuetify)
app.mount('#app')
