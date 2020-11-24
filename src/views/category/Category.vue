<template>
  <div class="wrapper" ref="wrap">
    <goods-list :goods="showGoods" class="content"></goods-list>
  </div>
</template>

<script scoped>
import BScroll from 'better-scroll'
import GoodsList from 'components/content/goods/GoodsList'
// 导入方法
import { getHomeMultidata, getHomeGoodsList } from 'network/home'

export default {
  name: 'Category',
  data() {
    return {
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: 'pop',
      scroll: null,
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    },
  },
  watch: {
    showGoods(){
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  },
  created() {
    this.GetHomeGoodsList('pop')
    this.GetHomeGoodsList('new')
    this.GetHomeGoodsList('sell')
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrap, {
      probeType: 3,
      click: false,
      pullUpLoad: true,
    })
    // this.scroll.on("scroll", (position) => {
    //   // console.log(position);
    // });
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多')
    })
  },
  components: {
    GoodsList,
  },
  methods: {
    btnClick() {
      console.log('btnclick')
    },
    // 获取商品数据
    async GetHomeGoodsList(type) {
      const page = this.goods[type].page + 1
      const result = await getHomeGoodsList(type, page)
      this.goods[type].page = result.data.page
      this.goods[type].list.push(...result.data.list)
    },
  },
}
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: #eee;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>
