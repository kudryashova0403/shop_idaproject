import Vue from 'vue'
import App from './App.vue'
import store from "./vuex/product";
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
