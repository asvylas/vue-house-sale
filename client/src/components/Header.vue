<template>
  <v-toolbar dark dense color="primary">
    <router-link to="/">
      <v-toolbar-title dark class="white--text">Housefinder!</v-toolbar-title>
    </router-link>
    <router-link dark to="listings">
      <v-btn 
      flat 
      dark>Listings</v-btn>
    </router-link>
    <v-spacer></v-spacer>
    <v-text-field hide-details single-line></v-text-field>
    <v-btn icon><v-icon>search</v-icon></v-btn>
     <router-link to="login">
      <v-btn 
      v-if="!$store.state.userLoggedIn"
      dark
      flat>Login</v-btn>
    </router-link>
    <router-link dark to="register">
      <v-btn 
      v-if="!$store.state.userLoggedIn"
      flat 
      dark>Register</v-btn>
    </router-link>
    <router-link dark to="logout">
      <v-btn 
      v-if="$store.state.userLoggedIn"
      flat
      @click="logoutUser" 
      dark>Logout</v-btn>
    </router-link>
    
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
    async logoutUser(){
      this.$store.dispatch('logoutUser')
    }
  }
}
</script>

<style scoped>

</style>
