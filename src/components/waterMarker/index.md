# Venus Water Marker

## 用法

### 指令用法 directive

```html
    <div v-water-marker='{rotate: "-10", content: "我是水印内容"}'></div>
```

> **指令中的配置将作为优先级最高的配置项**

### 全局方法

```javascript
    this.$VenusWM.update({ content: '我是通过全局更新的水印内容！' })
```

> **update中新配置不会覆盖指令中的配置，且update方法将影响所有添加过水印指令的元素**

## 属性

属性名 | 类型 | 描述 | 默认值
:- | - | -| -
width | Number | 平铺单元的宽度 | 150
height | Number | 平铺单元的高度 | 150
textAlign | String ('center'/'left'/'right') | 字体方向 | 'center'
textBaseline | String | 字体基准线 | 'middle'
font | String | 字体样式，参考css中font属性 | '16px microsoft yahei'
fillStyle | String | 文字填充颜色 | 'rgba(184, 184, 184, 0.4)'
content | String | 内容，'\n'代表换行，如需多行显示，需用'\n'分隔 | ''
rotate | String | 旋转角度 | '-30'
zIndex | Number | 参考css中zIndex | 1000
visible | Boolean | 是否显示 | true
offsetX | Number | X偏移量 | 0
offsetY | Number | Y偏移量 | 0
