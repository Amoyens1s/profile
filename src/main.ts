import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import './assets/tailwind.css';
import 'animate.css/animate.min.css';
import 'animate.css';

createApp(App).use(i18n).mount('#app');
