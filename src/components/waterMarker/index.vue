<template>
  <div class="water-marker-demo" v-water-marker>
    <router-link to="/">home</router-link>
    <h1>水印</h1>
    <button @click="change">change</button>
  </div>
</template>
<script>
export default {
  methods: {
    change () {
      this.$VenusWM.update({
        font: '24px microsoft yahei',
        fillStyle: 'rgba(184, 184, 184, 0.4)',
        content: 'crank@qq.com\n未经授权，请勿外传！\n' + new Date(),
      })
    }
  }
}
</script>

<style>
.water-marker-demo{
  height: 512px;
  background: green;
}
</style>
