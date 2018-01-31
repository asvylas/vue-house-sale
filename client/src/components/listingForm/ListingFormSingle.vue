<template>
<v-layout>
  <v-flex xs12>
      <v-stepper v-model="e6" vertical>

        <v-stepper-step step="1" v-bind:complete="e6 > 1">
          Basic information
          <small>Good start is half the job</small>
        </v-stepper-step>
        <v-stepper-content step="1">

                <v-text-field
                  name="input-1"
                  label="Name"
                  type="text"
                  v-model="name"
                ></v-text-field>
                <v-text-field
                  name="input-1"
                  label="City"
                  type="text"
                  v-model="city"
                ></v-text-field>
                <v-text-field
                  name="input-1"
                  label="Street"
                  type="text"
                  v-model="street"
                ></v-text-field>
                <v-text-field
                  name="input-1"
                  label="House number"
                  type="text"
                  v-model="housenumber"
                ></v-text-field>
                <v-text-field
                  name="input-1"
                  label="Zipcode"
                  type="text"
                  v-model="zipcode"
                ></v-text-field>
                <v-text-field
                  name="input-1"
                  label="Building type"
                  type="text"
                  v-model="type"
                ></v-text-field>
                
          <v-btn color="primary" @click.native="e6 = 2">Continue</v-btn>
          <v-btn flat @click='Cancel'>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="2" v-bind:complete="e6 > 2">
          Upload the photos of it
          <small>People will be thrilled to see how it looks</small>
        </v-stepper-step>
        <v-stepper-content step="2">
           <v-container fluid>
              <v-layout row wrap>
                <v-flex 
                class="mb-5 " 
                  v-for="image in imageURL"
                  :key="image">
                    
                      <img :src="image" 
                      alt="" height="200px"
                      class="uploadImgs elevation-2"
                      >
                    
              </v-flex>
            </v-layout>
          </v-container>
          
          <input 
          type="file" 
          multiple 
          style="display:none" 
          ref="browseFiles" 
          accept="image/*"
          @change="filesSelected">
          <v-btn color="primary" @click="triggerFileBrowser">Upload files</v-btn>
          <v-btn color="primary" @click.native="e6 = 3">Continue</v-btn>
          <v-btn flat @click='Cancel'>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="3" v-bind:complete="e6 > 3">
          Tell us more about it
          <small>Write as much or as little as you like</small>
        </v-stepper-step>
        <v-stepper-content step="3">
          <v-text-field
                  name="input-7-1"
                  label="Description"
                  multi-line
                  v-model="description"
                ></v-text-field>
          <v-btn color="primary" @click="sendData">Continue</v-btn>
          <v-btn flat @click='Cancel'>Cancel</v-btn>
        </v-stepper-content>

      </v-stepper>
    </v-flex>
  </v-layout>
</template>

<script>
import PropertyServices from '@/services/PropertyServices'
export default {
  name: 'ListingFormSingle',
  data () {
    return {
      e6: 1,
      name: "",
      city: "",
      street: "",
      housenumber: "",
      zipcode: "",
      type: "",
      description: "",
      imageURL: [],
      a: null
    }
  },
  methods: {
     async addNewListing (){
      try {
      const response = await PropertyServices.addProperty({
        name_of_listing: this.name,
        city: this.city,
        street: this.street,
        house_number: this.housenumber,
        zip_code: this.zipcode,
        type_of_building: this.type,
        description: this.description,
        listed_by_user: this.$store.state.user,
        a: this.a,
      })
      this.$router.push('/listings')
      } catch (error) {
      }
    },
    Cancel(){
      this.$router.push('/listings')
    },
    triggerFileBrowser() {
      this.$refs.browseFiles.click()
    },
    filesSelected(e) {
      const filesToUpload = e.target.files
      this.a = filesToUpload
      for (let i = 0; i <  filesToUpload.length; i++) {
        let filename = filesToUpload[i].name
        const fileReader = new FileReader()
        fileReader.addEventListener('load', ()=>{
          this.imageURL.push(fileReader.result)
        })
        fileReader.readAsDataURL(filesToUpload[i])
      }
    },
    // Need to either add additional library to make this call or setup a crude error handling as is. ~
    sendData(){
      const filesToAppend = this.a
      const data = {
        name_of_listing: this.name,
        city: this.city,
        street: this.street,
        house_number: this.housenumber,
        zip_code: this.zipcode,
        type_of_building: this.type,
        description: this.description,
        listed_by_user: this.$store.state.user,
      }
      // Binding context
      const self = this
      const XHR = new XMLHttpRequest()
      const FD = new FormData()
      // Appending text
      for(let item in data){
        FD.append(item, data[item])
      }
      // Appending files
      for(let file in filesToAppend){
        FD.append('a', filesToAppend[file])
      }
      XHR.open('POST', 'http://localhost:8082/properties', true)
      XHR.onload = function (e) {
      }
      // Callback
      XHR.onreadystatechange = function () {
        if(XHR.readyState === XMLHttpRequest.DONE && XHR.status === 200) {
          self.$router.push('/listings')
        }
      }
      XHR.send(FD)
    }
  }
}
</script>

<style scoped>
img.uploadImgs{
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);

}

</style>
