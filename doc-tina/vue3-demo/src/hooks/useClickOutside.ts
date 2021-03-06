/*
 * @Author: your name
 * @Date: 2020-11-16 20:08:02
 * @LastEditTime: 2020-11-17 14:36:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \doc-tina\doc-tina\demo-zheye\src\hooks\useClickOutside.ts
 */
import { ref, onMounted, onUnmounted, Ref } from "vue";

function useClickOutside(elementRef: Ref<null | HTMLElement>) {
  const isClickOutside = ref(false);
  const handler = (e: MouseEvent) => {
    console.log(elementRef);
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false;
      } else {
        isClickOutside.value = true;
      }
    }
  };
  onMounted(() => {
    document.addEventListener("click", handler);
  });
  onUnmounted(() => {
    document.removeEventListener("click", handler);
  });
  return isClickOutside;
}
export default useClickOutside;
