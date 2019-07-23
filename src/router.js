import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
import Reset from './components/Reset'
import VerifyNo from './components/VerifyNo'
import SetPassword from './components/SetPassword'
import Nav_Drawer from './components/Nav_Drawer'
import ViewLicense from './components/ViewLicense'
import View from './components/View'
import Complaints from './components/Complaints'
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
          },
          {
            path: '/nav_Drawer',
            name: 'nav_Drawer',
            component: Nav_Drawer
          },
          {
            path: '/viewLicense',
            name: 'viewLicense',
            component: ViewLicense
          },
          {
            path: '/view',
            name: 'view',
            component: View
          },
          {
            path: '/complaints',
            name: 'complaints',
            component: Complaints
          }
        
        
    ]
})