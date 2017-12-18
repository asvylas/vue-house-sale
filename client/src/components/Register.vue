<template>
  <div class="container">
      <h1>Register</h1>
      <input type="text" v-model="email" placeholder="email">
      <input type="password" v-model="password" placeholder="password">
      <button @click="registerUser">Submit</button>
      <div v-html="error"></div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      msg: 'no',
      email: 'abc',
      password: 'avs',
      error: null
    }
  },
  methods: {
      async registerUser(){
        try {
          await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
          this.error = 'Registration successful'
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
