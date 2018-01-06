<template>
     <v-layout dense column>
      <v-flex>
        <v-toolbar dense color="primary" dark>
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
            <div>Name: {{property.name_of_listing}}</div>
            <div>City: {{property.city}}</div>
            <div>Address: {{property.address}}</div>
            <div>Zip Code: {{property.zip_code}}</div>
            <div>Building type: {{property.type_of_building}}</div>
            <div>User: {{property.listed_by_user}}</div>
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
  name: 'ListingsPanel',
  data () {
    return {
      listings: null,
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
