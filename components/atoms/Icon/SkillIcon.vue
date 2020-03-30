<template>
  <div>
    <Progress
      :value="progressValueProp"
      :radius="radiusProp"
      :stroke-color="strokeColorProp"
      :stroke-width="6"
      ><span class="skill-icon"
        ><slot><font-awesome-icon icon="times-circle"/></slot></span
    ></Progress>
  </div>
</template>

<script>
import Progress from 'easy-circular-progress'
export default {
  components: {
    Progress
  },
  props: {
    progressValueProp: {
      type: Number,
      default: 0
    },
    radiusProp: {
      type: Number,
      default: 0
    },
    strokeColorProp: {
      type: String,
      default: '#3A6BA5'
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-icon {
  font-size: 2rem;
}

.vue-circular-progress {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
