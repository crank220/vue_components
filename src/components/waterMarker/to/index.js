class VenusWaterMarker {
  constructor() {
    this.wrapperArr = {}
    this.WMObj = {
      width: 512,
      height: 256,
      textAlign: 'center',
      textBaseline: 'middle',
      font: '16px microsoft yahei',
      fillStyle: 'rgba(184, 184, 184, 0.4)',
      content: 'icrank@qq.com',
      rotate: -10,
      zIndex: 1000,
      visible: true,
      offsetX: 0,
      offsetY: 10,
    }
  }

  getDataUrl(opt) {
    const { width, height, textAlign, textBaseline, font, fillStyle, content, rotate, offsetX, offsetY } = Object.assign({}, this.WMObj, opt || {})
    const canvas = document.createElement('canvas')
    canvas.setAttribute('width', `${width}px`)
    canvas.setAttribute('height', `${height}px`)
    const ctx = canvas.getContext('2d')
    ctx.textAlign = textAlign
    ctx.textBaseline = textBaseline
    ctx.font = font
    ctx.fillStyle = fillStyle
    ctx.rotate(Math.PI / 180 * rotate)
    const texts = content.split('\n')
    texts.forEach((t, index) => {
      let span
      if (!span) {
        span = document.createElement('span')
        span.textContent = t || 'M'
        span.style.margin = span.style.padding = '0 !important'
        span.style.position = 'absolute !important'
        span.style.left = '-99999px !important'
        span.style.font = font
      }
      document.body.appendChild(span)
      const { height: lineHeight, width: textWidth } = span.getBoundingClientRect()
      document.body.removeChild(span)
      const top = (height - lineHeight * texts.length) / 2
      let left = offsetX
      if (textAlign === 'center') {
        left += parseFloat(width) / 2
      } else if (top.textAlign === 'left') {
        left += (parseFloat(width) - textWidth) / 2
      } else if (top.textAlign === 'right') {
        left += (parseFloat(width) + textWidth) / 2
      }
      ctx.fillText(t, left, offsetY + top + parseFloat(lineHeight) * (index + 1), parseFloat(width))
    })
    const base64Url = canvas.toDataURL()
    return base64Url
  }

  getWrapperStyle(opt) {
    const { zIndex, visible } = Object.assign({}, this.WMObj, opt || {})
    const base64Url = this.getDataUrl(opt)
    return `
      ${visible ? 'opacity: 1;' : 'opacity: 0;'}
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      z-index:${zIndex || 1000};
      pointer-events:none;
      background-repeat:repeat;
      background-image:url('${base64Url}')`
  }

  install(Vue) {
    const _this = this
    Vue.directive('water-marker', {
      inserted: function (el, { value }, vnode) {
        const watermarkDiv = document.createElement('div')
        watermarkDiv.className = 'water-marker-div'
        watermarkDiv.setAttribute('style', _this.getWrapperStyle(value))
        el.style.position = 'relative'
        el.insertBefore(watermarkDiv, el.firstChild)
        _this.wrapperArr[vnode.context._uid] = {
          el, value,
        }
      },
      componentUpdated(el, { value }, vnode) {
        const [watermarkDiv] = el.getElementsByClassName('water-marker-div')
        watermarkDiv.setAttribute('style', _this.getWrapperStyle(value))
        _this.wrapperArr[vnode.context._uid] = {
          el, value,
        }
      },
    })

    Vue.prototype.$VenusWM = {
      update(WMObj) {
        _this.WMObj = Object.assign({}, _this.WMObj, WMObj)

        for (const uid in _this.wrapperArr) {
          if (_this.wrapperArr.hasOwnProperty(uid)) {
            const { el, value } = _this.wrapperArr[uid]
            const [watermarkDiv] = el.getElementsByClassName('water-marker-div')
            watermarkDiv.setAttribute('style', _this.getWrapperStyle(value))
          }
        }
      },
    }
  }
}

export default VenusWaterMarker
