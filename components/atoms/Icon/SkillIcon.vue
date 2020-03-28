<template>
  <div>
    <Progress :value="progressValueProp"><slot>X</slot></Progress>
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
    }
  }
}
</script>
