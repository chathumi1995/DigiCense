<template>
  <div>
    <v-content>
      <v-container fluid fill-height class="my-2">
        <v-layout align-center justify-center>
          <!--<v-layout row wrap>
          <v-flex xs12 sm6>-->
          <v-card flat class="mx-5">
            <h1 class="text-md-center">Digital Driving License</h1>
            <hr />
            <v-layout row wrap>
              <v-flex xs6 sm6 md4>
                <v-container class="mx-5" xs6>
                  <v-layout column wrap justify-center>
                    <v-card class="grey ma-2" height="200px" width="200px">
                      <!--<v-layout row > <v-flex xs12 sm12><h3 class="text-md-center pt-4"></h3></v-flex></v-layout>-->
                      <v-layout row justify-center class="pa-4">
                        <v-responsive class="px-5">
                          <img :src="user.image" width="160px" />
                        </v-responsive>
                      </v-layout>
                    </v-card>
                  </v-layout>
                  <v-layout column wrap justify-center>
                    <v-card height="200px" width="200px" class="ma-2">
                      <v-layout row justify-center class="pa-4">
                        <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
                      </v-layout>
                    </v-card>
                  </v-layout>
                </v-container>
              </v-flex>

              <v-flex xs12 sm12 md4>
                <v-card-text>
                  <table class="table table-bordered table-sptried table-condensed">
                    <tr>
                      <td class="py-3 text-left" width="165px">Number of the License</td>
                      <td class="py-3 text-left">{{this.license.license_id}}</td>
                    </tr>
                    <tr>
                      <td class="py-3 text-left">Name</td>
                      <td
                        class="pa-3 text-left"
                        height="70px"
                      >{{this.user.name.first_name + ' ' + this.user.name.middle_name + ' ' + this.user.name.last_name}}</td>
                    </tr>
                    <tr>
                      <td class="pa-3 text-left">Date of birth</td>
                      <td class="pa-3 text-left">{{this.user.dob}}</td>
                    </tr>
                    <tr>
                      <td class="pa-3 text-left">Blood Group</td>
                      <td class="pa-3 text-left">{{this.user.blood_group}}</td>
                    </tr>
                    <tr>
                      <td class="pa-3 text-left">Date of issue</td>
                      <td class="pa-3 text-left">{{this.license.date_of_issue}}</td>
                    </tr>
                    <tr>
                      <td class="pa-3 text-left">Date of expiry</td>
                      <td class="pa-3 text-left">{{license.date_of_expiry}}</td>
                    </tr>
                    <tr>
                      <td class="pa-3 text-left">restrictions in code form</td>
                      <td class="pa-3 text-left" height="70px">{{license.restrictions}}</td>
                    </tr>
                    <tr>
                      <td class="py-3 text-left" width="165px">Administrative number</td>
                      <td class="py-3 text-left">{{user.id}}</td>
                    </tr>
                  </table>
                </v-card-text>
              </v-flex>
              <v-flex xs12 sm12 md4>
                <v-card-text>
                  <table class="table table-bordered table-sptried table-condensed">
                    <tr>
                      <th>Category</th>
                      <th width="100">Issue</th>
                      <th width="100">Expiry</th>
                      <th>restrictions</th>
                    </tr>
                    <tr>
                      <td>A1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>A</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>B1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>C1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CE</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>D1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>D</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>DE</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>

                  <!--<td class="pa-3 text-left" >Categories of vehicle</td>
                  <td class="pa-3 text-left" height="70px">{{users.types_of_vehicles}}</td>-->
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import QrcodeVue from "qrcode.vue";
import { mapState } from "vuex";
import axios from "axios";
//import {store } from './store';
//import {mapState} from 'vuex'

export default {
  data() {
    return {
      value: "https://example.com",
      size: 160,
      license: {},
      user: {}
    };
  },
  computed: {
    users() {
      return this.$store.getters.user;
    }
  },
  components: {
    QrcodeVue
  },
  methods: {
    loaduser: function() {
      const header = {
        headers: { Authorization: "Bearer " + this.$store.getters.idToken }
      };
      console.log(header);
      axios
        .get("/license", header)
        .then(res => {
          console.log(res);
          this.license = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.user = this.$store.getters.user;
    this.loaduser();
  }
};
</script>