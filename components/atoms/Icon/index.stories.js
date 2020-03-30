import { storiesOf } from '@storybook/vue'
import SkillIcon from '@/components/atoms/Icon/SkillIcon.vue'

storiesOf('/atoms/Icon/SkillIcon', module).add('default', () => ({
  components: { SkillIcon },
  template: '<skill-icon />'
}))
