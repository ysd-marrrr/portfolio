import { storiesOf } from '@storybook/vue'
import SkillCard from '@/components/molecules/Card/SkillCard.vue'
import ProjectCard from '@/components/molecules/Card/ProjectCard.vue'
import MiniProjectCard from '@/components/molecules/Card/MiniProjectCard.vue'

const tagSample = [
  { text: 'Go' },
  { text: 'Apache Spark' },
  { text: 'Twitter API' },
  { text: 'ShellScript' },
  { text: 'Flask' },
  { text: 'jQuery' },
  { text: 'Bulma' },
  { text: 'nginx' },
  { text: 'Jenkins' },
  { text: 'BigQuery' },
  { text: 'Ionic' },
  { text: 'Bootstrap' },
  { text: 'iOS(Objective-C)' },
  { text: 'Android(Java)' },
  { text: 'Unity(JS, C#)' }
]

storiesOf('/molecules/Card/SkillCard', module).add('default', () => ({
  components: { SkillCard },
  template: '<skill-card />'
}))

storiesOf('/molecules/Card/ProjectCard', module)
  .add(':has-image', () => ({
    components: { ProjectCard },
    template:
      '<project-card :image-url-prop="\'https://placebear.com/640/480\'" />'
  }))
  .add(':no-image', () => ({
    components: { ProjectCard },
    template: '<project-card />'
  }))
  .add(':has-long-item', () => ({
    components: { ProjectCard },
    data: () => ({ tagSample }),
    template: `
      <project-card :image-url-prop="'https://placebear.com/640/480'" :skill-list-prop="tagSample">
        <template v-slot:title>Super Long Lorem Ipsum 2 Prime Max</template>
        <template v-slot:description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, dignissimos quod aspernatur ducimus cum a placeat, tempore reiciendis soluta non dolores illo pariatur quis beatae at ea velit nostrum magni!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quod iure natus magnam maxime omnis sequi quidem qui fugit, voluptas dolor earum aperiam doloribus accusamus possimus laboriosam voluptatibus. Laborum, consectetur.
        </template>
      </project-card>
      `
  }))

storiesOf('/molecules/Card/MiniProjectCard', module)
  .add(':has-image', () => ({
    components: { MiniProjectCard },
    template:
      '<mini-project-card :image-url-prop="\'https://placebear.com/640/480\'" />'
  }))
  .add(':no-image', () => ({
    components: { MiniProjectCard },
    template: '<mini-project-card />'
  }))
  .add(':has-long-item', () => ({
    components: { MiniProjectCard },
    data: () => ({ tagSample }),
    template: `
      <mini-project-card :image-url-prop="'https://placebear.com/640/480'" :skill-list-prop="tagSample">
        <template v-slot:title>Super Long Lorem Ipsum 2 Prime Max</template>
        <template v-slot:description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, dignissimos quod aspernatur ducimus cum a placeat, tempore reiciendis soluta non dolores illo pariatur quis beatae at ea velit nostrum magni!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quod iure natus magnam maxime omnis sequi quidem qui fugit, voluptas dolor earum aperiam doloribus accusamus possimus laboriosam voluptatibus. Laborum, consectetur.
        </template>
      </mini-project-card>
      `
  }))
