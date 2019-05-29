<template>
  <div class="v5-timer">
    {{result}}
  </div>
</template>
<script>
export default {
  name: 'v5-timer',
  props: {
    startTime: {
      type: Number | Object,
      default: 0
    },
    endTime: {
      type: Number | Object,
      default: 0
    },
    ms: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Boolean,
      default: false
    },
    off: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      curTime: typeof this.startTime === 'object' ? this.startTime.getHours() * 60 * 60 + this.startTime.getMinutes() * 60 + this.startTime.getSeconds() : this.startTime,
      endSecond: typeof this.startTime === 'object' && typeof this.endTime === 'object' ? this.endTime.getHours() * 60 * 60 + this.endTime.getMinutes() * 60 + this.endTime.getSeconds() : this.endTime
    }
  },
  watch: {
    off (value) {
      if (!value) this.timing()
    }
  },
  computed: {
    result () {
      let hour = Math.floor(this.curTime / (60 * 60))
      let minute = Math.floor(this.curTime / 60) - (hour * 60)
      let second = Math.floor(this.curTime) - (hour * 60 * 60) - (minute * 60)
      if (hour < 10) hour = '0' + hour
      if (minute < 10) minute = '0' + minute
      if (second < 10) second = '0' + second
      let _result = this.ms ? minute + ':' + second : hour + ':' + minute + ':' + second
      return _result
    }
  },
  methods: {
    timing () {
      // 用户关闭定时器/倒计时
      let _timer = setInterval(() => {
        if (this.off) {
          clearInterval(_timer)
          typeof this.startTime === 'object' ? this.$emit('getCurTime', new Date(new Date(this.startTime).getTime() - (new Date(this.startTime).getTime() % 86400000) + this.curTime * 1000 - 28800000)) : this.$emit('getCurTime', this.curTime)
          return
        }
        this.desc ? this.curTime -- : this.curTime ++
        if ((this.desc && this.curTime < this.endSecond) || (this.curTime > this.endSecond && this.endSecond !== 0 && !this.desc) || this.curTime === this.endSecond) {
          clearInterval(_timer)
          typeof this.startTime === 'object' ? this.$emit('getCurTime', new Date(new Date(this.startTime).getTime() - (new Date(this.startTime).getTime() % 86400000) + this.curTime * 1000 - 28800000)) : this.$emit('getCurTime', this.curTime)
        }
      }, 1000)
    }
  },
  mounted () {
    if (this.ms && Math.floor(this.startTime / (60 * 60)) > 0 && typeof this.startTime === 'number') {
      console.log('error：开始时间大于一小时')
      return
    }
    if (this.ms && Math.floor(this.endTime / (60 * 60)) > 0 && typeof this.startTime === 'number') {
      console.log('error：结束时间大于一小时')
      return
    }
    if (this.desc && this.startTime <= this.endTime) {
      console.log('error：开始时间小于等于结束时间')
      return
    }
    if (!this.off) this.timing()
  }
}
</script>
