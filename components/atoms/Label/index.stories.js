import { storiesOf } from '@storybook/vue'
import MiniTitle from '@/components/atoms/Label/MiniTitle.vue'

storiesOf('/atoms/label/MiniTitle', module).add('default', () => ({
  components: { MiniTitle },
  template: '<mini-title>Default Mini Title</mini-title>'
}))
