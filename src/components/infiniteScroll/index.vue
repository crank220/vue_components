<template>
  <div class="infinite-scroll-demo">
    <router-link to="/">home</router-link>
    <h2>infiniteScroll 无限滚动</h2>
    <h3>固定元素高度内</h3>

    <InfiniteScroll @refresh="refresh1" v-model="loading1" :threshold="23" class="infinite-scroll-demo-box">
      <p v-for="n in num1" :key="n">{{n}}</p>
      <div v-show="loading1">{{total1}}</div>
    </InfiniteScroll>

    <h3>不限</h3>
    <InfiniteScroll @refresh="refresh2" v-model="loading2">
      <p v-for="n in num2" :key="n">{{n}}</p>
      <div v-show="loading2">{{total2}}</div>
    </InfiniteScroll>
  </div>
</template>
<script>
import InfiniteScroll from './to'
export default {
  name: 'infinite-scroll-demo',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    InfiniteScroll
  },
  data () {
    return {
      num1: 0,
      total1: '加载中...',
      loading1: true,
      num2: 0,
      total2: '加载中...',
      loading2: true
    }
  },
  mounted () {
    this.refresh1()
    this.refresh2()
  },
  methods: {
    refresh1 () {
      setTimeout(() => {
        if (this.num1 > 14) {
          this.total1 = '我也是有底线的'
          return
        }
        this.num1 = this.num1 + 1
        this.loading1 = false
      }, 500)
    },
    refresh2 () {
      setTimeout(() => {
        this.num2 = this.num2 + 5
        this.loading2 = false
      }, 500)
    }
  }
}
</script>

<style scoped>
  .infinite-scroll-demo p{
    height: 30px;
  }
  .infinite-scroll-demo-box{
    height: 400px;
    overflow-y: scroll;
  }
</style>
