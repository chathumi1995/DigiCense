<template>
    <b-container id="contain"> 
      <b-row align-h="center" class="login">                   
          <b-col sm="6" lg="6">
           <b-card class="login1">
              <h3 class="text-center"><small class="text-muted">Login</small></h3>
                <b-form>

                <!--id -->
                <div :class="{invalid: $v.id.$error}"> 
                  <b-form-input                 
                      id="id"
                      type="text"
                      v-model="id"
                      @blur="$v.id.$touch()"
                      required
                      placeholder="User ID"
                    ></b-form-input>
                    <p v-if="!$v.id.minLength">Your user ID must be 10 characters.</p>
                    <p v-if="!$v.id.maxLength">Your user ID must be 10 characters.</p>
                </div>
                <br>

                <!--password -->
                <div :class="{invalid: $v.password.$error}" >                 
                  <b-form-input                    
                    id="password"
                    type="password"
                    @blur="$v.password.$touch()"
                    v-model="password"                                                          
                    required           
                    placeholder="Password"
                    @input="password_check"
                  ></b-form-input>  
                  <p v-if="!$v.password.minLength">Must be at least 7 characters</p>                
                </div>
                
                 <br>
                 <!--Button and forget password -->
                
                    <div class="d-flex justify-content-between">
                      <div>
                        <b-button @click.prevent="onSubmit" variant="warning" class="text-light">Login</b-button>
                      </div>
                      <div>
                        <!--<router-link to="/verifyEmail">Forgot Password?</router-link>-->
                        <b-button id="show-btn" variant="link" @click="$bvModal.show('bv-modal-example')">Forgot Password?</b-button>
                        
                          <b-modal id="bv-modal-example" hide-footer>
                            
                            <template slot="modal-title" >
                              
                              <div >
                                <h3>Send Veification Code via</h3>
                              </div>
                              
                            </template>
                             <b-form>
                            <b-container>
                                <b-row>
                                    <b-col></b-col>
                                    <b-col md="6">
                                       
                                            <!--id -->
                                         <div :class="{invalid: $v.id.$error}"> 
                                            <b-form-input                 
                                                  id="userId"
                                                  type="text"
                                                  v-model="userId"
                                                  @blur="$v.id.$touch()"
                                                  required
                                                  placeholder="User ID"
                                            ></b-form-input>
                                            <p v-if="!$v.id.minLength">Your user ID must be 10 characters.</p>
                                            <p v-if="!$v.id.maxLength">Your user ID must be 10 characters.</p>
                                         </div>
                                         
                                    </b-col>
                                    <b-col></b-col>
                                    
                                  </b-row>
                                <br>
                                <b-row>
                                    <b-col></b-col>
                                    <b-col md="6">
                                        <div class="d-flex justify-content-center">
                                            <b-button variant="warning" class="text-light" block @click.prevent="submitEmail"><h5><b>
                                              Email</b></h5></b-button>
                                              
                                        </div>
                                    </b-col>
                                    <b-col></b-col>
                                    
                                </b-row>
                                  <br>
                                <b-row>
                                  
                                    <b-col></b-col>
                                        <b-col md="6">
                                            <div class="d-flex justify-content-center">
                                                <b-button to="/verifyNo" variant="warning" class="mt-1 text-light" block @click.prevent="submitPhone"><h5><b>Phone</b></h5></b-button>
                                            </div>
                                        </b-col>
                                    <b-col></b-col>
                                </b-row>
                            </b-container>    
                            </b-form>
                            
                        </b-modal></div>
                        
                      </div>
                        
                </b-form>
           </b-card>
          </b-col>
      </b-row>
    </b-container>
</template>

<script>

import { required, minLength, maxLength} from 'vuelidate/lib/validators'
import axios from 'axios'
import qs from 'qs'

export default {
 
  data() {
   
      return {
        id: '',
        password: '',    
        userId: '',
      }
  },
  validations:{
      password:{
          required,
          minLength: minLength(7)
      },
      id:{
          required,
          minLength: minLength(10),
          maxLength: maxLength(10)
      }
  },
  methods: {
   
      onSubmit(){
        const formData={
          id:this.id,
          password:this.password,
        }
        console.log({
          id: formData.id, 
          password: formData.password
        })
        axios.post('/users/login', JSON.stringify({
          id: formData.id, 
          password: formData.password
        })).then(res => console.log(res)).catch(error => console.log("From frontend", error))
          
      },
      submitEmail(){
        const formData={
          userId:this.userId,
          method:"email"
        }
        console.log({
          userId: formData.userId, 
          method: formData.method,
        })
        axios.post('/reset', JSON.stringify({
          userId: formData.userId, 
          method: formData.method,
        })).then(res => console.log(res)).catch(error => console.log("From frontend", error))
          
      },
      submitPhone(){
        const formData={
          userId:this.userId,
          method:"sms"
        }
        console.log({
          userId: formData.userId, 
          method: formData.method,
        })
        axios.post('/reset', JSON.stringify({
          userId: formData.userId, 
          method: formData.method,
        })).then(res => console.log(res)).catch(error => console.log("From frontend", error))
          
      }
   
  },  
}
  
</script>

<style>
    #contain{
        padding: 150px;
    }
    .invalid input{ 
      border: 1px solid red;
    }
    #btn{
      padding: 150px;
    }
</style>