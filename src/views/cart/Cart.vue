<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list></cart-list>
   
  </div>
</template>

<script scoped>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './components/CartList'

import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  data() {
    return {}
  },
  computed: {
    // ...mapGetters(['cartNum'])
    ...mapGetters({
      length:'cartNum'
    })
    // cartNum() {
    //   // return this.$store.state.cartList.length
    //   return this.$store.getters.cartNum
    // }
  },
  components: {
    NavBar,
    CartList
  },
  methods: {}
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 800;
}
.cart-nav .back img {
  margin-top: 10px;
}
</style>