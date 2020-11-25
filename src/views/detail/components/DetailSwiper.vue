<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in banners" :key="item">
      <img :src="item" />
    </swiper-item>
  </swiper>
</template>

<script scoped>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
