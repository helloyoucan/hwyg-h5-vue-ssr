<template>
  <div class="tradeNews">
    <ul class="tradeNewsList" :style="ulStyles">
      <li
        v-for="(item,index) in listData"
        :key="index"
        class="gb-long-text-ellipsis"
      >
        <span>{{ item.productName }}</span>{{ item.amount }}{{ item.unit }}&nbsp;&nbsp;单价<span>{{ item.unitPrice|fen2yuan }}元/{{ item.unit }}</span>&nbsp;&nbsp;总计<span>{{ item.price|fen2yuan }}元</span>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'TradeNews',
  props: {
    listData: {
      type: Array,
      default () { return [] }
    }
  },
  data () {
    return {
      timeId: undefined,
      ulStyles: {}
    }
  },
  watch: {
    listData: {
      handler () {
        this.startTransform()
      },
      immediate: true

    }
  },
  beforeDestroy () {
    this.timeId && clearInterval(this.timeId)
  },
  methods: {
    startTransform () {
      this.timeId && clearInterval(this.timeId)
      if (this.listData.length > 1) {
        this.timeId = setInterval(() => {
          this.ulStyles = { transform: 'translate3d(0,-100%,0)', transition: 'transform 1s' }
          this.$nextTick(() => {
            setTimeout(() => {
              this.ulStyles = { transform: 'translate3d(0,0,0)', transition: 'none' }
              this.listData.push(this.listData.shift())
            }, 1000)
          })
        }, 5000)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tradeNews{
  background: url(~assets/imgs/home_bg_jycg@3x.png) no-repeat;
  background-size: px2vw(78px) px2vw(78px);
  background-position: px2vw(30px) px2vw(20px);
  padding: px2vw(20px) px2vw(10px) px2vw(20px) px2vw(158px);
  height: px2vw(80px);
  overflow: hidden;
  background-color: #fff;
}
.tradeNewsList{
  height: 100%;
  font-size: 0;
  padding: 0;
  li{
    font-size: px2vw(26px);
    line-height: px2vw(80px);
    list-style: none;
  }
  span{
    font-size: px2vw(30px);
    color: #cb191d;
  }
}
</style>
