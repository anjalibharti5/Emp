import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.mount('#app');



// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
