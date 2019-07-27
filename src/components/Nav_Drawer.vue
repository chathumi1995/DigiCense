<template>
  <v-navigation-drawer app flat dense fixed>
    <div class="text-center">
      <img src="../assets/digicense.png" height="100px" margin="30px" alt srcset />
    </div>

    <v-list class="pt-1" dense>
      <v-list-tile v-for="item in items" :key="item.title" router :to="item.route" class="pt-2">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title class="subheading">{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-divider class="white--text"></v-divider>
    <v-list class="pt-3">
      <v-list-tile to=" ">
        <v-list-tile-action>
          <v-icon>logout</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title class="subheading" @click="onLogout">Logout</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
        
<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "View License", icon: "dashboard", route: "/view" },
        { title: "Fines", icon: "attach_money", route: "/fine" },
        {
          title: "Complaints",
          icon: "announcement",
          route: "/complaints"
        },
        {
          title: "Notification",
          icon: "notifications",
          route: "/notification"
        },
        { title: "History", icon: "history", route: "/history" },
        { title: "FAQ", icon: "question_answer", route: "/faq" }
      ]
    };
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    }
  }
};
</script>

<style>
li a:hover {
  text-decoration: none;
}
</style>