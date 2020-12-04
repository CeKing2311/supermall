<template>
  <div class="item-info">
    <a :href="categoryInfo.link">
      <img :src="categoryInfo.image" @load="categoryImgLoad">
      <div class="title">{{categoryInfo.title}}</div>
    </a>
  </div>
</template>

<script scoped>
export default {
  name: 'CategoryContentItem',
  props: {
    categoryInfo: {
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
  methods: {
    categoryImgLoad(){
      this.$bus.$emit('imageLoad')
    }
  },
}
</script>

<style scoped>
.item-info{

}
.item-info img{
  width: 90px;
  padding: 15px;
}
.item-info .title{
  font-size: 13px;
  text-align: center;
}
</style>