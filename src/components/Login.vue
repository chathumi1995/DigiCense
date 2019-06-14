<template>
    <b-container id="contain"> 
      <b-row align-h="center" class="login">  
                  
          <b-col cols="6">
           <b-card class="login1">
              <h3 class="text-center">Login</h3>
                <b-form @submit="onSubmit"  v-if="show">
                <!--user -->
                <b-form-input
                    id="input-1"
                    type="text"
                    v-model="form.name"
                    required
                    placeholder="User Name"
                  ></b-form-input>

                <br>
                <!--password -->
                  <b-form-input
                    id="input-2"
                    type="password"
                    v-model="form.password"
                    required
                    placeholder="Password"
                  ></b-form-input>

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
    export default {
    data() {
      return {
        form: {
          username: '',
          password: '',        
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
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
  }
</script>

<style>
    #contain{
        padding: 150px;
    }
</style>