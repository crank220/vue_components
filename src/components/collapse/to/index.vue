<template>
  <div class="collapse-mod">
    <div @click="change" class="title">title</div>
    <div class='content' :style="{'height': height}" v-show="loading || show">
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
      loading: false,
    }
  },
  watch: {
    show(n) {
      if (this.height !== null) return
      this.loading = true
      this.height = n ? 0 : this.$refs['box'].clientHeight + 'px'
      setTimeout(() => {
        this.height = n ? this.$refs['box'].clientHeight + 'px' : 0
        setTimeout(() => {
          this.height = null
          this.loading = false
        }, 200)
      })
    }
  },
  methods: {
    change() {
      if (this.loading) return
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
.collapse-mod .title{
  background: aqua;
  margin: 0;
  padding: 10px 15px;
}
.collapse-mod .content{
  background: rebeccapurple;
  transition: all .2s ease-in-out;
  will-change: height;
  overflow: hidden;
  padding-top: 0px;
  padding-bottom: 0px;
}
.collapse-mod .content .box{
  padding: 15px;  
}
</style>
