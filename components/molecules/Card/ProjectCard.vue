<template>
  <div class="project-card">
    <div class="project-header">
      <p class="project-date">{{ projectDate }}</p>
    </div>
    <a class="project-link" :href="projectUrl">
      <project-image :image-url-prop="imageUrlProp" />
    </a>
    <div class="project-content">
      <a class="project-link" :href="projectUrl">
        <h3 class="project-title">
          <slot name="title">PROJECT TITLE</slot>
        </h3>
      </a>
      <p class="project-description">
        <slot name="description">project description </slot>
      </p>
    </div>
    <div class="project-footer">
      <tag-list
        :tag-list-prop="projectSkillList"
        :custom-class-prop="'project-skill-list'"
      />
    </div>
  </div>
</template>

<script>
import TagList from '@/components/molecules/TagList/TagList.vue'
import ProjectImage from '@/components/atoms/Image/ProjectImage.vue'

export default {
  components: {
    TagList,
    ProjectImage
  },
  props: {
    dateProp: {
      type: String,
      default: '2020'
    },
    urlProp: {
      type: String,
      default: '#projects'
    },
    imageUrlProp: {
      type: String,
      default: ''
    },
    skillListProp: {
      type: Array,
      default() {
        return [
          { text: 'Skill' },
          { text: 'Skill' },
          { text: 'Skill' },
          { text: 'Skill' }
        ]
      }
    }
  },
  computed: {
    projectDate() {
      return this.dateProp
    },
    projectUrl() {
      return this.urlProp
    },
    projectSkillList() {
      return this.skillListProp
    }
  }
}
</script>

<style lang="scss" scoped>
.project-date {
  font-size: 2rem;
  letter-spacing: 0.25rem;
}

// タブレット以上の場合は横に複数枚並べる
@media screen and (min-width: 769px) {
  .project-card {
    max-width: 20rem;
  }
}

// モバイルの場合は横いっぱいカードを表示する
@media screen and (max-width: 768px) {
  .project-card {
    max-width: 100vw;
  }
}
</style>
