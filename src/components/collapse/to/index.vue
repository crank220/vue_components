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
    // (!transition) --- !height:auto PS: (height: auto) = (!transition)
    // 等待同步任务
    //    clear height:auto
    //    ((展开 | 展开ing) & 收起未完成) --- 开始收起
    //    ((收起 | 收起ing) | 收起已完成) --- [(收起已完成) --- 关闭上次未执行完的transition] & 开始展开
    //    height: auto
    change() {
      if (this.height === null) {
        this.height = this.show ? this.$refs['box'].clientHeight + 'px' : 0
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
            this.height = this.$refs['box'].clientHeight + 'px'
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
  transition: height .2s ease-in-out;
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
