<template>
  <div class="tabbarLayout">
    <nuxt class="content" /><tabbar />
  </div>
</template>
<script>
import Tabbar from '@/components/service/Tabbar'
export default {
  name: '',
  components: { Tabbar }
}
</script>
<style lang="scss" scoped>
.tabbarLayout{
  height: 100vh;
}
.content{
  height:calc(100% - #{px2vw(100px)});
  overflow: auto;
}
</style>
