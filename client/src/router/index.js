import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Register from '@/components/Register'

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
    }
  ]
})
