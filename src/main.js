import Vue from 'vue'
import App from './App.vue'
import './styles/global-styles.css'
import VueToggles from 'vue-toggles';
 
Vue.config.productionTip = false
Vue.component('VueToggles', VueToggles);

new Vue({
  render: h => h(App),
}).$mount('#app')
