import { storiesOf } from '@storybook/vue'
import MiniParagraph from '@/components/atoms/Paragraph/MiniParagraph.vue'

storiesOf('/atoms/Paragraph/MiniParagraph', module).add('default', () => ({
  components: { MiniParagraph },
  template: `<mini-paragraph>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Veniam quisquam, ab, voluptatibus quasi deserunt laudantium placeat voluptatum sit, 
  natus eaque illo odio quam corporis molestiae explicabo saepe nostrum labore eius!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam, ab, 
  voluptatibus quasi deserunt laudantium placeat voluptatum sit, natus eaque illo 
  odio quam corporis molestiae explicabo saepe nostrum labore eius!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Veniam quisquam, ab, voluptatibus quasi deserunt laudantium placeat voluptatum sit, 
  natus eaque illo odio quam corporis molestiae explicabo saepe nostrum labore eius!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam, ab, 
  voluptatibus quasi deserunt laudantium placeat voluptatum sit, natus eaque illo 
  odio quam corporis molestiae explicabo saepe nostrum labore eius!</p>
  </mini-paragraph>`,
}))
