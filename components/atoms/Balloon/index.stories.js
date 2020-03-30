import { storiesOf } from '@storybook/vue'
import StepsBalloon from '@/components/atoms/Balloon/StepsBalloon.vue'

storiesOf('/atoms/Balloon/StepsBalloon', module).add('default', () => ({
  components: { StepsBalloon },
  template: '<steps-balloon />'
}))
