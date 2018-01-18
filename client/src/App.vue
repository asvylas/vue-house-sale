<template>
  <div id="app">
    <v-app>
      <page-header/>
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style scoped>
</style>
