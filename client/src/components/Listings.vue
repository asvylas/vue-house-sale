<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <p v-for="property in listings">{{property}}</p>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Listings',
  data () {
    return {
      listings: null
    }
  },
  mounted(){
        this.getProperties ()
    },
  methods: {
    async getProperties (){
            const response = await AuthenticationService.fetchProperties()
            this.listings = response.data.property
        },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
