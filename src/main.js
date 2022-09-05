import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import 'vant/es/toast/style';
import config from "./config";

const app = createApp(App)

app.config.globalProperties.images = config.imgURL

app.use(createPinia())
app.use(router)

app.mount('#app')
