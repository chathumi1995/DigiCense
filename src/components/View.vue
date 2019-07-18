<template>
    <div>
        <v-container class="my-5">
            <!--<v-layout row wrap>
                <v-flex xs12 sm6>-->
                    <v-card flat class="mx-5">
                         <h1 class="text-md-center">Digital Driving License</h1>
                        <hr>
                         <v-layout row wrap>
                                <v-flex xs6 sm6 md4 >
                                    <v-card class="grey ma-2" height="350px">
                                        <v-layout row justify-center> <v-flex xs12 sm12><h3 class="text-md-center pt-4"></h3></v-flex></v-layout>
                                        <v-layout row justify-center class="pa-4"><v-responsive class="px-5"> <img src="../assets/profile.png" ></v-responsive></v-layout>
                                       
                                         
                                       
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 sm12 md4  >
                                    <v-card-text>
                                           
                                            <table class="table table-bordered table-sptried table-condensed">
                                                 <tr>
                                                     <td class="py-3 text-left" width="165px">Number of the License</td>
                                                     <td class="py-3 text-left">{{users.license_id}}</td>
                                                 </tr>
                                                  <tr>
                                                     <td class="py-3 text-left">Name</td>
                                                     <td class="pa-3 text-left" height="70px">{{users.name}}</td>
                                                 </tr>
                                                  <tr>
                                                     <td class="pa-3 text-left">Date of birth</td>
                                                     <td class="pa-3 text-left">{{users.bod}}</td>
                                                 </tr>
                                                  <tr >
                                                     <td class="pa-3 text-left" >Date of issue</td>
                                                     <td class="pa-3 text-left">{{users.date_of_issue}}</td>
                                                 </tr>
                                                  <tr>
                                                     <td class="pa-3 text-left" >restrictions in code form</td>
                                                     <td class="pa-3 text-left" height="70px">{{users.restrictions}}</td>
                                                 </tr>
                                            </table>
                                                
                                       
                                            
                                    </v-card-text>
                                </v-flex>
                                <v-flex xs12 sm12 md4  >
                                    <v-card-text>
                                           
                                            <table class="table table-bordered table-sptried table-condensed">
                                                <tr>
                                                     <td class="py-3 text-left" width="165px">Administrative number</td>
                                                     <td class="py-3 text-left">{{users.id}}</td>
                                                 </tr>
                                                  <tr>
                                                     <td class="py-3 text-left">Permanent place of residence</td>
                                                     <td class="pa-3 text-left" height="70px">{{users.address}}</td>
                                                 </tr>
                                                  <tr>
                                                     <td class="pa-3 text-left">Blood Group</td>
                                                     <td class="pa-3 text-left">{{users.blood_group}}</td>
                                                 </tr>
                                                  <tr>
                                                     <td class="pa-3 text-left" >Date of expiry</td>
                                                     <td class="pa-3 text-left">{{users.date_of_expiry}}</td>
                                                 </tr>
                                                  <tr>
                                                     <td class="pa-3 text-left" >Categories of vehicle</td>
                                                     <td class="pa-3 text-left" height="70px">{{users.types_of_vehicles}}</td>
                                                 </tr>
                                            </table>
                                                
                                       
                                            
                                    </v-card-text>
                                </v-flex>
                         </v-layout>
                    </v-card>
        </v-container>
    </div>
                         
</template>
<script>
import axios from 'axios'
     export default {
        data () {
            return {
                users:{},
                /*form:new Form({
                    license_id:'',
                    name:'',
                    date_of_expiry:'',
                    blood_group:'',
                    address:'',
                    id:'',
                    restrictions:'',
                    date_of_issue:'',
                    bod:'',
                    types_of_vehicles:'',
                    image:'',
                }),  */
                
            }
            
        },
        methods:{
            loaduser: function(){
                axios.get("https://digicense-api.herokuapp.com/license").then(({data})=>(this.users=data));
                /*this.users='Loading...';
                axios.get("https://digicense-api.herokuapp.com/license")
                .then(function(response){
                    this.users=response.data[0];
                })
                .catch(function(error){
                    this.users='an error occurred.'+error;
                }
                );*/

            },
          

        },
             created: function(){
                this.loaduser();
            },
          /*  created:function(){
                console.log('a is:'+this.a);
            },*/
     }

</script>