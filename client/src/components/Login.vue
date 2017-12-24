<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
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
            <v-btn color="primary" @click="loginUser">Login</v-btn>
          </div>
          <p></p>
        </div>
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
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
          async loginUser(){
        try {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        } catch (error) {
          this.error = error.response.data.error
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
