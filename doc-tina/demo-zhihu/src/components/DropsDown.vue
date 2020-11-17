<!--  -->
<template>
  <div class="dropdown">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
    >
      {{title}}
    </a>
    <ul
      class="dropdown-menu"
      :style="{display: 'block'}"
      v-if="isOpten"
    >
      <dropsdown-item :disabled="true"><a
          href="#"
          class="dropdown-item"
        >新建文章</a></dropsdown-item>
      <dropsdown-item><a
          href="#"
          class="dropdown-item"
        >编辑资料</a></dropsdown-item>
      <dropsdown-item><a
          href="#"
          class="dropdown-item"
        >退出登录</a></dropsdown-item>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import DropsdownItem from './DropdownItem.vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: { DropsdownItem },

  setup() {
    const isOpten = ref(false)
    const toggleOpen = () => {
      isOpten.value = !isOpten.value
    }
    return {
      isOpten,
      toggleOpen
    }
  }
})
</script>
