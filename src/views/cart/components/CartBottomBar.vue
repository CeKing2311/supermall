<template>
  <div class="bottom-bar">
    <div class="check-info" @click="checkAll">
      <check-button class="check-all" :is-checked="chkAll"></check-button>
      <span>全选</span>
    </div>
    <div class="check-price">
      合计：{{totalPrice}}
    </div>
    <div class="settlement" @click="settlement">
      <span>去结算({{checkNum}})</span>
    </div>
  </div>
</template>

<script scoped>
import CheckButton from 'components/content/checkButton/CheckButton'
import { mapGetters } from 'vuex'
export default {
  name: 'CartBottomBar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return (
        '￥' +
        this.cartList
          .filter(item => {
            return item.checked
          })
          .reduce((pre, item) => {
            return pre + item.price * item.count
          }, 0)
          .toFixed(2)
      )
    },
    checkNum() {
      return this.cartList.filter(item => {
        return item.checked
      }).length
    },
    chkAll() {
      if (this.cartList.length === 0) {
        return false
      }
      return !this.cartList.find(item => !item.checked)
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkAll() {
      if (this.chkAll) {
        // 全部不全中
        this.$store.dispatch('checkAll', false)
      } else {
        this.$store.dispatch('checkAll', true)
      }
    },
    settlement() {
      if (this.checkNum === 0) {
        this.$toast.show('请选择商品', 2000)
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  position: relative;
  display: flex;
  align-items: center;
}
.check-info {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
}
.bottom-bar span {
  color: #fff;
  padding: 0 5px;
}
.check-all {
  width: 22px;
  height: 22px;
}
.check-price {
  margin-left: 15px;
}
.settlement {
  background-color: red;
  line-height: 40px;
  width: 90px;
  text-align: center;
  position: absolute;
  right: 0;
}
</style>