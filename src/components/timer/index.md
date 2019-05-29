# Timer 计时器/定时器
[toc]

## 代码示例

> 更多完整示例地址： example/src/views/base/timer/

## PS：开始时间/startTime、结束时间/endTime可传两种格式，格式必须一致。

开始时间/startTime、结束时间/endTime格式为：秒<br/>


HTML
```html
<v5-timer :startTime="110" :endTime="20" :off="offTimer3" @getCurTime="getCurTime" ms desc/>
<v5-button @click="offTimer3 = !offTimer3" size="min">{{offTimer3 ? '开始' : '暂停'}}</v5-button>
```

JS
```js
data () {
    return {
      offTimer3: false,
    }
},
```

```js
methods: {
  getCurTime (time) {
    console.log(time)
  }
}
```

开始时间/startTime、结束时间/endTime格式为：new Date<br/>


HTML
```html
<v5-timer :startTime="new Date()" :endTime="new Date(new Date().getTime() + 14000)" :off="offTimer5" @getCurTime="getCurTime"/>
<v5-button @click="offTimer5 = !offTimer5" size="min">{{offTimer5 ? '开始' : '暂停'}}</v5-button>
```

JS
```js
data () {
    return {
      offTimer5: false
    }
},
```

```js
methods: {
  getCurTime (time) {
    console.log(time)
  }
}
```

## props 参数
| 参数 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| startTime | `Number or Object` | 开始时间 | 0 |
| endTime | `Number or Object` | 结束时间 | 0 |
| ms | `Boolean` | 是否使用分秒格式 | false |
| desc | `Boolean` | true ？ ‘计时器’ ： ‘倒计时’ | false |
| off | `Boolean` | 暂停 | false |

## 事件
| 方法 | 说明 | 默认值 |
| --- | --- | --- |
| getCurTime | 返回当前时间 | - |