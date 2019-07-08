import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
import Reset from './components/Reset'
import VerifyNo from './components/VerifyNo'
import SetPassword from './components/SetPassword'
//import { verify } from 'crypto';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
          {
            path:'/',
            name: 'home',
            component: Home
          },
          {
            path: '/login',
            name: 'login',
            component: Login
          },
          {
            path: '/reset',
            name: 'reset',
            component: Reset
          },
          {
            path: '/verifyNo',
            name: 'verifyNo',
            component: VerifyNo
          },
          {
            path: '/setPassword',
            name: 'setPassword',
            component: SetPassword
          }
        
    ]
})