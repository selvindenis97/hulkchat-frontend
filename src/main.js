import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import mitt from 'mitt';                  // Import mitt
const emitter = mitt();

createApp(App)
    .provide('emitter', emitter)
    .use(router)
    .mount('#app');
