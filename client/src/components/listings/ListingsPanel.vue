<template>
     <v-layout dense column>
      <v-flex>
        <v-toolbar dense color="primary" dark>
          <v-toolbar-title>Current Listings</v-toolbar-title>
          <v-spacer></v-spacer>

        <router-link to="newlisting">
          <v-tooltip top>
            <v-btn 
              v-if="this.$store.state.userLoggedIn"
              dark color="primary" slot="activator" icon>
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
                <v-btn fab small color="primary" 
                  @click="() => {$router.push(`/listings/${property.id}`)}">
                  <v-icon dark>pageview</v-icon></v-btn>
                <v-btn fab small dark 
                  @click="bookmark(property.id)"
                  color="primary">
                  <v-icon dark>favorite</v-icon>
                </v-btn>
                <v-btn fab small dark color="primary">
                  <v-icon dark>share</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>

          </v-flex>
        </v-layout>
      </v-container>

    </v-flex>
  </v-layout>
</template>

<script>
import PropertyServices from '@/services/PropertyServices'
import BookmarkServices from '@/services/BookmarkServices'
export default {
  name: 'ListingsPanel',
  data () {
    return {
      listings: null,
      error: null,
      url: `/static/images/${this.$store.state.route.params.propertyId}.jpeg`
    }
  },
  mounted(){
        this.getProperties ()
    },
  methods: {
    async getProperties (){
      let response = await PropertyServices.fetchProperties()
      this.listings = response.data.property
    },
    async bookmark(propertyId) {
      let userId = this.$store.state.id
      if (userId === null || undefined || '') {
        return this.error = 'Login to bookmark'
      } else {
        let response = await BookmarkServices.bookmarkProperty(userId, propertyId)
        if(response.data.result === true) {
          console.log('Hi MOM')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
