<template>
  <div class="collapse-mod">
    <div @click="change" class="title">title</div>
    <div class='content' :style="{'height': height}" v-show="show">
      <div ref='box' class="box"><slot/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collapse',
  data() {
    return {
      show: false,
      height: 0,
      ST: null,
    }
  },
  methods: {
    change() {
      // if (this.show) {
      //   if (this.height === 0) {
      //     clearInterval(this.ST)
      //     this.show = true
      //     setTimeout(() => {
      //       const { clientHeight } = this.$refs['box']
      //       this.height = clientHeight + 'px'
      //     })
      //   } else {
      //     this.height = 0
      //     this.ST = setTimeout(() => {
      //       this.show = false
      //     }, 300)
      //   }
      // } else {
      //   this.show = true
      //   setTimeout(() => {
      //     const { clientHeight } = this.$refs['box']
      //     this.height = clientHeight + 'px'
      //   })
      // }
      if (this.show && this.height !== 0) {
        this.height = 0
        this.ST = setTimeout(() => {
          this.show = false
        }, 300)
      } else {
        if (this.height === 0) clearInterval(this.ST)
        this.show = true
        setTimeout(() => {
          const { clientHeight } = this.$refs['box']
          this.height = clientHeight + 'px'
        })
      }
    }
  }
}
</script>

<style scoped>
.collapse-mod{
  border: 1px solid #dcdee2;
}
.collapse-mod .title{
  background: #f7f7f7;
  margin: 0;
  padding: 10px 16px;
  font-size: 12px;
}
.collapse-mod .content{
  transition: all .2s ease-in-out;
  will-change: height;
  overflow: hidden;
  padding-top: 0px;
  padding-bottom: 0px;
}
.collapse-mod .content .box{
  padding: 16px;
  color: #515a6e;
  line-height: 1.5;
  font-size: 14px;
}
</style>
