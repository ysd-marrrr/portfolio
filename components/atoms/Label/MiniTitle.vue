<template>
  <h3 :class="'mini-title' + customClassProp"><slot></slot></h3>
</template>

<script>
export default {
  props: {
    customClassProp: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  &.mini-title {
    font-weight: bold;
    font-size: 150%;
  }
}
</style>
