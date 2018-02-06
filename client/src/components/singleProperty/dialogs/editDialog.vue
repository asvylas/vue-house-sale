<template>
 <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">

      <v-btn color="primary" fab small dark 
      v-if="true"
      absolute top right
      slot="activator"><v-icon>edit</v-icon>
      </v-btn>

      <v-card>
        <v-card-title>
          <span class="headline">Edit Property</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Rename the property" 
                hint="Make sure it's catchy." 
                v-model="newName"
                required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="City" 
                hint="" 
                v-model="newCity" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="Building type" 
                hint="" 
                v-model="newBuildingType" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="Street" 
                hint="" 
                v-model="newStreet" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="House number" 
                hint="" 
                v-model="newHouseNumber" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Description" 
                hint="" required 
                v-model="newDescription"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-flex>

            <v-btn color="primary" small dark 
            v-if="true"
            @click.native="updateListingData"
            >Submit
            </v-btn>

            <v-btn color="primary" small dark 
            v-if="true"
            @click.native="dialog = false"
            >Cancel
            </v-btn>
          </v-flex>
        </v-card-actions>
      </v-card>

    </v-dialog>
  </v-layout>
</template>

<script>
import PropertyServices from '@/services/PropertyServices'
export default {
  props : ['listing'],
  name: 'EditDialog',
  data () {
    return {
      dialog: false,
      error: null,
      newName: this.listing.name_of_listing,
      newCity: this.listing.city,
      newBuildingType:  this.listing.type_of_building,
      newStreet: this.listing.street,
      newHouseNumber: this.listing.house_number,
      newDescription: this.listing.description
    }
  },
  mounted () {
    console.log(this.listing.name_of_listing)
  },
  methods: {
    async updateListingData() {
      // Creating X value for if 
      let x = true;
      let newData = {
        name_of_listing: this.newName,
        city: this.newCity,
        type_of_building: this.newBuildingType,
        street: this.newStreet,
        house_number: this.newHouseNumber,
        description: this.newDescription,
        id: this.listing.id
      }
      // Checking object for empty values
      for(let item in newData) {
        if(String(newData[item]).trim() === '') {
          x = false
        } 
      }
      // Making a descion Yo. ~
      if(x === false) {
        return this.error = 'Please fill all the fields.'
      } else {
        let response = await PropertyServices.updateListingData(newData)
        if(response.data.listing) {
          $emit('newListingRecieved')
        }
      }

      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
