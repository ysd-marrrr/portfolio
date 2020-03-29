<template>
  <div>
    <Progress
      :value="progressValueProp"
      :stroke-color="strokeColorProp"
      :stroke-width="6"
      ><slot><font-awesome-icon icon="times-circle"/></slot
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
    strokeColorProp: {
      type: String,
      default: '#DAE477'
    }
  }
}
</script>
