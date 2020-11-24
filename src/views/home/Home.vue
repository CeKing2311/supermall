<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">优益小C</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommend"></home-recommend>
    <feature-view></feature-view>
    <tab-control :titles="titles" class="tab-control" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>

    <ul>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
      <li>列表*10</li>
    </ul>
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
// 导入方法
import { getHomeMultidata, getHomeGoodsList } from 'network/home'

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
      currentType: 'pop'
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.GetHomeMultidata()
    this.GetHomeGoodsList('pop')
    this.GetHomeGoodsList('new')
    this.GetHomeGoodsList('sell')
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList
  },
  methods: {
    // 获取首页数据
    async GetHomeMultidata() {
      const result = await getHomeMultidata()
      this.banners = result.data.banner.list
      this.recommend = result.data.recommend.list
      this.dKeyword = result.data.dKeyword.list
      this.keywords = result.data.keywords.list
    },
    // 获取商品数据
    async GetHomeGoodsList(type) {
      const page = this.goods[type].page + 1
      const result = await getHomeGoodsList(type, page)
      this.goods[type].page = result.data.page
      this.goods[type].list.push(...result.data.list)
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
      console.log(this.currentType)
      this.GetHomeGoodsList(this.currentType)
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>