import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from './components/Navbar.vue'
import router from './router'
import Vuelidate from 'vuelidate'
//import axios from 'axios'

//import { store } from './store/store';
//axios.defaults.baseURL ='https://digicense-api.herokuapp.com' 
Vue.use(BootstrapVue)
Vue.use(Vuelidate)

Vue.config.productionTip = false

Vue.component('Navbar',Navbar);

new Vue({
  router,
  //store,
  render: h => h(App),
}).$mount('#app')
