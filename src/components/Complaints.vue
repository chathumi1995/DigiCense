<template>
    <div>
        <v-content>
        <v-container fluid fill-height class="my-3">
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md8>
                    <v-card class=" elevation-12">
                    <v-toolbar dark class="yellow accent-4">
                        <v-toolbar-title>
                            Complaints
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                         <v-flex xs12 sm6 >
                             <v-text-field
                                label="Email address"
                                v-model="email"
                                required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6>    
                            <v-radio-group v-model="radios" :mandatory="false" class="px-5">
                                <v-radio label="complaint 1" value="c-1"></v-radio>
                                <v-radio label="complaint 2" value="c-2"></v-radio>
                                <v-radio label="complaint 3" value="c-3"></v-radio>
                                <v-radio label="complaint 4" value="c-4"></v-radio>
                                <v-radio label="complaint 5" value="c-5"></v-radio>
                                <v-radio label="complaint 6" value="c-6"></v-radio>
                                <v-radio label="Other" value="c-7" @click="other"></v-radio>
                                <v-textarea
                                    outline
                                    v-model="complaint"
                                    label="Complaints"
                            ></v-textarea>
                                
                            </v-radio-group>
                        </v-flex >
                           
    
                           
                            
                            <!--<v-textarea
                            outline
                            v-model="complaint"
                            label="Complaints"
                            ></v-textarea>-->
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="mx-3 mb-3">
                            <v-btn round class="yellow accent-4"  @click.prevent="onComplaint" dark>submit complaint</v-btn>  
                            <v-btn flat  @click.prevent="onCancel">Cancel</v-btn>                               
                    </v-card-actions>
                   
                      
                        
                    
                    </v-card>
                </v-flex>
            </v-layout>
            
        </v-container>
        </v-content>
    </div>

</template>

<script>
import axios from 'axios'
export default {
 
  data() {
      return {
        id: '',
        complaint: null,    
        allComplaints:[],
    
        radios: 'c-1',
        dialog: false,
    
      }
  },
  methods:{
       onComplaint(id){
           axios.post(''+id,{complaint:this.complaint})
           .then(res=>{this.complaint=nulll;
           this.allComplaints.push(res.data.complaint)})
       /* const formData={
          id:this.id,
          complaint:this.complaint
        }
        console.log({
          id: formData.id, 
          complaint: formData.complaint,
        })
        axios.post('/compaints', JSON.stringify({
          id: formData.id, 
          complaint: formData.complaint,
        })).then(res => console.log(res)).catch(error => console.log("From frontend", error))
       } */
       },
        /* onCancel() {
             Object.assign(this.user, this.userBeforeEdit)
         }*/
      },
    /*
    created() {
        this.userBeforeEdit = this.complaint
    },*/
  }

</script>
