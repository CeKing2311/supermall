import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast'
import fastClick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'


Vue.config.productionTip = false
// 注册事件总线 解决非父子组件的通信问题
// 子组件1通过 this.$bus.$emit('事件名称',参数) 发射事件
// 子组件2通过 this.$bus.$on('事件名称',回调函数(参数)) 监听事件
Vue.prototype.$bus = new Vue()

// 安装toast 插件
Vue.use(toast);
// 解决移动端300ms的延迟
fastClick.attach(document.body)
// 安装lazyload 插件
Vue.use(vueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
