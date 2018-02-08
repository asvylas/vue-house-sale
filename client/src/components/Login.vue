<template>
  <v-layout column class="mb-5">
    <v-flex xs6 offset-xs3>
      <div class="white elevation-5" v-on:keyup.13="loginUser">
        <v-toolbar flat dark dense class="primary">
          <v-toolbar-title>
            Login
          </v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              name="input-1"
              label="Email"
              type="text"
              v-model="email"
            ></v-text-field>
            <v-text-field
              name="input-1"
              label="Password"
              type="password"
              v-model="password"
            ></v-text-field>

            <v-btn color="primary" 
              @click="loginUser"
              :loading="this.$store.state.loading"
              >Login
              <span slot="loader" class="custom-loader">
              <v-icon dark>cached</v-icon>
              </span>
            </v-btn>

          </div>
        </div>
        <v-alert color="warning" icon="priority_high" transition="scale-transition" :value="alert">
          {{msg}}
        </v-alert>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      msg: null,
      alert: false,
      email: '',
      password: ''
    }
  },
  methods: {
      async loginUser(){
        this.$store.dispatch('loading', true)
        try {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          if(response.data.token && response.data.user){
            this.$store.dispatch('setToken', response.data.token)
            this.$store.dispatch('setUser', response.data.user)
            this.$store.dispatch('setId', response.data.id)
            this.$store.dispatch('setUserbookmarks', response.data.userBookmarks)
            for (let item in response.data) {
              sessionStorage.setItem(item, response.data[item]) 
            }
            this.$store.dispatch('loading', false)
            this.$router.push('/')
          } else {
            this.$store.dispatch('loading', false)
            this.alert = true
            this.msg = 'Something went wrong'

            setTimeout(() => { 
            this.alert = false
           }, 3000);
           
          }
        } catch (error) {
          
          this.alert = true
          this.msg = error.response.data.error
          this.$store.dispatch('loading', false)
          setTimeout(() => { 
            this.alert = false
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
