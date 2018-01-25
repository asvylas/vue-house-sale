<template>
  <v-layout column class="mb-5">
    <v-flex xs10 offset-xs1>
        <div class="white elevation-2">
        <v-toolbar flat dark dense class="primary">
          <v-toolbar-title>
            {{this.$store.state.user}}
          </v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <span>Basic profile information</span> <br>
            <span>More basic information</span> <br>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <v-toolbar flat dark dense class="primary">
          <v-toolbar-title>
            Bookmarks
          </v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2" v-for="item in this.bookmarkList" :key='item.id'>
            <span>{{item}}</span> <br>
          </div>
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
import PropertyServices from '@/services/PropertyServices'
import BookmarkServices from '@/services/BookmarkServices'
export default {
  name: 'Profile',
  data () {
    return {
      user: null,
      bookmarkList: null
    }
  },
  async mounted () {
    let response = await BookmarkServices.getBookmarkedProperties(this.$store.state.id)
    this.bookmarkList = response.data.result
    console.log(response)
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>