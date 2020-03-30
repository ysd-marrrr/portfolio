<template>
  <li class="link-item">
    <a :href="linkAddressProp" target="_blank" class="link-icon">
      <slot name="icon"><font-awesome-icon icon="times-circle"/></slot>
    </a>
    <a :href="linkAddressProp" target="_blank" class="link-title">
      <slot name="title" />
    </a>
  </li>
</template>

<script>
export default {
  props: {
    linkAddressProp: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
li.link-item {
  display: inline-block;

  vertical-align: top;
  text-align: center;

  margin: 1rem 2rem;
}

a.link-icon {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 200%;

  width: 100px;
  height: 100px;
  border-radius: 50%;

  color: white;
  background-color: #3a6ba5;

  &:hover {
    background-color: rgba(58, 106, 165, 0.5);
  }
}

a.link-title {
  display: block;
  width: 100px;
  overflow-wrap: break-word;
}
</style>
