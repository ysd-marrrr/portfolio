import { storiesOf } from '@storybook/vue'
import MiddleCardTitle from '@/components/atoms/Label/MiddleCardTitle.vue'

storiesOf('/atoms/label/MiddleCardTitle', module).add('default', () => ({
  components: { MiddleCardTitle },
  template: '<middle-card-title>Default Middle Card Title</middle-card-title>'
}))
