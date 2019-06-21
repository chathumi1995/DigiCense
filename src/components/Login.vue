<template>
    <b-container id="contain"> 
      <b-row align-h="center" class="login">                   
          <b-col sm="6" lg="6">
           <b-card class="login1">
              <h3 class="text-center">Login</h3>
                <b-form @submit="onSubmit">

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
                 <!--Button and forhet password -->
                
                    <div class="d-flex justify-content-between">
                      <div>
                        <b-button @click.prevent="onSubmit" variant="warning">Login</b-button>
                      </div>
                      <div>
                        <b-button variant="outline-light" to="/reset"><p class="text-dark">Forgot Password?</p></b-button>
                      </div>
                    </div>    
                </b-form>
           </b-card>
          </b-col>
      </b-row>
    </b-container>
</template>

<script>

import { required, minLength, maxLength} from 'vuelidate/lib/validators'
//import axios from 'axios'
//import qs from 'qs'

export default {
 
  data() {
   
      return {
        id: '',
        password: '',    
       
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
</style>