import { storiesOf } from '@storybook/vue'
import Introduction from '@/components/molecules/section/Introduction.vue'
import Skill from '@/components/molecules/section/Skill.vue'

storiesOf('/molecules/section/Introduction', module).add('default', () => ({
  components: { Introduction },
  template: '<introduction />'
}))

storiesOf('/molecules/section/Skill', module).add('default', () => ({
  components: { Skill },
  template: '<skill />'
}))
