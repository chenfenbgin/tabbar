import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// require('./assets/css/base.css')  // 但是我们不建议这么做，我们可以放到App.vue中引用，main.js开始渲染的是App.vue
