<template>
  <input type="number" :value="value" @input="handleChange" />
</template>

<script lang="ts" setup="props">
import { FieldPropsDefine, Schema } from '../type'
export default {
  props: FieldPropsDefine,
}
declare const props: {
  value: any
  onChange: (v: string) => void
  schema: Schema
}
export const handleChange = (e: any) => {
  console.log(e)
  props.onChange(e.target.value)
}
</script>
