<template>
  <div class="goods-list-item" @click="goodsItemClick(goodsInfo.iid || goodsInfo.item_id)">
    <!-- <img :src="showImg" @load="imageLoad"> -->
    <img v-lazy="showImg" @load="imageLoad">
    <div class="content">
      <p>{{goodsInfo.title}}</p>
      <span class="price">￥{{goodsInfo.price}}</span>
      <span class="collect">{{goodsInfo.cfav}}</span>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'GoodsListItem',
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImg() {
      return this.goodsInfo.image || this.goodsInfo.show.img
    }
  },
  data() {
    return {}
  },
  components: {},
  methods: {
    // 监听图片加载完成事件
    imageLoad() {
      // 事件总线
      this.$bus.$emit('imageLoad')
    },
    goodsItemClick(id) {
      this.$router.push('/detail/' + id)
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  width: 46.4%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin-bottom: 15px;
}
.goods-list-item img {
  width: 100%;
  border-radius: 3px;
}
.content {
  padding: 0 3%;
  position: relative;
}
.goods-list-item p {
  color: #333;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 24px;
  overflow: hidden;
}
.price {
  float: left;
  color: var(--color-high-text);
}
.collect {
  float: right;
  margin-right: 10px;
}
.collect::before {
  content: '';
  position: absolute;
  right: 0px;
  top: 22px;
  width: 14px;
  height: 14px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>