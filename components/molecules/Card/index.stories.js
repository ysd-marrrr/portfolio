import { storiesOf } from '@storybook/vue'
import SkillCard from '@/components/molecules/Card/SkillCard.vue'

storiesOf('/molecules/Card/SkillCard', module).add('default', () => ({
  components: { SkillCard },
  template: '<skill-card />'
}))
