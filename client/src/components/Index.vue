<template>
  <v-parallax src="./static/inimages/index.jpeg" height="800" id="index-img">
    <v-layout
      column
      align-center
      justify-center
      class="white--text"
    >
      <h1 class="white--text mb-2 display-1 text-xs-center">Looking for your new home?</h1>
      <v-btn
        class="primary lighten-2 mt-5"
        dark
        large
        href="/listings"
      >
        Find it right now!
      </v-btn>
    </v-layout>
  </v-parallax>
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
<style scoped>
#index-img {
  box-shadow: 0px 0px 20px 1px rgba(135,83,135,0.37);
}
</style>
