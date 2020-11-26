<template>
  <div class="goods-list">
     <goods-list-item v-for="(item, index) in goods" :key="index+item.tradeItemId" :goodsInfo="item">
     </goods-list-item>
  </div>
</template>

<script scoped>
import GoodsListItem from './GoodsListItem';
export default {
  name: 'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {}
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;
}
</style>