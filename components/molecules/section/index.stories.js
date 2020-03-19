import { storiesOf } from '@storybook/vue'
import Skill from '@/components/molecules/section/Skill.vue'

storiesOf('/molecules/section/Skill', module).add('default', () => ({
  components: { Skill },
  template: '<skill />'
}))
