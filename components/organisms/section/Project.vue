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
          description: 'Now Developing...',
          skill: [{ text: 'Nuxt.js' }, { text: 'Firebase' }]
        },
        {
          title: 'portfolio',
          date: '2020',
          image: '',
          url: 'https://www.y-mix.dev/',
          description: 'My "prime" portfolio site.',
          skill: [
            { text: 'Nuxt.js' },
            { text: 'Atomic Design' },
            { text: 'SCSS' },
            { text: 'Bulma' },
            { text: 'Netlify' }
          ]
        }
      ],
      otherProjects: [
        {
          title: 'Twitter分析ツールの開発',
          date: '2018',
          image: '',
          url: '',
          description:
            'SpringBoot, Elasticsearchで開発された分析ツールの機能追加・保守を担当しました。また、新しい角度でTwitterの話題を分析するツールをNuxt.jsなどで開発し、分析結果に応じてスピーディーに改良を重ねています。',
          skill: [
            { text: 'Nuxt.js' },
            { text: 'Atomic Design' },
            { text: 'Python' },
            { text: 'docker-compose' },
            { text: 'MySQL' },
            { text: 'SpringBoot' },
            { text: 'Elasticsearch' },
            { text: 'Logstash' }
          ]
        },
        {
          title: 'ピクセルトラッキングシステムのサーバーレス化',
          date: '2017',
          image: '',
          url: '',
          description:
            'Apache, PHPで動作しているピクセルトラッキングシステムをAWS ECSに置き換えました。',
          skill: [
            { text: 'AWS' },
            { text: 'Python' },
            { text: 'Apache' },
            { text: 'nginx' },
            { text: 'Docker' },
            { text: 'Load test' }
          ]
        },
        {
          title: 'アクセスログETLシステムのAWS Batch化',
          date: '2017',
          image: '',
          url: '',
          description:
            'Jenkins(EC2), BigQueryで構築されているログ分析システムをAWS Batch, S3, Athenaに移行しました。',
          skill: [
            { text: 'AWS' },
            { text: 'ShellScript' },
            { text: 'Jenkins' },
            { text: 'Docker' }
          ]
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
