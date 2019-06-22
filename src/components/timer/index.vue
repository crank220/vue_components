<template>
  <div class="timer-demo">
    <router-link to="/">home</router-link>
    <h2>计时器/定时器</h2>
    
    <h3>基础-记时器</h3>
    <Timer />

    <h3>基础-定时器</h3>
    <Timer :startTime="2" desc/>

    <h3>自定义开始/结束时间-记时器</h3>
    <Timer :startTime="3" :endTime="45" />

    <h3>自定义开始/结束时间-定时器</h3>
    <Timer :startTime="67" :endTime="8" desc/>

    <h3>开始/暂停</h3>
    <Timer :startTime="9" :off="offTimer1"/>
    <button @click="offTimer1 = !offTimer1" size="min">{{offTimer1 ? '开始' : '暂停'}}</button>

    <h3>分秒-格式</h3>
    <Timer ms/>

    <h3>暂停是获取当前时间</h3>
    <Timer :off="offTimer2" @getCurTime="getCurTime"/>
    <button @click="offTimer2 = !offTimer2" size="min">{{offTimer2 ? '开始' : '暂停'}}</button>

    <h3>分秒格式、开始暂停、获取当前时间-计时器</h3>
    <Timer :startTime="110" :endTime="20" :off="offTimer3" @getCurTime="getCurTime" ms desc/>
    <button @click="offTimer3 = !offTimer3" size="min">{{offTimer3 ? '开始' : '暂停'}}</button>

    <h3>new Date-计时器</h3>
    <Timer :startTime="new Date()"/>

    <h3>new Date 获取当前时间-定时器</h3>
    <Timer @getCurTime="getCurTime" :startTime="new Date()" :endTime="new Date(new Date().getTime() - 3000)" desc/>

    <h3>new Date 开始暂停、获取当前时间-计时器</h3>
    <Timer :startTime="new Date()" :endTime="new Date(new Date().getTime() + 14000)" :off="offTimer5" @getCurTime="getCurTime"/>
    <button @click="offTimer5 = !offTimer5" size="min">{{offTimer5 ? '开始' : '暂停'}}</button>
  </div>
</template>
<script>
import Timer from './to'
export default {
  name: 'timer-demo',
  components: {
    Timer
  },
  data () {
    return {
      offTimer1: false,
      offTimer2: false,
      offTimer3: false,
      offTimer5: false
    }
  },
  methods: {
    getCurTime (time) {
      // eslint-disable-next-line no-console
      console.log(time)
    }
  }
}
</script>

<style>
.timer-demo .Timer{
  font-size: 20px;
}
.timer-demo h3{
  margin-top: 10px;
}
</style>

