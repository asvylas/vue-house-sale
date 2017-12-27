<template>
     <v-layout column>
    <v-flex xs12 sm6 offset-sm3>
      <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-flex
            v-for="property in listings"
            :key="property.id"
          >
          <v-card>{{property.id}}</v-card>
          </v-flex>
        </v-layout>
      </v-container>
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
