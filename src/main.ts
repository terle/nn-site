import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import plausible from './plugins/plausible';

const plausibleOptions = { 
  domain: 'northern-nerds.dk',  
  trackLocalhost: true,
};


createApp(App)
    .use(vuetify)
    .use(plausible, plausibleOptions)
    .mount('#app')
