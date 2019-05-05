import Vue from 'vue'
import Router from 'vue-router'
import aaa from '@/components/HelloWorld'
import bbb from '@/components/emm'

Vue.use(Router)

const router = new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: aaa,
      meta: {
        title: 'aaa'
      }
    },
    {
      path: '/en',
      name: 'en',
      component: bbb,
      meta: {
        title: 'bbb'
      }
    }
  ]
})

export default router