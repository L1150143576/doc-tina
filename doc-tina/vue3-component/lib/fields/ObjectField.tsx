import { defineComponent, inject, DefineComponent, ExtractPropTypes } from 'vue'
import { FieldPropsDefine } from '../type'
import { SchemaFormContextKey } from '../context'
import { isObject } from "../utils"
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
type SchemaItemDefine = DefineComponent<typeof FieldPropsDefine>
export default defineComponent({
  name: 'ObjectField',
  props: FieldPropsDefine,
  setup(props) {
    const context: { SchemaItems: SchemaItemDefine } | undefined = inject(SchemaFormContextKey)
    if (!context) {
      throw Error("SchemaForm should be used")
    }
    const handleChange = (key: string, v: any) => {
      console.log("v:" + v)
      const value: any = isObject(props.value) ? props.value : {}
      if (v === undefined) {
        delete value[key]
      } else {
        value[key] = v
      }
      props.onChange(value)
    }
    return () => {
      const { schema, rootSchema, value } = props
      const { SchemaItems } = context
      const properties = schema.properties || {}
      const currentvalue: any = isObject(value) ? value : {}
      console.log(value)
      return Object.keys(properties).map((k: string, index: number) =>
        <SchemaItems schema={properties[k]} rootSchema={rootSchema} value={value} key={index} onChange={(v: any) => handleChange(k, v)} />)
    }
  },
})
