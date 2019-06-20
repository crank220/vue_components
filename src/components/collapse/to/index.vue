<template>
  <div class="collapse-mod">
    <p @click="show = !show">title</p>
    <div class='box' :style="{'height': height}" v-show="loading || show">
      <div ref='box'><slot/></div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
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
      if (this.loading) return
      if (this.height !== null) return
      this.loading = true
      this.height = n ? 0 : this.$refs['box'].clientHeight + 'px'
      setTimeout(() => {
        this.height = n ? this.$refs['box'].clientHeight + 'px' : 0
        setTimeout(() => {
          this.height = null
          this.loading = false
        }, 300)
      })
    }
  }
}
</script>

<style scoped>
.collapse-mod .box{
  transition: height .3s;
  overflow: hidden;
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
