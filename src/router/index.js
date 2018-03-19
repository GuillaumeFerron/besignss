import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/pages/Landing.vue'
import Architecture from '@/components/pages/Architecture.vue'
import Design from '@/components/pages/Design.vue'

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
      name: 'landing-en',
      component: Landing
    },
    {
      path: '/fr/home',
      name: 'landing-fr',
      component: Landing
    },
    {
      path: '/en/architecture',
      name: 'architecture-en',
      component: Architecture
    },
    {
      path: '/fr/architecture',
      name: 'architecture-fr',
      component: Architecture
    },
    {
      path: '/en/design',
      name: 'design-en',
      component: Design
    },
    {
      path: '/fr/design',
      name: 'design-fr',
      component: Design
    }
  ]
})
