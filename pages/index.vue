<template>
  <div class="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in listData" :key="index">
        <v-img :src="item.imgUrl" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import { getBrannerList } from '@/service/branners'
export default {
  layout: 'triplRrow',
  data () {
    return {
      listData: []
    }
  },
  asyncData ({ error }) {
    return getBrannerList()
      .then((res) => {
        return { listData: res._schema.list }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  }
}
</script>
<style lang="scss" scoped>
  .mint-swipe, .v-img {
    display: inline-block;
    height:px2vw(350px);
    width: 100%;
  }
</style>
