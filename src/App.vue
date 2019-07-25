<template>
  <div id="app">
    <app-Navbar />
    <!--<app-NavDrawer />-->
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
import Nav_DrawerVue from './components/Nav_Drawer.vue';
export default {
  name: 'app',
  components: { 
    appNavbar: Navbar,
    /*appNavDrawer: Nav_Drawer*/
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
