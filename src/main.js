import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from './components/Navbar.vue'
import router from './router'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.component('Navbar',Navbar);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
