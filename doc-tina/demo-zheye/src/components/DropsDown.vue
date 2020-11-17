<!--  -->
<template>
  <div
    class="dropdown"
    ref="dropdownRef"
  >
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

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import DropsdownItem from "./DropdownItem.vue";
import useClickOutside from "../hooks/useClickOutside";
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: { DropsdownItem },

  setup() {
    const isOpten = ref(false);
    const toggleOpen = () => {
      isOpten.value = !isOpten.value;
    };
    const dropdownRef = ref<null | HTMLElement>(null);
    const isClickOutside = useClickOutside(dropdownRef);

    watch(isClickOutside, () => {
      if (isOpten.value && isClickOutside.value) {
        isOpten.value = false;
      }
    });

    return {
      isOpten,
      toggleOpen,
      // 返回和 ref 同名的响应式对象，就可以拿到对应的 dom 节点
      isClickOutside,
    };
  },
});
</script>
