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
  -webkit-box-shadow: 0px 0px 2px 0px rgba(224,208,224,1);
  -moz-box-shadow: 0px 0px 2px 0px rgba(224,208,224,1);
  box-shadow: 0px 0px 2px 0px rgba(224,208,224,1);

}

</style>
