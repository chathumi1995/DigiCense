<template>
  <nav>
    <v-toolbar flat class="blue-grey darken-4" dark dense fixed>
      <v-toolbar-title class="text-uppercase">
        <router-link to="/" tag="span" style="cursor:pointer">
          <v-avatar size="34" y>
            <img src="../assets/digicense.png" alt="John" />
          </v-avatar>
          <span class="hidden-xs-only">Digicense</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="text-lowercase" v-for="item in items" :key="item.title">
        <v-btn flat router :to="item.route">
          <v-icon left small>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
import { scrypt } from "crypto";
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "dashboard", route: "/" },
        { title: "Learn More", icon: "dashboard", route: "#" },
        { title: "FAQ", icon: "question_answer", route: "/faq" },
        { title: "Login", icon: "question_answer", route: "/login" }
      ],
      right: null
    };
  }
};
</script>
