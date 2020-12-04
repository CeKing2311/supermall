<template>
  <div class="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <category-menu :menu-list="categoryList" @menuClick="menuClick"></category-menu>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl" class="tabControlTop" v-show="isShowTopTabControl"></tab-control>
      <scroll class="category-content" ref="scroll" :probe-type="3" @scroll="scroll">
        <category-content :category-data="currentCategoryData"></category-content>
        <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
      </scroll>
      <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    </div>
  </div>
</template>

<script scoped>
// 导入方法
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import CategoryMenu from './components/CategoryMenu'
import CategoryContent from './components/CategoryContent'

import { imgListenerMixin, backTopMixin } from 'common/mixin'
import {
  getMenuList,
  getSubcategory,
  getCategoryDetail
} from 'network/category'

export default {
  name: 'Category',
  data() {
    return {
      categoryList: [],
      currentCategoryData: [],
      currentCateMaitKey: '',
      currentCateMiniWallKey: '',
      titles: ['综合', '新品', '销量'],
      cates: ['pop', 'new', 'sell'],
      showGoods: [],
      isShowTopTabControl: false,
      isShowBackTop: false
    }
  },
  computed: {},
  created() {
    this._getMenuList()
  },
  mounted() {},
  components: {
    NavBar,
    Scroll,
    CategoryMenu,
    CategoryContent,
    TabControl,
    GoodsList
  },
  mixins: [imgListenerMixin, backTopMixin],
  methods: {
    // 获取左侧分类菜单
    async _getMenuList() {
      const menuInfo = await getMenuList()
      this.categoryList = menuInfo.data.category.list
      this.currentCateMaitKey = this.categoryList[0].maitKey
      this.currentCateMiniWallKey = this.categoryList[0].miniWallkey
      this._getSubCategory()
      this._getCategoryDetail('pop')
    },
    // 获取分类
    async _getSubCategory() {
      const sub = await getSubcategory(this.currentCateMaitKey)
      this.currentCategoryData = sub.data.list
    },
    // 获取分类商品
    async _getCategoryDetail(type) {
      const detail = await getCategoryDetail(this.currentCateMiniWallKey, type)
      this.showGoods = detail
      this.showGoods.forEach(item => {
        item.image = item.img
      })
    },
    // 菜单点击事件
    menuClick(item) {
      this.currentCateMaitKey = item.maitKey
      this.currentCateMiniWallKey = item.miniWallkey
      this._getSubCategory()
      this._getCategoryDetail('pop')
      this.$refs.scroll.scrollTo(0, 0, 100)
    },
    // tab切换点击事件
    tabClick(index) {
      const _type = this.cates[index]
      this._getCategoryDetail(_type)
    },
    // 监听滚动事件
    scroll(position) {
      this.isShowBackTop = -position.y > 600
      if (-position.y >= this.$refs.tabControl.$el.offsetTop) {
        this.isShowTopTabControl = true
      } else {
        this.isShowTopTabControl = false
      }
    }
  }
}
</script>

<style scoped>
.category {
  height: 100vh;
}
.category-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
  overflow: hidden;
}
.category-content {
  position: relative;
  width: calc(100% - 100px);
}
.tab-control {
  position: relative;
  z-index: 9;
}
.tabControlTop {
  position: fixed;
  width: calc(100% - 100px);
  top: 44px;
  right: 0;
}
</style>
