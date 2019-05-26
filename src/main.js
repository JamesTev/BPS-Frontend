import Vue from 'vue'
import App from './App.vue'
import PubNubVue from 'pubnub-vue'
import VueMq from 'vue-mq'

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
Vue.use(PubNubVue, { 
  subscribeKey: 'sub-c-353ccd88-5c41-11e9-94f2-3600c194fb1c', 
  publishKey: 'pub-c-3a435a19-3855-453a-85c2-6df1ece3f54c' 
});

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 450,
    md: 1250,
    lg: Infinity,
  }
})
// import config from 'buefy/src/utils/config';
// config.defaultIconPack = 'fas';

new Vue({
  render: h => h(App),
}).$mount('#app')
