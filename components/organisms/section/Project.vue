<template>
  <section id="project" class="profile-section has-text-centered">
    <div class="hero-body">
      <div class="container">
        <h2 class="section-title">
          Projects
        </h2>
        <div class="project-area personal-projects">
          <project-card
            v-for="(item, index) in personalProjects"
            :key="index"
            :date-prop="item.date"
            :url-prop="item.url"
            :image-url-prop="item.image"
            :skill-list-prop="item.skill"
          >
            <template v-slot:title>{{ item.title }}</template>
            <template v-slot:description>{{ item.description }}</template>
          </project-card>
        </div>
        <hr class="inner-divider" />
        <div class="project-area other-projects">
          <mini-project-card
            v-for="(item, index) in otherProjects"
            :key="index"
            :date-prop="item.date"
            :url-prop="item.url"
            :image-url-prop="item.image"
            :skill-list-prop="item.skill"
          >
            <template v-slot:title>{{ item.title }}</template>
            <template v-slot:description>{{ item.description }}</template>
          </mini-project-card>
        </div>
        <div v-if="isTruncated" class="project-and-more">
          <p class="section-note">
            &gt;&gt; PAST PROJECTS
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/molecules/Card/ProjectCard.vue'
import MiniProjectCard from '@/components/molecules/Card/MiniProjectCard.vue'

export default {
  components: { ProjectCard, MiniProjectCard },
  data() {
    return {
      isTruncated: false,
      personalProjects: [
        {
          title: 'Now Printing...',
          date: '2020',
          image: '',
          url: '#',
          description: 'Now Printing...',
          skill: [{ text: 'hoge' }, { text: 'hoge' }, { text: 'hoge' }]
        },
        {
          title: 'Now Printing...',
          date: '2020',
          image: '',
          url: '#',
          description: 'Now Printing...',
          skill: [{ text: 'hoge' }, { text: 'hoge' }, { text: 'hoge' }]
        },
        {
          title: 'Now Printing...',
          date: '2020',
          image: '',
          url: '#',
          description: 'Now Printing...',
          skill: [{ text: 'hoge' }, { text: 'hoge' }, { text: 'hoge' }]
        },
        {
          title: 'Now Printing...',
          date: '2020',
          image: '',
          url: '#',
          description: 'Now Printing...',
          skill: [{ text: 'hoge' }, { text: 'hoge' }, { text: 'hoge' }]
        },
        {
          title: 'Now Printing...',
          date: '2020',
          image: '',
          url: '#',
          description: 'Now Printing...',
          skill: [{ text: 'hoge' }, { text: 'hoge' }, { text: 'hoge' }]
        },
        {
          title: 'Now Printing...',
          date: '2020',
          image: '',
          url: '#',
          description: 'Now Printing...',
          skill: [{ text: 'hoge' }, { text: 'hoge' }, { text: 'hoge' }]
        }
      ],
      otherProjects: [
        {
          title: 'Now Printing...',
          date: '2020',
          image: '',
          url: '',
          description: 'Now Printing...',
          skill: []
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section#project {
  background-color: #7ed6c6;
}

.project-area {
  display: flex;
  flex-wrap: wrap;
}
</style>
