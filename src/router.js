import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Login from "./components/Login/Login";
import Reset from "./components/Reset";
import VerifyNo from "./components/VerifyNo";
import SetPassword from "./components/SetPassword";
import View from "./components/Dashboard/View";
import Complaints from "./components/Dashboard/Complaints";
import Resource from "./components/Resources";
import Fine from "./components/Dashboard/Fine";

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
      path: "/view",
      name: "view",
      component: View
    },
    {
      path: "/complaints",
      name: "complaints",
      component: Complaints
    },
    {
      path: "/fine",
      name: "fine",
      component: Fine
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
});
