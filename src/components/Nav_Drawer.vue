<template>
  <v-card height="600px">
    <v-navigation-drawer   
      
      v-model="drawer"
      permanent
      absolute
    >

          <v-layout column align-center class="grey">
              <v-flex class="mt-4">
                <v-list-tile-avatar size="100">
                  <img src="../assets/digicense.png" >
                </v-list-tile-avatar>
                <p class=" headline mt-1 text-center">DigiCense</p>
              </v-flex>
              <v-divider></v-divider>
          </v-layout>
      
      

      <v-list class="pt-1" dense>
       

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          router :to="item.route"
          class="pt-2 ml-3"
         
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="subheading">{{ item.title }} </v-list-tile-title>
          </v-list-tile-content>
          
        </v-list-tile>
        
      </v-list>
      <v-divider class="white--text"></v-divider>
     <v-list class="pa-3">
          <v-list-tile>
          <v-list-tile-action>
            <v-icon >dashboard</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="subheading">Logout </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
 
  </v-card>
</template>
        
<script>
     export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'View License', icon: 'dashboard',route:'/view' },
          { title: 'Fines', icon: 'question_answer',route:'/fine' },
          { title: 'Complaints', icon: 'question_answer',route:'/complaint' },
          { title: 'History', icon: 'question_answer',route:'/history' },
          { title: 'FAQ', icon: 'question_answer',route:'/faq' },
         
        ],
        right: null
      }
    }
  }
</script>

<style>

</style>