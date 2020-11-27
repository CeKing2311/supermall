<template>
  <div class="detail-base-info" v-if="Object.keys(goodsInfo).length !==0">
      <div class="goods-title">{{goodsInfo.title}}</div>
      <div class="goods-price">
          <div class="price">{{goodsInfo.newPrice}}</div>
          <div class="old-price">{{goodsInfo.oldPrice}}</div>
          <div class="discount" :style="{ backgroundColor: goodsInfo.discountBgColor }">{{goodsInfo.discount}}</div>
      </div>
      <div class="goods-columns">
         <div class="goods-columns-item txt-left">{{goodsInfo.columns[0]}}</div>
         <div class="goods-columns-item txt-center">{{goodsInfo.columns[1]}}</div>
         <div class="goods-columns-item txt-right">{{goodsInfo.services[goodsInfo.services.length-1].name}}</div>
      </div>
      <div class="goods-service">
        <div v-for="index in goodsInfo.services.length-1" :key="index" class="goods-service-item">
            <img :src="goodsInfo.services[index-1].icon">
            <span>{{goodsInfo.services[index-1].name}}</span>
        </div>
      </div>
  </div>
</template>

<script scoped>
export default {
  name: "DetailBaseInfo",
  props:{
    goodsInfo:{
      type : Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {};
  },
  components: {},
  filters:{
    sellCounter(value){
      let _val= value.split(' ')[1]
      let result= _val      
      if (_val>10000) {
        result= (result/10000).toFixed(1)+'万'
      }
      return  result;
    }
  }
};
</script>
<style scoped>
.detail-base-info{
  padding: 10px;
  border-bottom: 5px solid #e5e5e5;
}
.goods-title{
  font-size: 18px;
  color: #333;
}
.goods-price{
  display: flex;
  margin: 10px 0;
  align-items: center;
}
.goods-price .price{
  font-size: 26px;
  color: var(--color-high-text);
}
.goods-price .old-price{
  font-size: 14px;
  color: #ccc;
  padding: 0 5px;
  margin-top: 5px;
  text-decoration:line-through;
}
.goods-price .discount{
  font-size: 12px;
  color: white;
  padding: 3px 6px;
  border-radius: 15px;
}
.goods-columns{
  display: flex;
  font-size: 14px;
  line-height: 40px;
}
.goods-columns-item{
  flex: 1;
}
.txt-left{
  text-align: left;
}
.txt-center{
  text-align: center;
}
.txt-right{
  text-align: right;
}
.goods-service{
  display: flex;
  justify-content:space-between;
  font-size: 12px;
  line-height: 50px;
}
.goods-service-item{
}
.goods-service img{
  width: 12px;
  height: 12px;
}
</style>
