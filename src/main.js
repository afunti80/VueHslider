import Vue from 'vue'
import App from './App'
import vueHslider from './lib/index.js'
Vue.use(vueHslider)
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, vueHslider }
})
