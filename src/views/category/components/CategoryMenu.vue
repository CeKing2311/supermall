<template>
  <scroll ref="menuScroll" id="tab-menu" >
    <ul class="menu-list">
      <li class="menu-item" v-for="(item,index) in menuList" :key="index" :class="{ active:index===currentIndex}" @click="menuClick(index,item)">{{item.title}}</li>
    </ul>
  </scroll>

</template>
<script scoped>
import Scroll from 'components/common/scroll/Scroll'
export default {
  name: 'CategoryMenu',
  props: {
    menuList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  components: {
    Scroll
  },
  mounted() {},
  updated() {
    this.$refs.menuScroll.refresh()
  },
  methods: {
    menuClick(index,item) {
      this.currentIndex = index
      this.$emit("menuClick",item)
    }
  }
}
</script>

<style scoped>
#tab-menu {
  width: 100px;
  height: 100%;
  background-color: #f6f6f6;
  overflow: hidden;
}
.active {
  border-left: 5px solid var(--color-tint);
  background-color: #fff;
  color: var(--color-high-text);
}
.menu-item {
  line-height: 48px;
  height: 48px;
  text-align: center;
}
</style>