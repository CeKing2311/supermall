<template>
  <div class="cart-item">
    <div class="item-select">
      <input type="checkbox" v-model="product.checked">
    </div>
    <div class="item-img">
      <img :src="product.image">
    </div>
    <div class="item-info">
        <div class="title">{{product.title}}</div>
        <div class="desc">{{product.desc}}</div>
        <div class="price-info">
          <div class="price">{{product.price}}</div>
          <div class="count">x{{product.count}}</div>
        </div>
    </div>
  </div>
</template>

<script scoped>
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
  components: {}
}
</script>

<style scoped>
.cart-item{
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  padding: 5px;
}
.item-select{
  padding: 30px 5px;
  display: flex;
  align-items: center;
}
.item-img img{
  width: 100px;
  border-radius: 5px;
  /* height: 120px; */
}
.item-info{
  display: flex;
  flex-direction: column;  
  padding:5px 15px;
  width: 100%;
}
.item-info .title{
  font-size: 18px;
  line-height: 48px;
  width: 220px;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-info .desc{
  font-size: 16px;
  line-height: 38px;
  width: 220px;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-info .price-info{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>