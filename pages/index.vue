<template>
  <div class="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in listData" :key="index">
        <img :src="item.imgUrl">
      </mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
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
    console.log('here')
    return getBrannerList()
      .then((res) => {
        console.log('res:', res)
        return { listData: res._schema.list }
      })
      .catch((e) => {
        console.log('e:', e)
        error({ statusCode: 404, message: 'Post not found' })
      })
  }
}
</script>
<style lang="scss" scoped>

</style>
