<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-item>
    </scroll>
  </div>
</template>

<script scoped>
import Scroll from 'components/common/scroll/Scroll'
import CartItem from './CartItem'
import { mapGetters } from 'vuex'
export default {
  name: 'CartList',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  components: {
    Scroll,
    CartItem
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>