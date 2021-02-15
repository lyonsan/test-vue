import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Output from '@/components/Output'
import Profile from '@/components/Profile'
import Skill from '@/components/Skill'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/output',
      name: 'Output',
      component: Output
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    }
  ]
})
