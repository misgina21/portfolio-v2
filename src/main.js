import './assets/style.css'
import 'viewerjs/dist/viewer.css'; 
import VueViewer from 'v-viewer'; 

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(VueViewer);
app.use(createPinia())
app.use(router)

app.mount('#app')
