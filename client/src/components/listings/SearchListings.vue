<template>
     <v-layout column>

      <v-toolbar dense color="primary" dark>
        <v-toolbar-title>Search Listings</v-toolbar-title>
        <v-spacer>
        </v-spacer>

      <v-text-field hide-details 
        single-line
        name="input-1"
        v-model="searchBar"
        @input="searchProperties">
        </v-text-field>

        <v-btn 
          icon
          @click="searchProperties"
          >
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>

      <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-flex class="text-sm-left"
            v-for="property in searchBarResult"
            :key="property.id"
          >
          <v-card >
            <div class='text'>Name: {{property.name_of_listing}}</div>
            <div class='text'>Street: {{property.street}}, {{property.house_number}}</div>
            <div class='text'>City: {{property.city}}</div>
            <v-card-actions>
                <v-btn fab dark small color="primary" 
                @click="() =>
                {
                $router.push(`/listings/${property.id}`)
                }"><v-icon dark>pageview</v-icon></v-btn>
            </v-card-actions>
          </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </v-layout>
</template>

<script>
import PropertyServices from '@/services/PropertyServices'
export default {
  name: 'SearchListings',
  data () {
    return {
      searchBar: '',
      searchBarResult: ''
    }
  },
  methods: {
    async searchProperties(){
      try {
        if(this.searchBar == '') {
          this.searchBarResult = ''
          return
        } else {
          const response = await PropertyServices.searchProperties({
          options: this.searchBar
          })
          this.searchBarResult = response.data.property
        }
      } catch (error){
        console.log(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.text {
  padding: 10px 0px 0px 10px;
}
</style>
