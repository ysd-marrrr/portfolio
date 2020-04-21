<template>
  <li>
    <span :class="'tag ' + customClassProp"><slot /></span>
  </li>
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
li {
  display: inline;
  line-height: 2rem;
  margin-right: 0.5rem;
}
</style>
