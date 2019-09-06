<template>
  <div>
    news
    <ul>
      <li v-for="(item) in listData" :key="item" @click="handler(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  layout: 'triplRrow',
  data () {
    return {
      listData: (new Array(10000)).fill(0).map((_, index) => index)
    }
  },
  methods: {
    handler (index) {
      console.log(index)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
