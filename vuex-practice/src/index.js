import Vue from 'vue'
import App from './App'
import store from './store'

const app = new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})

app.$mount('#app')
