<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shopInfo.logo">
      <div class="shop-name">{{shopInfo.name}}</div>
    </div>
    <div class="shop-content">
      <div class="content-item info">
        <div class="shop-sells info-item">
          <div>{{shopInfo.sells | sellCounter}}</div>
          <div>总销量</div>
        </div>
        <div class="goods-count info-item">
          <div>{{shopInfo.goodsCount}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shop-desc content-item">
        <div v-for="(item,index) in shopInfo.score" :key="index+item.score" class="desc-item">
          <div class="desc-content">{{item.name}}</div>
          <div class="score" :class="{ active :item.isBetter }">{{item.score}}</div>
          <div class="score better" :class="{ active :item.isBetter }">{{item.isBetter?'高':'低'}}</div>
        </div>
      </div>
    </div>
    <div class="enter-shop">
      <div class="enter-shop-text">进店逛逛</div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  components: {},
  filters:{
    sellCounter(value){
      let result= value      
      if (value>10000) {
        result= (result/10000).toFixed(1)+'万'
      }
      return  result;
    }
  }
}
</script>

<style scoped>
.shop-info {
  padding: 15px 10px;
  border-bottom: 5px solid #e5e5e5;
}
.shop-top {
  display: flex;
  text-align: center;
}
.shop-top img {
  width: 48px;
  height: 48px;
  padding: 5px;
  border: 1px solid #e5e5e5;
  border-radius: 30px;
}
.shop-top .shop-name {
  font-size: 18px;
  line-height: 48px;
  margin-left: 10px;
}
.shop-content {
  display: flex;
  font-size: 12px;
}
.info {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.info-item{
  flex: 1;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
}
.info-item div{
  
}
.content-item {
  flex: 1;
  position: relative;
}
.shop-desc {
  position: relative;
  left: 15%;
}
.info::after {
  content: '';
  position: absolute;
  right: -10%;
  top: 25%;
  width: 2px;
  height: 50%;
  border-right: 1px solid #ccc;
}
.desc-item {
  display: flex;
  margin: 10px 0;
}
.desc-content{
}
.score {
  color: seagreen;
  width: 16px;
  margin: 0 10px;
}

.better{
  background: seagreen;
  color: white;
  text-align: center;
}
.active {
  color: red;
}
.better.active{
  background: red;
  color: #fff;
}
.enter-shop{
  display: flex;
  justify-content:center;
  margin: 15px 0;
}
.enter-shop-text{
  background: #e5e5e5;
  padding: 4px 35px;
  border-radius: 10px;
}
</style>