<template>
  <div class="card skill-card">
    <div class="card-content skill-card-content">
      <div class="columns is-vcentered">
        <div class="column is-narrow skill-card-left">
          <skill-icon :progress-value-prop="skillValueProp" :radius-prop="30">
            <slot name="icon" />
          </skill-icon>
        </div>
        <div class="column skill-card-right">
          <middle-card-title
            ><slot name="title">Sample Skill</slot></middle-card-title
          >
          <mini-paragraph
            ><slot name="description">Skill description</slot></mini-paragraph
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillIcon from '@/components/atoms/Icon/SkillIcon.vue'
import MiddleCardTitle from '@/components/atoms/Label/MiddleCardTitle.vue'
import MiniParagraph from '@/components/atoms/Paragraph/MiniParagraph.vue'

export default {
  components: {
    SkillIcon,
    MiddleCardTitle,
    MiniParagraph
  },
  props: {
    skillValueProp: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-card {
  border-radius: 5px;
  margin-bottom: 1.5rem;
}

.skill-card-content {
  padding: 1.5rem 1rem 1.5rem 1.5rem;
}

.skill-card-left,
.skill-card-right {
  padding: 0;
}

.skill-card-right {
  text-align: left;
  margin: 0 1rem;
}
</style>
