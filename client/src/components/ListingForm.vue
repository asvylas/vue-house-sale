<template>
   <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2" v-on:keyup.13="addNewListing">
        <v-toolbar flat dark dense class="primary">
          <v-toolbar-title>
            New Listing
          </v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
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
              label="Address"
              type="text"
              v-model="address"
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
        <v-btn color="primary" @click="addNewListing">Submit</v-btn>
        </div>
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'ListingForm',
  data () {
    return {
      name: "",
      city: "",
      address: "",
      zipcode: "",
      type: ""
    }
  },
  methods: {
    async addNewListing (){
      try {
      const response = await AuthenticationService.addProperty({
        name: this.name,
        city: this.city,
        address: this.address,
        zip: this.zipcode,
        type: this.type,
        liste: "Fake user"
      })
      } catch (error) {
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
