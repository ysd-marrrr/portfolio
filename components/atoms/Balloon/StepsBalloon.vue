<template>
  <div class="steps-balloon" :style="balloonStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColorProp: {
      type: String,
      default: 'orange'
    }
  },
  computed: {
    balloonStyle() {
      return {
        '--background-color': this.backgroundColorProp
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.steps-balloon {
  position: relative;
  text-align: center;
  margin-bottom: 1rem;

  padding: 0.5rem;

  --background-color: blue;
  border-radius: 5px;
  background-color: var(--background-color);

  box-shadow: 0px 10px 30px 3px gray;

  &:not(:last-child) {
    margin-bottom: 2rem;
    &:after {
      content: ' ';
      position: absolute;
      right: 0;
      bottom: -1.25rem;
      left: 0;
      width: 0px;
      height: 0px;
      margin: auto;
      border-style: solid;
      border-color: var(--background-color) transparent transparent transparent;
      border-width: 20px 20px 0 20px;
    }
  }
}
</style>
