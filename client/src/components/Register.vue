<template>
  <div class="container">
      <h1>Register</h1>
      <input type="text" v-model="email" placeholder="email">
      <input type="password" v-model="password" placeholder="password">
      <button @click="registerUser">Submit</button>
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
      password: 'avs'
    }
  },
  methods: {
      async registerUser(){
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
