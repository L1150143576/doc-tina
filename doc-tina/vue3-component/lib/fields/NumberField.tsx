import { FieldPropsDefine, Schema } from '../type'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NumberField',
  props: FieldPropsDefine,

  setup(props) {
    const handleChange = (e: any) => {
      console.log(e)
      props.onChange(e.target.value)
    }
    return () => {
      const { value, schema, onChange } = props
      return <input type="number" value={value} onInput={handleChange} />
    }
  },
})
