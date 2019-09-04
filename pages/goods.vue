<template>
  <div class="goods">
    <v-header @change="handleChangeGoodsType" />
    <filters />
    <div class="list-content">
      <ul class="list">
        <li v-for="(item,index) in activeList" :key="index">
          <goods-item :goods="item" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import VHeader from '@/components/pages/goods/Header'
import Filters from '@/components/pages/goods/Filters'
import GoodsItem from '@/components/service/GoodsItem'
import { getGoodsList } from '@/service/goods.js'
export default {
  layout: 'tabbar',
  components: { VHeader, Filters, GoodsItem },
  data () {
    return {
      supplyList: [],
      purchaseList: [],
      goodsType: 2
    }
  },
  computed: {
    activeList () {
      return this.goodsType === 2 ? this.supplyList : this.purchaseList
    }
  },
  watch: {
    goodsType () {
      this.getData()
    }
  },
  asyncData ({ error }) {
    return getGoodsList({ type: 2 })
      .then((res) => {
        return {
          supplyList: res._schema.list
        }
      })
      .catch((e) => {
        error({ statusCode: 404, message: '数据加载失败' })
      })
  },
  methods: {
    handleChangeGoodsType (type) {
      this.goodsType = type
    },
    getData (type = this.goodsType) {
      getGoodsList({ type })
        .then((res) => {
          if (type === 1) {
            this.purchaseList = res._schema.list
          } else if (type === 2) {
            this.supplyList = res._schema.list
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.list-content{
  height: calc(100% - #{px2vw(170px)});
  overflow: auto;
}
.list{
  padding: 0;
  margin: 0;
  li{
    list-style: 0;
  }
}
</style>
