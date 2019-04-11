import Vue from 'vue'
import App from './App.vue'
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//import 'buefy/dist/buefy.css'
Vue.config.productionTip = false
//Vue.component('vue-fontawesome', FontAwesomeIcon)

import Buefy from 'buefy'
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import './custom-styles.scss'

Vue.use(Buefy, {
  defaultIconPack: 'fas'
})
// import config from 'buefy/src/utils/config';
// config.defaultIconPack = 'fas';

new Vue({
  render: h => h(App),
}).$mount('#app')
