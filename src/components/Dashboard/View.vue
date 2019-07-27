<template>
  <div>
    <v-content>
      <v-container fluid fill-height class="my-2">
        <v-layout align-center justify-center>
          <!--<v-layout row wrap>
          <v-flex xs12 sm6>-->
          <v-card flat class="pa-3 transparent">
            <h1 class="text-md-center">Digital Driving License</h1>
            <hr />
            <v-layout row wrap>
              <v-flex xs6 sm6 md4>
                <v-container xs6>
                  <v-layout column wrap>
                    <v-card class="transparent" flat height="200px" width="200px">
                      <!--<v-layout row > <v-flex xs12 sm12><h3 class="text-md-center pt-4"></h3></v-flex></v-layout>-->
                      <v-layout row justify-center class="py-4">
                        <v-responsive class="px-5">
                          <img :src="user.image" width="160px" />
                        </v-responsive>
                      </v-layout>
                    </v-card>
                  </v-layout>
                  <v-layout column wrap justify-center>
                    <v-card height="200px" width="200px" class="my-2">
                      <v-layout row justify-center class="py-4">
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
                    <tr v-for="type in license.types_of_vehicals" :key="type.category">
                      <td>{{type.category}}</td>
                      <td>{{type.date_of_issue}}</td>
                      <td>{{type.date_of_expiry}}</td>
                      <td>{{type.restrictions}}</td>
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

export default {
  data() {
    return {
      value: "https://example.com",
      size: 160
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    license() {
      return this.$store.getters.license;
    }
  },
  components: {
    QrcodeVue
  },
  methods: {
    fetchLicence() {
      this.$store.dispatch("fetchLicense");
    }
  },
  created() {
    this.fetchLicence();
  }
};
</script>