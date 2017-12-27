<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2" v-on:keyup.13="registerUser">
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
            ></v-text-field>
            <v-text-field
              name="input-1"
              label="Password"
              type="password"
              v-model="password"
            ></v-text-field>
        <v-btn color="primary" @click="registerUser">Submit</v-btn>
        <p>{{msg}}</p>
        </div>
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      msg: null,
      email: '',
      password: ''
    }
  },
  methods: {
      async registerUser(){
        try {
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
          this.msg = response.data.msg
        } catch (error) {
          this.msg = error.response.data.error
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
