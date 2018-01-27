<template>
<v-container fluid>

  <v-layout column>
    <v-flex xs10 offset-xs1 >
      <div >
        <v-card-media
        id="media-card"
          v-bind:src="'http://localhost:8082/' + this.currentImage"
          height="500px"
        >
        </v-card-media>
      </div>
      
    </v-flex>
  </v-layout>

  <v-layout row> 
    <v-flex xs10 offset-xs1>
      <v-card id="main-card">

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

          <v-btn color="white" class="btnx" id="leftbbb"
          light small absolute 
          @click="changeImg(-1)"
          top left fab>
             <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <v-btn color="white" class="btnx" id="rightbbb"
          light small 
          @click="changeImg(1)"
          absolute top right fab>
             <v-icon>keyboard_arrow_right</v-icon>
          </v-btn>

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
export default {
  name: 'PropertyId',
  data () {
    return {
      baseURL: 'http://localhost:8082/',
      id: this.$store.state.route.params.propertyId,
      listing: '',
      imagePaths: [],
      currentImage: null,
      imagePosition: 0
    }
  },
  async mounted () {
    // Fetching data
    try {
        let response = await PropertyServices.fetchById({
          id: this.id
          })
        this.listing = response.data.property
        let imageObj = response.data.imagePaths
        for (let i = 0; i < 6; i++) {
          if(/uploads*/.test(imageObj[`image_${i}`])) {
            this.imagePaths.push(imageObj[`image_${i}`])
          }
        }
        
    } catch (error) {
        console.log('Error occured')
    }
    if (this.imagePaths.length > 0) {
      this.changeImg()
    }
    document.addEventListener('resize', () => {
     GoogleApi.googleMapsResize()
     })
    this.$nextTick(()=> {
      GoogleApi.googleSetSRC(this.listing)
    })
  },
  beforeDestroy() {
    document.removeEventListener('resize', () => {
     GoogleApi.googleMapsResize() 
    });
},
  methods: {
    googleMapsDisplay(){
      GoogleApi.googleMapsDisplay()
    },
    changeImg(val){
      this.currentImage = this.imagePaths[this.imagePosition]
      if( this.imagePosition < this.imagePaths.length) {
        this.imagePosition++
      } else {
        this.imagePosition = 0
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
#editbtn{
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
