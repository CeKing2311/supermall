<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" ref="detailnav" @toCurrent="toCurrent"></detail-nav-bar>
    <scroll :probe-type="3" ref="scroll" class="content" @scroll="detailScroll">
      <detail-swiper :banners="banners"></detail-swiper>
      <detail-base-info :goods-info="goodsInfo"></detail-base-info>
      <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="detailImageLoad"></detail-goods-info>
      <detail-params :goods-params="goodsParams" ref="params"></detail-params>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="goodsRecommend" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <back-top @click.native="backTop" class="backTop" v-show="isShowBackTop"></back-top>
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
import DetailBottomBar from './components/DetailBottomBar'

import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import { debounce } from 'common/utils'
import { imgListenerMixin, backTopMixin } from 'common/mixin'

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
      themeTopY: [],
      currentIndex: 0
    }
  },
  mixins: [imgListenerMixin, backTopMixin],
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
    DetailBottomBar
  },
  created() {
    this.id = this.$route.params.id
    this._getGoodsDetail()
    this._getRecommend()
  },
  destroyed() {
    this.$bus.$off('imageLoad', this.ImgListener)
  },
  mounted() {
    // let refresh = debounce(this.$refs.scroll.refresh, 500)
    // //事件总线 监听图片加载完成
    // this.detailImgListener = () => {
    //   refresh()
    // }
    // this.$bus.$on('imageLoad', this.detailImgListener)
  },
  updated() {},
  methods: {
    // 添加到购物车
    addCart() {
      // 1.获取购物车需要展示的信息
      const product = {}
      product.image = this.banners[0]
      product.title = this.goodsInfo.title
      product.desc = this.goodsInfo.desc
      product.price = this.goodsInfo.realPrice
      product.iid = this.id
      product.checked= false
      product.count = 1
      // 2.将商品添加到购物车
      // this.$store.commit('addCart', product)
      this.$store.dispatch('addCart',product)
    },
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

      this.themeTopY = []
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.params.$el.offsetTop)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopY.push(Number.MAX_VALUE)
    },
    // 页面滚动时也头部tab响应
    detailScroll(position) {
      this.isShowBackTop = -position.y > 600
      // this.$refs.detailnav.currentIndex = 0
      // if (-position.y > this.$refs.params.$el.offsetTop) {
      //   this.$refs.detailnav.currentIndex = 1
      // }
      // if (-position.y > this.$refs.comment.$el.offsetTop) {
      //   this.$refs.detailnav.currentIndex = 2
      // }
      // if (-position.y > this.$refs.recommend.$el.offsetTop) {
      //   this.$refs.detailnav.currentIndex = 3
      // }
      let length = this.themeTopY.length
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          (-position.y >= this.themeTopY[i] &&
            -position.y < this.themeTopY[i + 1])
        ) {
          this.currentIndex = i
          this.$refs.detailnav.currentIndex = this.currentIndex
        }
      }
    },
    // 监听头部tab点击事件
    toCurrent(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 500)
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
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>
