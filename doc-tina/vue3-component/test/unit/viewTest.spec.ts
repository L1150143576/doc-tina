import { shallowMount } from '@vue/test-utils'
import { iterator } from 'core-js/fn/symbol'
import { defineComponent, h } from 'vue'
const HelloWorld = defineComponent({
  name: 'helloworld',
  props: {
    msg: {
      type: String
    }
  },
  setup(props) {
    return () => {
      return h('div', props.msg)
    }
  }
})

describe('HelloWorld.vue', () => {
  test('is a Vue instance', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld as any, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
