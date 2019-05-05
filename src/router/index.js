import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import InfiniteScroll from '@/components/infiniteScroll'

Vue.use(Router)

const router = new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'home'
      }
    },
    {
      path: '/infiniteScroll',
      name: 'infiniteScroll',
      component: InfiniteScroll,
      meta: {
        title: 'infiniteScroll'
      }
    }
  ]
})

export default router