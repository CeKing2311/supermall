import {
  ADD_COUNTER,
  ADD_TO_CART,
  CHECK_ALL
} from './mutation-types'
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 查找该商品是否存在购物车中
      let oldProduct = context.state.cartList.find(item => {
        return item.iid === payload.iid
      });
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前商品的数量+1')
      } else {
        // context.state.cartList.push(payload)
        context.commit(ADD_TO_CART, payload)
        resolve('添加商品')
      }
    })
  },
  checkAll(context, payload) {
    context.commit(CHECK_ALL, payload)
  }
}
