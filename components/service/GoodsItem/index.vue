<template>
  <div class="goodsCard">
    <img class="goodsImg" :src="goods.defaultImage" :alt="goods.productName">
    <div class="goodsInfo">
      <h4 class="gb-long-text-ellipsis name">
        {{ goods.productName }}&nbsp;{{ goods.totalAmount }}{{ goods.unit }}
      </h4>
      <p class="infoItem">
        规格：{{ goods.specification }}
      </p>
      <p class="infoItem">
        发布时间：{{ addedTime }}
      </p>
      <p v-if="goods.quoteType === 1" class="price">
        {{ goods.unitPrice }}
        <span class="unit">元/{{ goods.unit }}</span>
      </p>
      <p v-else class="price">
        可议价
      </p>
    </div>
  </div>
</template>
<script>
import { formatTime } from '@/utils/time.js'
export default {
  name: 'GoodsItem',
  props: {
    goods: {
      type: Object,
      default: null
    }
  },
  computed: {
    addedTime () {
      return formatTime(this.goods.addedTime, '{y}-{m}-{d} {h}:{i}')
    }
  }
}
</script>
<style lang="scss" scoped>
.goodsCard {
  display: flex;
  padding: px2vw(20px) px2vw(30px);
  position: relative;
  background-color: #fff;
  line-height: 1;
}
.goodsImg {
  width: px2vw(230px);
  height: px2vw(230px);
  background-color: #eee;
  border-radius: px2vw(10px);
  flex-shrink: 0;
}
.goodsInfo {
  flex-grow: 1;
  padding-left: px2vw(26px);
  overflow: hidden;
}
.name {
  padding: px2vw(20px) 0 0;
  font-size: px2vw(36px);
  font-weight: bolder;
  color: #333;
  margin: 0;
}
.infoItem {
  font-size: px2vw(26px);
  color: #999;
  margin: px2vw(20px) 0 0;
}
.price {
  font-size: px2vw(38px);
  line-height: px2vw(26px);
  vertical-align: baseline;
  color: #ee3f3f;
  font-weight: bolder;
  margin: px2vw(34px) 0 0;
}
.unit {
  font-size: px2vw(26px);
  font-weight: normal;
  margin-left: px2vw(5px);
}
.location {
  position: absolute;
  bottom: px2vw(30px);
  right: px2vw(30px);
  font-size: px2vw(26px);
  color: #999;
}
.icon {
  font-size: px2vw(26px);
  margin-right: px2vw(8px);
}
</style>
