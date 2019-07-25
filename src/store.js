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
      state.userId = userData.userId;
      state.isLogged = true;
      state.user = userData.user;
      console.log(state.user);
    },
    fetchUsers(state, user) {
      state.user = user;
    }
  },
  actions: {
    login({ commit, dispatch }, authData) {
      axios
        .post(
          "/users/login",
          JSON.stringify({
            id: authData.id,
            password: authData.password,
            returnSecureToken: true
          })
        )
        .then(res => {
          commit("setUser", {
            token: res.data.token,
            userId: res.data.user.id,
            user: res.data.user
          });
        });
    },

    fetchUser({ commit, state }) {
      const header = "Authorization: " + "Bearer " + state.idToken;
      console.log(state.idToken);
      if (!state.idToken) {
        return;
      }
      globlaAxios
        .get("https://digicense-api.herokuapp.com/license", { headers: header })
        .then(res => {
          state.user = res.data;
          console.log(res.data);
        })
        .catch(function(error) {
          this.user = "an error occurred." + error;
        });
      /*.then(res=>{
                    console.log(res)
                    const data=res.data
                    const users=[]
                    for(let key in data){
                        const user=data[key]
                        user.id=key
                        users.push(user)
                    }
                    console.log(users)

                })*/
    }
    /*auto login*/
    /*tryAutoLogin({commit}){
            const token=localStorage.getItem('token')
            if(!token){
                return
            }
            const expirationDate=localStorage.getItem('expirationDate')
            const now =new Date()
            if(now >= expirationDate){
                return
            }
            const userId=localStorage.getItem('userId')
            commit('authUser',{
                token: token,
                userId: userId
            } )
        },*/
    /* logout({commit}){
            commit('clearAuthData')
            router.replace('/login')
        },*/
  },
  getters: {
    user(state) {
      return state.user;
    },
    isLogged(state) {
      return state.isLogged;
    } /*check token*/
    /* isAuthenticated (state){
            return state.idToken !==null*/
    /* }*/
  }
});
