<template>
<v-container fluid>

  <v-layout column>
    <v-flex xs10 offset-xs1 >
      <div id="main-card">
        <v-card-media
        id="media-card"
          v-bind:src="'http://localhost:8082/' + this.currentImage"
          height="400px"
        >
        
        </v-card-media>
        <v-toolbar dense color="white" dark>
         <v-btn color="white" class="btnx" id="leftbbb"
          light small absolute 
          @click="setImage(-1)"
          top left fab>
             <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <v-btn color="white" class="btnx" id="rightbbb"
          light small 
          @click="setImage(1)"
          absolute top right fab>
             <v-icon>keyboard_arrow_right</v-icon>
          </v-btn>
      </v-toolbar>
      </div>
      
    </v-flex>
  </v-layout>

  <v-layout row> 
    <v-flex xs10 offset-xs1>
      <v-card >

        <v-card-title primary-title class="text-md-center">
            <v-layout wrap>
              <v-flex class="text-sm-left">
                <div>
                  <h3 class="headline mb-0">{{this.listing.name_of_listing}}</h3>
                  <span>City: {{this.listing.city}}</span><br>
                  <span>Address: {{this.listing.street}}, {{this.listing.house_number}}</span><br>
                  <span>Building type:{{this.listing.type_of_building}}</span><br>
                  <span>Posted by:{{this.listing.listed_by_user}}</span><br>
                  <span>Views: {{this.listing.listing_views}}</span>
                </div>
              </v-flex>

              <v-flex class="text-sm-left">

              </v-flex>                  
            </v-layout>
        </v-card-title>

        <v-card-actions>
           <edit-dialog :listing='this.listing'></edit-dialog>
         

          <v-btn fab small dark class="bookmarkbtn"
            v-if='this.bookmarked === true'
            @click="bookmark(listing.id)" absolute
            color="red" top  right>
            <v-icon dark>favorite</v-icon>
          </v-btn>

          <v-btn fab small dark class="bookmarkbtn"
            @click="bookmark(listing.id)"
            v-else absolute
            color="black" top right>
            <v-icon dark>favorite</v-icon>
          </v-btn>

          <v-btn id="sharebtn" class="btnx" color="primary" dark small absolute top right fab>
             <v-icon>share</v-icon>
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
import BookmarkServices from '@/services/BookmarkServices'
import EditDialog from '@/components/singleProperty/dialogs/editDialog'
export default {
  name: 'PropertyId',
    components: {
    EditDialog
  },
  data () {
    return {
      baseURL: 'http://localhost:8082',
      id: this.$store.state.route.params.propertyId,
      listing: '',
      imagePaths: [],
      currentImage: './uploads/stock.jpg',
      imagePosition: 0,
      error: null,
      bookmarked: false,
    }
  },
  mounted () {
    // Fetching data
    this.fetchData()
    window.addEventListener('resize', this.handleGoogleWindowOnResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleGoogleWindowOnResize)
  },
  methods: {
    googleMapsDisplay(){
      GoogleApi.googleMapsDisplay()
    },
    handleGoogleWindowOnResize(){
      GoogleApi.googleMapsResize()
    },
    async bookmark(propertyId) {
      let userId = this.$store.state.id
      if (userId === null || undefined || '') {
        return this.error = 'Login to bookmark'
      } else {
        let response = await BookmarkServices.bookmarkProperty(userId, propertyId)
        if(response.data.msg === 'Bookmarked.'){
          this.bookmarked = true
        } else {
          this.bookmarked = false
        }
      }
    },
    setImage(val){
      this.currentImage = this.imagePaths[this.imagePosition]
      if (val > 0) {
        if(this.imagePosition > this.imagePaths.length - 2) {
          this.imagePosition = 0
        } else {
          this.imagePosition = this.imagePosition + val
        }
      } else {
        if(this.imagePosition <= 0){
          this.imagePosition = this.imagePaths.length - 1
        } else {
          this.imagePosition = this.imagePosition + val
        }
      }
    },
    async fetchData(){
      try {
        let response = await PropertyServices.fetchById({
          id: this.id
        })
        this.listing = response.data.property
        let imageObj = response.data.imagePaths
        for (let i = 0; i < 6; i++) {
          if(/uploads*/.test(imageObj[`image_${i}`])) {
            if(imageObj[`image_${i}`] != undefined && imageObj[`image_${i}`] != null ){
              this.imagePaths.push(imageObj[`image_${i}`])
            }
          }
        }
        GoogleApi.googleSetSRC(this.listing)
      } catch (error) {
          this.error = 'Something unexpected happened.'
        }
        if (this.imagePaths.length > 0) {
          this.setImage()
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
v-card#media-card{
  height: 500px;
}

#sharebtn{
  margin-right: 52px;
}
.bookmarkbtn{
  margin-right: 102px;
}
#placebtn{
  margin-right: 152px;
}
v-btn#leftbbb{
  margin-right: 152px !important;
}
v-btn#rightbbb{
  margin-bottom: 152px !important;
}
.hidden{
  display: none;
}
</style>
