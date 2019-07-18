<template>
    <div>
      <!-- https://laracasts.com/discuss/channels/vue/disable-a-component-on-some-routes?page=1 
      navihgation hide -->
     <b-navbar toggleable="lg" type="dark" class="nav-background">  
       <!--<v-toolbar-side-icon class="grey" @click="drawer=!drawer"></v-toolbar-side-icon>  -->             
         <img src="../assets/digicense.png" id="logo">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>    
              <b-collapse id="nav-collapse" is-nav>                 
                <b-navbar-nav class="ml-auto"> <!--Right aligned nav items-->      
                    <b-nav-item to="/"><p class="text-white bg-dark">Home</p></b-nav-item>                  
                    <b-nav-item to="#LearnMore"><p class="text-white bg-dark">Learn More</p></b-nav-item>    
                    <b-nav-item to="#"><p class="text-white bg-dark">FAQ</p></b-nav-item>
                    <b-nav-item to="/login"><p class="text-white bg-dark">Login</p></b-nav-item>                            
                </b-navbar-nav> 
              </b-collapse>                  
      </b-navbar>

      
    
  
    </div>    
</template>

<script>
    export default {   
      data() {
          return{
            /*https://stackoverflow.com/questions/44185498/re-render-navigation-bar-after-login-on-vuejs*/
            visibile:false,
            
          }
        }
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