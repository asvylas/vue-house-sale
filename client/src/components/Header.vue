<template>
  <v-toolbar dark dense color="primary">
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
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
    <v-btn 
    icon
    @click="searchProperties"
    v-bind="searchBar"
    >
    <v-icon>search</v-icon></v-btn>
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
import PropertyServices from '@/services/PropertyServices'
export default {
  name: 'Header',
  data () {
    return {
      drawer: null,
      searchBar: null,
    }
  },
  props: {
      source: String
    },
  methods: {
    async logoutUser(){
      this.$store.dispatch('logoutUser')
    },
    async searchProperties(){
      try {
        const response = await PropertyServices.searchProperties({
          options: this.searchBar
        })
      } catch (error){
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>

</style>
