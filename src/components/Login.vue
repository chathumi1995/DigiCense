<template>
    <b-container id="contain"> 
      <b-row align-h="center" class="login">                   
          <b-col cols="6">
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
                </div>
                <br>
                <!--password -->
                <div :class="{invalid: $v.password.$error}" >
                  <!--<p v-if="!$v.password.minLength">The input must be a proper email!</p>-->
                  <b-form-input                    
                    id="password"
                    type="password"
                    @blur="$v.password.$touch()"
                    v-model="password"                     
                    :state="validation"                 
                    required           
                    placeholder="Password"
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
import { required, minLength, maxLength} from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  
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
    .invalid input{ 
      border: 1px solid red;
    }
</style>