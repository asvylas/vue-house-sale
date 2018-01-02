<template>
     <v-layout column>
    <v-flex xs12 sm6 offset-sm3>

      <v-toolbar color="primary" dark>
        <v-toolbar-title>Current Listings</v-toolbar-title>
        <v-spacer></v-spacer>

        <router-link to="newlisting">
          <v-tooltip top>
            <v-btn dark color="primary" slot="activator" icon>
              <v-icon>add</v-icon></v-btn>
            <span>Add a new listing</span>
          </v-tooltip>
        </router-link>
      </v-toolbar>

      <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-flex
            v-for="property in listings"
            :key="property.id"
          >
          <v-card>
            <div>Pavadinimas: {{property.name_of_listing}}</div>
            <div>Miestas: {{property.city}}</div>
            <div>Adresas: {{property.address}}</div>
            <div>Zip kodas: {{property.zip_code}}</div>
            <div>Pastato tipas: {{property.type_of_building}}</div>
            <div>Vartotojas: {{property.listed_by_user}}</div>
          </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </v-flex>
  </v-layout>
</template>

<script>
import PropertyServices from '@/services/PropertyServices'
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
            const response = await PropertyServices.fetchProperties()
            this.listings = response.data.property
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
