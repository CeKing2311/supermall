<template>
  <div>  </div>
</template>

<script scoped>
import GoodsList from 'components/content/goods/GoodsList'
export default {
  name: 'DetailRecommend',
  props:{
    recommendList:{
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
    GoodsList
  }
}
</script>

<style scoped>
</style>