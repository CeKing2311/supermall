<template>
  <div>商品详情页</div>
</template>
<script scoped>
export default {
  name: 'Detail',
  data() {
    return {
      id: null
    }
  },
  components: {},
  created() {    
    this.id = this.$route.params.id
    console.log(this.id);
  }
}
</script>

<style scoped>
</style>