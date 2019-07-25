<template>
    <div>
      <!-- https://laracasts.com/discuss/channels/vue/disable-a-component-on-some-routes?page=1 
      navihgation hide -->
     <b-navbar toggleable="lg" type="dark" class="nav-background" v-if="!isLogged">  
       <!--<v-toolbar-side-icon class="grey-text" @click="drawer=!drawer"></v-toolbar-side-icon> -->           
         <img src="../assets/digicense.png" id="logo">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>    
              <b-collapse id="nav-collapse" is-nav>                 
                <b-navbar-nav class="ml-auto"> <!--Right aligned nav items-->      
                    <b-nav-item  to="/"><p class="text-white bg-dark">Home</p></b-nav-item>                  
                    <b-nav-item to="#LearnMore"><p class="text-white bg-dark">Learn More</p></b-nav-item>    
                    <b-nav-item  to="#"><p class="text-white bg-dark">FAQ</p></b-nav-item>
                    <b-nav-item  to="/login"><p class="text-white bg-dark">Login</p></b-nav-item>                            
                </b-navbar-nav> 
              </b-collapse>                  
      </b-navbar>
      <v-toolbar flat app v-if="isLogged">
    <v-toolbar-side-icon class="grey-text" @click="drawer=!drawer" v-if="isLogged"></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app  v-if="isLogged">
      <v-layout column align-center class="grey">
              <v-flex class="mt-4">
                <v-list-tile-avatar size="100">
                  <img src="../assets/digicense.png" >
                </v-list-tile-avatar>
                <p class=" headline mt-1 text-center">DigiCense</p>
              </v-flex>
              <v-divider></v-divider>
          </v-layout>
           <v-list class="pt-1" dense>
       

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          router :to="item.route"
          class="pt-2 ml-3"
         
        >
         <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="subheading">{{ item.title }} </v-list-tile-title>
          </v-list-tile-content>
          
        </v-list-tile>
        
      </v-list>
      <v-divider class="white--text"></v-divider>
     <v-list class="pa-3">
          <v-list-tile>
          <v-list-tile-action>
            <v-icon >dashboard</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="subheading" @click="onLogout">Logout </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

  
    </v-navigation-drawer>
    
    
  
    </div>    
</template>

<script>
    export default {   
      data() {
          return{
            /*https://stackoverflow.com/questions/44185498/re-render-navigation-bar-after-login-on-vuejs*/
            visibile:false,
            
           drawer: false,
        items: [
          { title: 'View License', icon: 'dashboard',route:'/view' },
          { title: 'Fines', icon: 'question_answer',route:'/fine' },
          { title: 'Complaints', icon: 'question_answer',route:'/complaints' },
          { title: 'Notification', icon: 'question_answer',route:'/notification' },
          { title: 'History', icon: 'question_answer',route:'/history' },
          { title: 'FAQ', icon: 'question_answer',route:'/faq' },
         
        ],
        right: null
          }
        },
        methods:{
      onLogout(){
        this.$store.dispatch('logout')
      }
    },
        computed: {
          isLogged(){
            return this.$store.getters.isLogged
         },
         auth(){
            return this.$store.getters.isAuthenticated /*check token*/
         }
        },
         computed: {
          isLogged(){
            return this.$store.getters.isLogged
         },
    }
       /* computed:{
          auth(){
            return this.$store.getters.isAuthenticated*/ /*check token*/
        /*  }
        }*/
    }
  </script>

<style>
  .nav-background {
    background: #353535;
    height: 70px;  
  }
 
  #logo{
    width: 50px;
    height: 50px;
  }
  
</style>