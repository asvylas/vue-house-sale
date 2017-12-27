import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Listings from '@/components/Listings'
import ListingForm from '@/components/ListingForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name:'Index',
      component: Index
    },
    {
      path: '/register',
      name:'Register',
      component: Register
    },
    {
      path: '/login',
      name:'Login',
      component: Login
    },
    {
      path: '/listings',
      name:'Listings',
      component: Listings
    },
    {
      path: '/newlisting',
      name:'ListingForm',
      component: ListingForm
    }
  ]
})
