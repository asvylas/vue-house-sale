<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <listing-form-single/>
      </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
import PropertyServices from '@/services/PropertyServices'
import listingFormSingle from '@/components/listingForm/ListingFormSingle'
export default {
  name: 'ListingForm',
  components: {
    listingFormSingle
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
