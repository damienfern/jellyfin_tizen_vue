import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vjsn from "vue-js-spatial-navigation"
 
Vue.use(vjsn)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
