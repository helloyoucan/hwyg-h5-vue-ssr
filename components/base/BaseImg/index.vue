<template>
  <div class="v-img">
    <img class="_img" :src="src">
  </div>
</template>
<script>
export default {
  name: 'VImg',
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
._img{
    width: 100%;
    height: 100%;
    max-width: inherit;
    max-height: inherit;
    min-width: inherit;
    min-height: inherit;
}
</style>
