import { storiesOf } from '@storybook/vue'
import SkillCard from '@/components/molecules/Card/SkillCard.vue'
import ProjectCard from '@/components/molecules/Card/ProjectCard.vue'

storiesOf('/molecules/Card/SkillCard', module).add('default', () => ({
  components: { SkillCard },
  template: '<skill-card />'
}))

storiesOf('/molecules/Card/ProjectCard', module).add('default', () => ({
  components: { ProjectCard },
  template: '<project-card />'
}))
