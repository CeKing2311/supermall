<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :banners="banners"></detail-swiper>
    <detail-base-info :goodsInfo="goodsInfo"></detail-base-info>
  </div>
</template>
<script scoped>
import DetailNavBar from "./components/DetailNavBar";
import DetailSwiper from "./components/DetailSwiper";
import DetailBaseInfo from './components/DetailBaseInfo'
import { getGoodsDetail, GoodsInfo } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      id: null,
      goodsInfo: null,
      banners: [],
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  created() {
    this.id = this.$route.params.id;
    this._getGoodsDetail();
  },
  methods: {
    async _getGoodsDetail() {
      const result = await getGoodsDetail(this.id);
      const data = result.result;
      this.banners = data.itemInfo.topImages;
      this.goodsInfo = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      console.log(result);
    },
  },
};
</script>

<style scoped>
</style>
