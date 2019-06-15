<template>
    <b-container id="contain"> 
      <b-row align-h="center" class="login">  
                  
          <b-col cols="6">
           <b-card class="login1">
              <h3 class="text-center">Login</h3>
                <b-form @submit="onSubmit"  v-if="show">
                <!--user -->
                <div>
                  <b-form-input
                  
                                           
                      id="username"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="User Name"
                    ></b-form-input>
                    
                </div>
                <br>
                <!--password -->
                <div class="{invalid: $v.password.$error}" >
              
                  <!--<p v-if="!$v.password.minLength">The input must be a proper email!</p>-->
                  <b-form-input 
                    
                    id="password"
                    type="password"
                    @blur="$v.password.$touch()"
                    v-model="password"                     
                    :state="validation"                 
                    required           
                    placeholder="Password"
                    class="form-control" 
                  ></b-form-input>

                  
                   
                    
                </div>
                
                 <br>
                 <!--Button and forhet password -->
                
                    <div class="d-flex justify-content-between">
                      <div>
                        <b-button type="submit" variant="warning">Login</b-button>
                      </div>
                      
           

                      <div>
                        <a href="#"><p class="text-dark">Forgot Password?</p></a>
                      </div>
                    </div>    
                </b-form>
           </b-card>
          </b-col>
      </b-row>
    </b-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength} from 'vuelidate/lib/validators'

    export default {
       mixins: [validationMixin],
       
        data() {
          return {
            form: {
              username: '',
              password: '',        
            },
            show: true
          }
    },
    validations:{
        password:{
            required,
            minLength: minLength(8)
        },
        username:{
            required,
        }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }
    },
    
     
    
    
      /*onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.username = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }*/
    }
  
</script>

<style>
    #contain{
        padding: 150px;
    }
    .invalid b-form-input{ 
      border: 1px solid yellow;
      background-color: lightyellow;

    }
</style>