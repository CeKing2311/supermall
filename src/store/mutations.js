import {
  ADD_COUNTER,
  ADD_TO_CART,
  CHECK_ALL
} from './mutation-types'
export default {
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
  },
  [CHECK_ALL](state, payload) {
    state.cartList.forEach(item => item.checked = payload)
  }
}
