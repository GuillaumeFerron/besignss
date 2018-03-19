import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/pages/Landing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/en/home'
    },
    {
      path: '/en/home',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/fr/home',
      name: 'Landing',
      component: Landing
    }
  ]
})
