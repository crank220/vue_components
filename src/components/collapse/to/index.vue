<template>
  <div class="collapse-mod">
    <p @click="fff = !fff">title</p>
    <div :style="{'height': fffh}">ememem<br/>ememem<br/>ememem<br/>ememem<br/>ememem<br/></div>
  </div>
</template>

<script>
export default {
  name: 'collapse',
  data() {
    return {
      fff: false,
      fffh: 0
    }
  },
  watch: {
    fff(v) {
      this.fffh = v ? '40px' : 0
      if (v) {
        setTimeout(() => {
          // this.fffh = ''
        }, 300)
      }
    }
  }
}
</script>

<style scoped>
.collapse-mod div{
  transition: height .3s;
  overflow: hidden;
  background: red;
}
</style>
