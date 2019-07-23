<template>
  <div id="app">
    <app-Navbar />
      <!--<div class="container">
          <div class="row">
            <div class="col-xs-12">
               
            </div>
         </div>
      </div>-->
     
        <router-view />
      
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'app',
  components: { 
    appNavbar: Navbar
  },
  /*computed(){
    this.$store.dispatch('tryAutoLogin')
  }*/
}
</script>

<style>
  body{
    padding: 0px;
  }
</style>
