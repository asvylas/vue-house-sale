<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      
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
    }
  },
  async mounted () {
    const id = this.$store.state.route.params.propertyId
    try {
        const reponse = await PropertyServices.fetchById(id)
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
