import { defineComponent, reactive, ref } from 'vue'
const A = defineComponent({
  setup() {
    const state = reactive({
      name: ref('Tina')
    })
    return () => {
      return <div>{state.name}</div>
    }
  }
})
export default defineComponent({
  setup() {
    return () => {
      return <A />
    }
  }
})
