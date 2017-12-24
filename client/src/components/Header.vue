<template>
  <v-toolbar dark dense color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <router-link to="Index">
      <v-toolbar-title dark class="white--text">Moki Neshi</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-text-field hide-details single-line></v-text-field>
    <v-btn icon><v-icon>search</v-icon></v-btn>
     <router-link to="Login">
      <v-btn 
      v-if="!$store.state.userLoggedIn"
      dark
      flat>Login</v-btn>
    </router-link>
    <router-link dark to="Register">
      <v-btn 
      v-if="!$store.state.userLoggedIn"
      flat 
      dark>Register</v-btn>
    </router-link>
    <router-link dark to="Logout">
      <v-btn 
      v-if="$store.state.userLoggedIn"
      flat 
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
  }
}
</script>

<style scoped>

</style>
