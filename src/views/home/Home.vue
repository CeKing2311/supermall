<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">优益小C</div>
    </nav-bar>
    <tab-control :titles="titles" class="tab-control" @tabClick="tabClick" ref="tabControlTop" v-show="isTabFiexd"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="homeScroll" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <home-recommend :recommends="recommend"></home-recommend>
      <feature-view></feature-view>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script scoped>
// 导入子组件
import HomeSwiper from './components/HomeSwiper'
import HomeRecommend from './components/HomeRecommend'
import FeatureView from './components/FeatureView'
// 导入公共组件
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
// 导入方法
import { getHomeMultidata, getHomeGoodsList } from 'network/home'
import { debounce } from 'common/utils'
export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommend: [],
      dKeyword: [],
      keywords: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabControlOffsetTop: 0,
      isTabFiexd: false,
      saveY: 0
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  // 进入页面时滚动到上次离开时的位置
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  // 记录页面离开时的位置
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  created() {
    this._GetHomeMultidata()
    this._GetHomeGoodsList('pop')
    this._GetHomeGoodsList('new')
    this._GetHomeGoodsList('sell')
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    //事件总线 监听图片加载完成
    this.$bus.$on('imageLoad', () => {
      refresh()
    })
  },
  methods: {
    // 获取首页数据
    async _GetHomeMultidata() {
      const result = await getHomeMultidata()
      this.banners = result.data.banner.list
      this.recommend = result.data.recommend.list
      this.dKeyword = result.data.dKeyword.list
      this.keywords = result.data.keywords.list
    },
    // 获取商品数据
    async _GetHomeGoodsList(type) {
      const page = this.goods[type].page + 1
      const result = await getHomeGoodsList(type, page)
      this.goods[type].page = result.data.page
      this.goods[type].list.push(...result.data.list)
      // 完成上拉加载更多
      this.$refs.scroll.finishPullUp()
    },
    // 商品切换点击事件
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
        default:
          this.currentType = 'pop'
          break
      }
      this.$refs.tabControlTop.currentIndex = index
      this.$refs.tabControl.currentIndex = index
      this._GetHomeGoodsList(this.currentType)
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    // 监听滚动
    homeScroll(position) {
      this.isShowBackTop = -position.y > 600
      this.isTabFiexd = -position.y >= this.tabControlOffsetTop
    },
    // 加载更多图片
    loadMore() {
      this._GetHomeGoodsList(this.currentType)
    },
    swiperImgLoad() {
      // tabControl 的offsetTop
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
    }
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: relative;
  z-index: 9;
}
</style>
