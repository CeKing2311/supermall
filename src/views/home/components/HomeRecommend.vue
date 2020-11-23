<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'HomeRecommend',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
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
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #e6e6e6;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>