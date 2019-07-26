<template>
  <v-layout class="login" height="100%">
    <v-flex xs12 class="carousel">
      <login></login>
    </v-flex>
  </v-layout>
</template>

<script>
import Login from "@/components/Login/Login.vue";

export default {
  components: {
    login: Login
  }
};
</script>

<style>
.login {
  height: 100vh;
}
</style>
