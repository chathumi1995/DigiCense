import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import Vuelidate from "vuelidate";
import axios from "axios";
import VueResource from "vue-resource";
import qs from "qs";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
Vue.use(Vuetify);
Vue.use(VueResource);

import { store } from "./store";
axios.defaults.baseURL = "https://digicense-api.herokuapp.com";
axios.defaults.headers.post["Accepts"] = "application/json";
//axios.defaults.headers.get['Accepts'] = 'application/json'
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

Vue.use(BootstrapVue);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

//Vue.component('Navbar',Navbar); //import Navbar
//Vue.component('Navbar',Home);
new Vue({
  router,
  store,
  qs,
  render: h => h(App)
}).$mount("#app");
