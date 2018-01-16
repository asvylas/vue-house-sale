<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <listing-form-text-panel/>
        <listing-form-photos-panel/>
      </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
import PropertyServices from '@/services/PropertyServices'
import listingFormTextPanel from '@/components/listingForm/listingFormTextPanel'
import listingFormPhotosPanel from '@/components/listingForm/listingFormPhotosPanel'
export default {
  name: 'ListingForm',
  components: {
    listingFormTextPanel,
    listingFormPhotosPanel
  },
  data () {
    return {

    }
  },
  mounted () {
    if (this.$store.state.user == null || undefined || '') {
      this.$router.push('/listings')
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
