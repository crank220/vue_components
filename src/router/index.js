import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import InfiniteScroll from '@/components/infiniteScroll'
import WaterMarker from '@/components/waterMarker'
import Rate from '@/components/rate'


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
    },
    {
      path: '/waterMarker',
      name: 'waterMarker',
      component: WaterMarker,
      meta: {
        title: 'waterMarker'
      }
    },
    {
      path: '/rate',
      name: 'rate',
      component: Rate,
      meta: {
        title: 'rate'
      }
    }
  ]
})

export default router