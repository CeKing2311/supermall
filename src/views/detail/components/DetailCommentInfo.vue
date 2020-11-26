<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length!==0">
    <div class="comment-title">
      <span>用户评价</span>
      <span class="more">更多></span>
    </div>
    <div class="comment-content">
      <div class="content-user">
        <img :src="commentInfo.user.avatar">
        <div class="user-name">{{commentInfo.user.uname}}</div>
      </div>
      <div class="content-info">
        <div class="info">{{commentInfo.content}}</div>
        <div class="date-info">{{GetDate(commentInfo.created)}} {{commentInfo.style}}</div>
        <div class="images-info">
          <img v-for="(item,index) in commentInfo.images" :src="item" :key="'comimg'+index">
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import { dateformat } from 'common/utils'
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  components: {},
  methods: {
    GetDate(_time) {
      const res = dateformat(_time)
      return res
      console.log(res)
    }
  }
}
</script>

<style scoped>
.comment-info {
  padding: 15px 10px;
  border-bottom: 5px solid #e5e5e5;
}
.comment-title {
  padding: 15px 5px;
  border-bottom: 1px solid #e5e5e5;
}
.comment-title .more {
  float: right;
  font-size: 12px;
  color: #333;
}
.content-user {
  display: flex;
  align-items: center;
  padding: 15px 0;
}
.content-user img {
  width: 48px;
  height: 48px;
  border-radius: 30px;
}
.content-user .user-name {
  font-size: 14px;
  margin-left: 10px;
}
.content-info {
  padding: 5px;
}
.content-info .info {
  font-size: 14px;
  line-height: 20px;
}
.content-info .date-info {
  line-height: 22px;
  font-size: 12px;
  color: #aaa;
}
.images-info{
  overflow-x: scroll;
}
.images-info img{
  width: 88px;
  height: 100px;
  padding-right: 8px;
}
</style>