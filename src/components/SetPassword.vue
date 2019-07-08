<template>
    <div>
        
        <b-container id="contain"> 
         <b-row align-h="center" class="login">                   
          <b-col sm="12" lg="6">
           <b-card class="login1">
              
                <h3 class="text-center"><small class="text-muted">Set Password</small></h3>
                    <b-form>

                <!--id -->
                <div> 
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
                <div>                 
                  <b-form-input                    
                    id="password"
                    type="password"
                    @blur="$v.password.$touch()"
                    v-model="password"                                                          
                    required           
                    placeholder="Password"
                    @input="password_check"
                  ></b-form-input>  
                        
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

</script>

<style>

</style>