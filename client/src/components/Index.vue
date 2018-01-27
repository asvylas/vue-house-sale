<template>
    <v-layout
      column
      align-center
      justify-center
      class="white--text"
    >
      <h1 class="black--text mb-2 display-1 text-xs-center">Looking for your new home?</h1>
      <v-btn
        class="primary lighten-2 mt-5"
        dark
        large
        @click="() => {$router.push(`/listings`)}"
      >
        Find it right now!
      </v-btn>
    </v-layout>
</template>

<script>
 export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
