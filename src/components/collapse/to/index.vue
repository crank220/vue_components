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
      height: null,
      ST1: null,
      ST2: null,
    }
  },
  methods: {
    change() {
      if (this.height === null) {
        const { clientHeight } = this.$refs['box']
        this.height = this.show ? clientHeight + 'px' : 0
      }
      setTimeout(() => {
        clearInterval(this.ST2)
        if (this.show && this.height !== 0) {
          this.height = 0
          this.ST1 = setInterval(() => {
            this.show = false
            clearInterval(this.ST1)
          }, 300)
        } else {
          if (this.height === 0) clearInterval(this.ST1)
          this.show = true
          setTimeout(() => {
            const { clientHeight } = this.$refs['box']
            this.height = clientHeight + 'px'
          })
        }
        this.ST2 = setInterval(() => {
          this.height = null
          clearInterval(this.ST2)
        }, 300)
      })
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
