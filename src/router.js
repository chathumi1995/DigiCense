import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Login from "./components/Login/Login";
import Reset from "./components/Reset";
import VerifyNo from "./components/VerifyNo";
import SetPassword from "./components/SetPassword";
import Nav_Drawer from "./components/Nav_Drawer";
import ViewLicense from "./components/ViewLicense";
import View from "./components/Dashboard/View";
import Complaints from "./components/Complaints";
import Resource from "./components/Resources";
//import { verify } from 'crypto';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/reset",
      name: "reset",
      component: Reset
    },
    {
      path: "/verifyNo",
      name: "verifyNo",
      component: VerifyNo
    },
    {
      path: "/setPassword",
      name: "setPassword",
      component: SetPassword
    },
    {
      path: "/nav_Drawer",
      name: "nav_Drawer",
      component: Nav_Drawer
    },
    {
      path: "/viewLicense",
      name: "viewLicense",
      component: ViewLicense
    },
    {
      path: "/view",
      name: "view",
      component: View
      /*beforeEnter(to,from,next){
              if(store.state.idToken){
                next()
              }
              else{
                next('/login')
              }
            }*/
    },
    {
      path: "/complaints",
      name: "complaints",
      component: Complaints
    },
    {
      path: "/resources",
      name: "resources",
      component: Resource,
      meta: {
        requiresAuth: true
      }
    }
  ]
  /*  router.beforeEach((to, from, next) => {
      if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
          next()
          return
        }
        next('/login')
      } else {
        next()
      }
    })*/
});
