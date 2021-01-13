import { defineComponent, reactive, ref, shallowReactive, watch, watchEffect } from 'vue'

const A = defineComponent({
  setup() {
    // const state = shallowReactive(new Map())
    // const myRef = ref({})

    // console.log(myRef)
    // state.set('count', 1)
    const state = reactive({
      count: 0
    })
    // setInterval(() => {
    //   console.log('开始计数辣~')
    //   state.set('count', state.get('count') + 1)
    // }, 1000)
    watchEffect((onInvalidate) => {
      console.log(state.count)
      onInvalidate(() => {})
    })
    watch(
      () => state.count,
      (nv, ov) => {
        console.log(nv, ov)
      }
    )
    return () => {
      return <div>{state.count}</div>
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
