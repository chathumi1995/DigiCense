<template>
    <div>
        
        <b-container id="contain"> 
         <b-row align-h="center" class="setPassword">                   
          <b-col sm="12" lg="6">
           <b-card class="login1">
              
                <h3 class="text-center"><small class="text-muted">Set Password</small></h3>
                    <b-form>

                <!--new password -->
                <div> 
                  <b-form-input                 
                      id="newPassword"
                      type="text"
                      v-model="newPassword"
                      @blur="$v.newPassword.$touch()"
                      required
                      placeholder="New Password"
                    ></b-form-input>
                   
                </div>
                <br>

                <!--re-password -->
                <div>                 
                  <b-form-input                    
                    id="rePassword"
                    type="rePassword"
                    @blur="$v.rePassword.$touch()"
                    v-model="rePassword"                                                          
                    required           
                    placeholder="Re-enter Password"
                    @input="password_check"
                  ></b-form-input>  
                        
                </div>
                <br>
                 <button class="btn btn-warning btn-block" to="/setPassword" @click.prevent="submitSetPass">Set Password</button>
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
                newPassword: '',
                rePassword:''
                };
        },
         validations: {
           newPassword: {
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

</style>