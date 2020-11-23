<template>
  <div>
     <swiper :interval="5000">
      <swiper-item v-for="item in banners" :key="item.link">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script scoped>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
  props:{
    banners:{
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
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
</style>