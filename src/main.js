import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import './custom-styles.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import 'buefy/dist/buefy.css'
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy, {
  defaultIconPack: 'fa',
  defaultContainerElement: '#content'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
