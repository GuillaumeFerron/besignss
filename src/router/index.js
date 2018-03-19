import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/pages/Landing.vue'
import Architecture from '@/components/pages/Architecture.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/en/home'
    },
    {
      path: '/en',
      redirect: '/en/home'
    },
    {
      path: '/fr',
      redirect: '/fr/home'
    },
    {
      path: '/en/home',
      name: 'Landing-en',
      component: Landing
    },
    {
      path: '/fr/home',
      name: 'Landing-fr',
      component: Landing
    },
    {
      path: '/en/architecture',
      name: 'Architecture-en',
      component: Architecture
    },
    {
      path: '/fr/architecture',
      name: 'Architecture-fr',
      component: Architecture
    }
  ]
})
