import { defineComponent } from 'vue'
import { FieldPropsDefine } from '../type'
import SchemaItem from '../SchemaItems'
const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    age: {
      type: 'number',
    },
  },
}
export default defineComponent({
  name: 'ObjectField',
  props: FieldPropsDefine,
  setup(props) {
    return () => {
      return <div>ObjectField</div>
    }
  },
})
