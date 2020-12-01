<template>
  <div class="cart-item">
    <div class="item-select">
      <check-button :is-checked="product.checked" @click.native="CheckClick"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image">
    </div>
    <div class="item-info">
      <div class="title">{{product.title}}</div>
      <div class="desc">{{product.desc}}</div>
      <div class="price-info">
        <div class="price">￥{{product.price}}</div>
        <div class="count">x{{product.count}}</div>
      </div>
    </div>
    <!-- <div class="item-remove">
      <div class="remove">
        删除
      </div>
    </div> -->
  </div>
</template>

<script scoped>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartItem',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  components: {
    CheckButton
  },
  methods: {
    CheckClick() {
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style scoped>
.cart-item {
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  margin: 10px 0;
  position: relative;
}
.item-select {
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-img img {
  width: 100px;
  border-radius: 5px;
}
.item-info {
  display: flex;
  flex-direction: column;
  flex: 3;
  padding: 5px 15px;
  position: relative;
  overflow: hidden;
}
.item-info > div {
  flex: 1;
}
.item-info .title {
  font-size: 18px;
  line-height: 48px;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-info .desc {
  font-size: 14px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.item-info .price-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}
.item-info .price-info .price {
  color: var(--color-high-text);
}
.item-remove {
  position: absolute;
  right: 0;
  height: 100%;
  width: 60px;
  background-color: red;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
</style>