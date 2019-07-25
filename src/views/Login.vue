<template>
  <v-container mt-5 sx12>
    <v-layout justify-center>
      <v-flex xs6 dense>
        <login></login>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Login from "@/components/Login/Login.vue";

export default {
  components: {
    login: Login
  }
};
</script>