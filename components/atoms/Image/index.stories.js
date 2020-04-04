import { storiesOf } from '@storybook/vue'
import ProjectImage from '@/components/atoms/Image/ProjectImage.vue'

storiesOf('/atoms/Image/ProjectImage', module).add('default', () => ({
  components: { ProjectImage },
  template: '<project-image />'
}))
