import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 注册事件总线 解决非父子组件的通信问题
// 子组件1通过 this.$bus.$emit('事件名称',参数) 发射事件
// 子组件2通过 this.$bus.$on('事件名称',回调函数(参数)) 监听事件
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
