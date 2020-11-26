<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !==0">
    <div class="detail-info-desc">
      <div class="desc-start"></div>
      <div class="desc-content">
        {{detailInfo.desc}}
      </div>
      <div class="desc-end"></div>
    </div>
    <div class="detail-info-images">
      <div class="images-title">{{detailInfo.detailImage[0].key}}</div>
      <ul class="images-list">
        <li v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
          <img :src="item" @load="imageLoad">
        </li>
      </ul>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imageLength: 0
    }
  },
  components: {},
  watch: {
    detailInfo() {
      this.imageLength = this.detailInfo.detailImage[0].list.length
    }
  },
  methods: {
    imageLoad() {
      this.counter++
      if (this.counter === this.imageLength) {
        this.$emit('imageLoad')
      }
    }
  }
}
</script>

<style scoped>
.detail-info {
  border-bottom: 5px solid #e5e5e5;
}
.detail-info-desc {
  padding: 15px;
}
.desc-start{
  width: 30%;
  height: 1px;
  background-color: #666;
  position: relative;
}
.desc-start::before{
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  bottom: 0;
  background: #333;  
}
.desc-content{
  padding: 15px 5px;
  font-size: 14px;
  color: #333;
}
.desc-end{
  width: 30%;
  height: 1px;
  background-color: #666;
  position: relative;
  float: right;
}
.desc-end::after{  
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  right: 0;
  bottom: 0;
  background: #333;  
}
.images-title {
  padding: 15px;
  font-size: 16px;
  color: #333;
}
.images-list {
  list-style: none;
}
.images-list img {
  width: 100%;
}
</style>