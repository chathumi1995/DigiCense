import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Navbar from './components/Navbar.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter);

Vue.config.productionTip = false

Vue.component('Navbar',Navbar);

const routes = [
  {path:'/',component:Home},
  {path: '/login',component:Login}

];

const router = new VueRouter({
  routes,
  mode:'history'
});


new Vue({
 router,
  render: h => h(App),
}).$mount('#app')
