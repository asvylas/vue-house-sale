<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div v-model="listing">{{listing}}</div>
    </v-flex>
  </v-layout>
</template>

<script>
import PropertyServices from '@/services/PropertyServices'
export default {
  name: 'PropertyId',
  data () {
    return {
      id: null,
      listing: null
    }
  },
  async mounted () {
    const id = this.$store.state.route.params.propertyId
    try {
        const response = await PropertyServices.fetchById({
          id: id
          })
        this.listing = response.data.property
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
