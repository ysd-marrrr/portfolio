<template>
  <div class="project-card">
    <div class="project-header">
      <p class="project-date">{{ projectDate }}</p>
    </div>
    <div class="columns is-mobile project-body">
      <div class="column is-narrow project-image">
        <mini-project-image :image-url-prop="imageUrlProp" />
      </div>
      <div class="column">
        <div class="project-content">
          <h3 class="project-title">
            <slot name="title">PROJECT TITLE</slot>
          </h3>

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
    </div>
  </div>
</template>

<script>
import TagList from '@/components/molecules/TagList/TagList.vue'
import MiniProjectImage from '@/components/atoms/Image/MiniProjectImage.vue'

export default {
  components: {
    TagList,
    MiniProjectImage,
  },
  props: {
    dateProp: {
      type: String,
      default: '2020',
    },
    urlProp: {
      type: String,
      default: '#projects',
    },
    imageUrlProp: {
      type: String,
      default: '',
    },
    skillListProp: {
      type: Array,
      default() {
        return [
          { text: 'Skill' },
          { text: 'Skill' },
          { text: 'Skill' },
          { text: 'Skill' },
        ]
      },
    },
  },
  computed: {
    projectDate() {
      return this.dateProp
    },
    projectUrl() {
      return this.urlProp
    },
    projectTitle() {
      return this.titleProp
    },
    projectDescription() {
      return this.descriptionProp
    },
    projectSkillList() {
      return this.skillListProp
    },
  },
}
</script>

<style lang="scss" scoped>
.project-date {
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
}

// タブレット以上の場合は横に複数枚並べる
@media screen and (min-width: 801px) {
  .project-card {
    width: calc(50% - 0.75rem);
  }
}

// モバイルの場合は横いっぱいカードを表示する
@media screen and (max-width: 800px) {
  .project-card {
    width: calc(100% - 0.75rem);
  }
}

h3.project-title {
  font-weight: 900;
  font-size: 1.25rem;
}
</style>
