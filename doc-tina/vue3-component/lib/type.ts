import { PropType, defineComponent } from 'vue'
export enum SchemaTypes {
  'NUMBER' = 'number',
  'INTEGER' = 'integer',
  'STRING' = 'string',
  'OBJECT' = 'object',
  'ARRAY' = 'array',
  'BOOLEAN' = 'boolean',
}

type SchemaRef = { $ref: string }
export interface Schema {
  type: SchemaTypes | number
  const?: any
  format?: string
  default?: any
  properties?: {
    [key: string]: Schema
  }
  allOf?: any
  items?: Schema | Schema[] | SchemaRef
  dependencies?: {
    [key: string]: string[] | Schema | SchemaRef
  }
  uniqueItems?: any
  anyOf?: Schema[]
  oneOf?: Schema[]
  // vjsf?:VueJsonSchemaConfig
  required?: string[]
  enum?: any[] | undefined
  enumKeyValues?: any[]
  additionalProperties?: any
  additionalItems?: Schema
}
export const FieldPropsDefine = {
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
} as const
export const TypeHelperComponent = defineComponent({
  props: FieldPropsDefine,
})

export type CommonFieldType = typeof TypeHelperComponent