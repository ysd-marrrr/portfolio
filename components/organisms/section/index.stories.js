import { storiesOf } from '@storybook/vue'
import Introduction from '@/components/organisms/section/Introduction.vue'
import Skill from '@/components/organisms/section/Skill.vue'
import ProfileLink from '@/components/organisms/section/ProfileLink.vue'

storiesOf('/organisms/section/Introduction', module).add('default', () => ({
  components: { Introduction },
  template: '<introduction />'
}))

storiesOf('/organisms/section/Skill', module).add('default', () => ({
  components: { Skill },
  template: '<skill />'
}))

storiesOf('/organisms/section/ProfileLink', module).add('default', () => ({
  components: { ProfileLink },
  template: '<profile-link />'
}))
