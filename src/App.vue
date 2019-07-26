<template>
  <div id="app">
    <app-Navbar v-if="isLogged"></app-Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Nav_DrawerVue from "./components/Nav_Drawer.vue";
export default {
  name: "app",
  components: {
    appNavbar: Navbar
    /*appNavDrawer: Nav_Drawer*/
  },
  computed: {
    islogged() {
      return this.$store.getters.islogged;
    }
  }
};
</script>

<style>
body {
  padding: 0px;
}
</style>
