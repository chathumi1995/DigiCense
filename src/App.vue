<template>
  <div id="app">
    <v-app>
      <navbar v-if="!isLogged"></navbar>
      <nav-drawer v-if="isLogged"></nav-drawer>
      <router-view />
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import NavDrawer from "./components/Nav_Drawer.vue";
export default {
  name: "app",
  components: {
    Navbar,
    NavDrawer
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    }
  }
};
</script>

<style>
body {
  padding: 0px;
}
</style>
