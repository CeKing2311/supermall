<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png">
  </div>
</template>

<script scoped>
export default {
  name: 'BackTop',
  data() {
    return {
    }
  },
  components: {},
  methods: {
  },
}
</script>
<style scoped>
.back-top{
  position: fixed;
  right: -30px;
  bottom: 55px;
}
.back-top img{
  width: 50%;
  height: 50%;
}
</style>
