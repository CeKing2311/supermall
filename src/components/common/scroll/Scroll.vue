<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script scoped>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null,
    }
  },
  components: {},
  mounted() {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
        pullUpLoad: true,
      })
    }, 1000)
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
  },
}
</script>
<style scoped>
</style>
