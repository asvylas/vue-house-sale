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
            v-for="property in listingList"
            :key="property.id">
            <v-card>
              <v-card-media v-bind:src="`http://localhost:8082/${property.main_image_path}`" height="200px">
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
                  <v-icon dark>pageview</v-icon>
                </v-btn>

                  <v-btn fab small dark
                  v-if="property.bookmarked"
                  @click="bookmark(property.id)"
                  color="red">
                  <v-icon dark>favorite</v-icon>
                </v-btn>

                <v-btn fab small dark 
                  @click="bookmark(property.id)"
                  v-else
                  color="primary">
                  <v-icon dark>favorite</v-icon>
                </v-btn>
                
                <v-btn fab small dark 
                  @click="bookmark(property.id)"
                  color="primary">
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
      listingImages: null,
      error: null,
      bookmarkList: null,
      listingList: null,
      url: `/static/images/${this.$store.state.route.params.propertyId}.jpeg`
    }
  },
  mounted(){
    this.getProperties ()
    this.getBookmarks ()
    },
  methods: {
    async getProperties (){
      let response = await PropertyServices.fetchProperties()
      this.listings = response.data.property
      this.listingImages = response.data.image_list
    },
    async getBookmarks(){
      if(this.$store.state.id != null) {
      let response = await BookmarkServices.getBookmarkedProperties(this.$store.state.id)
      this.bookmarkList = this.listings
      for(let i = 0; i < response.data.result.length; i++){
        this.bookmarkList.forEach(element => {
          if(element.id === response.data.result[i].id) {
            element.bookmarked = true
          }
        })
        this.listingList = this.bookmarkList
      }
      console.log(this.listings)
      }
    },
    async bookmark(propertyId) {
      let userId = this.$store.state.id
      if (userId === null || undefined || '') {
        return this.error = 'Login to bookmark'
      } else {
        let response = await BookmarkServices.bookmarkProperty(userId, propertyId)
        if(response.data.result === true) {
          console.log('Update the UI DUMBASS')
        }
      }
      this.getProperties ()
      this.getBookmarks ()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
