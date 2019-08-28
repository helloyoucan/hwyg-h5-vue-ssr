<template>
  <div class="tabbarLayout">
    <search-header />
    <nuxt class="content" />
    <tabbar />
  </div>
</template>
<script>
import Tabbar from '@/components/service/Tabbar'
import searchHeader from '@/components/service/searchHeader'
export default {
  name: 'TriplRrow',
  components: { Tabbar, searchHeader }
}
</script>
<style lang="scss" scoped>
.tabbarLayout{
  height: 100vh;
}
.content{
  height:calc(100% - #{px2vw(100px)} - #{px2vw(90px)});
  padding-top: px2vw(90px);
  overflow: auto;
}
</style>
