<template>
<v-app>
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
            :key="property.id">

            <v-card>
              <v-card-media v-bind:src="`/static/images/${property.id}.jpeg`" height="300px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{property.name_of_listing}}</h3>
                  <span>City: {{property.city}}</span><br>
                  <span>Address: {{property.street}} {{property.house_number}}</span><br>
                  <span>Views: {{property.listing_views}}</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn fab outline small color="primary" 
                @click="() => {$router.push(`/listings/${property.id}`)}">
                  <v-icon dark>pageview</v-icon></v-btn>
                <v-btn fab outline small dark color="primary">
                  <v-icon dark>favorite</v-icon>
                </v-btn>
                <v-btn fab outline small dark color="primary">
                  <v-icon dark>share</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>

          </v-flex>
        </v-layout>
      </v-container>

    </v-flex>
  </v-layout>
</v-app>
</template>

<script>
import PropertyServices from '@/services/PropertyServices'
export default {
  name: 'ListingsPanel',
  data () {
    return {
      listings: null,
      url: `/static/images/${this.$store.state.route.params.propertyId}.jpeg`
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
