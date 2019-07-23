<template>
    <div>
        <v-container class="my-5">
            <!--<v-layout row wrap>
                <v-flex xs12 sm6>-->
                    <v-card flat class="mx-5 ">
                         <h1 class="text-md-center">Digital Driving License</h1>
                        <hr>
                        <v-form>
                            <v-layout row wrap>
                                <v-flex xs12 sm12 md4 >
                                    <v-card class="grey ma-2" height="350px">
                                        <v-layout row justify-center> <v-flex xs12 sm12><h3 class="text-md-center pt-4">Warning</h3></v-flex></v-layout>
                                        <v-layout row justify-center class="pa-4"><v-responsive class="px-5"> <img src="../assets/profile.png" ></v-responsive></v-layout>
                                       
                                         
                                       
                                    </v-card>
                                </v-flex>
                                <v-flex xs6 sm6 md4  >
                                    <v-card-text>
                                        <p>name is: {{ user.name }}</p>
                                        <v-text-field
                                            v-model="number"
                                            label="Number of the License"
                                            required
                                        ></v-text-field>
                                         <v-text-field
                                            v-model="name"
                                            label="Name"
                                            required
                                        ></v-text-field>
                                         <v-text-field
                                            v-model="DOB"
                                            label="Date of birth"
                                            required
                                        ></v-text-field>
                                         <v-text-field
                                            v-model="issue"
                                            label="Date of issue of the License"
                                            required
                                        ></v-text-field>
                                         <v-text-field
                                            v-model="restrictions"
                                            label="restrictions in code form"
                                            required
                                        ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                                <v-flex xs6 sm6 md4 ><!--v-for="user in users" :key="user.id"-->
                                    <v-card-text>
                                       <v-text-field
                                            v-model="id"
                                            label="Administrative number"
                                            required
                                        ></v-text-field>
                                         <v-text-field
                                            v-model="address"
                                            label="Permanent place of residence"
                                            required
                                        ></v-text-field>
                                         <v-text-field
                                            v-model="blood"
                                            label="Blood Group"
                                            required
                                        ></v-text-field>
                                         <v-text-field
                                            v-model="expiry"
                                            label="Date of expiry of the License"
                                            
                                            required
                                        ></v-text-field>
          
                                    
                                                                    <!-- <v-layout row>
    
                                            <v-card>
                                                    <p>hihiidfih</p>
                                                <v-card-actions>
                                                
                                                <v-spacer></v-spacer>
                                                <v-btn icon @click="show = !show">
                                                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                                </v-btn>
                                                </v-card-actions>

                                                <v-slide-y-transition>
                                                <v-card-text v-show="show">
                                                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                                                </v-card-text>
                                                </v-slide-y-transition>
                                            </v-card>
                                            
                                        </v-layout>-->
                                        <!-- <v-layout row>
      <v-flex xs4>
        <v-subheader>Prefix for dollar currency</v-subheader>
      </v-flex><br>
      <v-flex xs8>
        <v-text-field
          label="Amount"
          value="10.00"
          prefix="$"
        ></v-text-field>
      </v-flex>
    </v-layout>-->

                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                        </v-form>
                    </v-card>
               <!-- </v-flex>
            </v-layout>-->
        </v-container>
    </div>
</template>

<script>
import axios from 'axios';
     export default {
        data () {
            return {
                /*users:{},
                form:new Form({*/
                users:{

                    number:'',
                    name:'',
                    expiry:'',
                    blood:'',
                    address:'',
                    id:'',
                    restrictions:'',
                    issue:'',
                    DOB:'',
                },  
                user:[],
                show: false
               
            }
            
        },
       /*created(){
           axios.get('/license')
           .then(res=>{
               console.log(res)
               const data=res.data
               const users=[]
               for(let key in data){
                   const user =data[key]
                   user.id =key
                   users.push(user)
               }
               console.log(users)
               this.name=users[0].name
           })
           .catch(error=>console.log(error))
       }*/
       methods:{
           fetch(){
                this.$http.get('/license')
                .then(res=>{
                    return res.json()
                })
           .then(res=>{
               console.log(res)
               const data=res.data
               const usersarray=[]
               for(let key in data){ 
                   users.push(data[key])
               }
               console.log(usersarray)
               this.user=users
           })
           .catch(error=>console.log(error))
           }
       }
     }

</script>

<style>

</style>