import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import './css/style.css'

import self from "./page/self.vue"
import contents from "./page/contents.vue"

const app = createApp(App);
app.component('self', self)
app.component('contents', contents)
app.use(router);
app.mount('#app');
