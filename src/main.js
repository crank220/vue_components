import Vue from 'vue'
import App from './App'
import router from './router/'
import WaterMarker from '@/components/waterMarker/to'

Vue.config.productionTip = false
Vue.use(new WaterMarker())

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
