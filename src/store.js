import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
import globlaAxios from 'axios'
import { resolve, reject } from 'q';
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';

Vue.use(Vuex);

export const store =new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user:null,
        isLogged: false
        
    },
    mutations: {
        authUser(state,userData){
            state.idToken=userData.token
            state.userId=userData.userId
            state.isLogged = true
        },
        fetchUsers(state,user){
            state.user=user
           
        },
    },
    actions: {
        login ({commit}, authData){
            return new Promise((resolve, reject) => {
            const header = 'Content-Type: application/json, Access-Control-Allow-Origin: http//:localhost:8080';
            axios.post('/users/login', JSON.stringify({
                id: authData.id, 
                password: authData.password,
            })).then(res =>{
                console.log(res)
                commit('authUser',{
                    token:res.data.token,
                    userId:res.data.user.id,
            })
            router.push('/view')
            resolve(res)
            })
        })
    },
       
    fetchUser({commit,state}){
            
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
        },
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
        logout({commit}){
            commit('clearAuthData')
            router.replace('/login')
        },
        
    },
    getters:{
        user(state){
            return state.user
        },
        idToken(state) {
            return state.idToken
        },
        isLogged(state){
            return state.isLogged
        },
        isAuthenticated (state){
            return state.idToken !==null /*check token*/
        }
    }
})