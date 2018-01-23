<template>
  <div id="app">
    <v-app>
      <page-header/>
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
      <page-footer id="footer"/>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header'
import PageFooter from '@/components/Footer'
export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
main{
  background: url("/static/inimages/bg2pattern.svg") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
div.container.grey.lighten-4.fluid.grid-list-md{
   background: url("/static/inimages/bg2pattern.svg") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>
