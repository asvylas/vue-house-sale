<template>
<v-app>
     <v-layout column>
      <v-flex xs12 sm6 offset-sm3>
        <search-listings/>
        <listings-panel/>
    </v-flex>
  </v-layout>
</v-app>
</template>

<script>
import SearchListings from '@/components/listings/SearchListings'
import ListingsPanel from '@/components/listings/ListingsPanel'
import PropertyServices from '@/services/PropertyServices'
export default {
  name: 'Listings',
  components: {
    SearchListings,
    ListingsPanel
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
