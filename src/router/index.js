import Vue from 'vue'
import Router from 'vue-router'
import Language from '@/components/pages/Language.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Language',
      component: Language
    }
  ]
})
