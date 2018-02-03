<template>
  <v-layout column class="mb-5">
    <v-flex xs10 offset-xs1>
        <div class="white elevation-2">
        <v-toolbar flat dark dense class="primary">
          <v-toolbar-title>
            {{this.$store.state.user}}
          </v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <span>Basic profile information</span> <br>
            <span>More basic information</span> <br>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <v-toolbar flat dark dense class="primary">
          <v-toolbar-title>
            Bookmarks
          </v-toolbar-title>
        </v-toolbar>

         <v-container fluid grid-list-md class="grey lighten-4">
          <v-layout row wrap>
            <v-flex
              v-for="property in bookmarkList"
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
                    <v-icon dark>pageview</v-icon></v-btn>
                  <v-btn fab small dark 
                    @click="bookmark(property.id)"
                    color="red">
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
        
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
import PropertyServices from '@/services/PropertyServices'
import BookmarkServices from '@/services/BookmarkServices'
export default {
  name: 'Profile',
  data () {
    return {
      user: null,
      bookmarkList: null
    }
  },
  async mounted () {
    let response = await BookmarkServices.getBookmarkedProperties(this.$store.state.id)
    this.bookmarkList = response.data.result
  },
  methods: {
    async bookmark(propertyId) {
      let userId = this.$store.state.id
      if (userId === null || undefined || '') {
        return this.error = 'Login to bookmark'
      } else {
        let response = await BookmarkServices.bookmarkProperty(userId, propertyId)
        if(response.data.result === true) {
        }
      }
      let response = await BookmarkServices.getBookmarkedProperties(this.$store.state.id)
      this.bookmarkList = response.data.result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>