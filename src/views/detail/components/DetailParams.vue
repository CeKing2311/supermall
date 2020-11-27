<template>
  <div class="detail-params" v-if="Object.keys(goodsParams).length !== 0">
    <div class="params-rule">
      <table class="table-rule" v-for="(tab,idx0) in goodsParams.rule.tables" :key="'tab'+idx0">
        <tr v-for="(item,index) in tab" :key="'rule'+index">
          <td v-for="(it,idx) in item" :key="'td'+idx">{{it}}</td>
        </tr>
      </table>
    </div>
    <div class="params-info">
      <table class="table-info">
        <tr v-for="(item,index) in goodsParams.info.set" :key="'info'+index">
          <td class="info-key">
            <span>{{item.key}}</span>
          </td>
          <td class="info-text" :style="{ flex: cellNum }">
            <span>{{item.value}}</span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'DetailParams',
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {
          cellNum:1,
        }
      }
    }
  },
  data() {
    return {}
  },
  watch: {
    goodsParams(){
      this.cellNum= this.goodsParams.rule.tables[0][0].length-1;
    }
  },
  components: {}
}
</script>

<style scoped>
.detail-params {
  padding: 10px;
  border-bottom: 5px solid #e5e5e5;
}
.table-rule,.table-info {
  width: 100%;
  border-collapse: separate;
  font-size: 13px;
}
.table-rule tr,.table-info tr{
  display: flex;
  line-height: 36px;
  border-bottom: 1px solid #e5e5e5;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.table-rule tr td{
  flex: 1;
}
.info-key{
  flex: 1;
}
.info-text{
  color: var(--color-high-text);
  text-align: left;
  /* padding-left: 10px; */
  position: relative;
  left: 30px;
}
</style>