import { storiesOf } from '@storybook/vue'
import TagList from '@/components/molecules/TagList/TagList.vue'

storiesOf('/molecules/TagList/TagList', module).add('default', () => ({
  components: { TagList },
  template: `<tag-list />`,
}))
