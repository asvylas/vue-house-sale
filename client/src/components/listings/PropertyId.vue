<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <v-card>
        <v-card-media v-bind:src="this.url" height="300px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{this.listing.name_of_listing}}</h3>
            <span>City: {{this.listing.city}}</span><br>
            <span>Address: {{this.listing.address}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn fab dark color="primary">
            <v-icon dark>favorite</v-icon>
          </v-btn>
          <v-btn fab dark color="primary">
            <v-icon dark>share</v-icon>
          </v-btn>
          <v-btn fab dark color="primary">
            <v-icon dark>edit</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import PropertyServices from '@/services/PropertyServices'
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
    const id = this.$store.state.route.params.propertyId
    try {
        const response = await PropertyServices.fetchById({
          id: id
          })
        this.listing = response.data.property
        console.log(this.listing)
    } catch (error) {
        console.log('Error occured')
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
