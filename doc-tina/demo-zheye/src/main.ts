import { createApp } from 'vue'
import Vue from 'vue'
import router from './router'
import store from './store'
import service from "./utils/http";
import App from './App.vue'
const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
