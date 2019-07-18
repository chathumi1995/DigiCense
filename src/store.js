import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store =new Vuex.store({
    state: {
        token: null,
        userId: null 
    },
    mutations: {
        authUser(state,userData){
            state.idToken=userData.token
            state.userId=userData.userId
        }
    },
    actions: {
        login ({commit}, authData){
            axios.post('/users/login', JSON.stringify({
                id: authData.id, 
                password: authData.password,
                returnSecureToken:true
              }))
              /*.then(res => console.log(res))*/
              .then(res =>{
                console.log(res)
                commit('authUser',{
                    idToken:res.data.token,
                    userId:res.data.user.id
                } )
              } )
              .catch(error => console.log("From frontend", error))
        }
    },
})