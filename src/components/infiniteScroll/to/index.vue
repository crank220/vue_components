<template>
  <div class="infinite-scroll-mod">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'infinite-scroll',
  props: {
    threshold: {
      type: Number,
      default: 300
    },
    value: Boolean
  },
  watch: {
    value (val) {
      new Promise((resolve, reject) => {
        // 处于加载状态时，触发更新
        // 不处于加载状态时 判断当前dom填充度是否小于等于阈值 正在loading...
        // 等于阈值:非window时 ele.scrollHeight恒等于dom可视高 dom填充值恒为0
        val ? resolve() : reject()
      }).then(() => {
        this.$emit('refresh')
      }).catch(() => {
        if (this.threshold >= this.getPageUnseenHeight(this.getEle())) this.$emit('input', true)
      })
    }
  },
  mounted () {
    this.getEle().addEventListener('scroll', () => {
      if (this.threshold >= this.getPageUnseenHeight(this.getEle()) - this.getScrollTop(this.getEle()) && !this.value) this.$emit('input', true)
    })
  },
  methods: {
    getEle () {
      const {overflowY} = window.getComputedStyle(this.$el)
      return overflowY === 'scroll' || overflowY === 'auto' ? this.$el : window
    },
    getPageUnseenHeight (ele) {
      let eleHeight = this.$el.clientHeight || this.$el.offsetHeight
      return ele === window ? document.body.clientHeight - document.documentElement.clientHeight : this.$el.scrollHeight - eleHeight
    },
    getScrollTop (ele) {
      return ele === window ? Math.max(window.pageYOffset || 0, document.documentElement.scrollTop) : ele.scrollTop || ele.pageYOffset || 0
    }
  }
}
</script>
