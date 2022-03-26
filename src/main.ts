import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { vuetify } from '@plugins';
import './styles/main.scss';

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')