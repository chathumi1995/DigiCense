<template>
    <div>
        <b-container id="resetContain">
            <b-row align-h="center" class="reset">
                <b-col sm="6" lg="6">
                    <b-card class="reset1">
                        <h3 class="text-center"><small class="text-muted">Reset Password</small></h3>
                        <br>
                            <b-form>
                                
                                    <b-form-input                    
                                        id="password"
                                        type="password"
                                        @blur="$v.password.$touch()"
                                        v-model="password"                                   
                                        required   
                                        :state= "validatePassword"         
                                        placeholder="Password"
                                        @input="password_check"
                                    ></b-form-input>  
                                    <p v-if="!$v.password.required && $v.password.$dirty">This field is required</p>
                                    <p v-else-if="!$v.password.minLength ">Password should contain atleast 7 characters</p>
                                    <p>Password strength: </p>
                                    <password v-model="password" :strength-meter-only="true" :secureLength = "7"/>
                                <br>
                                <div :class="{invalid: $v.confirmPassword.$error}">
                                    <b-form-input                    
                                        id="confirmPassword"
                                        type="password"
                                        @input="$v.confirmPassword.$touch()"
                                        v-model="confirmPassword"                     
                                        required           
                                        placeholder="Confirm Password"
                                        :state= "validateConfirmPassword"
                                        :disabled = "!isValidPassword"
                                    ></b-form-input>  
                                    <p v-if="!$v.confirmPassword.required && $v.confirmPassword.$dirty">This field is required</p>
                                    <p v-else-if="!$v.confirmPassword.sameAs">Passwords do not match</p>
                                </div>
                                <br>
                                <div class="d-flex justify-content-center">
                                    <b-button id="save" @click.prevent="onSubmit" variant="warning" class="text-light" :disabled="$v.password.$invalid || $v.confirmPassword.$invalid">Save</b-button>
                                </div>
                            </b-form>
                    </b-card>
                </b-col>        
            </b-row>
        </b-container>
    </div>
        
</template>
    


<script>

import { required, minLength, sameAs} from 'vuelidate/lib/validators'
import Password from 'vue-password-strength-meter'
import axios from 'axios'
import qs from 'qs'

export default {
    data() {
        
      return {        
        password: null,    
        confirmPassword: '',
        has_number:    false,
        has_lowercase: false,
        has_uppercase: false,
        has_special:   false,
      }
    },
    components: { Password },
    computed: {
        validatePassword: function () {
            if(!this.$v.password.$dirty)
                return null
            else  return !this.$v.password.$invalid
        },
        validateConfirmPassword: function () {
            if(!this.$v.confirmPassword.$dirty)
                return null
            else  return !this.$v.confirmPassword.$invalid
        },
        isValidPassword: function () {
            return !this.$v.password.$invalid
        },
    },
    validations:{
      password:{
          required,
          minLength: minLength(7)
      },
      confirmPassword:{
          sameAs: sameAs('password'),
          sameAs: sameAs(vm =>{
              return vm.password 
          }),
          required
          
      },
  },
  methods: {
        password_check: function () {
            this.has_number    = /\d/.test(this.message);
            this.has_lowercase = /[a-z]/.test(this.message);
            this.has_uppercase = /[A-Z]/.test(this.message);
            this.has_special   = /[!@#\$%\^\&*\)\(+=._-]/.test(this.message);
        },
        onSubmit: function () {
        const formData={
          confirmPassword:this.confirmPassword,
          password:this.password,
        }
        console.log({
            confirmPassword: formData.confirmPassword, 
            password: formData.password
        })
    }
    },
    
}
</script>

<style>
   #resetContain{
        padding: 150px;
    }
    .invalid input{ 
      border: 1px solid red;
    }    
    .frmValidation{font-size: 13px; }
    .frmValidation--passed{color:#717b85;}
    .frmIcon{color:#EB0029;}
    .frmValidation--passed .frmIcon{color:#0fa140;}

</style>
