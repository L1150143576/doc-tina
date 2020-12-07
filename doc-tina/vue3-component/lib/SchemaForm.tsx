import { defineComponent, Prop, PropType, provide, reactive } from 'vue'
import { Schema, SchemaTypes } from './type'
import { SchemaFormContextKey } from './context'
import SchemaItems from './SchemaItems'
export default defineComponent({
  name: 'SchemaForm',
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
  },

  setup(props, { slots, emit, attrs }) {
    const handleChange = (v: any) => {
      props.onChange(v)
    }
    const context: any = reactive({
      SchemaItems,
    })
    provide(SchemaFormContextKey, context)
    return () => {
      const { schema, value } = props
      console.log(value)
      return <SchemaItems schema={schema} rootSchema={schema} value={value} onChange={handleChange} />
    }
  },
})
