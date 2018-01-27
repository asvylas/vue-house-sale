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

</style>
