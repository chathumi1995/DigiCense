import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "./router";
import globlaAxios from "axios";
import { resolve, reject } from "q";
import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
    isLogged: false
  },
  mutations: {
    setUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.user.id;
      state.isLogged = true;
      state.user = userData.user;
    }
  },
  actions: {
    login({ commit }, authData) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            "/users/login",
            JSON.stringify({
              id: authData.id,
              password: authData.password
            })
          )
          .then(res => {
            commit("setUser", res.data);
            router.push("/view");
          });
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
    isAuthenticated(state) {
      return state.idToken !== null; /*check token*/
    }
  }
});
