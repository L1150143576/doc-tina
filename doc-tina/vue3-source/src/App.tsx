import { defineComponent, reactive, ref, shallowReactive } from 'vue'

const A = defineComponent({
  setup() {
    const state = shallowReactive(new Map())
    const myRef = ref({})

    console.log(myRef)
    state.set('count', 1)
    // setInterval(() => {
    //   console.log('开始计数辣~')
    //   state.set('count', state.get('count') + 1)
    // }, 1000)
    return () => {
      return <div>{state.get('count')}</div>
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
