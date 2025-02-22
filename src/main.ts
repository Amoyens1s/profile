import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import './assets/tailwind.css';
import 'animate.css/animate.min.css';
import 'animate.css';
import router from './router';

createApp(App).use(router).use(i18n).mount('#app');
