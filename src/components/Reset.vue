<template>
    <div>
        <b-container id="resetContain">
            <b-row align-h="center" class="reset">
                <b-col sm="6" lg="6">
                    <b-card class="reset1">
                        <h3 class="text-center">Forget Password</h3>
                        <br>
                            <b-form @submit="onSubmit">
                                <div :class="{invalid: $v.password.$error}">
                                    <b-form-input                    
                                        id="password"
                                        type="password"
                                        @blur="$v.password.$touch()"
                                        v-model="password"                     
                                        :state="validation"                 
                                        required           
                                        placeholder="Password"
                                        @input="password_check"
                                    ></b-form-input>  
                                    <p v-if="!$v.password.minLength">Must be at least 7 characters</p>
                                    <!--<p class="frmValidation" :class="{'frmValidation--passed' :has_uppercase }">Has a capital letter</p>
                                    <p class="frmValidation" :class="{'frmValidation--passed' :has_lowercase }">Has a lowercase letter</p>
                                    <p class="frmValidation" :class="{'frmValidation--passed' : has_number }">Has a number</p>
                                    <p class="frmValidation" :class="{'frmValidation--passed' : has_special }">Has a special character</p>-->
                                </div>
                                <br>
                                <div :class="{invalid: $v.confirmPassword.$error}">
                                    <b-form-input                    
                                        id="confirmPassword"
                                        type="password"
                                        @blur="$v.confirmPassword.$touch()"
                                        v-model="confirmPassword"                     
                                        :state="validation"                 
                                        required           
                                        placeholder="Confirm Password"
                                        @input="password_check"
                                    ></b-form-input>  
                                </div>
                                <br>
                                <div class="d-flex justify-content-center">
                                    <b-button id="save" @click.prevent="onSubmit" variant="warning">Save</b-button>
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
import axios from 'axios'
import qs from 'qs'

export default {
    data() {
        
      return {        
        password: '',    
        confirmPassword: '',
        has_number:    false,
        has_lowercase: false,
        has_uppercase: false,
        has_special:   false,
      }
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
        }
    },
    onSubmit(){
        const formData={
          confirmPassword:this.confirmPassword,
          password:this.password,
        }
        console.log({
            confirmPassword: formData.confirmPassword, 
            password: formData.password
        })
    }
}
</script>

<style>
   #resetContain{
        padding: 150px;
    }
    .invalid input{ 
      border: 1px solid red;
    }    

</style>
