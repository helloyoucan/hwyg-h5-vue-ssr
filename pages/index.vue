<template>
  <div class="home">
    <div class="swipe-container">
      <mt-swipe v-if="swipeRender" :auto="5000" :default-index="0">
        <mt-swipe-item v-for="(item,index) in brannerList" :key="index">
          <v-img :src="item.imgUrl" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <trade-news :list-data="tradeNewsList" />
    <div class="goods">
      <h2 class="title">
        为你推荐
      </h2>
      <h3 class="listTitle">
        <span class="moduleTitle">最新货源</span>
        <span class="readMore">查看更多<v-icon class="rightIcon" icon="nav_icon_go" /></span>
      </h3>
      <ul class="list">
        <li v-for="(item,index) in supplyList" :key="index">
          <goods-item :goods="item" />
        </li>
      </ul>
      <h3 class="listTitle purchase">
        <span class="moduleTitle">最新求购</span>
        <span class="readMore">查看更多<v-icon class="rightIcon" icon="nav_icon_go" /></span>
      </h3>
      <ul class="list">
        <li v-for="(item,index) in purchaseList" :key="index">
          <goods-item :goods="item" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Promise } from 'q'
import { getBrannerList } from '@/service/branners'
import TradeNews from '@/components/pages/index/TradeNews'
import { getTradeNewsList } from '@/service/order.js'
import { getGoodsList } from '@/service/goods.js'
import GoodsItem from '@/components/service/GoodsItem'
export default {
  layout: 'triplRrow',
  components: { TradeNews, GoodsItem },
  data () {
    return {
      brannerList: [],
      tradeNewsList: [],
      supplyList: [],
      purchaseList: [],
      swipeRender: false // 避免在服务端渲染时导致首张图片定位不对,挂载到页面上再渲染
    }
  },
  asyncData ({ error }) {
    return Promise.all([
      getBrannerList(),
      getTradeNewsList(),
      getGoodsList({ type: 2 }),
      getGoodsList({ type: 1 })
    ])
      .then(([
        brannerRes,
        tradeNewRes,
        supplyRes,
        purchaseRes
      ]) => {
        return {
          brannerList: brannerRes._schema.list,
          tradeNewsList: tradeNewRes._schema.list,
          supplyList: supplyRes._schema.list,
          purchaseList: purchaseRes._schema.list
        }
      })
      .catch((e) => {
        error({ statusCode: 404, message: '数据加载失败' })
      })
  },
  mounted () {
    this.swipeRender = true
  }
}
</script>
<style lang="scss" scoped>
  .swipe-container, .v-img {
    display: block;
    height:px2vw(350px);
    width: 100%;
  }

.title {
  position: relative;
  line-height: px2vw(90px);
  font-size: px2vw(30px);
  color: #ee3f3f;
  text-align: center;
  padding-left: px2vw(30px);
  background-color: #fff;
  margin: px2vw(20px) 0 0;
  border-top: px2vw(20px) solid #f2f2f2;
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: url("~assets/imgs/home_bg_decorate_left@3x.png") no-repeat px2vw(70px) center,
    url("~assets/imgs/home_bg_decorate_right@3x.png") no-repeat px2vw(480px) center,
    url("~assets/imgs/home_icon_hot@3x.png") no-repeat px2vw(290px) center;
    background-size: px2vw(200px) px2vw(16px), px2vw(200px) px2vw(16px), px2vw(30px) px2vw(30px);
  }
}
.listTitle {
  padding: px2vw(10px) 0;
  font-weight: normal;
  background-color: #fff;
  margin: 0;
  .moduleTitle {
    display: inline-block;
    height: px2vw(60px);
    line-height: px2vw(60px);
    background: linear-gradient(90deg, #f5863c, #ee3f3f);
    color: #fff;
    font-size: px2vw(26px);
    border-top-right-radius: px2vw(30px);
    border-bottom-right-radius: px2vw(30px);
    padding: 0 px2vw(40px) 0 px2vw(30px);
  }
  .readMore {
    float: right;
    line-height: px2vw(60px);
    padding-right: px2vw(30px);
    color: #999;
    font-size: px2vw(26px);
    &:link,
    &:visited {
      color: #999;
    }
    .rightIcon {
      margin-left: px2vw(10px);
    }
  }
  &.purchase{
    .moduleTitle {
      background: linear-gradient(90deg, #f5863c, #f68f4a);
      padding: 0 px2vw(40px) 0 px2vw(30px);
    }
  }
}
.list{
  padding: 0;
  li{
    list-style: none;
  }
}
</style>
