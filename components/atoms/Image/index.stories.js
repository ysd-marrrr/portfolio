import { storiesOf } from '@storybook/vue'
import ProjectImage from '@/components/atoms/Image/ProjectImage.vue'
import MiniProjectImage from '@/components/atoms/Image/MiniProjectImage.vue'

storiesOf('/atoms/Image/ProjectImage', module).add('default', () => ({
  components: { ProjectImage },
  template: '<project-image />'
}))

storiesOf('/atoms/Image/MiniProjectImage', module).add('default', () => ({
  components: { MiniProjectImage },
  template: '<mini-project-image />'
}))
