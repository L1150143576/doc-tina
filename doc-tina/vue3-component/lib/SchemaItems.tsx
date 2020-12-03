import { Schema, SchemaTypes } from './type'
import { computed, defineComponent, PropType } from 'vue'
import StringField from './fields/StringField'
import NumberField from './fields/NumberField'
import ObjectField from './fields/ObjectField'
import { retrieveSchema } from './utils'
export default defineComponent({
  name: 'SchemaItems',
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      type: Number as PropType<number>,
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
    rootSchema: {
      type: Object as PropType<Schema>,
      required: true,
    },
  },
  setup(props) {
    const retrieveSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props
      return retrieveSchema(schema, rootSchema, value)
    })
    return () => {
      const { schema, rootSchema, value } = props
      const retrieveSchema = retrieveSchemaRef.value
      //TODO:如果type没有指定，我们需要测试这个type
      const type = schema.type

      let Component: any
      switch (type) {
        case SchemaTypes.STRING:
          Component = StringField
          break
        case SchemaTypes.NUMBER:
          Component = NumberField
          break
        case SchemaTypes.OBJECT:
          Component = ObjectField
          break
        default:
          console.warn(`${type} is not support`)
      }

      return <Component {...props} schema={retrieveSchema} />
    }
  },
})
