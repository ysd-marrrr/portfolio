<template>
  <div :class="'mini-paragraph' + customClassProp"><slot></slot></div>
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
p:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
