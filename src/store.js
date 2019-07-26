import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "./router";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
    license: null,
    fines: [],
    isLogged: false
  },
  mutations: {
    setUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.user.id;
      state.user = userData.user;
    },
    setLicense(state, licenseData) {
      state.license = licenseData;
      state.isLogged = true;
    },
    setFines(state, fines) {
      state.fines = fines;
    }
  },
  actions: {
    async login({ commit, state }, authData) {
      axios
        .post(
          "/users/login",
          JSON.stringify({
            id: authData.id,
            password: authData.password
          })
        )
        .then(async res => {
          console.log(res);
          await commit("setUser", res.data);
          const header = {
            headers: { Authorization: "Bearer " + state.idToken }
          };
          //fetch license from database
          await axios
            .get("/license", header)
            .then(res => {
              console.log(res);
              commit("setLicense", res.data);
              router.push("/view");
            })
            .catch(function() {});

          //fetch fines from database
          axios
            .get("/users/fines", header)
            .then(res => {
              console.log(res);
              commit("setFines", res.data);
            })
            .catch(function() {});
        });
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    idToken(state) {
      return state.idToken;
    },
    isLogged(state) {
      return state.isLogged;
    },
    license(state) {
      return state.license;
    }
  }
});
