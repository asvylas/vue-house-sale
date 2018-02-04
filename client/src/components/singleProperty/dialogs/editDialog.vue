<template>
 <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn color="primary" fab small dark 
      v-if="true"
      absolute top right
      slot="activator"><v-icon>edit</v-icon></v-btn>
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
                :value="listing.name_of_listing" 
                @input.native="data.name_of_listing = $event.target.value"
                required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="City" 
                hint="" 
                :value="listing.city" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="Building type" 
                hint="" 
                :value="listing.type_of_building" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="Street" 
                hint="" 
                :value="listing.street" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="House number" 
                hint="" 
                :value="listing.house_number" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Description" 
                hint="" required 
                :value="listing.description"></v-text-field>
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
  name: 'editDialog',
  data () {
    return {
      dialog: false,
      data: {}
    }
  },
  mounted () {
    this.data = this.listing
  },
  beforeDestroy() {

  },
  methods: {
    updateListingData() {
      console.log(this.listing)
      console.log(this.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
