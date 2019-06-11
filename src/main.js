import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter);

Vue.config.productionTip = false

Vue.component('Navbar',Navbar);

const routes = [
  {
    path:'/',
    name: '/',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component:Login
  }

];

const router = new VueRouter({
  routes,
  mode:'history'
});


new Vue({
 router,
  render: h => h(App),
}).$mount('#app')
