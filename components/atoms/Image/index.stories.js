import { storiesOf } from '@storybook/vue'
import ProjectImage from '@/components/atoms/Image/ProjectImage.vue'
import MiniProjectImage from '@/components/atoms/Image/MiniProjectImage.vue'

storiesOf('/atoms/Image/ProjectImage', module)
  .add(':has-image', () => ({
    components: { ProjectImage },
    template:
      '<project-image :image-url-prop="\'https://placebear.com/640/480\'"/>'
  }))
  .add(':no-image', () => ({
    components: { ProjectImage },
    template: '<project-image />'
  }))

storiesOf('/atoms/Image/MiniProjectImage', module)
  .add(':has-image', () => ({
    components: { MiniProjectImage },
    template:
      '<mini-project-image :image-url-prop="\'https://placebear.com/640/480\'"/>'
  }))
  .add(':no-image', () => ({
    components: { MiniProjectImage },
    template: '<mini-project-image />'
  }))
