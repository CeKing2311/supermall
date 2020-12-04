<template>
  <div class="category-detail">
    <div class="category-list">
      <category-content-item class="content-item" v-for="(item,index) in categoryData" :key="index" :category-info="item"></category-content-item>
    </div>
  </div>
</template>

<script scoped>
import CategoryContentItem from './CategoryContentItem'
export default {
  name: 'CategoryContent',
  props: {
    categoryData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      titles: ['流行', '新款', '精选']
    }
  },
  components: {
    CategoryContentItem,
  },
  methods: {}
}
</script>

<style scoped>
.category-detail {
  height: 100%;
  overflow: hidden;
}
.category-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 15px 0;
}
.content-item {
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-item img {
  width: 90px;
  padding: 15px;
}
.content-item .title {
  font-size: 13px;
  text-align: center;
}
</style>