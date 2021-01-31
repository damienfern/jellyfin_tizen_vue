import Vue from 'vue'
import App from './App.vue'
import vjsn from "vue-js-spatial-navigation"
 
Vue.use(vjsn)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
