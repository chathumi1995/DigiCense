<template>
  <nav>
    <v-navigation-drawer v-model="sideNav" app class="hidden-sm-and-up" temporary>
      <v-list v-for="item in menuItems" :key="item.title">
        <v-list-tile router :to="item.link">
          <v-list-tile-action>
            <v-icon color="blue lighten-1">{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat class="blue-grey darken-4 white--text" dark dense fixed>
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <router-link to="/" tag="span" style="cursor:pointer">
          <v-avatar>
            <img src="../assets/digicense.png" alt="avatar" />
          </v-avatar>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="text-lowercase hidden-xs-only"
        v-for="item in menuItems"
        :key="item.title"
      >
        <v-btn flat router :to="item.link">
          <v-icon left small>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false
    };
  },

  computed: {
    menuItems() {
      let menuItems = [
        { icon: "home", title: "Home", link: "/" },
        { icon: "star", title: "Learn More", link: "" },
        { icon: "contact_phone", title: "FAQ", link: "" },
        { icon: "input", title: "Login", link: "/login" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: "home", title: "Institutes", link: "/institutes" },
          { icon: "input", title: "Sign Out", link: "/signin" }
        ];
      }
      return menuItems;
    },

    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  }
};
</script>