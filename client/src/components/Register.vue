<template>
  <v-layout column fluid class="mb-5">
    <v-flex xs6 offset-xs3>
      <div class="white elevation-5" v-on:keyup.13="registerUser">
        <v-toolbar flat dark dense class="primary">
          <v-toolbar-title>
            Register
          </v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              name="input-1"
              label="Email"
              type="text"
              v-model="email"
              :disabled='disableField'
            ></v-text-field>
            <v-text-field
              name="input-1"
              label="Password"
              type="password"
              v-model="password"
              :disabled='disableField'
            ></v-text-field>

            <v-btn color="primary"
              @click="registerUser"
              :loading="this.$store.state.loading"
              >Submit
              <span slot="loader" class="custom-loader">
              <v-icon dark>cached</v-icon>
              </span>
            </v-btn>

           </div>
        </div>
        <v-alert color="warning" icon="priority_high" transition="scale-transition" :value="alertError">
          {{msgError}}
        </v-alert>
        <v-alert color="success" icon="check_circle" transition="scale-transition" :value="alertSuccess">
          {{msgSuccess}}
        </v-alert> 
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      msgError: false,
      alertError: false,
      msgSuccess: false,
      alertSuccess: false,
      disableField: false,
      email: '',
      password: ''
    }
  },
  watch: {

  },
  mounted () {
  },
  beforeDestroyed () {
  },
  methods: {
      async registerUser(){
        this.$store.dispatch('loading', true)
        try {
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
          })

          this.msgSuccess = response.data.msg
          this.alertSuccess = true
          this.disableField = true

          if (response.data.msg) {
            setTimeout( ()=> {
              this.$router.push('/login')
              this.$store.dispatch('loading', false)
            }, 3000)
          }
          
        } catch (error) {

          this.alertError = true
          this.msgError = error.response.data.error
          this.$store.dispatch('loading', false)
          setTimeout(() => { 
            this.alertError = false
           }, 3000);
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.alert{
  position: absolute;
}
</style>
