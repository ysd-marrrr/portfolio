<template>
  <div class="project-card">
    <div class="project-header">
      <p class="project-date">{{ projectDate }}</p>
    </div>
    <div class="columns is-vcentered">
      <div class="column is-narrow">
        <mini-project-image :image-url-prop="imageUrlProp" />
      </div>
      <div class="column">
        <div class="project-content">
          <h3 class="project-title">{{ projectTitle }}</h3>
          <p class="project-description">{{ projectDescription }}</p>
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
    MiniProjectImage
  },
  props: {
    dateProp: {
      type: String,
      default: '2020'
    },
    titleProp: {
      type: String,
      default: 'PROJECT TITLE'
    },
    descriptionProp: {
      type: String,
      default: 'project description'
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
    projectTitle() {
      return this.titleProp
    },
    projectDescription() {
      return this.descriptionProp
    },
    projectSkillList() {
      return this.skillListProp
    }
  }
}
</script>

<style lang="scss" scoped>
.project-card {
  background: white;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  padding: 5px;
}

.project-date {
  font-family: 'Comfortaa', cursive;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  color: gray;
}

// タブレット以上の場合は横に複数枚並べる
@media screen and (min-width: 769px) {
  .project-card {
    max-width: 40rem;
  }
}

// モバイルの場合は横いっぱいカードを表示する
@media screen and (max-width: 768px) {
  .project-card {
    max-width: 100vw;
  }
}

h3.project-title {
  font-weight: 900;
  font-size: 1.25rem;
}
</style>
