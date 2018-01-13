<template>
<v-container fluid>

  <v-layout column>

    <v-flex xs10 offset-xs1>
      <v-card>
        <v-card-media id='media-card' v-bind:src="this.url" height="300px">
        </v-card-media>
      </v-card>
    </v-flex>
  </v-layout>

  <v-layout row> 
    <v-flex xs10 offset-xs1>
      <v-card>

        <v-card-title primary-title class="text-md-center">
            <v-layout wrap>
              <v-flex class="text-sm-left">
                <div>
                  <h3 class="headline mb-0">{{this.listing.name_of_listing}}</h3>
                  <span>{{this.listing.city}}</span><br>
                  <span>{{this.listing.street}}, {{this.listing.house_number}}</span><br>
                  <span>{{this.listing.type_of_building}}</span><br>
                  <span>{{this.listing.listed_by_user}}</span><br>
                  <span>Views: {{this.listing.listing_views}}</span>
                </div>
              </v-flex>

              <v-flex class="text-sm-left">

              </v-flex>                  
            </v-layout>
        </v-card-title>

        <v-card-actions>
          <v-btn color="primary" class="btnx" 
          v-if="this.$store.state.userLoggedIn"
          dark small absolute top right fab>
             <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn id="sharebtn" class="btnx" color="primary" dark small absolute top right fab>
             <v-icon>share</v-icon>
          </v-btn>
          <v-btn id="editbtn" class="btnx" color="primary" 
            v-if="this.$store.state.user === this.listing.listed_by_user"
            dark small absolute top right fab>
             <v-icon>edit</v-icon>
          </v-btn>
            <v-btn id="placebtn"  class="btnx" color="primary" 
            dark small absolute
            @click='googleMapsDisplay' top right fab>
             <v-icon>place</v-icon>
          </v-btn>
        </v-card-actions>

      </v-card>      
    </v-flex>
  </v-layout>

  <v-layout>
    <v-flex xs10 offset-xs1>
      <v-card class="hidden" id='google-maps-card'>
      <iframe id="google-maps-view"
        width="1000"
        height="300"
        frameborder="0" style="border:0"
        src="" allowfullscreen>
      </iframe>
      </v-card>
    </v-flex>
  </v-layout>
 </v-container>

</template>

<script>
import GoogleApi from '@/services/GoogleApi'
import PropertyServices from '@/services/PropertyServices'
import {mapState} from 'vuex'
export default {
  name: 'PropertyId',
  data () {
    return {
      id: this.$store.state.route.params.propertyId,
      listing: null,
      url: `/static/images/${this.$store.state.route.params.propertyId}.jpeg`
    }
  },
  async mounted () {
    // Fetching data
    try {
        const id = this.$store.state.route.params.propertyId
        const response = await PropertyServices.fetchById({
          id: id
          })
        this.listing = response.data.property
    } catch (error) {
        console.log('Error occured')
    }
    // Runs on mounting 
    // Resizing google view
    window.addEventListener('resize', () => {
     GoogleApi.googleMapsResize() 
     })
    // Runs once mounting is fully done
    this.$nextTick(function () {
      GoogleApi.googleSetSRC(this.listing)
    })
  },
  methods: {
    googleMapsDisplay(){
      GoogleApi.googleMapsDisplay()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sharebtn{
  margin-right: 52px;
}
#editbtn{
  margin-right: 102px;
}
#placebtn{
  margin-right: 152px;
}
.hidden{
  display: none;
}
</style>
