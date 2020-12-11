import { defineComponent, inject, DefineComponent, ExtractPropTypes } from 'vue'
import { FieldPropsDefine, CommonFieldType } from '../type'
import { SchemaFormContextKey, useVJSFContext } from '../context'
import { isObject } from '../utils'
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
    const context = useVJSFContext()
    const handleChange = (key: string, v: any) => {
      const value: any = isObject(props.value) ? props.value : {}
      if (v === undefined) {
        delete value[key]
      } else {
        // if (value[key]) {
        //   value[key] = v
        // } else {
        value[key] = v
        // }
      }
      props.onChange(value)
    }
    return () => {
      const { schema, rootSchema, value } = props
      const { SchemaItems } = context
      const properties = schema.properties || {}
      const currentvalue: any = isObject(value) ? value : {}
      console.log(properties)
      return Object.keys(properties).map((k: string, index: number) => (
        <SchemaItems
          schema={properties[k]}
          rootSchema={rootSchema}
          value={currentvalue[k]}
          key={index}
          onChange={(v: any) => handleChange(k, v)}
        />
      ))
    }
  },
})
