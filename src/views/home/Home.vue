<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">优益小C</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommend"></home-recommend>
  </div>
</template>

<script scoped>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './components/HomeSwiper'
import HomeRecommend from './components/HomeRecommend'

import { getHomeMultidata } from 'network/home'

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommend: [],
      dKeyword: [],
      keywords: []
    }
  },
  async created() {
    const result = await getHomeMultidata()
    console.log(result)
    this.banners = result.data.banner.list
    this.recommend = result.data.recommend.list
    this.dKeyword = result.data.dKeyword.list
    this.keywords = result.data.keywords.list

    // getHomeMultidata().then(res => {
    //   console.log(res)
    //   this.homeData= res.data;
    // })
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>