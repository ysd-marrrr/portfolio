import { storiesOf } from '@storybook/vue'
import Tag from '@/components/atoms/Tag/Tag.vue'

storiesOf('/atoms/Tag/Tag', module).add('default', () => ({
  components: { Tag },
  template: `<tag>SAMPLE TAG</tag>`,
}))
