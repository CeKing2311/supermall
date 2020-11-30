import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  // mutations 每个方法尽可能完成单一的事情
  mutations,
  actions,
  getters,
  modules: {}
})
