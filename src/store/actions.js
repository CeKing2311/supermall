import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'
export default {
  addCart(context, payload) {
    // 查找该商品是否存在购物车中
    let oldProduct = context.state.cartList.find(item => {
      return item.iid === payload.iid
    });
    if (oldProduct) {
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      // context.state.cartList.push(payload)
      context.commit(ADD_TO_CART, payload)
    }
  }
}
