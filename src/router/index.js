import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import InfiniteScroll from '@/components/infiniteScroll'
import WaterMarker from '@/components/waterMarker'
import Rate from '@/components/rate'
import Timer from '@/components/timer'
import Collapse from '@/components/collapse'
import MusicOscillogram from '@/components/musicOscillogram'

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
    },
    {
      path: '/timer',
      name: 'timer',
      component: Timer,
      meta: {
        title: 'timer'
      }
    },
    {
      path: '/collapse',
      name: 'collapse',
      component: Collapse,
      meta: {
        title: 'collapse'
      }
    },
    {
      path: '/musicOscillogram',
      name: 'musicOscillogram',
      component: MusicOscillogram,
      meta: {
        title: 'musicOscillogram'
      }
    }
  ]
})

export default router