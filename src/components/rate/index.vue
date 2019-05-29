<template>
  <div class="rate-demo">
    <router-link to="/">home</router-link>
    <h2>评分</h2>
    
    <h3>基础</h3>
    <Rate v-model="rate0"></Rate>

    <h3>已评分/禁用</h3>
    <Rate v-model="rate1" disabled></Rate>

    <h3>修改评分文本</h3>
    <Rate v-model="rate2"></Rate>
    <span>{{rateText2[rate2 - 1]}}</span>

    <h3>未评分，提交后不可修改</h3>
    <Rate v-model="rate3" :disabled="disabled3"></Rate>
    <span>{{rateText3[rate3 - 1]}}</span>
    <button @click="sublime3" size="min">{{disabled3 ? '取消禁用' : '提交'}}</button>

    <h3>自定义图标（引用组件库）</h3>
    <Rate v-model="rate4" :icon="icon4"></Rate>

    <h3>自定义图标（自定义图片，样式）</h3>
    <Rate v-model="rate5" :icon="icon5" :voidIcon="voidIcon5"></Rate>
    
    <h3>自定义大小</h3>
    <Rate v-model="rate6" :size="size6"></Rate>

    <h3>自定义颜色</h3>
    <Rate v-model="rate7" :color="color7" :voidColor="voidColor7"></Rate>

    <h3>自定义数量</h3>
    <Rate v-model="rate8" :num="num8"></Rate>

    <h3>高级</h3>
    <Rate v-model="rate9" :num="num9" :disabled="disabled9" :icon="icon9" :voidIcon="voidIcon9" :size="size9" :color="color9" :voidColor="voidColor9"></Rate>
    <p>{{rateText9[rate9 - 1]}}</p>
    <button @click="sublime9" size="min">{{disabled9 ? '取消禁用' : '提交'}}</button>
  </div>
</template>

<script>
import Rate from './to'
export default {
  name: 'RateDemo',
  data () {
    return {
      rate0: 0,
      rate1: 4,
      rate2: 2,
      rateText2: [1, 2, 3, 4, 5],
      rate3: 1,
      rateText3: ['非常不满意', '不满意', '一般', '满意', '非常满意'],
      disabled3: false,
      rate4: 5,
      icon4: 'apple',
      rate5: 2,
      icon5: 'icon5',
      voidIcon5: 'voidIcon5',
      rate6: 5,
      size6: '5rem',
      rate7: 3,
      color7: 'rgb(66, 255, 38)',
      voidColor7: '#ff2626',
      rate8: 7,
      num8: 8,
      rate9: 8,
      rateText9: ['ABBBBBBBB', 'AABBBBBBB', 'AAABBBBBB', 'AAAABBBBB', 'AAAAABBBB', 'AAAAAABBB', 'AAAAAAABB', 'AAAAAAAAB', 'AAAAAAAAA'],
      disabled9: false,
      icon9: 'icon9',
      voidIcon9: 'voidIcon9',
      size9: '32px',
      color9: '#9326ff',
      voidColor9: 'white',
      num9: 9
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Rate
  },
  methods: {
    sublime3 () {
      this.disabled3 = !this.disabled3
      // console.log(this.rate1, this.rate2, this.rate3)
    },
    sublime9 () {
      this.disabled9 = !this.disabled9
      // console.log(this.rateText9[this.rate9 - 1])
    }
  }
}
</script>

<style>
.rate-demo .v5-rate{
  margin: 5px 0;
}
.rate-demo .v5-rate-mod{
  /* /deep/ .icon5{
    background: #ff2626;
    border-radius: 100%;
  }
  /deep/ .voidIcon5{
    background: cyan;
    border-radius: 100%;
  }
  /deep/ .icon9{
    background: url('../../../assets/logo.png') no-repeat;
    background-size: cover;
    border-radius: 100%;
  }
  /deep/ .icon9::after{
    content: 'A';
  }
  /deep/ .voidIcon9{
    border-radius: 10px;
    background: black;
  }
  /deep/ .voidIcon9::after{
    content: 'B';
  } */
}
</style>

