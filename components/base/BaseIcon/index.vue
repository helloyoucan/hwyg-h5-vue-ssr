<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'VIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#${this.icon.replace('icon-', '')}`
    },
    svgClass () {
      if (this.className) {
        return `_v-icon v-icon ${this.className}`
      }
      return '_v-icon v-icon'
    }
  }
}
</script>

<style>
  ._v-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

</style>
