<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="center">我的档案</div>
    </nav-bar>
    <profile-base-info></profile-base-info>
    <profile-bar></profile-bar>
    <div class="user-item">
      <profile-tool-item v-for="(item,index) in userList" :key="index" :tool-info="item"></profile-tool-item>
    </div>
    <div class="app-item">
      <profile-tool-item v-for="(item,index) in appList" :key="index" :tool-info="item"></profile-tool-item>
    </div>
  </div>
</template>

<script scoped>
import NavBar from 'components/common/navbar/NavBar'

import ProfileBaseInfo from './components/ProfileBaseInfo'
import ProfileBar from './components/ProfileBar'
import ProfileToolItem from './components/ProfileToolItem'

export default {
  name: 'Profile',
  data() {
    return {
      userList: [
        { title: '我的消息', icon: require('assets/img/profile/message.svg') },
        { title: '积分商城', icon: require('assets/img/profile/pointer.svg') },
        { title: '会员卡', icon: require('assets/img/profile/vip.svg') }
      ],
      appList: [
        { title: '我的购物车', icon: require('assets/img/profile/cart.svg') },
        { title: '下载购物APP', icon: require('assets/img/profile/shopping.svg') }
      ]
    }
  },
  components: {
    NavBar,
    ProfileBaseInfo,
    ProfileBar,
    ProfileToolItem
  }
}
</script>

<style scoped>
.profile {
  height: 100vh;
}
.profile-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
  box-shadow: none;
}
.user-item{
  border-bottom: 15px solid #e5e5e5;
}
</style>