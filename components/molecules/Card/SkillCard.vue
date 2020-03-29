<template>
  <div class="card skill-card">
    <div class="card-content">
      <div class="columns">
        <div class="column is-narrow">
          <skill-icon :progress-value-prop="'75'" />
        </div>
        <div class="column is-narrow skills">
          <mini-title>Sample Skill</mini-title>
          <mini-paragraph>Skill description</mini-paragraph>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillIcon from '@/components/atoms/Icon/SkillIcon.vue'
import MiniTitle from '@/components/atoms/Label/MiniTitle.vue'
import MiniParagraph from '@/components/atoms/Paragraph/MiniParagraph.vue'

export default {
  components: {
    SkillIcon,
    MiniTitle,
    MiniParagraph
  }
}
</script>
