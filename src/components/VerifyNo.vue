<template>
    <div>
        <!--https://www.telesign.com/blog/post/passwordless-authentication-slim-vue-js/-->
        <b-container id="contain"> 
         <b-row align-h="center" class="login">                   
          <b-col sm="12" lg="6">
           <b-card class="login1">
               <b-form @submit.prevent=authenticate novalidate>
                <h3 class="text-center"><small class="text-muted">DigiCense</small></h3>
                <p class=text-info>Please confirm your identity with your OTP.</p>
                  
                  
                    <div :class="{'input-group-error':$v.otp.$error}">
                        <b-input-group>
                            <b-input-group-prepend>
                                <span class="input-group-text"><i class="fa fa-lock" ></i></span>
                            </b-input-group-prepend>
                            <b-form-input class="LoginInput" required placeholder="OTP" v-model="otp" name=phone @blur=$v.otp.$touch()>
                            </b-form-input>
               
                         </b-input-group>  
                        <!-- <p v-if="!$v.phone.required">Please enter your phone number</p>-->
                              
                    </div>
                    <br>
                    <button class="btn btn-warning btn-block" to="/setPassword" @click.prevent="submitCont">Continue</button>
                  </b-form>
           </b-card>
          </b-col>
         </b-row>
        </b-container>
    </div>
</template>

<script>
import {required} from 'vuelidate/lib/validators'
    export default {
        data: function () {
                return {
                otp: ''
                };
        },
         validations: {
           otp: {
              required
            
            }
          },
         /*methods: {   
            submitCont (value) {
                this.otp = value
    }*/
  }
          
    
</script>

<style>
    #contain{
        padding: 150px;
    }
    #save{
        width: 50px;
    }
</style>