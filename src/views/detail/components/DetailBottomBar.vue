<template>
  <div class="bottom-bar">
    <div class="bar-item left">
      <div>
        <i class="icon service"></i>
        <div class="text">客服</div>
      </div>
      <div>
        <i class="icon shop"></i>
        <div class="text">店铺</div>
      </div>
      <div>
        <i class="icon collect"></i>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="bar-item right">
      <div class="item cart" @click="addCart">加入购物车</div>
      <div class="item buy">购买</div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'DetailBottomBar',
  data() {
    return {}
  },
  components: {},
  methods: {
    addCart(){
      this.$emit('addCart')
    }
  },
}
</script>

<style scoped>
.bottom-bar {
  position: relative;
  bottom: 0;
  height: 49px;
  display: flex;
  background: #fff;
}
.bar-item {
  display: flex;
  flex: 1;
}
.bar-item > div {
  flex: 1;
}
.text {
  margin: 0 16px;
  font-size: 14px;
}

.bar-item .icon {
  flex: 1;
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}
.left .service {
  background-position: 0 -54px;
}
.left .shop {
  background-position: 0 54px;
}

.right .item {
  flex: 1;
  line-height: 49px;
  text-align: center;
}
.cart {
  background-color: #ffdd10;
}
.buy {
  background-color: #ff779b;
  color: #fff;
}
</style>