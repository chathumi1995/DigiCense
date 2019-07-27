import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "./router";
import createPersistedState from "vuex-persistedstate";
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
  plugins: [createPersistedState()],
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
    },
    logoutUser(state) {
      state.user = null;
      state.idToken = null;
      state.userId = null;
      state.license = null;
      state.fines = [];
      state.isLogged = false;
    }
  },
  actions: {
    async login({ commit }, authData) {
      axios
        .post(
          "/users/login",
          JSON.stringify({
            id: authData.id,
            password: authData.password
          })
        )
        .then(async res => {
          await commit("setUser", res.data);
          router.push("/view");
        });
    },
    logout({ commit, state }) {
      const header = {
        headers: { Authorization: "Bearer " + state.idToken }
      };
      axios.get("/users/logout", header).then(res => {
        if (res.status === 200) {
          commit("logoutUser");
          router.push("/login");
        }
      });
    },
    fetchLicense({ commit, state }) {
      const header = {
        headers: { Authorization: "Bearer " + state.idToken }
      };
      axios
        .get("/license", header)
        .then(res => {
          commit("setLicense", res.data);
        })
        .catch(function() {});
    },
    fetchFines({ commit, state }) {
      const header = {
        headers: { Authorization: "Bearer " + state.idToken }
      };

      axios
        .get("/users/fines", header)
        .then(res => {
          commit("setFines", res.data);
        })
        .catch(function() {});
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
    },
    fines(state) {
      return state.fines;
    }
  }
});
