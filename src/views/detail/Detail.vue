<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" ref="detailnav" @toCurrent="toCurrent"></detail-nav-bar>
    <scroll :probeType="3" ref="scroll" class="content" @scroll="detailScroll">
      <detail-swiper :banners="banners"></detail-swiper>
      <detail-base-info :goodsInfo="goodsInfo"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="detailImageLoad"></detail-goods-info>
      <detail-params :goodsParams="goodsParams" ref="params"></detail-params>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="goodsRecommend" ref="recommend"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script scoped>
import DetailNavBar from './components/DetailNavBar'
import DetailSwiper from './components/DetailSwiper'
import DetailBaseInfo from './components/DetailBaseInfo'
import DetailShopInfo from './components/DetailShopInfo'
import DetailGoodsInfo from './components/DetailGoodsInfo'
import DetailParams from './components/DetailParams'
import DetailCommentInfo from './components/DetailCommentInfo'
import GoodsList from 'components/content/detail/GoodsList'

import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
import { debounce } from 'common/utils'

import {
  getGoodsDetail,
  getRecommend,
  GoodsInfo,
  ShopInfo
} from 'network/detail'

export default {
  name: 'Detail',
  data() {
    return {
      id: null,
      goodsInfo: {},
      banners: [],
      shopInfo: {},
      detailInfo: {},
      goodsParams: {},
      commentInfo: {},
      goodsRecommend: [],
      isShowBackTop: false
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParams,
    DetailCommentInfo,
    GoodsList,
    BackTop
  },
  created() {
    this.id = this.$route.params.id
    this._getGoodsDetail()
    this._getRecommend()
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    //事件总线 监听图片加载完成
    this.$bus.$on('detailImageLoad', () => {
      refresh()
    })
  },
  methods: {
    async _getGoodsDetail() {
      const result = await getGoodsDetail(this.id)
      const data = result.result
      // banner图
      this.banners = data.itemInfo.topImages
      // 商品信息
      this.goodsInfo = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )
      // 店铺信息
      this.shopInfo = new ShopInfo(data.shopInfo)
      // 商品详情
      this.detailInfo = data.detailInfo
      // 参数信息
      this.goodsParams = data.itemParams
      // 评价信息
      this.commentInfo = data.rate.list && data.rate.list[0]
    },
    async _getRecommend() {
      const result = await getRecommend()
      this.goodsRecommend = result.data.list
    },
    detailImageLoad() {
      this.$refs.scroll.refresh()
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    detailScroll(position) {
      this.isShowBackTop = -position.y > 600
      this.$refs.detailnav.currentIndex = 0
      if (-position.y > this.$refs.params.$el.offsetTop) {
        this.$refs.detailnav.currentIndex = 1
      }
      if (-position.y > this.$refs.comment.$el.offsetTop) {
        this.$refs.detailnav.currentIndex = 2
      }
      if (-position.y > this.$refs.recommend.$el.offsetTop) {
        this.$refs.detailnav.currentIndex = 3
      }
    },
    toCurrent(index) {
      switch (index) {
        case 0:
           this.$refs.scroll.scrollTo(0, 0, 500)
          break;
        case 1:
           this.$refs.scroll.scrollTo(0, -this.$refs.params.$el.offsetTop-1, 500)
           break;
        case 2:
           this.$refs.scroll.scrollTo(0, -this.$refs.comment.$el.offsetTop-1, 500)
           break;
        case 3:
           this.$refs.scroll.scrollTo(0, -this.$refs.recommend.$el.offsetTop-1, 500)
           break;
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background: #fff;
}
.content {
  height: calc(100% - 44px);
  /* overflow: hidden; */
}
</style>
