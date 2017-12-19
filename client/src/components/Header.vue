<template>
  <v-toolbar dark dense color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <router-link to="Index">
      <v-toolbar-title dark class="white--text">Moki Neshi</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-text-field hide-details single-line></v-text-field>
    <v-btn icon><v-icon>search</v-icon>
    </v-btn>
     <router-link to="">
      <v-btn dark flat>Login</v-btn>
    </router-link>
    <router-link dark to="Register">
      <v-btn flat dark>Register</v-btn>
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
