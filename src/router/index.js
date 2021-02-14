import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Output from '@/components/Output'
import Profile from '@/components/Profile'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/outputs',
      name: 'Output',
      component: Output
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
